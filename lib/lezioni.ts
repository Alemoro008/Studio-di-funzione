export type Lezione = {
  slug: string; titolo: string; descrizione: string; categoria: "Metodo" | "Studio svolto";
  obiettivo: string; prerequisiti: string; formula?: string;
  sezioni: { titolo: string; paragrafi: string[]; formula?: string }[];
  domanda: string; risposta: string; correlati: string[];
};

export const lezioni: Lezione[] = [
  {
    slug: "continuita-e-discontinuita", titolo: "Continuità e discontinuità: buchi, salti e asintoti",
    descrizione: "Distingui valore della funzione e limite con esempi di discontinuità eliminabile, a salto e infinita.", categoria: "Metodo",
    obiettivo: "Decidere se un punto manca dal grafico, se i due rami si raccordano e quando un denominatore nullo produce davvero un asintoto.", prerequisiti: "Dominio e limiti laterali.",
    sezioni: [
      { titolo: "I tre controlli della continuità", paragrafi: [
        "Dire che f è continua in un punto a del dominio significa che il limite per x che tende ad a coincide con f(a). Per un punto interno devi controllare tre cose: f(a) esiste, il limite bilatero esiste finito e i due valori sono uguali. Un disegno che sembra unito non è una dimostrazione: un buco può essere troppo piccolo per apparire sullo schermo.",
        "Agli estremi del dominio si considera il limite relativo al dominio. Per esempio √x è continua in 0: il valore è 0 e il limite destro è 0. Non serve un limite sinistro lungo valori negativi, perché non appartengono al dominio reale. Questo evita di dichiarare discontinua qualsiasi funzione che inizi da un estremo incluso."
      ] },
      { titolo: "Discontinuità eliminabile: il punto che si può completare", formula: "(x² − 1)/(x − 1) = x + 1, solo per x ≠ 1", paragrafi: [
        "Il denominatore originale esclude 1. Dopo la scomposizione, il limite sia da sinistra sia da destra vale 2. Il grafico è dunque la retta y = x + 1 senza il punto (1, 2). Non c’è un asintoto verticale: il limite è finito. La cancellazione del fattore aiuta a trovare il limite, ma non modifica retroattivamente il dominio.",
        "Puoi definire una nuova funzione assegnando il valore 2 in 1: questa estensione è continua. Se assegni invece 7, il limite resta 2 e la nuova funzione non è continua in quel punto. Il valore in un singolo punto non determina il limite, che riguarda valori vicini."
      ] },
      { titolo: "Un salto finito e una divergenza sono situazioni diverse", paragrafi: [
        "Considera f(x) = 0 per x < 0 e f(x) = 1 per x ≥ 0. In 0 il limite sinistro è 0 e quello destro è 1. Sono entrambi finiti, ma diversi: il limite bilatero non esiste e la discontinuità è a salto. Nessuna scelta del solo f(0) può far coincidere questi due limiti.",
        "Per f(x) = 1/(x − 1), invece, il limite sinistro in 1 è −∞ e quello destro è +∞: x = 1 è un asintoto verticale. Anche un solo limite laterale infinito lungo il dominio basta per un asintoto verticale. Il denominatore nullo è un candidato da esaminare, non una prova sufficiente."
      ] },
      { titolo: "Quando il limite non esiste nemmeno lateralmente", paragrafi: [
        "La funzione sin(1/x), definita per x ≠ 0, oscilla vicino a 0 senza avvicinarsi a un solo valore. Lungo x = 1/(π/2 + 2kπ) vale 1; lungo x = 1/(3π/2 + 2kπ) vale −1. Entrambe le successioni tendono a 0 da destra. Il limite destro quindi non esiste: non è né un salto finito né una divergenza infinita.",
        "Nel lavoro su carta annota per ogni punto critico: appartiene al dominio? Qual è il limite sinistro? Qual è il limite destro? Qual è f(a), se esiste? Questa piccola scheda separa i dati ed evita conclusioni affrettate dal grafico. Nel calcolatore, le oscillazioni rapide possono sfuggire al campionamento."
      ] }
    ], domanda: "Se f(2) = 5 e il limite in 2 è 3, posso dire che il limite non esiste?",
    risposta: "No. Il limite esiste e vale 3; la funzione non è continua in 2 perché 3 ≠ 5. Per renderla continua basta cambiare il valore in 2 in 3, senza cambiare i valori vicini.", correlati: ["/dominio-di-una-funzione", "/limiti-e-asintoti", "/lezioni/derivata-seconda-e-flessi"]
  },
  {
    slug: "derivata-seconda-e-flessi", titolo: "Derivata seconda e flessi: il cambio di concavità",
    descrizione: "Usa il segno della derivata seconda, distingui flessi ed estremi e riconosci quando f″ = 0 non basta.", categoria: "Metodo",
    obiettivo: "Ricostruire la curvatura di una funzione e giustificare un flesso con il cambio di concavità.", prerequisiti: "Derivata prima, dominio e disequazioni.",
    sezioni: [
      { titolo: "La concavità descrive come cambia la pendenza", paragrafi: [
        "Su un intervallo in cui esiste f″, il segno positivo indica che f′ cresce: le tangenti diventano progressivamente più inclinate verso l’alto. Si parla di funzione convessa, o di concavità verso l’alto. Se f″ è negativa, f′ diminuisce e la concavità è verso il basso. Queste parole descrivono la curvatura e non dicono se la funzione sia sopra l’asse x.",
        "La funzione −x² è concava verso il basso e cresce per x < 0: concavità e monotonia sono due informazioni indipendenti. Per la prima studi f″; per la seconda studi f′. Quando costruisci il grafico, usa entrambe: ogni tratto ha una direzione di movimento e una curvatura."
      ] },
      { titolo: "Il test corretto per un flesso", paragrafi: [
        "Nel caso regolare di una funzione due volte derivabile vicino ad a, cerca i candidati risolvendo f″(x) = 0. Poi verifica che f″ cambi segno ai lati di ciascun candidato e che il punto appartenga al grafico. Il cambio da positivo a negativo o viceversa certifica il cambio di concavità. La sola equazione f″(a) = 0 non basta.",
        "Per x⁴, f″(x) = 12x² si annulla in 0, ma è positiva da entrambe le parti. L’origine è un minimo, non un flesso. Per x³, invece, f″(x) = 6x passa da negativa a positiva in 0: l’origine è un flesso. In questo secondo caso f′(0) = 0, quindi la tangente è orizzontale."
      ] },
      { titolo: "Un flesso può avere una tangente inclinata", formula: "f(x) = x³ + x; f′(x) = 3x² + 1; f″(x) = 6x", paragrafi: [
        "La derivata prima è sempre positiva, quindi la funzione cresce su tutta la retta e non ha estremi relativi. La derivata seconda cambia segno in 0: c’è comunque un flesso nell’origine. La tangente ha coefficiente angolare 1, perché f′(0) = 1, e quindi equazione y = x.",
        "Per trovare la tangente in un punto a usa y = f(a) + f′(a)(x − a). Prima devi calcolare l’ordinata del punto: un’ascissa da sola non identifica un punto del grafico. Nei risultati numerici conserva cifre sufficienti per non confondere due punti vicini, come il massimo e il flesso di ln(x)/x."
      ] },
      { titolo: "Punti esclusi e casi fuori dal test elementare", paragrafi: [
        "Per 1/x si ha f″(x) = 2/x³: concavità negativa a sinistra di 0 e positiva a destra. Ma 0 non è nel dominio, quindi non esiste un flesso nell’origine. Ci sono due rami distinti separati da un asintoto verticale. Spezza sempre la tabella anche nei punti esclusi dal dominio, senza trasformarli in flessi.",
        "Esistono flessi in cui f″ non è definita: il test basato soltanto sugli zeri della derivata seconda non copre ogni funzione. Per esempio la radice cubica di x ha tangente verticale e cambia concavità in 0. Il calcolatore cerca principalmente flessi regolari tramite gli zeri di f″; per valori assoluti, cuspidi e tangenti verticali serve un esame laterale dedicato."
      ] }
    ], domanda: "La funzione x⁵ ha un estremo nell’origine, dove f′ e f″ sono entrambe nulle?",
    risposta: "No. f′ = 5x⁴ è positiva ai due lati, quindi non cambia monotonia. f″ = 20x³ cambia segno: (0, 0) è un flesso con tangente orizzontale, non un estremo.", correlati: ["/derivata-prima", "/studi-di-funzione-svolti", "/lezioni/continuita-e-discontinuita"]
  },
  {
    slug: "simmetrie-e-trasformazioni", titolo: "Simmetrie e trasformazioni del grafico",
    descrizione: "Verifica funzioni pari e dispari, traslazioni e riflessioni senza confondere segno e posizione.", categoria: "Metodo",
    obiettivo: "Usare una simmetria per controllare il grafico e capire come si spostano dominio, zeri ed estremi.", prerequisiti: "Sostituzione in una formula e lettura di coordinate.",
    sezioni: [
      { titolo: "Prima la simmetria del dominio", paragrafi: [
        "Per parlare di funzione pari o dispari, il dominio deve contenere −x ogni volta che contiene x. Un intervallo come (0, +∞) non è simmetrico rispetto a 0: ln x non è né pari né dispari nel suo dominio reale. Un dominio simmetrico è necessario, ma non sufficiente: devi ancora confrontare f(−x) e f(x).",
        "Per una funzione pari vale f(−x) = f(x): il grafico si riflette sull’asse y. Per una dispari vale f(−x) = −f(x): la simmetria è centrale rispetto all’origine. Se una funzione dispari è definita in 0, allora f(0) = −f(0), quindi f(0) = 0. Non puoi applicare questa conclusione a 1/x, che è dispari ma non è definita in 0."
      ] },
      { titolo: "Due verifiche algebriche, senza affidarsi al disegno", paragrafi: [
        "Per f(x) = x²/(x² − 1), il dominio esclude ±1 ed è simmetrico. Sostituendo −x ottieni (−x)²/((−x)² − 1) = x²/(x² − 1): la funzione è pari. Un estremo a destra avrà un punto simmetrico con la stessa ordinata a sinistra, se le condizioni di estremo sono soddisfatte.",
        "Per g(x) = x³ − 3x, g(−x) = −x³ + 3x = −g(x): è dispari. Il massimo (−1, 2) corrisponde al minimo (1, −2). La simmetria è utile come controllo: se un calcolo desse due massimi con quelle ascisse, dovresti cercare un errore nella classificazione."
      ] },
      { titolo: "Traslazioni: il segno dentro la parentesi inganna", formula: "g(x) = f(x − a) + b: il punto (u, f(u)) diventa (u + a, f(u) + b)", paragrafi: [
        "La formula f(x − 2) sposta il grafico di 2 verso destra: per ottenere lo stesso argomento u devi inserire x = u + 2. La formula f(x) + 3 sposta invece ogni ordinata di 3 verso l’alto. Per esempio (x − 2)² + 3 ha vertice (2, 3), dominio ℝ e nessuno zero reale.",
        "Anche le esclusioni dal dominio si spostano. Partendo da 1/x, la funzione 1/(x − 2) + 3 ha dominio ℝ escluso 2, asintoto verticale x = 2 e orizzontale y = 3. Non cercare gli zeri copiando quelli della funzione iniziale: devi risolvere la nuova equazione, qui 1/(x − 2) + 3 = 0, che dà x = 5/3."
      ] },
      { titolo: "Riflessioni e valore assoluto", paragrafi: [
        "Il grafico di −f(x) si riflette rispetto all’asse x; quello di f(−x) rispetto all’asse y. Per |f(x)|, i tratti con f(x) ≥ 0 restano dove sono e quelli negativi vengono ribaltati verso l’alto. Il dominio resta quello di f e gli zeri restano gli stessi. Nei punti in cui f attraversa l’asse con pendenza non nulla possono comparire punti angolosi.",
        "Disegna per esempio |x² − 1| separando x² − 1 ≥ 0 e x² − 1 < 0. All’esterno di [−1, 1] resta la parabola x² − 1; all’interno diventa 1 − x². Nell’origine c’è un massimo relativo, mentre in ±1 ci sono minimi angolosi. Una trasformazione grafica è rapida, ma la classificazione dei punti richiede ancora un controllo."
      ] }
    ], domanda: "La funzione (x − 2)² è pari perché contiene soltanto un quadrato?",
    risposta: "No: f(−x) = (x + 2)² è diversa da f(x). Il grafico è simmetrico rispetto alla retta x = 2, non rispetto all’asse y. Essere pari riguarda proprio la simmetria rispetto a x = 0.", correlati: ["/dominio-di-una-funzione", "/lezioni/studio-valore-assoluto", "/studi-di-funzione-svolti"]
  },
  {
    slug: "errori-studio-di-funzione", titolo: "Controllare uno studio di funzione: otto errori da riconoscere",
    descrizione: "Una revisione ragionata di dominio, zeri, estremi, flessi e asintoti con controesempi concreti.", categoria: "Metodo",
    obiettivo: "Scoprire contraddizioni nel proprio svolgimento prima di disegnare il grafico finale.", prerequisiti: "Aver provato almeno uno studio completo.",
    sezioni: [
      { titolo: "1–2. Semplificare il dominio e perdere uno zero", paragrafi: [
        "L’espressione (x² − 1)/(x − 1) si riduce a x + 1 solo per x ≠ 1. Scrivere dominio ℝ dopo la cancellazione recupera un punto che la funzione originale non possiede. Il controllo è semplice: conserva sempre, in una riga separata, le condizioni della formula iniziale.",
        "Per un prodotto A(x)B(x) = 0, gli zeri vengono da entrambi i fattori, nel dominio. In (x² − 4)ln(x² − 1)/(x² − 1), cercare soltanto x² − 4 = 0 perde gli zeri del logaritmo: ln(x² − 1) = 0 dà x² − 1 = 1, cioè ±√2. Tutti e quattro i valori ±√2 e ±2 sono ammessi."
      ] },
      { titolo: "3–4. Usare la derivata per il segno o scambiare candidati per estremi", paragrafi: [
        "Il segno di f dice dove il grafico è sopra o sotto l’asse x. Il segno di f′ dice dove cresce o decresce. La funzione −eˣ è sempre negativa e sempre decrescente: non c’è nessun conflitto. Tieni distinte le tabelle e scrivi quale espressione stai studiando in ciascuna.",
        "L’equazione f′(a) = 0 trova punti stazionari, non certifica massimi o minimi. Per x³, la derivata è 3x² e si annulla in 0, ma il segno è positivo ai due lati: non c’è estremo. Inoltre un minimo può stare in un punto non derivabile, come |x| in 0, o all’estremo di un dominio: la sola ricerca degli zeri di f′ non è completa."
      ] },
      { titolo: "5–6. Chiamare flesso ogni zero di f″ o ogni cambio tra rami", paragrafi: [
        "Per x⁴, f″(0) = 0 ma la concavità resta verso l’alto: nessun flesso. Devi controllare i segni ai lati del candidato. Non basta neppure una derivata prima nulla: x³ e x⁴ hanno entrambe tangente orizzontale nell’origine, con comportamenti diversi.",
        "Per 1/x la concavità cambia passando da x < 0 a x > 0, ma manca il punto centrale: 0 non appartiene al dominio. Non esiste un flesso in un punto che non sta sul grafico. Nelle tabelle distingui gli zeri delle derivate dai punti esclusi; entrambi separano intervalli, ma hanno significati diversi."
      ] },
      { titolo: "7–8. Dedurre un asintoto dal denominatore o fidarsi dello zoom", paragrafi: [
        "Un denominatore nullo può dare un buco, come (x² − 1)/(x − 1) in 1. Per certificare un asintoto verticale serve un limite laterale infinito. Per una retta obliqua non basta che il disegno sembri rettilineo: devi trovare m finito e non nullo e q finito, e verificare che f(x) − (mx + q) tenda a zero nella direzione studiata.",
        "Il grafico numerico mostra un numero finito di campioni. Un ramo lontano può restare fuori finestra e un’oscillazione rapida può sembrare una fascia piena o sparire. Controlla sempre che dominio, segno e limiti concordino con il disegno. Se non concordano, individua il passaggio da rivedere: non cambiare il risultato analitico solo per adattarlo alla figura."
      ] },
      { titolo: "Una revisione finale in tre minuti", paragrafi: [
        "Scegli un punto di prova in ogni intervallo del segno e sostituiscilo nella formula originale. Verifica le coordinate degli estremi ricalcolando f(a). Controlla che gli zeri trovati siano ammessi, che i limiti laterali siano studiati soltanto dal dominio e che le simmetrie abbiano un dominio simmetrico.",
        "Infine descrivi a parole il percorso di ogni ramo, da un confine del dominio all’altro. Se non riesci a collegare posizione rispetto agli assi, monotonia, curvatura e comportamento ai bordi, manca un’informazione o due risultati sono incompatibili. Questa descrizione è anche un buon modo per preparare un’interrogazione."
      ] }
    ], domanda: "Un risultato del calcolatore diverso dal mio dimostra che ho sbagliato?",
    risposta: "No. Confronta dominio e passaggi analitici; le ricerche numeriche possono perdere radici o punti singolari. Usa un controesempio, una sostituzione o una derivazione indipendente per individuare quale conclusione non è giustificata.", correlati: ["/metodo-e-limiti", "/esercizi", "/lezioni/studio-logaritmica-composta"]
  },
  {
    slug: "studio-esponenziale", titolo: "Studio completo di f(x) = x e⁻ˣ",
    descrizione: "Un’esponenziale con massimo assoluto, flesso e asintoto orizzontale: tutti i passaggi e il grafico.", categoria: "Studio svolto", formula: "x*exp(-x)",
    obiettivo: "Studiare un prodotto tra polinomio ed esponenziale e distinguere il massimo dal flesso.", prerequisiti: "Regola del prodotto, catena e limiti con esponenziali.",
    sezioni: [
      { titolo: "Dominio, simmetrie e segno", paragrafi: [
        "L’esponenziale e⁻ˣ è definita e strettamente positiva per ogni x reale: il dominio è ℝ. Sostituendo −x ottieni −xeˣ, che non coincide né con f(x) né con −f(x): la funzione non è pari né dispari. Gli unici vincoli allo studio vengono quindi dai cambi di segno e dalle derivate, non da esclusioni del dominio.",
        "Poiché e⁻ˣ non si annulla, xe⁻ˣ = 0 equivale a x = 0. L’origine è l’unica intersezione con entrambi gli assi. Il segno è quello di x: negativo per x < 0, nullo in 0, positivo per x > 0. Non dividere l’equazione per x prima di cercarne gli zeri: perderesti proprio la soluzione 0."
      ] },
      { titolo: "Limiti e asintoti", paragrafi: [
        "Per x → +∞, scrivi f(x) = x/eˣ. L’esponenziale cresce più rapidamente del polinomio, quindi il limite è 0. Puoi verificarlo con de l’Hôpital nella forma ∞/∞: il rapporto delle derivate è 1/eˣ, che tende a 0. L’asintoto orizzontale destro è y = 0, raggiunto dall’alto perché f è positiva per x > 0.",
        "Per x → −∞ poni t = −x: f(x) = −teᵗ e tende a −∞. Non c’è un asintoto orizzontale sinistro. Inoltre f(x)/x = e⁻ˣ tende a +∞ da quel lato, perciò non c’è una pendenza obliqua finita. Non ci sono asintoti verticali, perché la funzione è continua e finita in ogni punto reale."
      ] },
      { titolo: "Derivata prima: il massimo assoluto", formula: "f′(x) = e⁻ˣ − xe⁻ˣ = e⁻ˣ(1 − x)", paragrafi: [
        "Il fattore esponenziale è positivo, quindi f′ ha il segno di 1 − x. La funzione cresce su (−∞, 1), è stazionaria in 1 e decresce su (1, +∞). Il punto (1, 1/e) è un massimo relativo. È anche assoluto: a sinistra tutti i valori sono raggiunti durante la crescita verso il massimo; a destra durante la successiva discesa.",
        "Non esiste minimo assoluto, poiché la funzione è illimitata inferiormente a sinistra. L’immagine è (−∞, 1/e]. Il valore massimo è circa 0,367879: una scala verticale molto ampia può rendere poco visibile la parte positiva del grafico, senza che questa smetta di esistere."
      ] },
      { titolo: "Derivata seconda: il flesso dopo il massimo", formula: "f″(x) = −e⁻ˣ(1 − x) − e⁻ˣ = e⁻ˣ(x − 2)", paragrafi: [
        "La derivata seconda è negativa per x < 2 e positiva per x > 2. Il flesso è (2, 2/e²), circa (2; 0,270671). Qui la derivata prima vale −1/e², quindi la tangente è inclinata e discendente: y = (4 − x)/e². Massimo e flesso hanno ascisse diverse e rispondono a due domande diverse.",
        "Per ricostruire il grafico parti da sinistra in basso: la funzione cresce, passa per l’origine e raggiunge il massimo in 1. Poi scende ancora con concavità verso il basso fino a 2. Dopo il flesso continua a scendere, ma si appiattisce verso l’asintoto y = 0. L’avvicinamento all’asintoto non crea un nuovo minimo."
      ] }
    ], domanda: "Perché e⁻ˣ tende a 0 a destra ma f non tende a 0 anche a sinistra?",
    risposta: "Quando x → −∞, −x → +∞ e quindi e⁻ˣ cresce senza limite. Il prodotto con x negativo tende a −∞. Devi sostituire il verso corretto nell’esponente prima di applicare un limite noto.", correlati: ["/derivata-prima", "/limiti-e-asintoti", "/lezioni/derivata-seconda-e-flessi"]
  },
  {
    slug: "studio-irrazionale", titolo: "Studio completo di f(x) = √(x² − 1)",
    descrizione: "Dominio a due rami, minimi agli estremi, tangenti verticali e due asintoti obliqui per una funzione irrazionale.", categoria: "Studio svolto", formula: "sqrt(x^2-1)",
    obiettivo: "Gestire estremi inclusi nel dominio e limiti diversi a destra e a sinistra.", prerequisiti: "Disequazioni quadratiche, radici e razionalizzazione.",
    sezioni: [
      { titolo: "Dominio, parità e intersezioni", paragrafi: [
        "La radice quadrata richiede x² − 1 ≥ 0, cioè x ≤ −1 oppure x ≥ 1. Il dominio è (−∞, −1] ∪ [1, +∞): gli estremi sono inclusi, perché la radice di zero è ammessa. Nell’intervallo (−1, 1) non ci sono punti reali del grafico. In particolare non esiste l’intersezione con l’asse y.",
        "La funzione è pari, dato che (−x)² = x² e il dominio è simmetrico. La radice è sempre non negativa e si annulla soltanto in ±1. Gli zeri sono dunque (−1, 0) e (1, 0); il segno è positivo in entrambi gli intervalli aperti esterni. Sono già due minimi assoluti, perché nessun valore del grafico può essere negativo."
      ] },
      { titolo: "Ai bordi: tangenti verticali, non asintoti verticali", paragrafi: [
        "Avvicinandoti a −1 dal dominio lo fai da sinistra; a 1 da destra. In entrambi i casi f tende a 0, che coincide con il valore della funzione. Non ci sono asintoti verticali. La funzione è continua sul proprio dominio, compresi i due estremi.",
        "La pendenza diventa invece infinita. In 1 il rapporto incrementale destro è √(h(2 + h))/h = √((2 + h)/h), per h > 0, e tende a +∞. C’è una semitangente verticale x = 1. Analogamente sul ramo sinistro la pendenza tende a −∞ vicino a −1. Una tangente verticale riguarda la pendenza, un asintoto verticale riguarda un valore di funzione che diverge."
      ] },
      { titolo: "A infinito bisogna ricordare √(x²) = |x|", paragrafi: [
        "A destra, √(x² − 1) − x = −1/(√(x² − 1) + x) tende a 0: l’asintoto è y = x. A sinistra, √(x² − 1) + x = −1/(√(x² − 1) − x) tende a 0: l’asintoto è y = −x. I denominatori ottenuti razionalizzando crescono in valore positivo nelle rispettive direzioni.",
        "Non puoi sostituire √(x²) con x su tutta la retta: per x negativo vale −x. La funzione tende a +∞ in entrambe le direzioni, quindi non ci sono asintoti orizzontali. Entrambi i rami restano sotto le rispettive rette oblique, perché √(x² − 1) < |x| negli intervalli aperti del dominio."
      ] },
      { titolo: "Derivate, monotonia e concavità", formula: "f′(x) = x/√(x² − 1); f″(x) = −1/(x² − 1)^(3/2)", paragrafi: [
        "Le derivate valgono negli intervalli aperti x < −1 e x > 1. Il denominatore di f′ è positivo, quindi la funzione decresce sul ramo sinistro e cresce su quello destro. Non ci sono punti stazionari: x = 0 non appartiene al dominio. I due minimi agli estremi esistono comunque, mostrando perché cercare soltanto f′ = 0 non trova tutti gli estremi.",
        "La derivata seconda è negativa su entrambi i rami: la concavità è sempre verso il basso nei rispettivi intervalli. Non ci sono flessi. Per disegnare basta costruire il ramo destro che parte da (1, 0) con semitangente verticale, cresce e si avvicina a y = x dal basso; poi rifletterlo rispetto all’asse y. L’immagine è [0, +∞)."
      ] }
    ], domanda: "Il fatto che f′ diverga in 1 significa che f diverge in 1?",
    risposta: "No. In 1 il valore della funzione è 0 e il limite destro è 0. È la pendenza a diventare infinita: il grafico ha una semitangente verticale, senza asintoto verticale.", correlati: ["/dominio-di-una-funzione", "/lezioni/simmetrie-e-trasformazioni", "/limiti-e-asintoti"]
  },
  {
    slug: "studio-logaritmica-composta", titolo: "Studio di (x² − 4) ln(x² − 1)/(x² − 1)",
    descrizione: "Una funzione composta con quattro zeri, due minimi e due flessi: analisi esatta e approssimazioni dichiarate.", categoria: "Studio svolto", formula: "((x^2-4)*ln(x^2-1))/(x^2-1)",
    obiettivo: "Combinare i vincoli del logaritmo con il segno di un prodotto e ridurre le derivate usando t = x² − 1.", prerequisiti: "Logaritmi, catena, quozienti e ricerca numerica di radici.",
    sezioni: [
      { titolo: "Il logaritmo determina il dominio", paragrafi: [
        "Occorre x² − 1 > 0 per il logaritmo; il denominatore richiede anche x² − 1 ≠ 0, condizione già soddisfatta. Il dominio è (−∞, −1) ∪ (1, +∞), non la retta privata soltanto di ±1. Poiché la formula dipende solo da x², la funzione è pari. Basta studiare un ramo e controllare il suo simmetrico.",
        "Nel dominio il denominatore è positivo. Il numeratore si annulla se x² − 4 = 0 oppure ln(x² − 1) = 0. La prima equazione dà ±2; la seconda richiede x² − 1 = 1 e dà ±√2. Sono quattro intersezioni con l’asse x, tutte ammesse. Non c’è intersezione con l’asse y, perché 0 è escluso."
      ] },
      { titolo: "Segno e limiti con t = x² − 1", formula: "t > 0; f(x) = (1 − 3/t) ln t", paragrafi: [
        "Per 0 < t < 1, entrambi i fattori sono negativi e f è positiva. Per 1 < t < 3, il primo è negativo e il logaritmo positivo: f è negativa. Per t > 3 è positiva. Tornando a x, f > 0 per |x| > 2 e per 1 < |x| < √2; f < 0 per √2 < |x| < 2. Gli estremi ±√2 e ±2 sono gli zeri.",
        "Per x → 1⁺ o x → −1⁻, t → 0⁺ e (1 − 3/t)ln t → +∞. Le rette x = ±1 sono asintoti verticali, dai soli lati accessibili. Per |x| → ∞, t → ∞, ln t/t → 0 e f = ln t − 3 ln t/t → +∞. Non ci sono asintoti orizzontali. Il rapporto f(x)/x tende a 0, quindi non c’è nemmeno un asintoto obliquo con pendenza non nulla."
      ] },
      { titolo: "Derivata prima: due minimi, con ascisse numeriche", formula: "f′(x) = 2x(t − 3 + 3 ln t)/t², con t = x² − 1", paragrafi: [
        "Definisci A(t) = t − 3 + 3 ln t. La sua derivata è 1 + 3/t > 0: A è strettamente crescente per t > 0. Tende a −∞ in 0⁺ e a +∞ all’infinito, quindi ha una sola radice t₀. Con una ricerca numerica t₀ ≈ 1,596520 e a = √(t₀ + 1) ≈ 1,611372. Questi valori sono approssimazioni, non soluzioni esatte elementari.",
        "Sul ramo destro f′ è negativa in (1, a) e positiva in (a, +∞): c’è un minimo in (a, f(a)), con f(a) ≈ −0,411260. Per parità c’è un minimo anche in −a. Sul ramo sinistro f decresce in (−∞, −a) e cresce in (−a, −1). Entrambi i minimi sono assoluti; non ci sono massimi."
      ] },
      { titolo: "Derivata seconda e unicità dei flessi", formula: "f″(x) = 2H(t)/t³; H(t) = −t² + 13t + 18 − (9t + 12) ln t", paragrafi: [
        "Derivando rispetto a t si ottiene H′(t) = −2t + 4 − 9 ln t − 12/t e H″(t) = −2 − 9/t + 12/t². Il numeratore di H″ si annulla una sola volta per t > 0, in c = (√177 − 9)/4 ≈ 1,076034. H′ cresce fino a c e poi decresce; anche il suo massimo H′(c) ≈ −9,964 è negativo. Quindi H è strettamente decrescente.",
        "H tende a +∞ in 0⁺ e a −∞ all’infinito: possiede una sola radice positiva, circa 3,313139. Ne segue b = √(t + 1) ≈ 2,076810. La concavità è verso l’alto per 1 < |x| < b e verso il basso per |x| > b. I flessi sono circa (−2,076810; 0,113218) e (2,076810; 0,113218). Il grafico deve rispettare quattro zeri, due minimi e questi due cambi di curvatura: è un controllo efficace dei risultati automatici."
      ] }
    ], domanda: "Perché non posso studiare solo il segno di x² − 4?",
    risposta: "Perché ln(x² − 1) è negativo tra 1 e √2 in valore assoluto e positivo oltre √2. Il suo segno cambia il prodotto e introduce due ulteriori zeri. Devi studiare entrambi i fattori nel dominio.", correlati: ["/segno-di-una-funzione", "/lezioni/derivata-seconda-e-flessi", "/metodo-e-limiti"]
  },
  {
    slug: "studio-valore-assoluto", titolo: "Studio di f(x) = |x² − 1|: minimi senza derivata nulla",
    descrizione: "Scrivi il valore assoluto a tratti e studia punti angolosi, estremi e concavità senza applicare male il test f′ = 0.", categoria: "Studio svolto", formula: "abs(x^2-1)",
    obiettivo: "Riconoscere gli estremi non derivabili e usare le derivate laterali.", prerequisiti: "Segno di un trinomio e derivate di polinomi.",
    sezioni: [
      { titolo: "Togliere il valore assoluto nel modo corretto", formula: "f(x) = x² − 1 se |x| ≥ 1; f(x) = 1 − x² se |x| < 1", paragrafi: [
        "Il valore assoluto conserva una quantità non negativa e cambia segno a una negativa. Prima risolvi x² − 1 ≥ 0: ottieni x ≤ −1 oppure x ≥ 1. In questi intervalli mantieni x² − 1; tra −1 e 1 usa il suo opposto 1 − x². Nei punti di raccordo entrambe le formule danno 0.",
        "Il dominio è ℝ e la funzione è pari. Gli zeri sono ±1, mentre f(0) = 1: le intersezioni sono (−1, 0), (1, 0) e (0, 1) con l’asse y. La funzione è positiva ovunque tranne negli zeri. La simmetria e la non negatività permettono già di escludere molte forme sbagliate del grafico."
      ] },
      { titolo: "Continuità e derivate laterali nei raccordi", paragrafi: [
        "Essendo composizione di funzioni continue, f è continua su ℝ. Puoi verificarlo anche a tratti: vicino a ±1 i due rami tendono a 0, valore della funzione. La continuità non implica però la derivabilità. All’esterno la derivata è 2x, all’interno è −2x.",
        "In −1, la derivata sinistra è −2 e quella destra è 2. In 1, la derivata sinistra è −2 e quella destra è 2. I limiti delle pendenze sono finiti ma diversi: entrambi i raccordi sono punti angolosi. Non assegnare loro derivata 0 soltanto perché sono punti più bassi dei vicini."
      ] },
      { titolo: "Monotonia ed estremi", paragrafi: [
        "Per x < −1, 2x è negativa: f decresce. Tra −1 e 0, −2x è positiva: f cresce. Tra 0 e 1, −2x è negativa: f decresce. Per x > 1, 2x è positiva: f cresce. I cambi di direzione in ±1 producono due minimi assoluti di valore 0. Il cambio in 0 produce un massimo relativo di valore 1.",
        "Il massimo nell’origine non è assoluto, perché f tende a +∞ in entrambe le direzioni. L’immagine è [0, +∞). Il teorema di Fermat richiede che la funzione sia derivabile nel punto interno di estremo: non può essere applicato ai punti angolosi ±1. Per questo uno strumento che cerca soltanto gli zeri della derivata può non elencare tutti gli estremi."
      ] },
      { titolo: "Concavità, limiti e lettura del grafico", paragrafi: [
        "Negli intervalli esterni f″ = 2, quindi la concavità è verso l’alto; nell’intervallo interno f″ = −2, quindi è verso il basso. Nei raccordi ±1 non c’è una tangente unica: trattali come punti angolosi, senza classificarli automaticamente come flessi regolari. La sola equazione f″ = 0 non rileva ciò che avviene nei raccordi.",
        "Per |x| grande, f coincide esattamente con x² − 1. Non ha asintoti orizzontali né obliqui: il rapporto f(x)/x diverge in valore assoluto. Non ha asintoti verticali perché è continua su ℝ. Disegna una parabola rivolta verso l’alto nei tratti esterni e l’arco di 1 − x² tra −1 e 1: ottieni due punte in basso e un arco centrale in alto."
      ] }
    ], domanda: "Posso derivare |u(x)| sostituendo sempre la derivata di u(x)?",
    risposta: "No. Dove u > 0 la derivata è u′; dove u < 0 è −u′. Nei punti con u = 0 devi controllare le derivate laterali: la funzione può essere derivabile oppure avere un punto angoloso, a seconda di u.", correlati: ["/derivata-prima", "/lezioni/simmetrie-e-trasformazioni", "/metodo-e-limiti"]
  }
];
