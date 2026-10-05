"use client";

import { useId, useMemo, useRef, useState } from "react";
import { creaValutatore, tacche, tracciaGrafico, vistaIniziale, type Vista } from "../../lib/grafico";

export default function GraficoFunzione({ funzione }: { funzione: string }) {
  const [vista, setVista] = useState<Vista>(vistaIniziale);
  const [punto, setPunto] = useState<{ x: number; y: number | null } | null>(null);
  const drag = useRef<{ x: number; y: number; vista: Vista } | null>(null);
  const id = useId();
  const valuta = useMemo(() => { try { return creaValutatore(funzione); } catch { return null; } }, [funzione]);
  const curva = useMemo(() => valuta ? tracciaGrafico(valuta, vista) : "", [valuta, vista]);
  const px = (x: number) => (x - vista.xMin) / (vista.xMax - vista.xMin) * 720;
  const py = (y: number) => (vista.yMax - y) / (vista.yMax - vista.yMin) * 420;
  const formato = (n: number) => Number(n.toPrecision(5)).toString();
  function zoom(fattore: number) {
    setVista(v => {
      const sx = (v.xMax - v.xMin) * fattore / 2, sy = (v.yMax - v.yMin) * fattore / 2;
      if (sx < 0.001 || sx > 100000) return v;
      const cx = (v.xMin + v.xMax) / 2, cy = (v.yMin + v.yMax) / 2;
      return { xMin: cx - sx, xMax: cx + sx, yMin: cy - sy, yMax: cy + sy };
    });
    setPunto(null);
  }
  return <section className="rounded-xl border border-gray-200 bg-gray-50 p-5" aria-label="Grafico della funzione">
    <h2 className="text-lg font-semibold text-gray-900">Grafico della funzione</h2>
    <p className="mt-2 text-sm text-gray-500">Trascina per spostarti. Usa i pulsanti per lo zoom, anche da smartphone.</p>
    <div className="my-3 flex flex-wrap gap-2">
      <button type="button" aria-label="Ingrandisci grafico" onClick={() => zoom(0.5)} className="rounded-lg border bg-white px-4 py-2 text-blue-700">Zoom +</button>
      <button type="button" aria-label="Riduci grafico" onClick={() => zoom(2)} className="rounded-lg border bg-white px-4 py-2 text-blue-700">Zoom −</button>
      <button type="button" onClick={() => { setVista(vistaIniziale); setPunto(null); }} className="rounded-lg border bg-white px-4 py-2 text-blue-700">Ripristina</button>
    </div>
    {!valuta ? <p role="status">Grafico non disponibile per questa espressione. Lo studio resta consultabile.</p> : <>
      <svg viewBox="-48 -18 788 476" className="w-full rounded-lg bg-white" style={{ touchAction: "none", cursor: "grab" }} role="img" aria-labelledby={`${id}-titolo ${id}-descrizione`}
        onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); drag.current = { x: e.clientX, y: e.clientY, vista }; }}
        onPointerUp={e => { drag.current = null; if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId); }}
        onPointerCancel={() => { drag.current = null; }} onPointerLeave={() => setPunto(null)}
        onPointerMove={e => {
          const rect = e.currentTarget.getBoundingClientRect(), inizio = drag.current;
          if (inizio) {
            const dx = (e.clientX - inizio.x) / rect.width * 788 / 720 * (inizio.vista.xMax - inizio.vista.xMin);
            const dy = (e.clientY - inizio.y) / rect.height * 476 / 420 * (inizio.vista.yMax - inizio.vista.yMin);
            setVista({ xMin: inizio.vista.xMin - dx, xMax: inizio.vista.xMax - dx, yMin: inizio.vista.yMin + dy, yMax: inizio.vista.yMax + dy });
            setPunto(null);
          } else {
            const x = vista.xMin + (((e.clientX - rect.left) / rect.width * 788 - 48) / 720) * (vista.xMax - vista.xMin);
            setPunto(x >= vista.xMin && x <= vista.xMax ? { x, y: valuta(x) } : null);
          }
        }}>
        <title id={`${id}-titolo`}>Grafico di f(x) = {funzione}</title>
        <desc id={`${id}-descrizione`}>Intervallo x da {formato(vista.xMin)} a {formato(vista.xMax)}, y da {formato(vista.yMin)} a {formato(vista.yMax)}. Campionamento numerico.</desc>
        <defs><clipPath id={`${id}-clip`}><rect width="720" height="420" /></clipPath></defs>
        {tacche(vista.xMin, vista.xMax).map(x => <g key={`x${x}`}><line x1={px(x)} x2={px(x)} y1={0} y2={420} stroke="#e5e7eb" /><text x={px(x)} y={442} textAnchor="middle" fontSize="12" fill="#4b5563">{formato(x)}</text></g>)}
        {tacche(vista.yMin, vista.yMax).map(y => <g key={`y${y}`}><line x1={0} x2={720} y1={py(y)} y2={py(y)} stroke="#e5e7eb" /><text x={-8} y={py(y) + 4} textAnchor="end" fontSize="12" fill="#4b5563">{formato(y)}</text></g>)}
        <g clipPath={`url(#${id}-clip)`}>
          <line x1={px(0)} x2={px(0)} y1={0} y2={420} stroke="#6b7280" /><line x1={0} x2={720} y1={py(0)} y2={py(0)} stroke="#6b7280" />
          <path d={curva} fill="none" stroke="#2563eb" strokeWidth="2" />
          {punto && punto.y !== null && <circle cx={px(punto.x)} cy={py(punto.y)} r="4" fill="#1d4ed8" />}
        </g>
        <text x="724" y="442" fontSize="12">x</text><text x="-32" y="-5" fontSize="12">y</text>
      </svg>
      <p className="mt-2 min-h-5 text-sm text-gray-600">{punto ? `x = ${formato(punto.x)}; f(x) = ${punto.y === null ? "non definita nei reali" : formato(punto.y)}` : `Finestra: x ∈ [${formato(vista.xMin)}, ${formato(vista.xMax)}], y ∈ [${formato(vista.yMin)}, ${formato(vista.yMax)}]`}</p>
      {!curva && <p role="status" className="text-sm text-gray-600">Nessun tratto reale visibile: prova a spostare o ridurre il grafico.</p>}
    </>}
    <p className="mt-3 text-xs text-gray-500">Il grafico è un’approssimazione numerica: dettagli molto piccoli, buchi e oscillazioni rapide possono non essere visibili. Verifica dominio e limiti nello studio.</p>
  </section>;
}
