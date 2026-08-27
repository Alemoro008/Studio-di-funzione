import Link from "next/link";

export const metadata = {
  title: "Studio di Funzione Online | Calcolatore Gratuito",
  description:
    "Studio di funzione online gratuito: calcola dominio, intersezioni, segno, derivate, crescenza, concavità, flessi e asintoti.",
};

export default function StudioDiFunzioneOnline() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Matematica online
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Studio di funzione online
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Studia una funzione online gratuitamente e ottieni una spiegazione
          dei principali passaggi dello studio di funzione: dominio,
          intersezioni con gli assi, segno, derivate, crescenza, concavità,
          flessi e asintoti.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Vai al calcolatore
          </Link>
        </div>

        <div className="mt-16 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Cos'è lo studio di funzione?
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Lo studio di funzione è un procedimento matematico che permette
              di analizzare in modo completo l'andamento di una funzione.
              Attraverso diversi passaggi è possibile capire dove la funzione
              è definita, dove è positiva o negativa, come cresce o decresce
              e quale comportamento assume vicino ai punti importanti e
              all'infinito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Quali sono i passaggi principali?
            </h2>

            <div className="mt-6 space-y-6">

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  1. Dominio
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Il dominio individua tutti i valori di x per i quali la
                  funzione è definita. Bisogna controllare, ad esempio,
                  denominatori, radici e altre eventuali condizioni di
                  esistenza.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  2. Intersezioni con gli assi
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Le intersezioni con l'asse x si trovano ponendo la funzione
                  uguale a zero, mentre per l'intersezione con l'asse y si
                  considera x uguale a zero quando questo valore appartiene
                  al dominio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  3. Studio del segno
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Lo studio del segno permette di determinare gli intervalli
                  nei quali la funzione è positiva o negativa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  4. Derivata prima
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  La derivata prima viene utilizzata per analizzare la
                  crescenza e la decrescenza della funzione e per individuare
                  eventuali massimi e minimi relativi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  5. Derivata seconda
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  La derivata seconda permette di studiare la concavità e
                  individuare eventuali punti di flesso.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  6. Limiti e asintoti
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Lo studio dei limiti permette di analizzare il comportamento
                  della funzione vicino ai punti esclusi dal dominio e quando
                  x tende a più o meno infinito. Da questi risultati possono
                  essere individuati gli asintoti verticali, orizzontali e
                  obliqui.
                </p>
              </div>

            </div>
          </section>

          <section className="rounded-2xl bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Studia una funzione gratuitamente
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Inserisci la tua funzione nel nostro calcolatore online per
              ottenere rapidamente i principali risultati dello studio.
            </p>

            <Link
              href="/"
              className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Apri Studio di Funzione Online →
            </Link>
          </section>

        </div>
      </section>
    </main>
  );
}
