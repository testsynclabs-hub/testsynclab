import { createUtteranceTracker } from "./lib.js";

const playback = document.getElementById("playback");
let recorder = null;
let socket = null;
let stream = null;
let keepAlive = null;
let session = 0;
let tracker = createUtteranceTracker();

function notify(message) {
  chrome.runtime.sendMessage(message).catch(() => {});
}

function stopAudio() {
  session += 1;
  if (keepAlive) clearInterval(keepAlive);
  keepAlive = null;
  if (recorder && recorder.state !== "inactive") recorder.stop();
  recorder = null;
  if (socket && socket.readyState < 2) {
    try {
      socket.send(JSON.stringify({ type: "CloseStream" }));
    } catch {
      // The socket may already be closing.
    }
    socket.close();
  }
  socket = null;
  if (stream) stream.getTracks().forEach((track) => track.stop());
  stream = null;
  playback.srcObject = null;
  tracker = createUtteranceTracker();
}

function emitUtterance() {
  const text = tracker.finish();
  if (text) notify({ type: "UTTERANCE", text });
}

function handleDeepgram(raw) {
  let msg;
  try {
    msg = JSON.parse(raw);
  } catch {
    return;
  }
  if (msg.type === "UtteranceEnd") {
    emitUtterance();
    return;
  }
  if (msg.type && msg.type !== "Results") return;
  const transcript = msg.channel?.alternatives?.[0]?.transcript || "";
  if (transcript) {
    const live = tracker.push(transcript, Boolean(msg.is_final));
    notify({ type: "LIVE", text: live });
  }
  if (msg.speech_final) emitUtterance();
}

async function capture(streamId) {
  const attempts = [
    {
      audio: {
        mandatory: {
          chromeMediaSource: "tab",
          chromeMediaSourceId: streamId,
        },
      },
      video: false,
    },
    {
      audio: {
        chromeMediaSource: "tab",
        chromeMediaSourceId: streamId,
      },
      video: false,
    },
  ];
  let lastError = null;
  for (const constraints of attempts) {
    try {
      return await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Could not capture the Meet tab.");
}

async function start(streamId, deepgramKey, playAudio) {
  stopAudio();
  try {
    stream = await capture(streamId);
    if (playAudio) {
      playback.srcObject = stream;
      playback.muted = false;
      await playback.play().catch(() => {});
    }

    const url =
      "wss://api.deepgram.com/v1/listen?model=nova-3&language=en&smart_format=true&punctuate=true&interim_results=true&endpointing=250&utterance_end_ms=1000&vad_events=true";
    socket = new WebSocket(url, ["token", deepgramKey]);
    const socketSession = session;

    await new Promise((resolve, reject) => {
      socket.onopen = resolve;
      socket.onerror = () => reject(new Error("Deepgram connection failed. Check the key."));
    });

    socket.onmessage = (event) => handleDeepgram(event.data);
    socket.onclose = () => {
      if (socketSession === session) {
        notify({ type: "STATUS", text: "Audio connection closed.", level: "warn" });
      }
    };
    socket.onerror = () => notify({ type: "STATUS", text: "Deepgram connection failed.", level: "error" });

    const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
      ? "audio/webm;codecs=opus"
      : "audio/webm";
    recorder = new MediaRecorder(stream, { mimeType });
    recorder.ondataavailable = async (event) => {
      if (!event.data.size || !socket || socket.readyState !== WebSocket.OPEN) return;
      socket.send(await event.data.arrayBuffer());
    };
    recorder.start(100);
    keepAlive = setInterval(() => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: "KeepAlive" }));
      }
    }, 4000);
    notify({ type: "STATUS", text: "Listening to Meet.", level: "ok" });
  } catch (error) {
    stopAudio();
    throw error;
  }
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "OFFSCREEN_START") {
    start(msg.streamId, msg.deepgramKey, msg.playAudio !== false).catch((error) => {
      notify({ type: "STATUS", text: error.message || "Could not start audio.", level: "error" });
    });
  }
  if (msg?.type === "OFFSCREEN_STOP") stopAudio();
});

notify({ type: "OFFSCREEN_READY" });
