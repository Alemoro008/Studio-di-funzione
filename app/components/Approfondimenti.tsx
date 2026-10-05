import Link from "next/link";
import type { ReactNode } from "react";

function Sezione({ titolo, children }: { titolo: string; children: ReactNode }) {
  return <section className="mt-12 space-y-4 leading-7 text-gray-700"><h2 className="text-2xl font-bold text-gray-900">{titolo}</h2>{children}</section>;
}
function Esempio({ titolo, children }: { titolo: string; children: ReactNode }) {
  return <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6"><h3 className="mb-3 text-xl font-semibold text-gray-900">{titolo}</h3><div className="space-y-3">{children}</div></article>;
}
function Soluzione({ esercizio, children }: { esercizio: string; children: ReactNode }) {
  return <details className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-semibold text-gray-900">{esercizio} — mostra la soluzione</summary><div className="mt-4 space-y-3">{children}</div></details>;
}
function UsoCalcolatore() {
  return <Sezione titolo="Come confrontare i passaggi con il calcolatore"><p>Prova a risolvere prima il problema su carta, poi inserisci la formula nel <Link className="font-semibold text-blue-600 underline" href="/">calcolatore</Link>. Usa * per il prodotto, ^ per le potenze, sqrt(...) per la radice quadrata e log(...) per il logaritmo naturale. Le parentesi devono contenere tutto il denominatore o tutto l’argomento della funzione.</p><p>Il grafico è una rappresentazione numerica: un punto escluso, una discontinuità piccola o un dettaglio fuori dalla finestra possono non essere visibili. Il calcolatore riconosce alcune forme di dominio e usa anche ricerche numeriche; per espressioni composte i risultati possono essere incompleti. Le condizioni di esistenza e i passaggi analitici restano il riferimento per controllare il risultato.</p></Sezione>;
}

export function ApprofondimentoDominio() {
  return <>
    <Sezione titolo="Condizioni da combinare: una checklist">
      <p>Per le funzioni reali, un polinomio è definito per ogni numero reale. Una radice di indice dispari ammette anche argomenti negativi. Una radice di indice pari richiede invece un radicando non negativo; se la radice è al denominatore, il radicando deve essere strettamente positivo. Per ln(g(x)) occorre g(x) &gt; 0: il logaritmo di zero non esiste.</p>
      <p>Scrivi tutte le condizioni prima di risolverle. Quando nella stessa formula compaiono più vincoli, devi trovare la loro intersezione: un valore è ammesso solo se li soddisfa tutti. Negli intervalli, [ e ] includono gli estremi, mentre ( e ) li escludono; ±∞ non sono numeri e hanno sempre parentesi aperte.</p>
      <Esempio titolo="Radice e denominatore: √(x + 2)/(x − 1)">
        <p>La radice impone x + 2 ≥ 0, quindi x ≥ −2. Il denominatore impone x − 1 ≠ 0, quindi x ≠ 1. Intersecando le condizioni si ottiene D = [−2, 1) ∪ (1, +∞).</p>
        <p>L’estremo −2 è incluso: la radice vale zero e il denominatore vale −3. Il valore 1 è escluso anche se la radice esiste, perché dividere per zero non è consentito.</p>
      </Esempio>
      <Esempio titolo="Logaritmo di un rapporto: ln((x − 1)/(x + 2))">
        <p>Deve essere (x − 1)/(x + 2) &gt; 0. I valori che dividono la retta sono −2 e 1. Per x &lt; −2 entrambi i fattori sono negativi e il rapporto è positivo; tra −2 e 1 il rapporto è negativo; per x &gt; 1 entrambi sono positivi.</p>
        <p>Il dominio è quindi (−∞, −2) ∪ (1, +∞). In −2 il rapporto non esiste; in 1 vale zero e non può essere argomento del logaritmo. Entrambi gli estremi sono esclusi, per ragioni diverse.</p>
      </Esempio>
      <Esempio titolo="Una semplificazione non recupera i punti esclusi">
        <p>La funzione (x² − 1)/(x − 1) ha dominio ℝ ∖ {'{1}'}. Scomponendo il numeratore si ottiene (x − 1)(x + 1)/(x − 1) = x + 1, ma solo per x ≠ 1.</p>
        <p>Il grafico coincide con la retta y = x + 1 privata del punto (1, 2). La funzione originale resta indefinita in 1, anche se l’espressione semplificata può essere calcolata in quel punto. Conserva sempre le esclusioni trovate prima di cancellare i fattori.</p>
      </Esempio>
    </Sezione>
    <Sezione titolo="Errori frequenti nel dominio">
      <ul className="list-disc space-y-2 pl-6"><li>Scrivere x ≥ 0 per qualsiasi radice: il vincolo riguarda tutto il radicando, che può essere x + 2, 4 − x² o un rapporto.</li><li>Usare ≥ al posto di &gt; per un logaritmo o per una radice al denominatore.</li><li>Unire i vincoli anziché intersecarli: soddisfarne uno solo non basta.</li><li>Confondere il dominio con i valori assunti dalla funzione: il dominio descrive gli ingressi x, non le ordinate y.</li></ul>
    </Sezione>
    <Sezione titolo="Esercizi sul dominio con soluzioni">
      <p>Scrivi prima le condizioni di esistenza e solo dopo apri la soluzione.</p>
      <Soluzione esercizio="1. Trova il dominio di 1/√(4 − x²)"><p>Poiché la radice è al denominatore, 4 − x² &gt; 0. Si ottiene x² &lt; 4, cioè −2 &lt; x &lt; 2. D = (−2, 2); gli estremi annullano il denominatore.</p></Soluzione>
      <Soluzione esercizio="2. Trova il dominio di √(x − 1) + ln(3 − x)"><p>Servono x − 1 ≥ 0 e 3 − x &gt; 0. La loro intersezione è 1 ≤ x &lt; 3, quindi D = [1, 3). In 1 il logaritmo è ln 2; in 3 sarebbe ln 0.</p></Soluzione>
      <Soluzione esercizio="3. Trova il dominio di (x + 1)/(x² − 9)"><p>x² − 9 = (x − 3)(x + 3). Escludi −3 e 3: D = (−∞, −3) ∪ (−3, 3) ∪ (3, +∞). Il numeratore non introduce ulteriori vincoli.</p></Soluzione>
    </Sezione>
    <UsoCalcolatore />
  </>;
}

export function ApprofondimentoSegno() {
  return <>
    <Sezione titolo="Tabella dei segni: un rapporto svolto passo per passo">
      <Esempio titolo="f(x) = (x − 1)/(x + 2)">
        <p>Il dominio è ℝ ∖ {'{−2}'}. Lo zero del numeratore è x = 1 ed è ammesso. Lo zero del denominatore, x = −2, non è uno zero della funzione: è un punto escluso. Questi due valori separano tre intervalli.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[420px] border-collapse text-center"><caption className="mb-3 text-left font-semibold">Segni dei fattori e del rapporto</caption><thead><tr><th scope="col" className="p-2">Espressione</th><th scope="col">x &lt; −2</th><th scope="col">−2 &lt; x &lt; 1</th><th scope="col">x &gt; 1</th></tr></thead><tbody>{[['x − 1','−','−','+'],['x + 2','−','+','+'],['f(x)','+','−','+']].map(r=><tr className="border-t border-gray-200" key={r[0]}><th scope="row" className="p-2 font-medium">{r[0]}</th>{r.slice(1).map((c,i)=><td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
        <p>Quindi f(x) &gt; 0 in (−∞, −2) ∪ (1, +∞), f(x) &lt; 0 in (−2, 1) e f(x) = 0 solo in 1. Per risolvere f(x) ≥ 0 si aggiunge lo zero: (−∞, −2) ∪ [1, +∞). Il punto −2 resta escluso.</p>
        <p>Nel grafico, questi risultati indicano dove la curva sta sopra o sotto l’asse orizzontale. Non descrivono la salita o la discesa della curva: per quello serve il segno della derivata.</p>
      </Esempio>
    </Sezione>
    <Sezione titolo="Perché il segno non cambia sempre attraversando uno zero">
      <Esempio titolo="f(x) = (x − 1)²(x + 2)">
        <p>Il dominio è ℝ e gli zeri sono −2 e 1. Il fattore (x − 1)² è positivo per x ≠ 1 e nullo in 1: essendo un quadrato, non diventa negativo attraversando 1. Perciò il segno del prodotto, fuori dagli zeri, è quello di x + 2.</p>
        <p>La funzione è negativa in (−∞, −2), positiva in (−2, 1) ∪ (1, +∞), nulla in −2 e 1. In −2 cambia segno; in 1 tocca l’asse senza attraversarlo. Non alternare automaticamente + e −: controlla ogni fattore, soprattutto se ha una potenza pari.</p>
      </Esempio>
      <Esempio titolo="Il segno di ln x">
        <p>Prima imponi x &gt; 0. Poi ln x = 0 equivale a x = 1. Il logaritmo naturale è crescente e ln 1 = 0, quindi è negativo per 0 &lt; x &lt; 1 e positivo per x &gt; 1. Non esiste un intervallo negativo del dominio da analizzare.</p>
      </Esempio>
    </Sezione>
    <Sezione titolo="Quando basta scegliere un punto di prova?">
      <p>Se una funzione è continua su un intervallo e non si annulla al suo interno, mantiene lo stesso segno: per cambiarlo dovrebbe passare per zero. Per un polinomio o un rapporto di polinomi, dopo aver trovato tutti gli zeri ed escluso tutti i punti non definiti, puoi scegliere un valore di prova in ciascun intervallo.</p>
      <p>Questo metodo non autorizza a ignorare discontinuità o zeri non individuati. Con funzioni periodiche come sin x, gli zeri sono infiniti e occorre ragionare sulla periodicità; una sola prova non descrive tutta la retta reale.</p>
    </Sezione>
    <Sezione titolo="Errori frequenti nello studio del segno">
      <ul className="list-disc space-y-2 pl-6"><li>Moltiplicare una disequazione per un denominatore di segno sconosciuto: se è negativo, il verso cambia. Usa la tabella dei segni.</li><li>Includere gli zeri del denominatore nelle soluzioni con ≥ o ≤: non appartengono al dominio.</li><li>Confondere f(x) &gt; 0 con f′(x) &gt; 0: una funzione può essere positiva e decrescente, come 1/x per x &gt; 0.</li></ul>
    </Sezione>
    <Sezione titolo="Esercizi sul segno con soluzioni">
      <Soluzione esercizio="1. Risolvi (x + 1)/(x − 3) ≤ 0"><p>I punti da controllare sono −1 e 3. Il rapporto è positivo prima di −1, negativo tra −1 e 3, positivo dopo 3. Includi −1 perché annulla il numeratore ed escludi 3: la soluzione è [−1, 3).</p></Soluzione>
      <Soluzione esercizio="2. Studia il segno di (x − 2)²"><p>Il dominio è ℝ. Un quadrato non è negativo: la funzione è positiva per x ≠ 2 e nulla in 2. Non ci sono intervalli in cui sia negativa.</p></Soluzione>
      <Soluzione esercizio="3. Studia il segno di √(x + 2)/(x − 1)"><p>D = [−2, 1) ∪ (1, +∞). Il numeratore è zero in −2 e positivo per x &gt; −2. Il denominatore è negativo prima di 1 e positivo dopo. La funzione è nulla in −2, negativa in (−2, 1), positiva in (1, +∞).</p></Soluzione>
    </Sezione>
    <UsoCalcolatore />
  </>;
}

export function ApprofondimentoDerivata() {
  return <>
    <Sezione titolo="Dal rapporto incrementale alla tangente">
      <p>In un punto interno a del dominio, la derivata si definisce come il limite, per h → 0, di [f(a + h) − f(a)]/h, se esiste finito. Il rapporto misura la pendenza di una secante; il limite descrive la pendenza della tangente.</p>
      <Esempio titolo="Tangente alla parabola y = x² nel punto di ascissa 1">
        <p>Il rapporto incrementale è [(1 + h)² − 1]/h = (2h + h²)/h = 2 + h, per h ≠ 0. Passando al limite si ottiene f′(1) = 2. Poiché f(1) = 1, la tangente è y − 1 = 2(x − 1), ossia y = 2x − 1.</p>
        <p>La derivata 2 è la pendenza, non l’ordinata del punto: per scrivere la tangente servono entrambe le informazioni.</p>
      </Esempio>
    </Sezione>
    <Sezione titolo="Prodotto, quoziente e funzione composta">
      <p>Per funzioni derivabili, (uv)′ = u′v + uv′; (u/v)′ = (u′v − uv′)/v² dove v ≠ 0. Per una funzione composta F(g(x)), la regola della catena dà F′(g(x)) · g′(x). Prima individua la struttura della formula, poi scegli la regola.</p>
      <Esempio titolo="Composta: f(x) = (3x + 1)⁴"><p>La funzione esterna è la quarta potenza, quella interna è 3x + 1. Deriva la potenza e moltiplica per la derivata interna: f′(x) = 4(3x + 1)³ · 3 = 12(3x + 1)³. Omettere il fattore 3 è un errore frequente.</p></Esempio>
      <Esempio titolo="Quoziente: f(x) = (x − 1)/(x + 2)"><p>Per x ≠ −2, u′ = v′ = 1. Quindi f′(x) = [(x + 2) − (x − 1)]/(x + 2)² = 3/(x + 2)². La derivata è positiva su ciascuno degli intervalli (−∞, −2) e (−2, +∞).</p><p>La funzione è crescente su ognuno di questi intervalli, ma non su tutto il dominio considerato insieme: f(−3) = 4 e f(0) = −1. Non attraversare un punto escluso quando applichi un criterio di monotonia su un intervallo.</p></Esempio>
    </Sezione>
    <Sezione titolo="Crescenza ed estremi: un esempio con due punti stazionari">
      <Esempio titolo="f(x) = x³ − 3x">
        <p>Il dominio è ℝ. La derivata è f′(x) = 3x² − 3 = 3(x − 1)(x + 1). Si annulla in −1 e 1; è positiva per x &lt; −1 e x &gt; 1, negativa per −1 &lt; x &lt; 1.</p>
        <p>La funzione cresce fino a −1, decresce tra −1 e 1 e cresce dopo 1. In −1 il segno della derivata passa da + a −: c’è un massimo relativo con ordinata f(−1) = 2. In 1 passa da − a +: c’è un minimo relativo con ordinata f(1) = −2.</p>
        <p>Questi estremi non sono assoluti su ℝ: x³ − 3x tende a +∞ per x → +∞ e a −∞ per x → −∞. Su un intervallo chiuso e limitato, per una funzione continua, occorre confrontare anche i valori agli estremi dell’intervallo e negli eventuali punti non derivabili.</p>
      </Esempio>
    </Sezione>
    <Sezione titolo="Derivata nulla e non derivabilità: due casi da distinguere">
      <p>Per f(x) = x³ si ha f′(0) = 0, ma f′(x) = 3x² è positiva su entrambi i lati di 0: non c’è un massimo o un minimo. Una tangente orizzontale, da sola, non basta a classificare un estremo.</p>
      <p>Per f(x) = |x|, invece, 0 è un minimo assoluto pur non essendo un punto di derivabilità: la derivata a sinistra vale −1 e quella a destra +1. La condizione f′(a) = 0 è necessaria per un estremo locale interno solo se la funzione è derivabile in a.</p>
      <p>Anche dominio della funzione e dominio della derivata possono differire: √x esiste per x ≥ 0, mentre la formula della derivata 1/(2√x) vale per x &gt; 0 e non dà una derivata finita in 0.</p>
    </Sezione>
    <Sezione titolo="Esercizi sulle derivate con soluzioni">
      <Soluzione esercizio="1. Deriva x² · eˣ"><p>Applica il prodotto: f′(x) = 2x · eˣ + x² · eˣ = eˣ(x² + 2x). Derivare separatamente i fattori e moltiplicare le derivate darebbe un risultato errato.</p></Soluzione>
      <Soluzione esercizio="2. Deriva ln(2x + 1) e indica dove vale"><p>La funzione esiste per 2x + 1 &gt; 0, cioè x &gt; −1/2. Per la catena f′(x) = 2/(2x + 1), valida sullo stesso intervallo. Il denominatore positivo rende la funzione crescente.</p></Soluzione>
      <Soluzione esercizio="3. Classifica il punto stazionario di x⁴"><p>f′(x) = 4x³ si annulla in 0; è negativa prima di 0 e positiva dopo. Il punto (0, 0) è un minimo relativo e anche assoluto, perché x⁴ ≥ 0 per ogni x reale.</p></Soluzione>
    </Sezione>
    <UsoCalcolatore />
  </>;
}
