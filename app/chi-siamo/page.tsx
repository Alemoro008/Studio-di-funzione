export const metadata = {
  alternates: { canonical: "/chi-siamo" },
  title: "Chi siamo | Studio di Funzione",
  description:
    "Scopri il progetto Studio di Funzione e gli strumenti didattici dedicati allo studio delle funzioni matematiche.",
};

export default function ChiSiamo() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">
          Chi siamo
        </h1>

        <div className="space-y-6">
          <p>Mi chiamo Alessandro e curo il progetto Studio di Funzione. L’idea è affiancare uno strumento gratuito a un percorso che aiuti a capire perché un passaggio matematico è corretto, anche quando il risultato automatico è incompleto.</p>
          <p>
            Studio di Funzione è un progetto didattico dedicato alla
            matematica, nato con l&apos;obiettivo di rendere più semplice e
            comprensibile lo studio delle funzioni.
          </p>

          <p>
            Il sito mette a disposizione strumenti online e contenuti
            esplicativi utili per analizzare dominio, segno, derivate,
            concavità, punti di flesso e altri elementi fondamentali
            dello studio di funzione.
          </p>

          <p>
            L&apos;obiettivo è offrire un supporto pratico agli studenti,
            affiancando ai calcoli automatici spiegazioni chiare che
            aiutino a comprendere il procedimento matematico.
          </p>

          <p>
            Il progetto viene sviluppato e aggiornato progressivamente,
            con l&apos;intento di aggiungere nuovi strumenti e migliorare
            continuamente la qualità dei contenuti disponibili.
          </p>
          <section><h2 className="mb-3 text-xl font-semibold">Come lavoriamo sui contenuti</h2><p>Gli studi svolti riportano formule e passaggi verificabili: dominio prima delle semplificazioni, segni delle derivate per classificare i punti, limiti per giustificare gli asintoti. Le approssimazioni sono indicate esplicitamente. Per sviluppo e preparazione dei contenuti vengono utilizzati anche strumenti automatici; le loro risposte non sono una garanzia di correttezza matematica.</p><p className="mt-3">Il progetto non dichiara una certificazione scolastica o una revisione da parte di docenti. Puoi leggere <a className="text-blue-700 underline" href="/metodo-e-limiti">metodo, riferimenti e limiti del calcolatore</a> e inviare una correzione a <a className="text-blue-700 underline" href="mailto:008alemoro@gmail.com">008alemoro@gmail.com</a>.</p></section>
          <section><h2 className="mb-3 text-xl font-semibold">Per chi è pensato</h2><p>Il percorso si rivolge soprattutto a chi affronta l’analisi alle scuole superiori. Non serve un account: puoi leggere le lezioni, aprire le soluzioni e usare il grafico. Non svolge prove al posto dello studente: il modo più utile di usarlo è tentare prima su carta e confrontare il ragionamento.</p></section>

          <p>
            Studio di Funzione ha finalità informative e didattiche.
            I risultati forniti dagli strumenti online devono essere
            utilizzati come supporto allo studio e alla verifica dei
            propri calcoli.
          </p>
        </div>
      </div>
    </main>
  );
}
