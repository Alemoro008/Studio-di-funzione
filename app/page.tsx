"use client";

import Link from "next/link";
import "katex/dist/katex.min.css";

import {
  useState,
} from "react";

import {
  simplify,
} from "mathjs";

import katex from "katex";

import {
  normalizzaFunzione,
  calcolaStudioCompleto,
} from "../lib/analisi";

/* =========================================================
   ANTEPRIMA MATEMATICA
   ========================================================= */

function anteprimaMatematica(
  testo: string
) {
  try {
    const normalizzata =
      normalizzaFunzione(
        testo
      );

    const espressione =
      simplify(
        normalizzata
      );

    const latex =
      espressione.toTex();

    return katex.renderToString(
      latex,
      {
        throwOnError: false,
        displayMode: true,
      }
    );
  } catch {
    return "";
  }
}

/* =========================================================
   SPIEGAZIONI
   ========================================================= */

function spiegazioneDominio(
  dominio: string
) {
  if (dominio === "ℝ") {
    return "La funzione è definita per tutti i valori reali di x.";
  }

  if (
    dominio.includes("\\")
  ) {
    return "Sono stati esclusi dal dominio i valori che annullano il denominatore.";
  }

  if (
    dominio.includes("[") &&
    dominio.includes("+∞")
  ) {
    return "La radice quadrata richiede che il suo argomento sia maggiore o uguale a zero.";
  }

  return "Il dominio è stato determinato imponendo le condizioni di esistenza della funzione.";
}

function spiegazioneIntersezioniX(
  risultato: string
) {
  if (
    risultato.includes("Nessuna")
  ) {
    return "La funzione non presenta intersezioni con l'asse x nell'intervallo analizzato.";
  }

  return "Per trovare le intersezioni con l'asse x si pone f(x) = 0 e si considerano solo le soluzioni appartenenti al dominio.";
}

function spiegazioneIntersezioneY(
  risultato: string
) {
  if (
    risultato === "Non esiste"
  ) {
    return "L'intersezione con l'asse y non esiste perché x = 0 non appartiene al dominio oppure la funzione non è definita in quel punto.";
  }

  return "Per trovare l'intersezione con l'asse y si pone x = 0.";
}

function spiegazioneSegno(
  risultato: string
) {
  return "Il segno si determina dividendo il dominio nei punti in cui la funzione è nulla o non è definita e verificando il segno in ciascun intervallo.";
}

function spiegazioneDerivataPrima() {
  return "La derivata prima permette di studiare come varia la funzione e di individuare eventuali punti critici.";
}

function spiegazionePuntiCritici(
  risultato: string
) {
  if (
    risultato.includes("Nessun")
  ) {
    return "Non sono stati trovati punti del dominio in cui la derivata prima si annulla.";
  }

  return "I punti critici sono ottenuti cercando gli zeri della derivata prima che appartengono al dominio.";
}

function spiegazioneCrescenza(
  risultato: string
) {
  return "La funzione è crescente dove f'(x) > 0 e decrescente dove f'(x) < 0. Gli eventuali valori esclusi dal dominio separano gli intervalli.";
}

function spiegazioneEstremi(
  risultato?: string
) {
  if (
    !risultato ||
    risultato.includes("Nessun")
  ) {
    return "Non sono stati individuati massimi o minimi relativi.";
  }

  return "Un punto critico è un massimo relativo quando la derivata passa da positiva a negativa, mentre è un minimo relativo quando passa da negativa a positiva.";
}

function spiegazioneDerivataSeconda() {
  return "La derivata seconda viene utilizzata per studiare la concavità della funzione e per cercare eventuali punti di flesso.";
}

function spiegazioneConcavita() {
  return "La funzione è convessa dove f''(x) > 0 e concava dove f''(x) < 0. I punti esclusi dal dominio separano gli intervalli.";
}

function spiegazioneFlessi(
  risultato: string
) {
  if (
    risultato.includes("Nessun")
  ) {
    return "Non sono stati trovati punti in cui la concavità cambia, appartenenti al dominio.";
  }

  return "Un punto di flesso richiede un cambio di concavità e deve appartenere al dominio della funzione.";
}

function spiegazioneAsintotoVerticale(
  risultato: string
) {
  if (
    risultato.includes("Nessun")
  ) {
    return "Non sono stati individuati valori finiti di x verso cui la funzione tende a infinito.";
  }

  return "Un asintoto verticale si verifica quando la funzione tende a infinito avvicinandosi a un valore escluso dal dominio.";
}

function spiegazioneAsintotoOrizzontale(
  risultato: string
) {
  if (
    risultato.includes("Nessun")
  ) {
    return "La funzione non tende a un valore finito per x che tende a ±∞.";
  }

  return "L'asintoto orizzontale si determina studiando il limite della funzione per x → +∞ e x → -∞.";
}

function spiegazioneAsintotoObliquo(
  risultato: string
) {
  if (
    risultato.includes("Nessun")
  ) {
    return "Non è stato individuato un asintoto obliquo.";
  }

  return "Un asintoto obliquo ha forma y = mx + q e descrive il comportamento della funzione per x → ±∞.";
}

/* =========================================================
   COMPONENTE
   ========================================================= */

export default function Home() {
  const [
    funzione,
    setFunzione,
  ] = useState("");

  const [
    risultato,
    setRisultato,
  ] = useState<any>(null);

  const [
    errore,
    setErrore,
  ] = useState("");

  function studiaFunzione() {
    setErrore("");
    setRisultato(null);

    if (
      !funzione.trim()
    ) {
      setErrore(
        "Inserisci prima una funzione."
      );
      return;
    }

    try {
      const risultatoCompleto =
        calcolaStudioCompleto(
          funzione
        );

      setRisultato(
        risultatoCompleto
      );
    } catch (error) {
      console.error(error);

      setErrore(
        "Non riesco a interpretare questa funzione. Controlla di averla scritta correttamente."
      );
    }
  }

  return (
    <main className="min-h-screen bg-white">

      <section className="mx-auto max-w-5xl px-6 py-20">

        {/* =================================================
            TITOLO
            ================================================= */}

        <div className="text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
  Studio di funzione online gratuito
</p>

<h1 className="text-5xl font-bold tracking-tight text-gray-900">
  Studio di funzione completo in pochi secondi
</h1>

<p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
  Inserisci una funzione e ottieni uno studio completo e spiegato
  passo dopo passo: dominio, intersezioni, segno, derivate,
  crescenza, massimi e minimi, concavità, flessi e asintoti.
</p>

        </div>

        {/* =================================================
            INPUT
            ================================================= */}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 p-6 shadow-sm">

          <label className="mb-3 block font-medium text-gray-800">
            Inserisci la funzione
          </label>

          <input
            type="text"
            value={funzione}
            onChange={(e) =>
              setFunzione(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter"
              ) {
                studiaFunzione();
              }
            }}
            placeholder="Es. (x^2 - 4) / (x - 2)"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          {funzione && (
            <div
              className="mt-6 min-h-16 rounded-xl bg-gray-50 p-4"
              dangerouslySetInnerHTML={{
                __html:
                  anteprimaMatematica(
                    funzione
                  ),
              }}
            />
          )}

          <button
            onClick={
              studiaFunzione
            }
            className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Studia la funzione
          </button>
          <div className="mt-5 text-center">
  <Link
    href="/studio-di-funzione"
    className="font-semibold text-blue-600 hover:text-blue-700"
  >
    Scopri come si fa uno studio di funzione →
  </Link>
</div>
        

          {/* =================================================
              ERRORE
              ================================================= */}

          {errore && (
            <div className="mt-6 rounded-xl bg-red-50 p-4 text-left text-red-700">
              {errore}
            </div>
          )}

          {/* =================================================
              RISULTATO
              ================================================= */}

          {risultato && (
            <div className="mt-8 space-y-6">

              {/* FUNZIONE */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Funzione
                </p>

                <div
                  className="mt-2 overflow-x-auto"
                  dangerouslySetInnerHTML={{
                    __html:
                      anteprimaMatematica(
                        risultato.funzione
                      ),
                  }}
                />

              </div>

              {/* DOMINIO */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Dominio
                </p>

                <p className="mt-2 text-lg">
                  {risultato.dominio}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneDominio(
                    risultato.dominio
                  )}
                </p>

              </div>

              {/* X */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Intersezioni con asse X
                </p>

                <p className="mt-2 text-lg">
                  {risultato.intersezioniX}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneIntersezioniX(
                    risultato.intersezioniX
                  )}
                </p>

              </div>

              {/* Y */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Intersezione con asse Y
                </p>

                <p className="mt-2 text-lg">
                  {risultato.intersezioneY}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneIntersezioneY(
                    risultato.intersezioneY
                  )}
                </p>

              </div>

              {/* SEGNO */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Segno della funzione
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.segno}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneSegno(
                    risultato.segno
                  )}
                </p>

              </div>

              {/* DERIVATA PRIMA */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Derivata prima
                </p>

                <div
                  className="mt-2 overflow-x-auto"
                  dangerouslySetInnerHTML={{
                    __html:
                      anteprimaMatematica(
                        risultato.derivataPrima
                      ),
                  }}
                />

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneDerivataPrima()}
                </p>

              </div>

              {/* PUNTI CRITICI */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Punti critici
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.puntiCritici}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazionePuntiCritici(
                    risultato.puntiCritici
                  )}
                </p>

              </div>

              {/* CRESCENZA */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Crescenza e decrescenza
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.crescenza}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneCrescenza(
                    risultato.crescenza
                  )}
                </p>

              </div>

              {/* ESTREMI */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Massimi e minimi relativi
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.estremi}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneEstremi(
                    risultato.estremi
                  )}
                </p>

              </div>

              {/* DERIVATA SECONDA */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Derivata seconda
                </p>

                <div
                  className="mt-2 overflow-x-auto"
                  dangerouslySetInnerHTML={{
                    __html:
                      anteprimaMatematica(
                        risultato.derivataSeconda
                      ),
                  }}
                />

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneDerivataSeconda()}
                </p>

              </div>

              {/* CONCAVITÀ */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Concavità e convessità
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.concavita}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneConcavita()}
                </p>

              </div>

              {/* FLESSI */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Punti di flesso
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.flessi}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneFlessi(
                    risultato.flessi
                  )}
                </p>

              </div>

              {/* ASINTOTI VERTICALI */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Asintoti verticali
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.asintotiVerticali}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneAsintotoVerticale(
                    risultato.asintotiVerticali
                  )}
                </p>

              </div>

              {/* ASINTOTI ORIZZONTALI */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Asintoti orizzontali
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.asintotiOrizzontali}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneAsintotoOrizzontale(
                    risultato.asintotiOrizzontali
                  )}
                </p>

              </div>

              {/* ASINTOTI OBLIQUI */}

              <div className="rounded-xl bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Asintoti obliqui
                </p>

                <p className="mt-2 whitespace-pre-wrap">
                  {risultato.asintotiObliqui}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {spiegazioneAsintotoObliquo(
                    risultato.asintotiObliqui
                  )}
                </p>

              </div>

            </div>
          )}

        </div>

{/* =================================================
    CONTENUTO INFORMATIVO SEO
    ================================================= */}

<section className="mx-auto mt-20 max-w-4xl">

  <div className="text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
      Studio di funzione online
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
      Uno strumento gratuito per studiare una funzione matematica
      passo dopo passo e comprendere i principali elementi dell'analisi.
    </p>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-2">

    <div className="rounded-2xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900">
        Dominio di una funzione
      </h3>

      <p className="mt-3 text-gray-600">
        Il dominio è l'insieme dei valori di x per cui una funzione
        è definita. Per determinarlo bisogna individuare eventuali
        denominatori nulli, radicandi negativi o altre condizioni
        che limitano i valori ammessi.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900">
        Derivata prima
      </h3>

      <p className="mt-3 text-gray-600">
        La derivata prima permette di studiare la crescita e la
        decrescita della funzione e di individuare eventuali
        punti critici, massimi e minimi relativi.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900">
        Limiti e asintoti
      </h3>

      <p className="mt-3 text-gray-600">
        Lo studio dei limiti permette di analizzare il comportamento
        della funzione vicino ai punti esclusi dal dominio e per x
        che tende a più o meno infinito, individuando eventuali
        asintoti verticali, orizzontali e obliqui.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900">
        Segno, concavità e flessi
      </h3>

      <p className="mt-3 text-gray-600">
        Lo studio del segno permette di capire dove la funzione è
        positiva o negativa. La derivata seconda permette invece
        di analizzare concavità, convessità ed eventuali punti di
        flesso.
      </p>
    </div>

  </div>

  <div className="mt-10 rounded-2xl bg-gray-50 p-6 text-center">
    <h3 className="text-xl font-semibold text-gray-900">
      Come fare uno studio di funzione?
    </h3>

    <p className="mx-auto mt-3 max-w-2xl text-gray-600">
      Inserisci la funzione nel calcolatore qui sopra per ottenere
      automaticamente dominio, intersezioni con gli assi, studio
      del segno, derivate, punti critici, crescenza, concavità,
      flessi e asintoti.
    </p>
  </div>

</section>
        <p className="mt-8 text-center text-sm text-gray-500">
          Gratuito • Pensato per studenti delle scuole superiori
        </p>

      </section>

    </main>
  );
}