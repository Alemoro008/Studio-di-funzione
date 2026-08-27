import Link from "next/link";

export const metadata = {
  title: "Dominio di una Funzione | Guida e Studio Completo",
  description:
    "Scopri come trovare il dominio di una funzione e come svolgere uno studio di funzione completo con dominio, intersezioni, segno, derivate, concavità e asintoti.",
};

export default function DominioDiUnaFunzione() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Studio di funzione online
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Dominio di una funzione
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Il dominio è uno dei primi passaggi dello studio di una funzione.
          Scopri come determinarlo, quali condizioni controllare e come
          proseguire con l'analisi completa della funzione.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Fai lo studio completo della funzione
          </Link>
        </div>

        <div className="mt-16 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Cos'è il dominio di una funzione?
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Il dominio è l'insieme di tutti i valori reali che possono
              essere utilizzati al posto della variabile x senza rendere
              priva di significato l'espressione della funzione.
              Determinare il dominio è normalmente il primo passaggio
              dello studio di una funzione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Come si trova il dominio?
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Per trovare il dominio bisogna individuare le condizioni che
              rendono la funzione non definita. I casi più comuni riguardano
              denominatori, radici quadrate e altre condizioni di esistenza.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Funzioni razionali
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Nelle funzioni razionali il denominatore non può essere uguale
              a zero. Bisogna quindi trovare i valori di x che annullano il
              denominatore ed escluderli dal dominio.
            </p>

            <div className="mt-4 rounded-xl bg-gray-50 p-5">
              <p className="font-mono text-gray-800">
                f(x) = 1 / (x - 2)
              </p>

              <p className="mt-3 text-gray-600">
                In questo esempio il denominatore si annulla quando x = 2,
                quindi quel valore deve essere escluso dal dominio.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Funzioni con radice quadrata
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Quando una funzione contiene una radice quadrata, il suo
              argomento deve essere maggiore o uguale a zero. Questa
              condizione permette di determinare i valori di x ammessi.
            </p>

            <div className="mt-4 rounded-xl bg-gray-50 p-5">
              <p className="font-mono text-gray-800">
                f(x) = √x
              </p>

              <p className="mt-3 text-gray-600">
                In questo caso x deve essere maggiore o uguale a zero.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Il dominio è solo il primo passo
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Una volta determinato il dominio, lo studio di funzione
              prosegue con diversi passaggi che permettono di comprendere
              completamente l'andamento della funzione.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <div className="rounded-xl bg-gray-50 p-4">
                <strong>Dominio</strong>
                <p className="mt-1 text-sm text-gray-600">
                  Determina dove la funzione è definita.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <strong>Intersezioni</strong>
                <p className="mt-1 text-sm text-gray-600">
                  Trova i punti in cui il grafico incontra gli assi.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <strong>Segno</strong>
                <p className="mt-1 text-sm text-gray-600">
                  Determina dove la funzione è positiva o negativa.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <strong>Derivata prima</strong>
                <p className="mt-1 text-sm text-gray-600">
                  Permette di studiare crescenza, decrescenza ed estremi.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <strong>Derivata seconda</strong>
                <p className="mt-1 text-sm text-gray-600">
                  Permette di analizzare concavità e flessi.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <strong>Asintoti</strong>
                <p className="mt-1 text-sm text-gray-600">
                  Descrivono il comportamento della funzione vicino ai
                  valori esclusi e all'infinito.
                </p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Studio di funzione completo online
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Se devi svolgere uno studio di funzione completo, puoi
              inserire direttamente la funzione nel nostro strumento
              gratuito. Il calcolatore analizza automaticamente il dominio,
              le intersezioni, il segno, le derivate, la crescenza, gli
              estremi, la concavità, i flessi e gli asintoti.
            </p>

            <Link
              href="/"
              className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Vai allo studio di funzione online →
            </Link>
          </section>

        </div>
      </section>
    </main>
  );
}