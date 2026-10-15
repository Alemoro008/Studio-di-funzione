export const metadata = {
  alternates: { canonical: "/contatti" },
  title: "Contatti | Studio di Funzione",
  description:
    "Contatti del progetto Studio di Funzione.",
};

export default function Contatti() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">
          Contatti
        </h1>

        <div className="space-y-6">
         <p>
  E-mail:{" "}
  <a
    href="mailto:008alemoro@gmail.com"
    className="font-semibold underline"
  >
    008alemoro@gmail.com
  </a>
</p>

          <p>
            Il progetto è dedicato allo studio della matematica e
            accoglie volentieri segnalazioni riguardanti eventuali
            problemi negli strumenti di calcolo o suggerimenti per
            migliorare i contenuti.
          </p>
          <section><h2 className="mb-3 text-xl font-semibold">Scrivi ad Alessandro</h2><p>Per segnalare un errore, indica l’indirizzo della pagina, la formula completa con le parentesi, il risultato visualizzato e il passaggio che ritieni da correggere. Se riguarda il grafico, aggiungi l’intervallo in cui osservi il problema. Per un problema di utilizzo è utile sapere se stai navigando da telefono o computer.</p></section>
          <section><h2 className="mb-3 text-xl font-semibold">Richieste sulla privacy</h2><p>Puoi usare la stessa email per domande sul trattamento dei dati e richieste relative ai tuoi messaggi. Invia soltanto le informazioni necessarie: non servono documenti d’identità, dati della scuola o nomi di altri studenti per segnalare un errore matematico.</p></section>
          <p>L’indirizzo apre il tuo programma di posta. Il sito non dispone di un modulo di invio e non invia messaggi automaticamente.</p>
        </div>
      </div>
    </main>
  );
}
