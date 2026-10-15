import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lezioni } from "../../../lib/lezioni";
import GraficoFunzione from "../../components/GraficoFunzione";

export function generateStaticParams() { return lezioni.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lezione = lezioni.find(l => l.slug === slug);
  if (!lezione) return {};
  return { title: lezione.titolo, description: lezione.descrizione, alternates: { canonical: `/lezioni/${slug}` }, openGraph: { title: lezione.titolo, description: lezione.descrizione, type: "article", locale: "it_IT", url: `/lezioni/${slug}` } };
}
export default async function Lezione({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = lezioni.find(l => l.slug === slug);
  if (!l) notFound();
  return <main><article className="lesson mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
    <nav aria-label="Percorso" className="mb-8 flex flex-wrap gap-2 text-sm text-blue-700"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/lezioni">Lezioni e studi svolti</Link></nav>
    <p className="eyebrow">{l.categoria} · Analisi matematica</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{l.titolo}</h1>
    <p className="mt-5 text-lg leading-8 text-slate-600">{l.descrizione}</p>
    <p className="mt-4 text-sm text-slate-500">A cura del progetto di Alessandro · Aggiornato il 15 ottobre 2026</p>
    <div className="my-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 leading-7"><p><strong>Obiettivo:</strong> {l.obiettivo}</p><p className="mt-2"><strong>Prima di iniziare:</strong> {l.prerequisiti}</p></div>
    <nav aria-label="Indice della lezione" className="rounded-2xl border border-slate-200 p-6"><h2 className="text-lg font-semibold">In questa lezione</h2><ol className="mt-3 list-decimal space-y-2 pl-5">{l.sezioni.map((s, i) => <li key={s.titolo}><a href={`#passaggio-${i + 1}`} className="text-blue-700 underline underline-offset-4">{s.titolo}</a></li>)}</ol></nav>
    {l.sezioni.map((s, i) => <section key={s.titolo} id={`passaggio-${i + 1}`} className="mt-12 scroll-mt-8"><h2 className="text-2xl font-bold tracking-tight">{s.titolo}</h2>{s.formula && <p className="formula my-5 rounded-xl bg-slate-100 p-5 font-mono text-base leading-8">{s.formula}</p>}{s.paragrafi.map(p => <p key={p.slice(0, 50)} className="mt-5 leading-8 text-slate-700">{p}</p>)}</section>)}
    {l.formula && <section className="mt-12"><h2 className="mb-5 text-2xl font-bold">Confronta i passaggi con il grafico</h2><GraficoFunzione funzione={l.formula} /><Link href={`/?f=${encodeURIComponent(l.formula)}`} className="mt-5 inline-block font-semibold text-blue-700 underline">Apri questa funzione nel calcolatore →</Link><p className="mt-3 text-sm leading-6 text-slate-600">Il grafico usa campioni numerici. Per le coordinate e i limiti fai riferimento allo svolgimento sopra; usa lo zoom se i dettagli sono vicini.</p></section>}
    <section className="mt-12 rounded-2xl border border-slate-200 p-6"><h2 className="text-xl font-bold">Verifica la comprensione</h2><details className="mt-4"><summary className="cursor-pointer font-medium leading-7">{l.domanda}</summary><p className="mt-4 leading-8 text-slate-700">{l.risposta}</p></details></section>
    <nav aria-label="Continua a studiare" className="mt-10 border-t border-slate-200 pt-8"><h2 className="text-xl font-bold">Prosegui il percorso</h2><ul className="mt-4 flex flex-wrap gap-4">{l.correlati.map(href => <li key={href}><Link href={href} className="text-blue-700 underline">{lezioni.find(a => `/lezioni/${a.slug}` === href)?.titolo ?? ({"/derivata-prima":"Derivata prima", "/dominio-di-una-funzione":"Dominio", "/limiti-e-asintoti":"Limiti e asintoti", "/studi-di-funzione-svolti":"Tre studi svolti di base", "/segno-di-una-funzione":"Segno della funzione", "/esercizi":"Esercizi con soluzioni", "/metodo-e-limiti":"Metodo e limiti del calcolatore"} as Record<string,string>)[href]}</Link></li>)}</ul></nav>
    <p className="mt-8 text-sm leading-6 text-slate-500">Hai trovato un passaggio da correggere? <Link className="underline" href="/contatti">Segnala formula, punto e risultato atteso ad Alessandro.</Link></p>
  </article></main>;
}
