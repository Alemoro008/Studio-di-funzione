import Link from "next/link";

export const metadata = {
  title: "Studio di Funzione | Come si Fa e Calcolatore Online",
  description:
    "Studio di funzione completo spiegato passo passo: dominio, intersezioni, segno, derivate, crescenza, estremi, concavità, flessi e asintoti. Prova il calcolatore online gratuito.",
};

export default function StudioDiFunzione() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Guida completa di matematica
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Studio di funzione
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Lo studio di funzione permette di analizzare completamente
          l&apos;andamento di una funzione matematica. Scopri tutti i passaggi
          da seguire e utilizza il nostro calcolatore gratuito per ottenere
          rapidamente uno studio completo.
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
            Come si fa uno studio di funzione?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Uno studio di funzione viene normalmente svolto seguendo una
            sequenza di passaggi. L&apos;obiettivo è ottenere tutte le
            informazioni necessarie per comprendere e rappresentare
            graficamente il comportamento della funzione.
          </p>

          <div className="mt-8 space-y-5">

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                1. Determinare il dominio
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Per prima cosa si stabilisce per quali valori di x la
                funzione è definita. Bisogna controllare denominatori,
                radici e tutte le altre condizioni di esistenza.
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
                2. Trovare le intersezioni con gli assi
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Si cercano le intersezioni con l&apos;asse x ponendo f(x) = 0
                e con l&apos;asse y considerando x = 0 quando questo valore
                appartiene al dominio.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                3. Studiare il segno
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Lo studio del segno permette di stabilire in quali
                intervalli la funzione è positiva, negativa oppure nulla.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                4. Calcolare la derivata prima
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                La derivata prima permette di studiare la crescenza e la
                decrescenza della funzione e di individuare eventuali
                punti critici.
              </p>

              <Link
                href="/derivata-prima"
                className="mt-3 inline-block font-semibold text-blue-600"
              >
                Approfondisci la derivata prima →
              </Link>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                5. Determinare massimi e minimi
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Analizzando il segno della derivata prima è possibile
                classificare i punti critici e individuare eventuali
                massimi e minimi relativi.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                6. Calcolare la derivata seconda
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                La derivata seconda permette di studiare la concavità
                della funzione e di cercare eventuali punti di flesso.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                7. Studiare i limiti e gli asintoti
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                I limiti permettono di analizzare il comportamento della
                funzione vicino ai punti esclusi dal dominio e per x che
                tende a più o meno infinito. Da questi risultati si possono
                determinare gli asintoti verticali, orizzontali e obliqui.
              </p>
            </article>

          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Studio di funzione online gratuito
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Non vuoi svolgere tutti i calcoli manualmente? Inserisci la
            funzione nel nostro strumento online per ottenere rapidamente
            dominio, intersezioni, segno, derivate, crescenza, estremi,
            concavità, flessi e asintoti.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Prova il calcolatore gratuito
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Perché fare uno studio di funzione?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Lo studio di funzione permette di raccogliere in un&apos;unica
            analisi tutte le informazioni necessarie per capire l&apos;andamento
            di una funzione e per costruirne il grafico qualitativo.
            È uno degli strumenti fondamentali dell&apos;analisi matematica
            affrontata negli ultimi anni delle scuole superiori.
          </p>
        </section>

        <section className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Approfondisci lo studio di funzione
          </h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            Approfondisci i principali argomenti dello studio di funzione
            e utilizza il calcolatore online per verificare i tuoi risultati.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <Link
              href="/dominio-di-una-funzione"
              className="rounded-xl border border-gray-200 p-5 font-semibold text-blue-600 hover:bg-gray-50"
            >
              Dominio di una funzione →
            </Link>

            <Link
              href="/derivata-prima"
              className="rounded-xl border border-gray-200 p-5 font-semibold text-blue-600 hover:bg-gray-50"
            >
              Derivata prima →
            </Link>

            <Link
              href="/studio-di-funzione-online"
              className="rounded-xl border border-gray-200 p-5 font-semibold text-blue-600 hover:bg-gray-50"
            >
              Studio di funzione online →
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-blue-200 bg-blue-50 p-5 font-semibold text-blue-600 hover:bg-blue-100"
            >
              Prova il calcolatore gratuito →
            </Link>

          </div>
        </section>

      </section>
    </main>
  );
}
