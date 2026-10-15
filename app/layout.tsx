import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { sitoUrl } from "../lib/sito";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(sitoUrl),
  title: "Studio di Funzione | Calcolatore, lezioni ed esercizi",
  description: "Impara a studiare una funzione: guide ragionate, sette studi svolti, esercizi con soluzioni e calcolatore con grafico interattivo.",
  authors: [{ name: "Alessandro" }],
  openGraph: { title: "Studio di Funzione", description: "Dal ragionamento al grafico: lezioni, esempi ed esercizi di analisi matematica.", siteName: "Studio di Funzione", locale: "it_IT", type: "website" },
  robots: { index: true, follow: true },
  other: { "google-adsense-account": "ca-pub-2763131369198778", "google-site-verification": "zdD7Fg08uy8RWdDNoW6oVHgXl-KXb_LLCZ5r-tEKFNU" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full bg-white text-slate-900">
    <a href="#contenuto" className="skip-link">Vai al contenuto</a>
    <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 sm:px-8"><Link href="/" className="flex items-center gap-3 text-lg font-bold tracking-tight"><span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 font-serif text-xl italic text-white">ƒ</span>Studio di Funzione</Link><nav aria-label="Navigazione principale" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><Link href="/">Calcolatore</Link><Link href="/lezioni">Lezioni e studi svolti</Link><Link href="/esercizi">Esercizi</Link><Link href="/metodo-e-limiti">Metodo e limiti</Link></nav></div></header>
    <div id="contenuto" tabIndex={-1}>{children}</div>
    <footer className="mt-12 border-t border-slate-200 bg-slate-50"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8"><div><Link href="/" className="text-lg font-bold">Studio di Funzione</Link><p className="mt-3 max-w-md text-sm leading-7 text-slate-600">Un progetto didattico di Alessandro. Comprendi il procedimento, prova su carta e confronta i risultati. Le stime del calcolatore richiedono una verifica analitica.</p><p className="mt-4 text-sm text-slate-500">© {new Date().getFullYear()} · Matematica per le scuole superiori</p></div><nav aria-label="Informazioni e risorse" className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm"><Link href="/lezioni">Tutte le lezioni</Link><Link href="/chi-siamo">Il progetto</Link><Link href="/esercizi">Esercizi e soluzioni</Link><Link href="/contatti">Contatti e segnalazioni</Link><Link href="/studio-di-funzione-online">Come usare il calcolatore</Link><Link href="/privacy-policy">Privacy e cookie</Link><Link href="/metodo-e-limiti">Metodo, fonti e limiti</Link></nav></div></footer>
  </body></html>;
}
