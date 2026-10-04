import {
  DEFAULT_MODEL,
  buildSuggestPrompt,
  buildUrduPrompt,
  createSseParser,
  shouldAnswer,
} from "./lib.js";

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const statusEl = document.getElementById("status");
const liveEl = document.getElementById("live");
const urduEl = document.getElementById("urdu");
const suggestionEl = document.getElementById("suggestion");
const hearEl = document.getElementById("hear");

let requestId = 0;
let lastAnswered = "";

function setStatus(text, level) {
  statusEl.textContent = text;
  statusEl.className = level || "";
}

let keysReady = false;

function refreshKeys() {
  chrome.storage.local.get(["deepgramKey", "geminiKey"], (data) => {
    keysReady = Boolean(data.deepgramKey && data.geminiKey);
  });
}

refreshKeys();
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && (changes.deepgramKey || changes.geminiKey)) refreshKeys();
});

async function geminiOnce(apiKey, model, prompt, onText, maxTokens, withThinkingOff) {
  const generationConfig = { temperature: 0.2, maxOutputTokens: maxTokens };
  if (withThinkingOff) generationConfig.thinkingConfig = { thinkingBudget: 0 };
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig,
      }),
    },
  );
  if (!response.ok) throw new Error((await response.text()) || `Gemini error ${response.status}`);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const parser = createSseParser(onText);
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    parser.push(decoder.decode(value, { stream: true }));
  }
  return parser.text();
}

async function gemini(apiKey, model, prompt, onText, maxTokens) {
  try {
    return await geminiOnce(apiKey, model, prompt, onText, maxTokens, true);
  } catch (error) {
    if (!/thinking/i.test(String(error))) throw error;
    return geminiOnce(apiKey, model, prompt, onText, maxTokens, false);
  }
}

async function answer(english) {
  const id = ++requestId;
  const settings = await chrome.storage.local.get(["geminiKey", "model", "experience"]);
  const experience = (settings.experience || "").trim();
  const apiKey = settings.geminiKey;
  const model = (settings.model || DEFAULT_MODEL).trim();
  if (!apiKey) {
    setStatus("Add the Gemini key in Settings.", "error");
    return;
  }

  urduEl.textContent = "…";
  suggestionEl.textContent = experience ? "…" : "Add your real experience in Settings first.";
  const urduTask = gemini(apiKey, model, buildUrduPrompt(english), (text) => {
    if (id === requestId) urduEl.textContent = text;
  }, 180);
  const answerTask = experience
    ? gemini(apiKey, model, buildSuggestPrompt(experience, english), (text) => {
        if (id === requestId) suggestionEl.textContent = text;
      }, 80)
    : Promise.resolve();
  const [urduResult, answerResult] = await Promise.allSettled([urduTask, answerTask]);
  if (id !== requestId) return;
  if (urduResult.status === "rejected") urduEl.textContent = "Urdu translation failed.";
  if (answerResult.status === "rejected") {
    suggestionEl.textContent = "Suggestion failed. Check the Gemini key and model name.";
    setStatus(String(answerResult.reason?.message || answerResult.reason).slice(0, 180), "error");
  }
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "LIVE" && msg.text) liveEl.textContent = msg.text;
  if (msg?.type === "UTTERANCE" && shouldAnswer(msg.text, lastAnswered)) {
    lastAnswered = msg.text.trim();
    liveEl.textContent = lastAnswered;
    answer(lastAnswered);
  }
  if (msg?.type === "STATUS") setStatus(msg.text, msg.level);
});

startBtn.addEventListener("click", () => {
  if (!keysReady) {
    setStatus("Settings mein Deepgram aur Gemini key save karo.", "error");
    return;
  }
  setStatus("Connecting…");
  chrome.tabs.query({ url: "https://meet.google.com/*" }, (tabs) => {
    const tab = tabs?.find((item) => item.audible) || tabs?.[0];
    if (!tab) {
      setStatus("Google Meet ko Chrome mein kholo, phir Start dabao.", "error");
      return;
    }
    chrome.tabCapture.getMediaStreamId({ targetTabId: tab.id }, (streamId) => {
      if (chrome.runtime.lastError || !streamId) {
        setStatus(chrome.runtime.lastError?.message || "Could not hear the Meet tab.", "error");
        return;
      }
      chrome.runtime.sendMessage(
        { type: "START", streamId, playAudio: hearEl.checked },
        (response) => {
          if (!response?.ok) {
            setStatus(response?.error || "Could not start.", "error");
            return;
          }
          startBtn.disabled = true;
          stopBtn.disabled = false;
        },
      );
    });
  });
});

stopBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "STOP" }, () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    setStatus("Stopped.");
  });
});
