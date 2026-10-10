import { DEFAULT_MODEL } from "./lib.js";

const deepgramKey = document.getElementById("deepgramKey");
const geminiKey = document.getElementById("geminiKey");
const model = document.getElementById("model");
const experience = document.getElementById("experience");
const saved = document.getElementById("saved");

chrome.storage.local.get(["deepgramKey", "geminiKey", "model", "experience"], (data) => {
  deepgramKey.value = data.deepgramKey || "";
  geminiKey.value = data.geminiKey || "";
  model.value = data.model || DEFAULT_MODEL;
  experience.value = data.experience || "";
});

document.getElementById("save").addEventListener("click", () => {
  chrome.storage.local.set(
    {
      deepgramKey: deepgramKey.value.trim(),
      geminiKey: geminiKey.value.trim(),
      model: model.value.trim() || DEFAULT_MODEL,
      experience: experience.value.trim(),
    },
    () => {
      saved.textContent = "Saved on this laptop.";
    },
  );
});
