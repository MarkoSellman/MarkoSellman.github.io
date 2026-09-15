// Sanity check for steps.js. Run with: node recorder/steps.test.js
const assert = require("node:assert");
const STEPS_I18N = require("./steps.js");

const langs = Object.keys(STEPS_I18N);
assert.deepStrictEqual(langs.sort(), ["en", "fi"], "expected exactly fi and en");

const lengths = langs.map((lang) => STEPS_I18N[lang].length);
assert.ok(lengths[0] > 5, "expected multiple steps");
assert.ok(lengths.every((n) => n === lengths[0]), "fi/en step lists must be the same length");

for (const lang of langs) {
  const steps = STEPS_I18N[lang];
  const titles = new Set();
  steps.forEach((step, i) => {
    assert.ok(step.title && step.title.trim().length > 0, `[${lang}] step ${i} needs a non-empty title`);
    assert.ok(!titles.has(step.title), `[${lang}] duplicate title: ${step.title}`);
    titles.add(step.title);

    const isChecklist = Array.isArray(step.checklist);
    const isDone = step.done === true;
    const isTimed = typeof step.seconds === "number";
    assert.ok(isChecklist || isDone || isTimed, `[${lang}] step "${step.title}" needs a checklist, seconds, or done`);
    if (isTimed) {
      assert.ok(step.seconds > 0 && Number.isFinite(step.seconds), `[${lang}] step "${step.title}" has an invalid duration`);
      assert.ok(step.text && step.text.trim().length > 0, `[${lang}] timed step "${step.title}" needs instruction text`);
    }

    // fi/en must agree on shape (checklist/seconds/done) at each index.
    const other = STEPS_I18N[lang === "fi" ? "en" : "fi"][i];
    assert.strictEqual(!!step.checklist, !!other.checklist, `index ${i}: checklist mismatch between languages`);
    assert.strictEqual(!!step.done, !!other.done, `index ${i}: done mismatch between languages`);
    assert.strictEqual(step.seconds, other.seconds, `index ${i}: seconds mismatch between languages`);
  });

  assert.strictEqual(steps[0].checklist !== undefined, true, `[${lang}] first step must be the camera/environment checklist`);
  assert.strictEqual(steps[steps.length - 1].done, true, `[${lang}] last step must be the completion screen`);
}

console.log(`ok - ${lengths[0]} steps validated in ${langs.length} languages`);
