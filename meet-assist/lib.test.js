import assert from "node:assert/strict";
import test from "node:test";
import {
  buildSuggestPrompt,
  buildUrduPrompt,
  createSseParser,
  createUtteranceTracker,
  shouldAnswer,
} from "./lib.js";

test("interim text replaces itself and finals append once", () => {
  const tracker = createUtteranceTracker();
  assert.equal(tracker.push("what is", false), "what is");
  assert.equal(tracker.push("what is sqa", false), "what is sqa");
  assert.equal(tracker.push("what is sqa", true), "what is sqa");
  assert.equal(tracker.push("testing", true), "what is sqa testing");
  assert.equal(tracker.finish(), "what is sqa testing");
  assert.equal(tracker.finish(), "");
});

test("suggestion prompt forbids invented experience", () => {
  const prompt = buildSuggestPrompt("I tested a shop website by hand.", "Have you used Selenium?");
  assert.match(prompt, /ONLY the experience/);
  assert.match(prompt, /I haven't done that yet/);
  assert.match(prompt, /I tested a shop website by hand/);
  assert.match(prompt, /Have you used Selenium/);
});

test("urdu prompt returns only the speech", () => {
  const prompt = buildUrduPrompt("What is regression testing?");
  assert.match(prompt, /simple Urdu/);
  assert.match(prompt, /What is regression testing/);
});

test("sse parser appends split chunks", () => {
  const seen = [];
  const parser = createSseParser((text) => seen.push(text));
  parser.push('data: {"candidates":[{"content":{"parts":[{"text":"I "}]} }]}\n');
  parser.push('data: {"candidates":[{"content":{"parts":[{"text":"tested it."}]}}]}\n');
  assert.deepEqual(seen, ["I ", "I tested it."]);
});

test("short and duplicate lines are not answered again", () => {
  assert.equal(shouldAnswer("ok", ""), false);
  assert.equal(shouldAnswer("What is SQA?", ""), true);
  assert.equal(shouldAnswer("What is SQA?", "What is SQA?"), false);
});
