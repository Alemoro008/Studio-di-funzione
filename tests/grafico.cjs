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
const analisi = require('../lib/analisi.ts');
const difficile = '((x^2-4)*ln(x^2-1))/(x^2-1)';
const risultato = calcolaStudioCompleto(difficile);
assert.equal(risultato.dominio, '(-∞, -1) ∪ (1, +∞)');
assert.equal(risultato.intersezioniX, '(-2, 0) ; (-√2, 0) ; (√2, 0) ; (2, 0)');
assert.equal(risultato.intersezioneY, 'Non esiste');
assert.equal(risultato.flessi, '(-2.07681, 0.113218) ; (2.07681, 0.113218)');
assert.ok(risultato.segno.includes('(√2, 2) → -'));
assert.ok(risultato.estremi.includes('(1.611372, -0.41126)'));
for (const x of [1.2, 1.8, 3, -3]) {
  const t = x*x-1;
  const prima = 2*x*(t-3+3*Math.log(t))/(t*t);
  const seconda = 2*(t-3+3*Math.log(t))/(t*t)+4*x*x*(-t+9-6*Math.log(t))/(t*t*t);
  assert.ok(Math.abs(creaValutatore(risultato.derivataPrima)(x)-prima)<1e-7);
  assert.ok(Math.abs(creaValutatore(risultato.derivataSeconda)(x)-seconda)<1e-6);
}
assert.ok(tracciaGrafico(creaValutatore(difficile), vistaIniziale).length>0);
assert.equal(calcolaDominio('sqrt(4-x^2)'), '[-2, 2]');
assert.equal(calcolaDominio('1/sqrt(x-1)'), '(1, +∞)');
assert.equal(calcolaDominio('log(x)+1/(x-2)'), '(0, 2) ∪ (2, +∞)');
assert.equal(analisi.calcolaIntersezioniX('(x-0.123)^2'), '(0.123, 0)');
assert.ok(analisi.calcolaIntersezioniX('1/(x-0.123)').includes('Nessuna'));
assert.ok(analisi.calcolaIntersezioniX('(x-1)/(x-1)').includes('Nessuna'));
assert.equal(analisi.calcolaFlessi('x^3'), '(0, 0)');
assert.ok(analisi.calcolaFlessi('x^4').includes('Nessun'));
assert.ok(analisi.calcolaAsintotiVerticali('sqrt(x-1)').includes('Nessun'));
assert.ok(analisi.calcolaAsintotiObliqui('x^2').includes('Nessun'));
assert.throws(() => calcolaStudioCompleto('foo(x)'));
console.log('OK: logarithms, combined domains, derivatives, inflections and discontinuities.');
