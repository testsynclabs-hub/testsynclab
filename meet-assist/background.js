chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch(() => {});

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});

function waitForOffscreen() {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      chrome.runtime.onMessage.removeListener(onReady);
      resolve();
    }, 1000);
    function onReady(msg) {
      if (msg?.type !== "OFFSCREEN_READY") return;
      clearTimeout(timer);
      chrome.runtime.onMessage.removeListener(onReady);
      resolve();
    }
    chrome.runtime.onMessage.addListener(onReady);
  });
}

async function ensureOffscreen() {
  const has = await chrome.offscreen.hasDocument();
  if (has) return;
  const ready = waitForOffscreen();
  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["USER_MEDIA", "AUDIO_PLAYBACK"],
    justification: "Capture Google Meet tab audio for live captions and play it back.",
  });
  await ready;
}

async function begin(streamId, playAudio) {
  const { deepgramKey } = await chrome.storage.local.get("deepgramKey");
  if (!deepgramKey) throw new Error("Add the Deepgram key in Settings.");
  await ensureOffscreen();
  await chrome.runtime.sendMessage({
    type: "OFFSCREEN_START",
    streamId,
    deepgramKey,
    playAudio: playAudio !== false,
  });
  return { ok: true };
}

async function end() {
  const has = await chrome.offscreen.hasDocument();
  if (!has) return { ok: true };
  await chrome.runtime.sendMessage({ type: "OFFSCREEN_STOP" }).catch(() => {});
  await chrome.offscreen.closeDocument();
  return { ok: true };
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === "START") {
    begin(msg.streamId, msg.playAudio)
      .then(sendResponse)
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }
  if (msg?.type === "STOP") {
    end()
      .then(sendResponse)
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }
});
