/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (mod, file) => mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
const { lezioni } = require('../lib/lezioni.ts');
const { pagine } = require('../lib/sito.ts');
const { creaValutatore } = require('../lib/grafico.ts');
const { calcolaDominio, calcolaStudioCompleto } = require('../lib/analisi.ts');
const { derivative, parse } = require('mathjs');
assert.equal(lezioni.length, 8);
assert.equal(new Set(pagine.map(p => p.percorso)).size, pagine.length);
for (const l of lezioni) {
  assert.ok(pagine.some(p => p.percorso === `/lezioni/${l.slug}`));
  for (const href of l.correlati) assert.ok(pagine.some(p => p.percorso === href), `Missing related article ${href}`);
  if (l.formula) assert.ok(creaValutatore(l.formula));
}
function near(a, b, eps = 1e-7) { assert.ok(Math.abs(a-b)<eps, `${a} != ${b}`); }
// Independent checks of formulas printed in the lessons, away from singularities.
for (const [f, d1, d2, xs] of [
  ['x*exp(-x)', 'exp(-x)*(1-x)', 'exp(-x)*(x-2)', [-3,0,1,2,4]],
  ['sqrt(x^2-1)', 'x/sqrt(x^2-1)', '-1/(x^2-1)^(3/2)', [-3,-1.1,1.1,3]],
  ['x/(x^2+1)', '(1-x^2)/(x^2+1)^2', '2*x*(x^2-3)/(x^2+1)^3', [-3,-1,0,1,3]],
]) {
  const first = derivative(parse(f),'x').compile();
  const second = derivative(derivative(parse(f),'x'),'x').compile();
  for (const x of xs) { near(first.evaluate({x}),creaValutatore(d1)(x)); near(second.evaluate({x}),creaValutatore(d2)(x)); }
}
assert.equal(calcolaDominio('sqrt(x^2-1)'), '(-∞, -1] ∪ [1, +∞)');
const fn = creaValutatore('((x^2-4)*ln(x^2-1))/(x^2-1)');
const A = t => t-3+3*Math.log(t);
const H = t => -t*t+13*t+18-(9*t+12)*Math.log(t);
function root(f,a,b) { for(let k=0;k<90;k++){const m=(a+b)/2;if(f(a)*f(m)<=0)b=m;else a=m;}return (a+b)/2; }
const t0=root(A,1,3), t1=root(H,3,4), a=Math.sqrt(t0+1), b=Math.sqrt(t1+1);
near(a,1.611372,1e-6); near(fn(a),-0.411260,1e-6);
near(b,2.076810,1e-6); near(fn(b),0.113218,1e-6);
const c=(Math.sqrt(177)-9)/4;
assert.ok(-2*c+4-9*Math.log(c)-12/c < 0);
console.log(JSON.stringify({tMinimo:t0,tFlesso:t1,massimoDerivataH:-2*c+4-9*Math.log(c)-12/c}));
const exponential=calcolaStudioCompleto('x*exp(-x)');
assert.ok(exponential.estremi.includes('(1, 0.367879)'));
assert.ok(exponential.flessi.includes('(2, 0.270671)'));
console.log('OK: lesson formulas, numerical coordinates, domain endpoints and internal references.');
