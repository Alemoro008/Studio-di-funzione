import Link from "next/link";
import GraficoFunzione from "../components/GraficoFunzione";

export const metadata = {
  title: "Studi di funzione svolti: polinomio, razionale e logaritmo",
  description: "Tre studi completi e verificati: x³−3x, x²/(x−1) e ln(x)/x. Dominio, segno, limiti, derivate, estremi, concavità e grafici interattivi.",
  alternates: { canonical: "/studi-di-funzione-svolti" },
};

export default function StudiSvolti() {
  return <main className="min-h-screen bg-white text-gray-900"><article className="mx-auto max-w-4xl px-6 py-16">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Analisi matematica · Esempi completi</p>
    <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Studi di funzione svolti</h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">Tre funzioni, tre problemi diversi: un polinomio con due estremi e un flesso, una razionale con una discontinuità e un asintoto obliquo, una logaritmica con dominio positivo. Ogni studio collega i calcoli alla forma del grafico, invece di limitarsi a elencare i risultati.</p>
    <nav aria-label="Scegli un esempio" className="mt-8 flex flex-wrap gap-4 font-semibold text-blue-600"><a href="#polinomio" className="underline">Polinomio</a><a href="#razionale" className="underline">Funzione razionale</a><a href="#logaritmo" className="underline">Funzione logaritmica</a></nav>
    <div className="mt-12 space-y-16 leading-7 text-gray-700">
      <section id="polinomio" className="scroll-mt-6 space-y-5"><h2 className="text-3xl font-bold text-gray-900">1. Polinomio: f(x) = x³ − 3x</h2>
        <p>Questo esempio mostra perché una funzione può cambiare direzione senza cambiare segno nello stesso punto. Gli zeri della funzione e gli zeri della derivata hanno compiti diversi.</p>
        <h3 className="text-xl font-semibold text-gray-900">Dominio, simmetria e intersezioni</h3>
        <p>Essendo un polinomio, il dominio è ℝ. Inoltre f(−x) = −x³ + 3x = −f(x): la funzione è dispari e il grafico è simmetrico rispetto all’origine. Per gli zeri scomponi f(x) = x(x² − 3): x = −√3, 0, √3. L’intersezione con l’asse y è (0, 0).</p>
        <h3 className="text-xl font-semibold text-gray-900">Segno e limiti</h3>
        <p>Il fattore x è negativo a sinistra di 0; x² − 3 è positivo fuori da [−√3, √3] e negativo al suo interno. Il prodotto è negativo in (−∞, −√3), positivo in (−√3, 0), negativo in (0, √3), positivo in (√3, +∞). Negli estremi di questi intervalli la funzione vale zero.</p>
        <p>Il termine dominante è x³: il limite è −∞ per x → −∞ e +∞ per x → +∞. Non ci sono asintoti verticali perché il polinomio è continuo su ℝ, né orizzontali. Per gli obliqui f(x)/x = x² − 3 tende a +∞: manca una pendenza finita, quindi non ci sono asintoti obliqui.</p>
        <h3 className="text-xl font-semibold text-gray-900">Derivata prima ed estremi</h3>
        <p>f′(x) = 3x² − 3 = 3(x − 1)(x + 1). È positiva prima di −1 e dopo 1, negativa tra −1 e 1. La funzione cresce su (−∞, −1), decresce su (−1, 1), cresce su (1, +∞). In −1 passa da crescita a discesa: massimo relativo (−1, 2). In 1 passa da discesa a crescita: minimo relativo (1, −2). Non sono estremi assoluti su ℝ, dato il comportamento a infinito.</p>
        <h3 className="text-xl font-semibold text-gray-900">Derivata seconda, concavità e flesso</h3>
        <p>f″(x) = 6x. È negativa per x &lt; 0: la concavità è verso il basso; è positiva per x &gt; 0: la concavità è verso l’alto. La funzione è continua in 0 e la concavità cambia, quindi (0, 0) è un flesso. La tangente nel flesso ha pendenza f′(0) = −3 ed equazione y = −3x.</p>
        <div className="rounded-xl bg-gray-50 p-5"><strong className="text-gray-900">Come ricostruire il grafico</strong><p className="mt-2">Parti in basso a sinistra, attraversa l’asse in −√3, raggiungi il massimo (−1, 2), scendi passando per il flesso all’origine, raggiungi il minimo (1, −2) e risali attraversando l’asse in √3. La simmetria rispetto all’origine permette di controllare la coerenza delle due metà.</p></div>
        <GraficoFunzione funzione="x^3-3*x" />
        <p className="text-sm">Per ripetere il confronto nel calcolatore inserisci <code className="rounded bg-gray-100 px-2 py-1">x^3-3*x</code>.</p>
      </section>
      <section id="razionale" className="scroll-mt-6 space-y-5"><h2 className="text-3xl font-bold text-gray-900">2. Razionale: f(x) = x²/(x − 1)</h2>
        <p>Qui la retta x = 1 separa due rami. Non puoi estendere una conclusione di monotonia o concavità attraverso quel punto, perché non appartiene al dominio.</p>
        <h3 className="text-xl font-semibold text-gray-900">Dominio, simmetria, intersezioni e segno</h3>
        <p>Il denominatore si annulla in 1: D = (−∞, 1) ∪ (1, +∞). Il dominio non è simmetrico rispetto a 0, quindi la funzione non è né pari né dispari. Il numeratore si annulla solo in 0, che è ammesso: entrambe le intersezioni con gli assi sono (0, 0).</p>
        <p>Per x ≠ 0 il numeratore è positivo. La funzione è negativa in (−∞, 0) ∪ (0, 1), nulla in 0, positiva in (1, +∞). In 0 non cambia segno: lo zero del numeratore ha molteplicità pari.</p>
        <h3 className="text-xl font-semibold text-gray-900">Limiti e asintoti</h3>
        <p>Per x → 1⁻, il numeratore tende a 1 e il denominatore a zero negativo: f(x) → −∞. Per x → 1⁺, f(x) → +∞. La retta x = 1 è un asintoto verticale.</p>
        <p>Dividi i polinomi: f(x) = x + 1 + 1/(x − 1). A −∞ la funzione tende a −∞, a +∞ tende a +∞; non ci sono asintoti orizzontali. Poiché f(x) − (x + 1) = 1/(x − 1) → 0, la retta y = x + 1 è obliqua in entrambe le direzioni. Il ramo sinistro sta sotto questa retta, quello destro sopra, come indica il segno del resto.</p>
        <h3 className="text-xl font-semibold text-gray-900">Derivata prima ed estremi</h3>
        <p>Con la regola del quoziente, f′(x) = [2x(x − 1) − x²]/(x − 1)² = x(x − 2)/(x − 1)². Nel dominio il denominatore è positivo: il segno dipende da x(x − 2). La funzione cresce su (−∞, 0) e (2, +∞), decresce su (0, 1) e (1, 2).</p>
        <p>In 0 la derivata passa da + a −: (0, 0) è un massimo relativo. In 2 passa da − a +: (2, 4) è un minimo relativo. Sono anche, rispettivamente, il massimo del ramo sinistro e il minimo del ramo destro, ma non estremi assoluti sull’intero dominio: la funzione non è limitata né superiormente né inferiormente.</p>
        <h3 className="text-xl font-semibold text-gray-900">Derivata seconda e assenza di flessi</h3>
        <p>Dalla forma x + 1 + 1/(x − 1) ottieni f′(x) = 1 − 1/(x − 1)² e f″(x) = 2/(x − 1)³. La concavità è verso il basso per x &lt; 1 e verso l’alto per x &gt; 1. Non ci sono flessi: il cambio di concavità avviene tra due rami separati e in 1 la funzione non esiste.</p>
        <div className="rounded-xl bg-gray-50 p-5"><strong className="text-gray-900">Come ricostruire il grafico</strong><p className="mt-2">Il ramo sinistro arriva da −∞ seguendo y = x + 1, sale fino a toccare l’asse nell’origine e ridiscende a −∞ vicino a 1. Il ramo destro parte da +∞, scende al minimo (2, 4) e risale avvicinandosi alla retta obliqua dall’alto.</p></div>
        <GraficoFunzione funzione="x^2/(x-1)" />
        <p className="text-sm">Formula da inserire: <code className="rounded bg-gray-100 px-2 py-1">x^2/(x-1)</code>. Il grafico interattivo mostra la curva; gli asintoti sono determinati nei passaggi sopra e non vengono aggiunti automaticamente al disegno.</p>
      </section>
      <section id="logaritmo" className="scroll-mt-6 space-y-5"><h2 className="text-3xl font-bold text-gray-900">3. Logaritmica: f(x) = ln(x)/x</h2>
        <p>ln indica il logaritmo naturale. Questo esempio ha un estremo assoluto e un asintoto orizzontale, pur tendendo a −∞ vicino al bordo del dominio.</p>
        <h3 className="text-xl font-semibold text-gray-900">Dominio, intersezioni e segno</h3>
        <p>Il logaritmo richiede x &gt; 0; questo esclude anche il denominatore nullo. D = (0, +∞). La funzione non è né pari né dispari, perché il dominio non è simmetrico rispetto a 0. Non interseca l’asse y. ln x = 0 solo in 1, quindi l’intersezione con l’asse x è (1, 0).</p>
        <p>Il denominatore è sempre positivo. Il segno è quello di ln x: negativo in (0, 1), nullo in 1, positivo in (1, +∞).</p>
        <h3 className="text-xl font-semibold text-gray-900">Limiti e asintoti</h3>
        <p>Per x → 0⁺, poni t = 1/x: t → +∞ e ln(x)/x = −t ln t → −∞. La retta x = 0 è verticale; non si studia un limite sinistro perché x &lt; 0 non appartiene al dominio.</p>
        <p>Per x → +∞, ln x cresce più lentamente di x: ln(x)/x → 0. Per verificarlo con de l’Hôpital, la forma è ∞/∞ e il rapporto delle derivate è (1/x)/1 → 0. Le funzioni sono derivabili per x &gt; 0 e la derivata del denominatore è non nulla, quindi il criterio si applica. L’asintoto orizzontale è y = 0 e la curva vi si avvicina dall’alto. Non c’è un asintoto obliquo con pendenza diversa da zero.</p>
        <h3 className="text-xl font-semibold text-gray-900">Derivata prima e massimo assoluto</h3>
        <p>La regola del quoziente dà f′(x) = [(1/x)x − ln x]/x² = (1 − ln x)/x². Si annulla quando ln x = 1, cioè in x = e. Il denominatore è positivo: la funzione cresce su (0, e) e decresce su (e, +∞).</p>
        <p>Il punto (e, 1/e) è un massimo relativo e assoluto, perché tutti i valori del dominio si trovano nei due intervalli di crescita e discesa ai suoi lati. Non c’è un minimo assoluto, dato il limite −∞ in 0⁺. Il massimo vale circa 0,3679 e si trova a x ≈ 2,7183.</p>
        <h3 className="text-xl font-semibold text-gray-900">Derivata seconda e flesso</h3>
        <p>Derivando (1 − ln x)x⁻² ottieni f″(x) = −x⁻³ − 2(1 − ln x)x⁻³ = (2 ln x − 3)/x³. Si annulla in x = e^(3/2). Il denominatore è positivo: la concavità è verso il basso per 0 &lt; x &lt; e^(3/2), verso l’alto per x &gt; e^(3/2).</p>
        <p>La funzione è continua e cambia concavità in quel punto: il flesso è (e^(3/2), 3/(2e^(3/2))), circa (4,4817; 0,3347). Nel flesso la funzione è già decrescente: un cambio di concavità non comporta un cambio di monotonia.</p>
        <div className="rounded-xl bg-gray-50 p-5"><strong className="text-gray-900">Come ricostruire il grafico</strong><p className="mt-2">Parti vicino all’asse y scendendo senza limite; procedendo verso destra, la curva sale, attraversa l’asse x in 1, raggiunge il massimo in e e poi scende. Dopo il flesso cambia curvatura e continua a tendere a 0 dall’alto. Usa lo zoom per distinguere massimo e flesso, le cui ordinate sono vicine.</p></div>
        <GraficoFunzione funzione="log(x)/x" />
        <p className="text-sm">Nel calcolatore il logaritmo naturale si scrive <code className="rounded bg-gray-100 px-2 py-1">log(x)/x</code>.</p>
      </section>
      <section className="space-y-4"><h2 className="text-2xl font-bold text-gray-900">Controlla la tua comprensione</h2>
        <details className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-semibold">Perché x = 1 non è un flesso di x²/(x − 1)?</summary><p className="mt-4">Perché non appartiene al dominio: non esiste un punto del grafico in cui la concavità cambi. Un confronto tra rami separati non crea un flesso.</p></details>
        <details className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-semibold">Perché il massimo di x³ − 3x non è assoluto?</summary><p className="mt-4">Il massimo relativo ha ordinata 2, ma la funzione tende a +∞ a destra e assume valori maggiori di 2. “Relativo” descrive un confronto solo con i punti vicini.</p></details>
        <details className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-semibold">Nel flesso di ln(x)/x la derivata prima è nulla?</summary><p className="mt-4">No. In x = e^(3/2), f′(x) = (1 − 3/2)/e³ = −1/(2e³). Il flesso ha una tangente inclinata ed è su un tratto decrescente.</p></details>
        <p>Gli studi qui sono analitici; i grafici sono approssimazioni numeriche. Per una funzione diversa ripeti le condizioni di esistenza e i controlli sui limiti: il calcolatore riconosce alcune forme e non sostituisce una verifica matematica delle espressioni composte.</p>
      </section>
    </div>
    <nav aria-label="Ripassa il metodo" className="mt-12 flex flex-wrap gap-5 border-t border-gray-200 pt-8 font-semibold text-blue-600"><Link href="/limiti-e-asintoti">Ripassa limiti e asintoti →</Link><Link href="/derivata-prima">Ripassa derivate ed estremi →</Link><Link href="/">Prova il calcolatore →</Link></nav>
  </article></main>;
}
