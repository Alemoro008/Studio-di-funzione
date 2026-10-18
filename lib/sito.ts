import { lezioni } from "./lezioni";
export const sitoUrl = "https://studio-di-funzione-alessandro.netlify.app";
export const pagine = [
  { percorso: "/", titolo: "Calcolatore" },
  { percorso: "/lezioni", titolo: "Lezioni e studi svolti" },
  { percorso: "/esercizi", titolo: "Esercizi con soluzioni" },
  { percorso: "/metodo-e-limiti", titolo: "Metodo e limiti" },
  { percorso: "/studio-di-funzione", titolo: "Studio di funzione" },
  { percorso: "/studio-di-funzione-online", titolo: "Come usare il calcolatore" },
  { percorso: "/dominio-di-una-funzione", titolo: "Dominio" },
  { percorso: "/segno-di-una-funzione", titolo: "Segno" },
  { percorso: "/derivata-prima", titolo: "Derivata prima" },
  { percorso: "/limiti-e-asintoti", titolo: "Limiti e asintoti" },
  { percorso: "/studi-di-funzione-svolti", titolo: "Studi svolti" },
  { percorso: "/chi-siamo", titolo: "Chi siamo" },
  { percorso: "/contatti", titolo: "Contatti" },
  { percorso: "/privacy-policy", titolo: "Privacy Policy" },
  ...lezioni.map(l => ({ percorso: `/lezioni/${l.slug}`, titolo: l.titolo })),
];
