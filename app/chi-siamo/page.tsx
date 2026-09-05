export const metadata = {
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
          <p>
            Studio di Funzione è un progetto didattico dedicato alla
            matematica, nato con l'obiettivo di rendere più semplice e
            comprensibile lo studio delle funzioni.
          </p>

          <p>
            Il sito mette a disposizione strumenti online e contenuti
            esplicativi utili per analizzare dominio, segno, derivate,
            concavità, punti di flesso e altri elementi fondamentali
            dello studio di funzione.
          </p>

          <p>
            L'obiettivo è offrire un supporto pratico agli studenti,
            affiancando ai calcoli automatici spiegazioni chiare che
            aiutino a comprendere il procedimento matematico.
          </p>

          <p>
            Il progetto viene sviluppato e aggiornato progressivamente,
            con l'intento di aggiungere nuovi strumenti e migliorare
            continuamente la qualità dei contenuti disponibili.
          </p>

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
