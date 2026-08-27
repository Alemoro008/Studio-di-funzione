import Link from "next/link";

export const metadata = {
  title: "Segno di una Funzione: Come si Studia | Guida",
  description:
    "Scopri come si studia il segno di una funzione: dominio, zeri, intervalli positivi e negativi ed esempi. Guida semplice per lo studio di funzione.",
};

export default function SegnoDiUnaFunzione() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Analisi matematica
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Segno di una funzione
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Lo studio del segno di una funzione permette di determinare
          dove la funzione è positiva, negativa oppure uguale a zero.
          È uno dei passaggi fondamentali dello studio di funzione.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Studia una funzione online →
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Che cos&apos;è il segno di una funzione?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Studiare il segno di una funzione significa stabilire per quali
            valori della variabile x si verifica f(x) &gt; 0, per quali
            f(x) &lt; 0 e per quali f(x) = 0.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-50 p-6">
            <p className="text-lg leading-8 text-gray-700">
              <strong>f(x) &gt; 0</strong> → funzione positiva
              <br />
              <strong>f(x) = 0</strong> → zero della funzione
              <br />
              <strong>f(x) &lt; 0</strong> → funzione negativa
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Come si studia il segno di una funzione?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Per studiare il segno è necessario considerare innanzitutto
            il dominio della funzione e individuare gli eventuali valori
            di x per cui la funzione è nulla o non è definita.
          </p>

          <div className="mt-8 space-y-5">

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                1. Determina il dominio
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Prima di tutto bisogna stabilire per quali valori di x
                la funzione esiste. I valori esclusi dal dominio non
                possono essere utilizzati nello studio del segno.
              </p>

              <Link
                href="/dominio-di-una-funzione"
                className="mt-3 inline-block font-semibold text-blue-600"
              >
                Approfondisci il dominio →
              </Link>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                2. Trova gli zeri della funzione
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Si risolve l&apos;equazione f(x) = 0. Le soluzioni
                appartenenti al dominio sono gli zeri della funzione
                e rappresentano le possibili intersezioni con l&apos;asse x.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                3. Dividi la retta reale
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Gli zeri della funzione e i valori esclusi dal dominio
                dividono la retta reale in diversi intervalli.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                4. Determina il segno negli intervalli
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                In ogni intervallo si determina se la funzione assume
                valori positivi o negativi. Il risultato viene spesso
                rappresentato attraverso una tabella dei segni.
              </p>
            </article>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Esempio di studio del segno
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Consideriamo la funzione f(x) = x² − 4. Per trovare gli zeri
            si risolve x² − 4 = 0, ottenendo x = −2 e x = 2.
            Questi valori dividono la retta reale in tre intervalli.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-50 p-6">
            <p className="leading-8 text-gray-700">
              Per x &lt; −2 la funzione è positiva.
              <br />
              Per −2 &lt; x &lt; 2 la funzione è negativa.
              <br />
              Per x &gt; 2 la funzione è positiva.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Segno e studio di funzione
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Lo studio del segno viene utilizzato insieme al dominio,
            alle derivate e allo studio dei limiti per ottenere un quadro
            completo dell&apos;andamento della funzione.
          </p>

          <Link
            href="/studio-di-funzione"
            className="mt-5 inline-block font-semibold text-blue-600"
          >
            Guarda tutti i passaggi dello studio di funzione →
          </Link>
        </section>

        <section className="mt-16 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Studia automaticamente il segno
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Inserisci la tua funzione nel nostro calcolatore gratuito
            per ottenere automaticamente lo studio del segno insieme
            agli altri passaggi dell&apos;analisi.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Prova il calcolatore gratuito →
          </Link>
        </section>

        <section className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Altri argomenti
          </h2>

          <div className="mt-5 flex flex-col gap-3">

            <Link
              href="/studio-di-funzione"
              className="font-semibold text-blue-600"
            >
              Studio di funzione →
            </Link>

            <Link
              href="/dominio-di-una-funzione"
              className="font-semibold text-blue-600"
            >
              Dominio di una funzione →
            </Link>

            <Link
              href="/derivata-prima"
              className="font-semibold text-blue-600"
            >
              Derivata prima →
            </Link>

            <Link
              href="/"
              className="font-semibold text-blue-600"
            >
              Calcolatore di studio di funzione →
            </Link>

          </div>
        </section>

      </section>
    </main>
  );
}