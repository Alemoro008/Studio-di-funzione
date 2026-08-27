import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio di Funzione Online | Calcolatore Gratuito",

  description:
    "Studia una funzione online gratuitamente in pochi secondi: dominio, derivate, limiti, asintoti, intersezioni, segno, crescenza, concavità e flessi.",

  keywords: [
    "studio di funzione",
    "studio di funzione online",
    "calcolatore studio di funzione",
    "studio funzione matematica",
    "derivata online",
    "dominio funzione",
    "limiti online",
    "asintoti",
    "matematica superiori",
  ],

  authors: [
    {
      name: "Studio di Funzione Online",
    },
  ],

  openGraph: {
    title: "Studio di Funzione Online | Calcolatore Gratuito",
    description:
      "Studia una funzione online gratuitamente: dominio, derivate, limiti, asintoti e molto altro.",
    url: "https://studio-di-funzione.vercel.app",
    siteName: "Studio di Funzione Online",
    locale: "it_IT",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "google-adsense-account": "ca-pub-2763131369198778",
    "google-site-verification":
      "flYYUX0CHNonn690qI1VmBjI0ORWXDqtvjzEU1snXy8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}