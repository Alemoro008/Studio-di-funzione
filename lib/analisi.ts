import {
  derivative,
  evaluate,
  simplify,
} from "mathjs";

/* =========================================================
   UTILITÀ
   ========================================================= */

function numeroPulito(numero: number): string {
  if (!Number.isFinite(numero)) {
    return "non definito";
  }

  const tolleranza = 0.0001;

  // Numeri interi
  if (
    Math.abs(numero - Math.round(numero)) <
    tolleranza
  ) {
    return String(Math.round(numero));
  }

  // Radici quadrate semplici:
  // 1.4142... → √2
  // 1.7320... → √3
  // 2.2360... → √5
  // ecc.
  const valoreAssoluto =
    Math.abs(numero);

  for (
    let n = 2;
    n <= 100;
    n++
  ) {
    const radice =
      Math.sqrt(n);

    if (
      Math.abs(
        valoreAssoluto - radice
      ) < tolleranza
    ) {
      return numero < 0
        ? `-√${n}`
        : `√${n}`;
    }
  }

  // Frazione semplice
  for (
    let denominatore = 2;
    denominatore <= 20;
    denominatore++
  ) {
    const numeratore =
      Math.round(
        numero * denominatore
      );

    if (
      Math.abs(
        numero -
          numeratore /
            denominatore
      ) < tolleranza
    ) {
      const massimoComunDivisore = (
        a: number,
        b: number
      ): number => {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b !== 0) {
          const resto = a % b;
          a = b;
          b = resto;
        }

        return a;
      };

      const mcd =
        massimoComunDivisore(
          numeratore,
          denominatore
        );

      const nRidotto =
        numeratore / mcd;

      const dRidotto =
        denominatore / mcd;

      if (dRidotto === 1) {
        return String(nRidotto);
      }

      return `${nRidotto}/${dRidotto}`;
    }
  }

  // Fallback: numero decimale pulito
  return numero
    .toFixed(4)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

function aggiungiUnico(
  array: number[],
  valore: number,
  tolleranza = 0.01
) {
  if (!Number.isFinite(valore)) return;

  if (
    !array.some(
      (x) => Math.abs(x - valore) < tolleranza
    )
  ) {
    array.push(valore);
  }
}

/* =========================================================
   NORMALIZZAZIONE
   ========================================================= */

export function normalizzaFunzione(
  input: string
): string {
  let risultato = input.trim();

  risultato = risultato.replace(/\s+/g, "");

  risultato = risultato.replace(/−/g, "-");
  risultato = risultato.replace(/–/g, "-");

  risultato = risultato.replace(/√/g, "sqrt");

  risultato = risultato.replace(/²/g, "^2");
  risultato = risultato.replace(/³/g, "^3");

  risultato = risultato.replace(/×/g, "*");
  risultato = risultato.replace(/·/g, "*");

  risultato = risultato.replace(/:/g, "/");

  risultato = risultato.replace(
    /\bsen\b/gi,
    "sin"
  );

  risultato = risultato.replace(
    /\btg\b/gi,
    "tan"
  );

  risultato = risultato.replace(/π/g, "pi");

  /*
    Permette anche di interpretare input come:

    x2  -> x^2
    x3  -> x^3
  */
  risultato = risultato.replace(
    /\bx(\d+)\b/g,
    "x^$1"
  );

  return risultato;
}

/* =========================================================
   VALUTAZIONE
   ========================================================= */

export function valutaFunzione(
  funzione: string,
  x: number
): number | null {
  try {
    const valore = Number(
      evaluate(
        normalizzaFunzione(funzione),
        { x }
      )
    );

    if (!Number.isFinite(valore)) {
      return null;
    }

    return valore;
  } catch {
    return null;
  }
}

/* =========================================================
   DERIVATE
   ========================================================= */

export function calcolaDerivata(
  funzione: string
): string {
  try {
    const f = normalizzaFunzione(funzione);

    const risultato = simplify(
      derivative(f, "x")
    );

    return risultato.toString();
  } catch {
    return "Non determinabile";
  }
}

export function calcolaDerivataSeconda(
  funzione: string
): string {
  try {
    const f = normalizzaFunzione(funzione);

    const prima = derivative(f, "x");
    const seconda = derivative(prima, "x");

    const risultato = simplify(seconda);

    return risultato.toString();
  } catch {
    return "Non determinabile";
  }
}
/* =========================================================
   PUNTI ESCLUSI DAL DOMINIO
   ========================================================= */

function trovaEsclusioni(
  funzione: string
): number[] {
  const f = normalizzaFunzione(funzione);

  const esclusi: number[] = [];

  /*
    Caso classico:

    (x+1)/(x-2)
    x/(x-3)
    (x^2+1)/(x^2-4)
  */

  if (f.includes("/")) {
    const indice = f.indexOf("/");

    let denominatore =
      f.substring(indice + 1);

    denominatore =
      denominatore.replace(
        /^\(/,
        ""
      );

    denominatore =
      denominatore.replace(
        /\)$/,
        ""
      );

    /*
      x - a
    */

    const lineare =
      denominatore.match(
        /^x([+-])(\d+(?:\.\d+)?)$/
      );

    if (lineare) {
      const numero =
        Number(lineare[2]);

      const zero =
        lineare[1] === "-"
          ? numero
          : -numero;

      aggiungiUnico(
        esclusi,
        zero
      );
    }

    /*
      x + a / x - a
    */

    const lineare2 =
      denominatore.match(
        /^(\d+(?:\.\d+)?)x([+-])(\d+(?:\.\d+)?)$/
      );

    if (lineare2) {
      const coefficiente =
        Number(lineare2[1]);

      const termine =
        Number(lineare2[3]);

      const zero =
        lineare2[2] === "-"
          ? termine / coefficiente
          : -termine / coefficiente;

      aggiungiUnico(
        esclusi,
        zero
      );
    }

    /*
      x^2 - a
    */

    const quadratico =
      denominatore.match(
        /^x\^2-(\d+(?:\.\d+)?)$/
      );

    if (quadratico) {
      const valore =
        Number(quadratico[1]);

      if (valore >= 0) {
        const r =
          Math.sqrt(valore);

        aggiungiUnico(
          esclusi,
          -r
        );

        aggiungiUnico(
          esclusi,
          r
        );
      }
    }

    /*
      x^2 + a non ha zeri reali
    */

    /*
      Ricerca numerica generica
    */

    let precedenteX = -100;
    let precedenteY =
      valutaFunzione(
        denominatore,
        precedenteX
      );

    for (
      let x = -99.9;
      x <= 100;
      x += 0.1
    ) {
      const y =
        valutaFunzione(
          denominatore,
          x
        );

      if (
        precedenteY !== null &&
        y !== null
      ) {
        if (
          Math.abs(y) < 0.000001
        ) {
          aggiungiUnico(
            esclusi,
            x
          );
        }

        if (
          precedenteY * y < 0
        ) {
          let a = precedenteX;
          let b = x;

          for (
            let i = 0;
            i < 50;
            i++
          ) {
            const medio =
              (a + b) / 2;

            const fa =
              valutaFunzione(
                denominatore,
                a
              );

            const fm =
              valutaFunzione(
                denominatore,
                medio
              );

            if (
              fa === null ||
              fm === null
            ) {
              break;
            }

            if (
              Math.abs(fm) <
              0.0000001
            ) {
              aggiungiUnico(
                esclusi,
                medio
              );
              break;
            }

            if (
              fa * fm < 0
            ) {
              b = medio;
            } else {
              a = medio;
            }
          }
        }
      }

      precedenteX = x;
      precedenteY = y;
    }
  }

  return esclusi.sort(
    (a, b) => a - b
  );
}

/* =========================================================
   DOMINIO
   ========================================================= */

export function calcolaDominio(
  funzione: string
): string {
  const f =
    normalizzaFunzione(funzione);

  /*
    Radice semplice
  */

  const radice =
    f.match(/^sqrt\((.*)\)$/);

  if (radice) {
    const contenuto =
      radice[1];

    const lineare =
      contenuto.match(
        /^x([+-])(\d+(?:\.\d+)?)$/
      );

    if (lineare) {
      const numero =
        Number(lineare[2]);

      if (
        lineare[1] === "-"
      ) {
        return `[${numero}, +∞)`;
      }

      return `(-∞, ${-numero}]`;
    }
  }

  const esclusi =
    trovaEsclusioni(f);

  if (esclusi.length === 0) {
    return "ℝ";
  }

  return (
    "ℝ \\ {" +
    esclusi
      .map(numeroPulito)
      .join(", ") +
    "}"
  );
}

/* =========================================================
   INTERSEZIONE ASSE Y
   ========================================================= */

export function calcolaIntersezioneY(
  funzione: string
): string {
  const esclusi =
    trovaEsclusioni(funzione);

  if (
    esclusi.some(
      (x) => Math.abs(x) < 0.000001
    )
  ) {
    return "Non esiste";
  }

  const valore =
    valutaFunzione(
      funzione,
      0
    );

  if (valore === null) {
    return "Non esiste";
  }

  return `(0, ${numeroPulito(valore)})`;
}

/* =========================================================
   INTERSEZIONI ASSE X
   ========================================================= */

export function calcolaIntersezioniX(
  funzione: string
): string {
  const f =
    normalizzaFunzione(funzione);

  const esclusi =
    trovaEsclusioni(f);

  const zeri: number[] = [];

  function valido(x: number) {
    return !esclusi.some(
      (e) =>
        Math.abs(e - x) <
        0.001
    );
  }

  let precedenteX = -100;

  let precedenteY =
    valutaFunzione(
      f,
      precedenteX
    );

  for (
    let x = -99.9;
    x <= 100;
    x += 0.1
  ) {
    const y =
      valutaFunzione(
        f,
        x
      );

    if (
      valido(x) &&
      y !== null
    ) {
      if (
        Math.abs(y) <
        0.000001
      ) {
        aggiungiUnico(
          zeri,
          x
        );
      }
    }

    if (
      precedenteY !== null &&
      y !== null &&
      valido(precedenteX) &&
      valido(x)
    ) {
      if (
        precedenteY * y < 0
      ) {
        let a = precedenteX;
        let b = x;

        for (
          let i = 0;
          i < 60;
          i++
        ) {
          const medio =
            (a + b) / 2;

          const fa =
            valutaFunzione(
              f,
              a
            );

          const fm =
            valutaFunzione(
              f,
              medio
            );

          if (
            fa === null ||
            fm === null
          ) {
            break;
          }

          if (
            Math.abs(fm) <
            0.0000001
          ) {
            aggiungiUnico(
              zeri,
              medio
            );
            break;
          }

          if (
            fa * fm < 0
          ) {
            b = medio;
          } else {
            a = medio;
          }
        }

        aggiungiUnico(
          zeri,
          (a + b) / 2
        );
      }
    }

    precedenteX = x;
    precedenteY = y;
  }

  if (zeri.length === 0) {
    return "Nessuna intersezione trovata";
  }

  return zeri
    .sort((a, b) => a - b)
    .map(
      (x) =>
        `(${numeroPulito(x)}, 0)`
    )
    .join(" ; ");
}

/* =========================================================
   PUNTI CRITICI
   ========================================================= */

export function calcolaPuntiCritici(
  funzione: string
): string {
  try {
    const prima =
      calcolaDerivata(funzione);

    if (
      prima ===
      "Non determinabile"
    ) {
      return "Non determinabile";
    }

    const esclusi =
      trovaEsclusioni(funzione);

    const punti: number[] = [];

    let precedenteX = -100;

    let precedenteY =
      valutaFunzione(
        prima,
        precedenteX
      );

    for (
      let x = -99.9;
      x <= 100;
      x += 0.1
    ) {
      const y =
        valutaFunzione(
          prima,
          x
        );

      if (
        y !== null &&
        !esclusi.some(
          (e) =>
            Math.abs(e - x) <
            0.01
        )
      ) {
        if (
          Math.abs(y) <
          0.000001
        ) {
          aggiungiUnico(
            punti,
            x
          );
        }

        if (
          precedenteY !== null &&
          precedenteY * y < 0
        ) {
          let a =
            precedenteX;

          let b = x;

          for (
            let i = 0;
            i < 60;
            i++
          ) {
            const medio =
              (a + b) / 2;

            const fa =
              valutaFunzione(
                prima,
                a
              );

            const fm =
              valutaFunzione(
                prima,
                medio
              );

            if (
              fa === null ||
              fm === null
            ) {
              break;
            }

            if (
              fa * fm < 0
            ) {
              b = medio;
            } else {
              a = medio;
            }
          }

          aggiungiUnico(
            punti,
            (a + b) / 2
          );
        }
      }

      precedenteX = x;
      precedenteY = y;
    }

    if (punti.length === 0) {
      return "Nessun punto critico trovato";
    }

    return punti
      .sort((a, b) => a - b)
      .map((x) => {
        const y =
          valutaFunzione(
            funzione,
            x
          );

        if (y === null) {
          return `x = ${numeroPulito(x)}`;
        }

        return `(${numeroPulito(
          x
        )}, ${numeroPulito(y)})`;
      })
      .join(" ; ");
  } catch {
    return "Non determinabile";
  }
}

/* =========================================================
   INTERVALLI DEL DOMINIO
   ========================================================= */

function creaIntervalli(
  esclusi: number[]
): Array<{
  a: number;
  b: number;
}> {
  const estremi = [
    -Infinity,
    ...esclusi,
    Infinity,
  ];

  const intervalli: Array<{
    a: number;
    b: number;
  }> = [];

  for (
    let i = 0;
    i < estremi.length - 1;
    i++
  ) {
    intervalli.push({
      a: estremi[i],
      b: estremi[i + 1],
    });
  }

  return intervalli;
}

function puntoTest(
  a: number,
  b: number
): number {
  if (a === -Infinity) {
    return b - 1;
  }

  if (b === Infinity) {
    return a + 1;
  }

  return (a + b) / 2;
}

/* =========================================================
   CRESCENZA / DECRESCENZA
   ========================================================= */

export function calcolaCrescenza(
  funzione: string
): string {
  try {
    const prima =
      calcolaDerivata(funzione);

    if (
      prima === "Non determinabile" ||
      prima.trim() === ""
    ) {
      return "Non determinabile";
    }

    const esclusi =
      trovaEsclusioni(funzione);

    const puntiCritici: number[] = [];

    let precedenteX = -100;
    let precedenteY =
      valutaFunzione(
        prima,
        precedenteX
      );

    for (
      let x = -99.9;
      x <= 100;
      x += 0.1
    ) {
      const y =
        valutaFunzione(
          prima,
          x
        );

      if (
        precedenteY !== null &&
        y !== null
      ) {
        if (
          !esclusi.some(
            (e) =>
              Math.abs(e - x) < 0.05
          )
        ) {
          if (
            Math.abs(y) < 0.000001
          ) {
            aggiungiUnico(
              puntiCritici,
              x
            );
          }

          if (
            precedenteY * y < 0
          ) {
            let a =
              precedenteX;

            let b = x;

            for (
              let i = 0;
              i < 50;
              i++
            ) {
              const medio =
                (a + b) / 2;

              const fa =
                valutaFunzione(
                  prima,
                  a
                );

              const fm =
                valutaFunzione(
                  prima,
                  medio
                );

              if (
                fa === null ||
                fm === null
              ) {
                break;
              }

              if (
                fa * fm < 0
              ) {
                b = medio;
              } else {
                a = medio;
              }
            }

            aggiungiUnico(
              puntiCritici,
              (a + b) / 2
            );
          }
        }
      }

      precedenteX = x;
      precedenteY = y;
    }

    /*
     * Creiamo gli estremi usando SIA
     * i punti critici SIA i punti
     * esclusi dal dominio.
     */
    const tuttiPunti = [
      ...puntiCritici,
      ...esclusi,
    ];

    const puntiUnici: number[] = [];

    for (const punto of tuttiPunti) {
      aggiungiUnico(
        puntiUnici,
        punto
      );
    }

    puntiUnici.sort(
      (a, b) => a - b
    );

    const estremi = [
      -Infinity,
      ...puntiUnici,
      Infinity,
    ];

    const risultati: string[] = [];

    for (
      let i = 0;
      i < estremi.length - 1;
      i++
    ) {
      const a =
        estremi[i];

      const b =
        estremi[i + 1];

      const test =
        puntoTest(a, b);

      const valore =
        valutaFunzione(
          prima,
          test
        );

      if (
        valore === null
      ) {
        continue;
      }

      const sinistra =
        a === -Infinity
          ? "-∞"
          : numeroPulito(a);

      const destra =
        b === Infinity
          ? "+∞"
          : numeroPulito(b);

      if (valore > 0) {
        risultati.push(
          `crescente: (${sinistra}, ${destra})`
        );
      } else if (valore < 0) {
        risultati.push(
          `decrescente: (${sinistra}, ${destra})`
        );
      }
    }

    if (
      risultati.length === 0
    ) {
      return "Non determinabile";
    }

    return risultati.join(" | ");
  } catch {
    return "Non determinabile";
  }
}
/* =========================================================
   MASSIMI E MINIMI
   ========================================================= */

/* =========================================================
   MASSIMI E MINIMI
   ========================================================= */

export function calcolaMassimiMinimi(
  funzione: string
): string {
  try {
    const prima = calcolaDerivata(funzione);

    if (
      !prima ||
      prima === "Non determinabile"
    ) {
      return "Non determinabile";
    }

    const esclusi = trovaEsclusioni(funzione);

    const punti: number[] = [];

    function aggiungiPunto(x: number) {
      if (!Number.isFinite(x)) return;

      if (
        esclusi.some(
          (e) => Math.abs(e - x) < 0.01
        )
      ) {
        return;
      }

      if (
        !punti.some(
          (p) => Math.abs(p - x) < 0.01
        )
      ) {
        punti.push(x);
      }
    }

    let precedenteX = -100;
    let precedenteY =
      valutaFunzione(
        prima,
        precedenteX
      );

    for (
      let x = -99.9;
      x <= 100;
      x += 0.1
    ) {
      const y =
        valutaFunzione(
          prima,
          x
        );

      if (
        precedenteY !== null &&
        y !== null
      ) {
        if (
          Math.abs(y) < 0.000001
        ) {
          aggiungiPunto(x);
        }

        if (
          precedenteY * y < 0
        ) {
          let a = precedenteX;
          let b = x;

          for (
            let i = 0;
            i < 60;
            i++
          ) {
            const medio =
              (a + b) / 2;

            const fa =
              valutaFunzione(
                prima,
                a
              );

            const fm =
              valutaFunzione(
                prima,
                medio
              );

            if (
              fa === null ||
              fm === null
            ) {
              break;
            }

            if (
              Math.abs(fm) <
              0.0000001
            ) {
              a = medio;
              b = medio;
              break;
            }

            if (
              fa * fm < 0
            ) {
              b = medio;
            } else {
              a = medio;
            }
          }

          aggiungiPunto(
            (a + b) / 2
          );
        }
      }

      precedenteX = x;
      precedenteY = y;
    }

    punti.sort(
      (a, b) => a - b
    );

    if (punti.length === 0) {
      return "Nessun massimo o minimo relativo trovato";
    }

    const risultati: string[] = [];

    for (const x of punti) {
      const sinistra =
        valutaFunzione(
          prima,
          x - 0.001
        );

      const destra =
        valutaFunzione(
          prima,
          x + 0.001
        );

      const y =
        valutaFunzione(
          funzione,
          x
        );

      if (
        sinistra === null ||
        destra === null ||
        y === null
      ) {
        continue;
      }

      if (
        sinistra > 0 &&
        destra < 0
      ) {
        risultati.push(
          `Massimo relativo: (${numeroPulito(x)}, ${numeroPulito(y)})`
        );
      } else if (
        sinistra < 0 &&
        destra > 0
      ) {
        risultati.push(
          `Minimo relativo: (${numeroPulito(x)}, ${numeroPulito(y)})`
        );
      }
    }

    if (risultati.length === 0) {
      return "Nessun massimo o minimo relativo trovato";
    }

    return risultati.join(" | ");
  } catch {
    return "Non determinabile";
  }
}

/*
  Piccole funzioni di supporto per mantenere
  calcolaMassimiMinimi leggibile.
*/

function pontosSemDuplicatas(
  punti: number[]
): number[] {
  return [
    ...new Set(
      punti.map(
        (x) =>
          Number(
            x.toFixed(6)
          )
      )
    ),
  ];
}

function excluidosSafe(
  esclusi: number[]
): number[] {
  return esclusi;
}

function pontosValidos(
  punti: number[],
  esclusi: number[]
): number[] {
  return punti.filter(
    (x) =>
      !esclusi.some(
        (e) =>
          Math.abs(e - x) <
          0.01
      )
  );
}

function valutaFunzioneNumero(
  funzione: string,
  x: number
): number | null {
  return valutaFunzione(
    funzione,
    x
  );
}

function valutaFunzioneNumeroNormalizzata(
  funzione: string,
  x: number
): number | null {
  return valutaFunzione(
    funzione,
    x
  );
}

function funzioneNormalizzata(
  funzione: string
): string {
  return normalizzaFunzione(
    funzione
  );
}

/* =========================================================
   CONCAVITÀ
   ========================================================= */

export function calcolaConcavita(
  funzione: string
): string {
  try {
    const seconda =
      calcolaDerivataSeconda(
        funzione
      );

    if (
      seconda === "Non determinabile" ||
      seconda.trim() === ""
    ) {
      return "Non determinabile";
    }

    const esclusi =
      trovaEsclusioni(funzione);

      /*
 * Verifica se la derivata seconda
 * è numericamente uguale a zero.
 */
const puntiControllo = [
  -10, -5, -1, 0, 1, 3, 5, 10
];

const valoriControllo = puntiControllo
  .filter(
    (x) =>
      !esclusi.some(
        (e) => Math.abs(e - x) < 0.001
      )
  )
  .map(
    (x) => valutaFunzione(seconda, x)
  )
  .filter(
    (v): v is number => v !== null
  );

if (
  valoriControllo.length > 0 &&
  valoriControllo.every(
    (v) => Math.abs(v) < 1e-9
  )
) {
  return "Né concava né convessa; nessun punto di flesso";
}

    const punti: number[] = [];

    let precedenteX = -100;
    let precedenteY =
      valutaFunzione(
        seconda,
        precedenteX
      );

    for (
      let x = -99.9;
      x <= 100;
      x += 0.1
    ) {
      const y =
        valutaFunzione(
          seconda,
          x
        );

      if (
        precedenteY !== null &&
        y !== null
      ) {
        const vicinoEscluso =
          esclusi.some(
            (e) =>
              Math.abs(e - x) < 0.05
          );

        if (!vicinoEscluso) {
          /*
           * Individua gli zeri della derivata seconda.
           */
          if (
            Math.abs(y) < 0.000001
          ) {
            aggiungiUnico(
              punti,
              x
            );
          }

          /*
           * Individua gli zeri anche quando
           * la derivata seconda attraversa lo zero
           * tra due campioni.
           */
          if (
            precedenteY * y < 0
          ) {
            let a =
              precedenteX;

            let b = x;

            for (
              let i = 0;
              i < 50;
              i++
            ) {
              const medio =
                (a + b) / 2;

              const fa =
                valutaFunzione(
                  seconda,
                  a
                );

              const fm =
                valutaFunzione(
                  seconda,
                  medio
                );

              if (
                fa === null ||
                fm === null
              ) {
                break;
              }

              if (
                fa * fm < 0
              ) {
                b = medio;
              } else {
                a = medio;
              }
            }

            aggiungiUnico(
              punti,
              (a + b) / 2
            );
          }
        }
      }

      precedenteX = x;
      precedenteY = y;
    }

    /*
     * Uniamo gli zeri della derivata seconda
     * con le esclusioni del dominio.
     */
    const tuttiPunti = [
      ...punti,
      ...esclusi,
    ];

    const puntiUnici: number[] = [];

    for (const punto of tuttiPunti) {
      aggiungiUnico(
        puntiUnici,
        punto
      );
    }

    puntiUnici.sort(
      (a, b) => a - b
    );

    const estremi = [
      -Infinity,
      ...puntiUnici,
      Infinity,
    ];

    const risultati: string[] = [];

    for (
      let i = 0;
      i < estremi.length - 1;
      i++
    ) {
      const a =
        estremi[i];

      const b =
        estremi[i + 1];

      const test =
        puntoTest(a, b);

      const valore =
        valutaFunzione(
          seconda,
          test
        );

      if (
        valore === null
      ) {
        continue;
      }

      const sinistra =
        a === -Infinity
          ? "-∞"
          : numeroPulito(a);

      const destra =
        b === Infinity
          ? "+∞"
          : numeroPulito(b);

      if (valore > 0) {
        risultati.push(
          `convessa: (${sinistra}, ${destra})`
        );
      } else if (valore < 0) {
        risultati.push(
          `concava: (${sinistra}, ${destra})`
        );
      }
    }

    if (
      risultati.length === 0
    ) {
      return "Concavità da determinare";
    }

    return risultati.join(" | ");
  } catch {
    return "Non determinabile";
  }
}
/* =========================================================
   FLESSI
   ========================================================= */

export function calcolaFlessi(
  funzione: string
): string {
  try {
    const seconda =
      calcolaDerivataSeconda(
        funzione
      );

    const esclusi =
      trovaEsclusioni(funzione);
      /*
 * Se la derivata seconda è numericamente
 * uguale a zero, non ci sono punti di flesso.
 */
const puntiControlloFlessi = [
  -10, -5, -1, 0, 1, 3, 5, 10
];

const valoriControlloFlessi = puntiControlloFlessi
  .filter(
    (x) =>
      !esclusi.some(
        (e) => Math.abs(e - x) < 0.001
      )
  )
  .map(
    (x) => valutaFunzione(seconda, x)
  )
  .filter(
    (v): v is number => v !== null
  );

if (
  valoriControlloFlessi.length > 0 &&
  valoriControlloFlessi.every(
    (v) => Math.abs(v) < 1e-9
  )
) {
  return "Nessun flesso trovato";
}


    const zeri: number[] = [];

    let precedenteX = -100;

    let precedente =
      valutaFunzione(
        seconda,
        precedenteX
      );

    for (
      let x = -99.9;
      x <= 100;
      x += 0.1
    ) {
      const attuale =
        valutaFunzione(
          seconda,
          x
        );

      if (
        precedente !== null &&
        attuale !== null &&
        precedente * attuale < 0
      ) {
        let a =
          precedenteX;

        let b = x;

        for (
          let i = 0;
          i < 60;
          i++
        ) {
          const medio =
            (a + b) / 2;

          const fa =
            valutaFunzione(
              seconda,
              a
            );

          const fm =
            valutaFunzione(
              seconda,
              medio
            );

          if (
            fa === null ||
            fm === null
          ) {
            break;
          }

          if (
            fa * fm < 0
          ) {
            b = medio;
          } else {
            a = medio;
          }
        }

        const zero =
          (a + b) / 2;

        /*
          Un punto escluso dal dominio
          NON può essere un flesso.
        */

        if (
          !esclusi.some(
            (e) =>
              Math.abs(e - zero) <
              0.01
          )
        ) {
          /*
            Verifichiamo realmente il cambio
            di concavità.
          */

          const sinistra =
            valutaFunzione(
              seconda,
              zero - 0.01
            );

          const destra =
            valutaFunzione(
              seconda,
              zero + 0.01
            );

          if (
            sinistra !== null &&
            destra !== null &&
            sinistra * destra < 0
          ) {
            aggiungiUnico(
              zeri,
              zero
            );
          }
        }
      }

      precedenteX = x;
      precedente = attuale;
    }

    if (zeri.length === 0) {
      return "Nessun flesso trovato";
    }

    return zeri
      .sort((a, b) => a - b)
      .map((x) => {
        const y =
          valutaFunzione(
            funzione,
            x
          );

        if (y === null) {
          return `x = ${numeroPulito(x)}`;
        }

        return `(${numeroPulito(
          x
        )}, ${numeroPulito(y)})`;
      })
      .join(" ; ");
  } catch {
    return "Non determinabile";
  }
}

/* =========================================================
   LIMITI
   ========================================================= */

function limiteNumerico(
  funzione: string,
  direzione:
    | "positivo"
    | "negativo"
): number | null {
  const valori = [
    100,
    1000,
    10000,
    100000,
  ];

  let ultimo:
    number | null = null;

  for (const valore of valori) {
    const x =
      direzione === "positivo"
        ? valore
        : -valore;

    const risultato =
      valutaFunzione(
        funzione,
        x
      );

    if (
      risultato !== null &&
      Number.isFinite(
        risultato
      )
    ) {
      ultimo = risultato;
    }
  }

  return ultimo;
}

/* =========================================================
   ASINTOTI VERTICALI
   ========================================================= */

export function calcolaAsintotiVerticali(
  funzione: string
): string {
  const esclusi =
    trovaEsclusioni(funzione);

  if (esclusi.length === 0) {
    return "Nessun asintoto verticale trovato";
  }

  const risultati: string[] = [];

  for (const x of esclusi) {
    const sinistra =
      valutaFunzione(
        funzione,
        x - 0.000001
      );

    const destra =
      valutaFunzione(
        funzione,
        x + 0.000001
      );

    /*
      Per un asintoto verticale almeno
      uno dei due lati deve tendere a infinito.

      Con le funzioni razionali, vicino
      all'esclusione mathjs può restituire
      numeri molto grandi ma finiti.
    */

    const sinistraGrande =
      sinistra !== null &&
      Math.abs(sinistra) > 100000;

    const destraGrande =
      destra !== null &&
      Math.abs(destra) > 100000;

    if (
      sinistra === null ||
      destra === null ||
      sinistraGrande ||
      destraGrande
    ) {
      risultati.push(
        `x = ${numeroPulito(x)}`
      );
    }
  }

  if (risultati.length === 0) {
    return "Nessun asintoto verticale trovato";
  }

  return risultati.join(" ; ");
}

/* =========================================================
   ASINTOTI ORIZZONTALI
   ========================================================= */

export function calcolaAsintotiOrizzontali(
  funzione: string
): string {
  try {
    function limiteDirezione(
      direzione: "positivo" | "negativo"
    ): number | null {
      const x1 =
        direzione === "positivo"
          ? 10000
          : -10000;

      const x2 =
        direzione === "positivo"
          ? 100000
          : -100000;

      const y1 =
        valutaFunzione(
          funzione,
          x1
        );

      const y2 =
        valutaFunzione(
          funzione,
          x2
        );

      if (
        y1 === null ||
        y2 === null ||
        !Number.isFinite(y1) ||
        !Number.isFinite(y2)
      ) {
        return null;
      }

      // Se i valori crescono senza limite,
      // non esiste un asintoto orizzontale.
      if (
        Math.abs(y2) > 1e8
      ) {
        return null;
      }

      // Controlliamo che il valore si stia
      // stabilizzando verso un numero finito.
      const differenza =
        Math.abs(y2 - y1);

      const tolleranza =
        Math.max(
          0.001,
          Math.abs(y2) * 0.0001
        );

      if (
        differenza > tolleranza
      ) {
        return null;
      }

      return y2;
    }

    const risultati: string[] = [];

    const positivo =
      limiteDirezione(
        "positivo"
      );

    const negativo =
      limiteDirezione(
        "negativo"
      );

    if (positivo !== null) {
      risultati.push(
        `y = ${numeroPulito(
          positivo
        )} per x → +∞`
      );
    }

    if (negativo !== null) {
      risultati.push(
        `y = ${numeroPulito(
          negativo
        )} per x → -∞`
      );
    }

    if (
      risultati.length === 0
    ) {
      return "Nessun asintoto orizzontale trovato";
    }

    return risultati.join(" | ");
  } catch {
    return "Nessun asintoto orizzontale trovato";
  }
}
/* =========================================================
   ASINTOTI OBLIQUI
   ========================================================= */

export function calcolaAsintotiObliqui(
  funzione: string
): string {
  try {
    function pulitoAsintoto(
      valore: number
    ): string {
      if (
        Math.abs(
          valore - Math.round(valore)
        ) < 0.001
      ) {
        return String(
          Math.round(valore)
        );
      }

      return numeroPulito(valore);
    }

    function calcola(
      direzione:
        | "positivo"
        | "negativo"
    ): string | null {

      const x1 =
        direzione === "positivo"
          ? 100000
          : -100000;

      const x2 =
        direzione === "positivo"
          ? 50000
          : -50000;

      const y1 =
        valutaFunzione(
          funzione,
          x1
        );

      const y2 =
        valutaFunzione(
          funzione,
          x2
        );

      if (
        y1 === null ||
        y2 === null
      ) {
        return null;
      }

      if (
        !Number.isFinite(y1) ||
        !Number.isFinite(y2)
      ) {
        return null;
      }

      /*
       * Calcolo della pendenza:
       *
       * m = (f(x1) - f(x2)) / (x1 - x2)
       */
      const m =
        (y1 - y2) /
        (x1 - x2);

      if (
        !Number.isFinite(m)
      ) {
        return null;
      }

      /*
       * Un asintoto obliquo deve avere
       * una pendenza diversa da zero.
       */
      if (
        Math.abs(m) < 0.0001 ||
        Math.abs(m) > 1000
      ) {
        return null;
      }

      /*
       * Calcolo dell'intercetta:
       *
       * q = f(x) - mx
       */
      const q =
        y1 - m * x1;

      const q2 =
        y2 - m * x2;

      if (
        !Number.isFinite(q) ||
        !Number.isFinite(q2)
      ) {
        return null;
      }

      /*
       * Controllo che q sia stabile.
       */
      if (
        Math.abs(q - q2) > 0.01
      ) {
        return null;
      }

      const mPulito =
        pulitoAsintoto(m);

      const qPulito =
        pulitoAsintoto(
          Math.abs(q) < 0.001
            ? 0
            : q
        );

      const segno =
        q >= 0
          ? "+"
          : "-";

      return (
        `y = ${mPulito}x ${segno} ${qPulito} per x → ${
          direzione === "positivo"
            ? "+∞"
            : "-∞"
        }`
      );
    }

    const risultati: string[] = [];

    const positivo =
      calcola("positivo");

    const negativo =
      calcola("negativo");

    if (positivo) {
      risultati.push(
        positivo
      );
    }

    if (negativo) {
      risultati.push(
        negativo
      );
    }

     if (
      risultati.length === 0
    ) {
      return "Nessun asintoto obliquo trovato";
    }

    return risultati.join(" | ");

  } catch {
    return "Nessun asintoto obliquo trovato";
  }
}
/* =========================================================
   SEGNO
   ========================================================= */

export function calcolaSegno(
  funzione: string
): string {
  try {
    const f =
      normalizzaFunzione(funzione);

    const esclusi =
      trovaEsclusioni(f);

    const zeri: number[] = [];

    let precedenteX = -100;

    let precedenteY =
      valutaFunzione(
        f,
        precedenteX
      );

    for (
      let x = -99.9;
      x <= 100;
      x += 0.1
    ) {
      const y =
        valutaFunzione(
          f,
          x
        );

      if (
        y !== null &&
        !esclusi.some(
          (e) =>
            Math.abs(e - x) <
            0.01
        )
      ) {
        if (
          Math.abs(y) <
          0.000001
        ) {
          aggiungiUnico(
            zeri,
            x
          );
        }
      }

      if (
        precedenteY !== null &&
        y !== null &&
        !esclusi.some(
          (e) =>
            e > precedenteX &&
            e < x
        )
      ) {
        if (
          precedenteY * y < 0
        ) {
          let a =
            precedenteX;

          let b = x;

          for (
            let i = 0;
            i < 60;
            i++
          ) {
            const medio =
              (a + b) / 2;

            const fa =
              valutaFunzione(
                f,
                a
              );

            const fm =
              valutaFunzione(
                f,
                medio
              );

            if (
              fa === null ||
              fm === null
            ) {
              break;
            }

            if (
              fa * fm < 0
            ) {
              b = medio;
            } else {
              a = medio;
            }
          }

          aggiungiUnico(
            zeri,
            (a + b) / 2
          );
        }
      }

      precedenteX = x;
      precedenteY = y;
    }

    zeri.sort(
      (a, b) => a - b
    );

    const punti =
      [
        -Infinity,
        ...zeri,
        ...esclusi,
        Infinity,
      ].sort(
        (a, b) => a - b
      );

    const unici: number[] = [];

    for (const p of punti) {
      if (
        !unici.some(
          (x) =>
            Number.isFinite(x) &&
            Number.isFinite(p) &&
            Math.abs(x - p) <
              0.01
        )
      ) {
        unici.push(p);
      }
    }

    const intervalli: string[] = [];

    for (
      let i = 0;
      i < unici.length - 1;
      i++
    ) {
      const a = unici[i];
      const b = unici[i + 1];

      const test =
        puntoTest(a, b);

      const valore =
        valutaFunzione(
          f,
          test
        );

      if (valore === null) {
        continue;
      }

      const sinistra =
        a === -Infinity
          ? "-∞"
          : numeroPulito(a);

      const destra =
        b === Infinity
          ? "+∞"
          : numeroPulito(b);

      intervalli.push(
        `(${sinistra}, ${destra}) → ${
          valore > 0
            ? "+"
            : "-"
        }`
      );
    }

    const zeriTesto =
      zeri
        .map(
          (x) =>
            `f(${numeroPulito(
              x
            )}) = 0`
        )
        .join(" | ");

    const risultato =
      intervalli.join(" | ");

    if (zeriTesto) {
      return risultato
        ? `${risultato} | ${zeriTesto}`
        : zeriTesto;
    }

    return risultato ||
      "Segno non determinabile";
  } catch {
    return "Segno non determinabile";
  }
}

/* =========================================================
   STUDIO COMPLETO
   ========================================================= */

export function calcolaStudioCompleto(
  funzioneInput: string
) {
  const funzione =
    normalizzaFunzione(
      funzioneInput
    );

  return {
    funzione:
      funzioneInput,

    dominio:
      calcolaDominio(
        funzione
      ),

    intersezioniX:
      calcolaIntersezioniX(
        funzione
      ),

    intersezioneY:
      calcolaIntersezioneY(
        funzione
      ),

    segno:
      calcolaSegno(
        funzione
      ),

    derivataPrima:
      calcolaDerivata(
        funzione
      ),

    puntiCritici:
      calcolaPuntiCritici(
        funzione
      ),

    crescenza:
      calcolaCrescenza(
        funzione
      ),

    estremi:
      calcolaMassimiMinimi(
        funzione
      ),

    derivataSeconda:
      calcolaDerivataSeconda(
        funzione
      ),

    concavita:
      calcolaConcavita(
        funzione
      ),

    flessi:
      calcolaFlessi(
        funzione
      ),

    asintotiVerticali:
      calcolaAsintotiVerticali(
        funzione
      ),

    asintotiOrizzontali:
      calcolaAsintotiOrizzontali(
        funzione
      ),

    asintotiObliqui:
      calcolaAsintotiObliqui(
        funzione
      ),
  };
}
