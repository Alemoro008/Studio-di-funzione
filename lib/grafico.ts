import { compile } from "mathjs";
import { normalizzaFunzione } from "./analisi";

export type Vista = { xMin: number; xMax: number; yMin: number; yMax: number };
export const vistaIniziale: Vista = { xMin: -10, xMax: 10, yMin: -10, yMax: 10 };

// Do not simplify: the original expression retains its excluded points.
export function creaValutatore(funzione: string): (x: number) => number | null {
  const codice = compile(normalizzaFunzione(funzione));
  return (x) => {
    try {
      const y: unknown = codice.evaluate({ x });
      return typeof y === "number" && Number.isFinite(y) ? y : null;
    } catch { return null; }
  };
}

export function tracciaGrafico(valuta: (x: number) => number | null, vista: Vista) {
  const px = (x: number) => (x - vista.xMin) / (vista.xMax - vista.xMin) * 720;
  const py = (y: number) => (vista.yMax - y) / (vista.yMax - vista.yMin) * 420;
  const tratti: string[] = [];
  const visibile = (y: number | null): y is number => y !== null && Math.abs(py(y)) < 3360;
  function segmento(a: number, b: number, ya: number | null, yb: number | null, livello: number) {
    const m = (a + b) / 2, ym = valuta(m);
    if (!visibile(ya) && !visibile(yb) && !visibile(ym)) return;
    if (visibile(ya) && visibile(yb) && visibile(ym) &&
        Math.abs(py(ym) - (py(ya) + py(yb)) / 2) < 0.75 && Math.abs(py(ya) - py(yb)) < 80) {
      tratti.push(`M${px(a).toFixed(3)},${py(ya).toFixed(3)}L${px(b).toFixed(3)},${py(yb).toFixed(3)}`);
    } else if (livello < 8) {
      segmento(a, m, ya, ym, livello + 1);
      segmento(m, b, ym, yb, livello + 1);
    }
  }
  for (let i = 0; i < 720; i++) {
    const a = vista.xMin + (vista.xMax - vista.xMin) * i / 720;
    const b = vista.xMin + (vista.xMax - vista.xMin) * (i + 1) / 720;
    segmento(a, b, valuta(a), valuta(b), 0);
  }
  return tratti.join("");
}

export function tacche(min: number, max: number) {
  const base = 10 ** Math.floor(Math.log10((max - min) / 8));
  const passo = [1, 2, 5, 10].map(n => n * base).find(n => (max - min) / n <= 10)!;
  const valori: number[] = [];
  for (let n = Math.ceil(min / passo); n * passo <= max; n++) valori.push(Number((n * passo).toPrecision(10)));
  return valori;
}
