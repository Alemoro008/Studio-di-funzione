/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS loader for TS tests without extra dependencies. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (mod, file) => mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText, file);
const { creaValutatore, tracciaGrafico, vistaIniziale } = require('../lib/grafico.ts');
const { calcolaStudioCompleto, calcolaDominio } = require('../lib/analisi.ts');
for (const [formula, dominio] of [['sqrt(x)', '[0, +∞)'], ['sqrt(x+2)', '[-2, +∞)'], ['sqrt(x-2)', '[2, +∞)'], ['log(x)', '(0, +∞)'], ['log(x-1)', '(1, +∞)'], ['log(x+2)', '(-2, +∞)']]) {
  assert.equal(calcolaDominio(formula), dominio, formula);
}
for (const [formula, x, y] of [['x²', 3, 9], ['sen(x)', 0, 0], ['sqrt(x)', -1, null], ['log(x)', 0, null], ['1/x', 0, null], ['(x^2-4)/(x-2)', 2, null], ['5', 3, 5]]) {
  assert.equal(creaValutatore(formula)(x), y, formula);
}
for (const formula of ['x^2', '1/x', '1/(x-0.12345)', 'tan(x)', 'sqrt(x)', 'log(x)', '5']) {
  const path = tracciaGrafico(creaValutatore(formula), vistaIniziale);
  assert.ok(path.length > 0, formula);
  assert.ok(!/NaN|Infinity/.test(path), formula);
  if (formula.startsWith('1/')) {
    const pole = formula === '1/x' ? 0 : 0.12345;
    const polePixel = (pole + 10) / 20 * 720;
    for (const m of path.matchAll(/M([\d.-]+),([\d.-]+)L([\d.-]+),([\d.-]+)/g)) {
      assert.ok(!(Number(m[1]) < polePixel - 0.001 && Number(m[3]) > polePixel + 0.001), `Segment crosses pole: ${formula}`);
    }
  }
}
assert.equal(tracciaGrafico(creaValutatore('sqrt(-1)'), vistaIniziale), '');
assert.throws(() => creaValutatore('x^'));
const studio = calcolaStudioCompleto('x^2');
assert.equal(studio.dominio, 'ℝ');
assert.equal(creaValutatore(studio.derivataPrima)(3), 6);
assert.equal(creaValutatore(studio.derivataSeconda)(3), 2);
console.log('OK: real domains, normalization, poles, invalid expressions and calculator derivatives.');
