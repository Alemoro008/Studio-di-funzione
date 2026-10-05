export const metadata = {
  alternates: { canonical: "/privacy-policy" },
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
              Cookie e tecnologie simili
            </h2>
            <p>
              Il sito può utilizzare cookie tecnici necessari al suo
              funzionamento e, previo consenso quando richiesto dalla
              normativa applicabile, cookie o tecnologie simili utilizzati
              da servizi di terze parti.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Google AdSense
            </h2>
            <p>
              Nella versione attuale non è attivo il codice di pubblicazione
              degli annunci Google AdSense. Il sito contiene un identificativo
              dell&apos;account AdSense destinato alla verifica del sito: questo
              identificativo, da solo, non pubblica annunci.
            </p>

            <p className="mt-3">
              Se il servizio pubblicitario verrà attivato, Google e i suoi partner potranno utilizzare cookie o tecnologie
              simili per mostrare annunci, misurare le prestazioni degli
              annunci e, quando previsto e autorizzato dall&apos;utente,
              personalizzare i contenuti pubblicitari.
            </p>

            <p className="mt-3">
              Alcune informazioni relative al dispositivo e alla navigazione,
              come l&apos;indirizzo IP, il tipo di browser, identificatori
              online e dati relativi all&apos;interazione con gli annunci,
              potranno essere trattate da Google e dai suoi partner secondo
              le rispettive informative sulla privacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Consenso per gli utenti europei
            </h2>
            <p>
              Nella versione attuale non è presente una piattaforma di
              gestione del consenso e non sono integrati script pubblicitari
              o strumenti di analisi delle visite nel codice del sito.
            </p>

            <p className="mt-3">
              Prima di introdurre servizi che richiedono il consenso,
              saranno aggiornate questa informativa e le modalità di gestione
              delle preferenze. Per gli annunci personalizzati destinati agli
              utenti dello Spazio Economico Europeo, del Regno Unito e della
              Svizzera, dovrà essere configurata una piattaforma di gestione
              del consenso certificata da Google. Al momento non è disponibile
              sul sito un comando per modificare preferenze pubblicitarie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Servizi di terze parti
            </h2>
            <p>
              Il sito può avvalersi di servizi forniti da soggetti terzi
              necessari per l&apos;hosting, la sicurezza, la pubblicità o
              altre funzionalità tecniche. Tali soggetti possono trattare
              dati secondo le proprie informative e nel rispetto della
              normativa applicabile.
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
              all&apos;introduzione di nuove funzionalità, servizi o
              modifiche normative.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
