import Link from "next/link";
import { ApprofondimentoDominio } from "../components/Approfondimenti";
export const metadata = { alternates: { canonical: "/dominio-di-una-funzione" }, title: "Dominio di una funzione: esempi ed esercizi svolti", description: "Trova il dominio di funzioni razionali, radici e logaritmi con esempi svolti e soluzioni." };
export default function Guida() { return (
<main className="min-h-screen bg-white text-gray-900"><article className="mx-auto max-w-4xl px-6 py-16">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Analisi matematica · Guida con esercizi</p>
<h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Dominio di una funzione</h1>
<p className="mt-6 text-lg leading-8 text-gray-600">{"Il dominio è l’insieme dei valori reali di x per cui la formula ha significato. Impara a combinare le condizioni di esistenza e a conservare le esclusioni anche dopo una semplificazione."}</p>
<ApprofondimentoDominio />
<nav aria-label="Continua lo studio" className="mt-14 flex flex-wrap gap-5 border-t border-gray-200 pt-8 font-semibold text-blue-600">
<Link href="/studio-di-funzione">Tutti i passaggi dello studio</Link><Link href="/dominio-di-una-funzione">Dominio</Link><Link href="/segno-di-una-funzione">Segno</Link><Link href="/derivata-prima">Derivata prima</Link>
</nav></article></main> ); }
