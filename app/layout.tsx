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
  "Studia una funzione online gratuitamente: dominio, intersezioni, segno, derivate, crescenza, concavità, flessi e asintoti. Pensato per studenti delle scuole superiori.",
 other: {
  "google-adsense-account": "ca-pub-1617331160429657",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
