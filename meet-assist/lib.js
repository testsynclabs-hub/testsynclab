export const DEFAULT_MODEL = "gemini-2.5-flash";

export function createUtteranceTracker() {
  let committed = "";
  let interim = "";

  function liveText() {
    return `${committed} ${interim}`.trim();
  }

  return {
    push(transcript, isFinal) {
      const text = (transcript || "").replace(/\s+/g, " ").trim();
      if (!text) return liveText();
      if (isFinal) {
        committed = `${committed} ${text}`.trim();
        interim = "";
      } else {
        interim = text;
      }
      return liveText();
    },
    finish() {
      const done = liveText();
      committed = "";
      interim = "";
      return done;
    },
  };
}

export function createSseParser(onText) {
  let buf = "";
  let full = "";

  return {
    push(chunk) {
      buf += chunk;
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data:")) continue;
        const data = trimmed.slice(5).trim();
        if (!data || data === "[DONE]") continue;
        let json;
        try {
          json = JSON.parse(data);
        } catch {
          continue;
        }
        const parts = json.candidates?.[0]?.content?.parts ?? [];
        const text = parts.map((part) => part.text || "").join("");
        if (!text) continue;
        full += text;
        onText(full);
      }
      return full;
    },
    text() {
      return full;
    },
  };
}

export function buildUrduPrompt(english) {
  return [
    "Translate this spoken English into simple Urdu.",
    "Return only the Urdu sentence. No English, no notes.",
    "",
    english.trim(),
  ].join("\n");
}

export function buildSuggestPrompt(experience, english) {
  return [
    "You help the user answer a live call in spoken English.",
    "Use ONLY the experience below. Do not add employers, projects, tools, years, or skills that are not written there.",
    "Reply with at most 2 short sentences the user can read aloud.",
    "If the experience does not cover the question, use this shape and nothing else:",
    "I haven't done that yet. Here is how I would handle it: <one practical step>.",
    "",
    "Experience:",
    experience.trim(),
    "",
    "Question:",
    english.trim(),
  ].join("\n");
}

export function shouldAnswer(text, lastText) {
  const cleaned = (text || "").replace(/\s+/g, " ").trim();
  if (cleaned.length < 3) return false;
  if (cleaned === lastText) return false;
  return true;
}
