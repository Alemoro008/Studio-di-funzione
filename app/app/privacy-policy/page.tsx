export const metadata = {
  title: "Privacy Policy | Studio di Funzione",
  description:
    "Informativa sulla privacy del sito Studio di Funzione.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <p>
            Questa informativa descrive le modalità di gestione del sito
            Studio di Funzione in riferimento al trattamento dei dati
            personali degli utenti che lo consultano.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Dati raccolti
            </h2>
            <p>
              Il sito non richiede registrazione e non richiede agli utenti
              di fornire direttamente dati personali per utilizzare gli
              strumenti di calcolo e i contenuti didattici disponibili.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Dati tecnici
            </h2>
            <p>
              Durante la normale navigazione, i sistemi e i servizi
              utilizzati per il funzionamento del sito possono trattare
              informazioni tecniche necessarie alla trasmissione e alla
              sicurezza delle comunicazioni, come indirizzi IP, tipo di
              browser e informazioni relative al dispositivo utilizzato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Cookie e servizi di terze parti
            </h2>
            <p>
              Il sito può utilizzare cookie tecnici necessari al suo
              funzionamento. Qualora vengano introdotti servizi di analisi,
              pubblicità o altri servizi di terze parti che utilizzano cookie
              o tecnologie analoghe, questa informativa verrà aggiornata e,
              quando richiesto, verrà acquisito il consenso dell'utente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Finalità del sito
            </h2>
            <p>
              Studio di Funzione è un progetto a carattere didattico che
              mette a disposizione strumenti e contenuti per lo studio
              delle funzioni matematiche.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Modifiche alla presente informativa
            </h2>
            <p>
              La presente Privacy Policy potrà essere aggiornata in seguito
              all'introduzione di nuove funzionalità o servizi.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
