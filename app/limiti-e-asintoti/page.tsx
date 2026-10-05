import Link from "next/link";

export const metadata = {
  title: "Limiti e asintoti: metodo, esempi ed esercizi svolti",
  description: "Impara limiti laterali, forme indeterminate e asintoti verticali, orizzontali e obliqui con passaggi ragionati ed esercizi con soluzioni.",
  alternates: { canonical: "/limiti-e-asintoti" },
};

export default function LimitiEAsintoti() {
  return <main className="min-h-screen bg-white text-gray-900"><article className="mx-auto max-w-4xl px-6 py-16">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Analisi matematica · Guida con esercizi</p>
    <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Limiti e asintoti</h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">Un limite descrive a quale valore si avvicina una funzione quando x si avvicina a un punto oppure cresce senza limite. Gli asintoti traducono alcuni di questi comportamenti in rette utili a costruire il grafico. Qui trovi il metodo e i controlli che evitano di confondere un punto escluso con un asintoto.</p>
    <div className="mt-12 space-y-12 leading-7 text-gray-700">
      <section className="space-y-4"><h2 className="text-2xl font-bold text-gray-900">Da dove iniziare: dominio e limiti laterali</h2>
        <p>Determina prima il <Link href="/dominio-di-una-funzione" className="text-blue-600 underline">dominio</Link>. Poi studia i punti esclusi che sono raggiungibili dal dominio, gli estremi degli intervalli del dominio e, quando sono raggiungibili, +∞ e −∞. Non tutti questi punti produrranno un asintoto.</p>
        <p>La scrittura x → a⁻ indica che x arriva ad a da sinistra; x → a⁺ indica un avvicinamento da destra. Il limite bilatero esiste solo se i due limiti laterali esistono e coincidono, anche nel caso di un comune valore infinito. Per una funzione definita solo a destra, come ln x vicino a 0, si considera il limite destro.</p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-3"><h3 className="text-xl font-semibold text-gray-900">Esempio: 1/(x − 2)</h3>
          <p>Per x → 2⁻, il denominatore è negativo e si avvicina a zero: il rapporto tende a −∞. Per x → 2⁺ è positivo e si avvicina a zero: il rapporto tende a +∞. I limiti laterali sono diversi; non esiste un unico limite bilatero, ma x = 2 è un asintoto verticale.</p>
          <p>Non sostituire semplicemente x = 2 scrivendo “1/0 = ∞”: la divisione per zero non è definita e il verso di avvicinamento determina il segno del limite.</p>
        </div>
      </section>
      <section className="space-y-4"><h2 className="text-2xl font-bold text-gray-900">Forme indeterminate: 0/0 non è il risultato</h2>
        <p>Per una funzione continua in a, il limite si calcola sostituendo a. Se questa operazione produce 0/0 o ∞/∞, devi trasformare l’espressione: scomponi, razionalizza o confronta i termini dominanti. La forma indeterminata non dice se il limite sia zero, finito o infinito.</p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-3"><h3 className="text-xl font-semibold text-gray-900">Scomposizione: (x² − 1)/(x − 1) per x → 1</h3>
          <p>Sostituendo 1 si ottiene 0/0. Per x ≠ 1 si può scrivere (x − 1)(x + 1)/(x − 1) = x + 1, il cui limite è 2. La funzione originale non esiste in 1: il grafico ha un punto mancante, non un asintoto verticale.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-3"><h3 className="text-xl font-semibold text-gray-900">Razionalizzazione: (√(1 + x) − 1)/x per x → 0</h3>
          <p>Moltiplica numeratore e denominatore per √(1 + x) + 1. Il numeratore diventa x, quindi per x ≠ 0 il rapporto è 1/(√(1 + x) + 1). Ora puoi passare al limite: il risultato è 1/2.</p>
          <p>La trasformazione è valida in un intorno di 0 per i valori ammessi dal dominio, escluso 0. Per calcolare un limite non serve che la funzione sia definita nel punto verso cui ti avvicini.</p>
        </div>
      </section>
      <section className="space-y-4"><h2 className="text-2xl font-bold text-gray-900">Asintoti verticali e orizzontali</h2>
        <p>La retta x = a è un asintoto verticale se almeno uno dei limiti laterali della funzione in a è +∞ o −∞. Uno zero del denominatore è un candidato da controllare, non una prova automatica: un fattore comune può produrre un limite finito.</p>
        <p>La retta y = L è un asintoto orizzontale in una direzione se lim f(x) = L per x → +∞ o per x → −∞, con L finito. Controlla le due direzioni separatamente: possono dare rette diverse.</p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-3"><h3 className="text-xl font-semibold text-gray-900">Rapporto di polinomi: (2x² + 1)/(x² − 3)</h3>
          <p>Dividendo per x² ottieni (2 + 1/x²)/(1 − 3/x²), che tende a 2 sia a +∞ sia a −∞. L’asintoto orizzontale è y = 2. Per gli asintoti verticali controlli separatamente x = ±√3: lì il numeratore vale 7 e il denominatore tende a zero.</p>
          <p>Per un rapporto di polinomi, a infinito contano i gradi: se il numeratore ha grado minore, il limite è 0; se i gradi sono uguali, è il rapporto dei coefficienti principali. Se il grado del numeratore è maggiore, non c’è un asintoto orizzontale.</p>
        </div>
      </section>
      <section className="space-y-4"><h2 className="text-2xl font-bold text-gray-900">Asintoto obliquo: pendenza e termine noto</h2>
        <p>Per cercare y = mx + q in una direzione, calcola m = lim f(x)/x. Se m è finito e diverso da zero, calcola q = lim [f(x) − mx]. Serve anche q finito: solo allora la differenza f(x) − (mx + q) tende a zero. Ripeti il controllo nell’altra direzione.</p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-3"><h3 className="text-xl font-semibold text-gray-900">Divisione: x²/(x − 1)</h3>
          <p>La divisione tra polinomi dà x²/(x − 1) = x + 1 + 1/(x − 1). Il resto tende a zero per x → ±∞, quindi l’asintoto obliquo è y = x + 1 in entrambe le direzioni. In termini di limiti, m = 1 e q = 1.</p>
          <p>Se la differenza dei gradi è maggiore di uno, la divisione può dare un polinomio di grado superiore: non chiamarlo asintoto obliquo, perché non è una retta.</p>
        </div>
      </section>
      <section className="space-y-4"><h2 className="text-2xl font-bold text-gray-900">Errori frequenti e controllo del grafico</h2>
        <ul className="list-disc space-y-2 pl-6"><li>Dedurre un asintoto da un punto escluso senza calcolare il limite.</li><li>Sottrarre “∞ − ∞” come se fossero numeri: è una forma indeterminata da trasformare.</li><li>Dimenticare il segno nei limiti laterali o cercare il limite da un lato che non appartiene al dominio.</li><li>Pensare che un asintoto orizzontale non possa essere attraversato: ad esempio x/(x² + 1) attraversa y = 0 in 0 e tende a 0 a infinito.</li></ul>
        <p>Una finestra del grafico non mostra ciò che accade per x arbitrariamente grande. Nel <Link className="text-blue-600 underline" href="/">calcolatore</Link> puoi confrontare la forma della curva con i passaggi su carta, ma un disegno numerico non dimostra un limite. Una piccola discontinuità può inoltre non essere visibile.</p>
      </section>
      <section className="space-y-4"><h2 className="text-2xl font-bold text-gray-900">Esercizi con soluzioni ragionate</h2>
        <details className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-semibold">1. Calcola lim (x² − 4)/(x − 2) per x → 2</summary><p className="mt-4">Scomponi x² − 4 = (x − 2)(x + 2). Per x ≠ 2 il rapporto vale x + 2, quindi il limite è 4. Il punto 2 resta escluso dal dominio originale; non è un asintoto verticale.</p></details>
        <details className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-semibold">2. Trova gli asintoti di (3x + 1)/(x − 2)</summary><p className="mt-4">Scrivi la funzione come 3 + 7/(x − 2). Per x → 2⁻ tende a −∞, per x → 2⁺ a +∞: x = 2 è verticale. Per x → ±∞ tende a 3: y = 3 è orizzontale. Non c’è un asintoto obliquo con pendenza diversa da zero.</p></details>
        <details className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-semibold">3. Trova gli asintoti di (x² + 1)/x</summary><p className="mt-4">D = ℝ ∖ {'{0}'}. La funzione è x + 1/x. Per x → 0⁻ tende a −∞ e per x → 0⁺ a +∞: x = 0 è verticale. A ±∞ la differenza dalla retta y = x è 1/x e tende a zero: y = x è obliquo.</p></details>
      </section>
    </div>
    <nav aria-label="Continua lo studio" className="mt-12 flex flex-wrap gap-5 border-t border-gray-200 pt-8 font-semibold text-blue-600"><Link href="/studi-di-funzione-svolti">Applica il metodo agli studi completi →</Link><Link href="/derivata-prima">Passa alla derivata prima →</Link></nav>
  </article></main>;
}
