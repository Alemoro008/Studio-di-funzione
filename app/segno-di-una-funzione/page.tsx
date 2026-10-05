import Link from "next/link";
import { ApprofondimentoSegno } from "../components/Approfondimenti";
export const metadata = { alternates: { canonical: "/segno-di-una-funzione" }, title: "Segno di una funzione: esempi ed esercizi svolti", description: "Studia il segno con tabelle, rapporti e logaritmi: esempi ragionati ed esercizi con soluzioni." };
export default function Guida() { return (
<main className="min-h-screen bg-white text-gray-900"><article className="mx-auto max-w-4xl px-6 py-16">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Analisi matematica · Guida con esercizi</p>
<h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Segno di una funzione</h1>
<p className="mt-6 text-lg leading-8 text-gray-600">{"Studiare il segno significa trovare dove f(x) > 0, f(x) < 0 e f(x) = 0. Nel grafico distingui i tratti sopra e sotto l’asse x e le intersezioni. Il primo passo è sempre determinare il dominio."}</p>
<ApprofondimentoSegno />
<nav aria-label="Continua lo studio" className="mt-14 flex flex-wrap gap-5 border-t border-gray-200 pt-8 font-semibold text-blue-600">
<Link href="/studio-di-funzione">Tutti i passaggi dello studio</Link><Link href="/dominio-di-una-funzione">Dominio</Link><Link href="/segno-di-una-funzione">Segno</Link><Link href="/derivata-prima">Derivata prima</Link>
</nav></article></main> ); }
