import Link from "next/link";

export const metadata = {
  title: "Derivata Prima: Come si Calcola e a Cosa Serve",
  description:
    "Scopri cos'è la derivata prima, come si calcola e come usarla nello studio di funzione per trovare crescenza, decrescenza, massimi e minimi.",
};

export default function DerivataPrima() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Analisi matematica
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Derivata prima
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          La derivata prima è uno degli strumenti fondamentali dell'analisi
          matematica. Permette di studiare come varia una funzione e di
          individuare intervalli di crescenza e decrescenza, oltre a
          possibili massimi e minimi relativi.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Calcola la derivata e studia la funzione →
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Che cos'è la derivata prima?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            La derivata prima di una funzione descrive la sua variazione
            istantanea rispetto alla variabile x. Dal punto di vista
            geometrico, in un punto rappresenta il coefficiente angolare
            della retta tangente al grafico della funzione.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Come si calcola la derivata prima?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Per calcolare una derivata si applicano le regole di derivazione
            corrispondenti alla funzione considerata. Alcune delle regole
            più utilizzate riguardano potenze, somme, prodotti, quozienti e
            funzioni composte.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-50 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Alcune derivate fondamentali
            </h3>

            <div className="mt-4 space-y-3 text-lg text-gray-700">
              <p>(xⁿ)' = n · xⁿ⁻¹</p>
              <p>(sin x)' = cos x</p>
              <p>(cos x)' = −sin x</p>
              <p>(eˣ)' = eˣ</p>
              <p>(ln x)' = 1/x</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Derivata prima nello studio di funzione
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Nello studio di funzione, dopo aver determinato il dominio,
            le intersezioni e il segno, la derivata prima viene utilizzata
            principalmente per analizzare l'andamento della funzione.
          </p>

          <div className="mt-8 space-y-5">

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Crescenza
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Se la derivata prima è positiva in un intervallo, la funzione
                è crescente in quell'intervallo.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Decrescenza
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Se la derivata prima è negativa in un intervallo, la funzione
                è decrescente in quell'intervallo.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Punti critici
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Gli zeri della derivata prima possono individuare punti
                critici. Questi punti devono poi essere analizzati per
                stabilire se corrispondono a massimi, minimi o altri casi.
              </p>
            </article>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Massimi e minimi relativi
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Il cambiamento del segno della derivata prima permette di
            classificare alcuni punti critici. Se la derivata passa da
            positiva a negativa si può avere un massimo relativo; se passa
            da negativa a positiva si può avere un minimo relativo.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Esempio
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Consideriamo la funzione f(x) = x². La sua derivata prima è
            f'(x) = 2x. La derivata è negativa per x &lt; 0, nulla per x = 0
            e positiva per x &gt; 0. Di conseguenza la funzione è decrescente
            prima di 0 e crescente dopo 0, mostrando un minimo relativo
            nell'origine.
          </p>
        </section>

        <section className="mt-16 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Calcola automaticamente la derivata
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Vuoi evitare di svolgere manualmente tutti i calcoli?
            Inserisci una funzione nel nostro calcolatore gratuito per
            ottenere la derivata prima insieme agli altri passaggi dello
            studio di funzione.
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
            Continua lo studio di funzione
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/studio-di-funzione"
              className="font-semibold text-blue-600"
            >
              Studio di funzione completo →
            </Link>

            <Link
              href="/dominio-di-una-funzione"
              className="font-semibold text-blue-600"
            >
              Dominio di una funzione →
            </Link>

            <Link
              href="/studio-di-funzione-online"
              className="font-semibold text-blue-600"
            >
              Studio di funzione online →
            </Link>
          </div>
        </section>

      </section>
    </main>
  );
}