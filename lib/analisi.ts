import { parse, derivative, simplify, type MathNode } from "mathjs";

// Tutte le sezioni e il grafico condividono la stessa espressione compilata.
export function normalizzaFunzione(input: string): string {
  return input.trim().replace(/[−–]/g, "-").replace(/[×·⋅]/g, "*")
    .replace(/²/g, "^2").replace(/³/g, "^3").replace(/π/g, "pi")
    .replace(/√/g, "sqrt").replace(/:/g, "/")
    .replace(/\bln\s*\(/gi, "log(").replace(/\bsen\s*\(/gi, "sin(")
    .replace(/\btg\s*\(/gi, "tan(").replace(/\bx(\d+)\b/g, "x^$1");
}
const funzioni = new Set(["log", "sqrt", "sin", "cos", "tan", "asin", "acos", "atan", "abs", "exp"]);
function albero(input: string): MathNode {
  const node = parse(normalizzaFunzione(input));
  node.traverse(n => {
    if (n.type === "SymbolNode" && !["x", "pi", "e", ...funzioni].includes(n.toString()))
      throw new Error(`Simbolo non riconosciuto: ${n.toString()}`);
    if (!["OperatorNode", "ParenthesisNode", "FunctionNode", "SymbolNode", "ConstantNode"].includes(n.type))
      throw new Error("Inserisci una sola espressione matematica.");
    if (n.type === "FunctionNode" && !funzioni.has((n as unknown as {name:string}).name))
      throw new Error("Funzione non supportata.");
  });
  return node;
}
type Valutatore = (x: number) => number | null;
function compila(node: MathNode): Valutatore {
  const code = node.compile();
  return x => {
    try {
      const y: unknown = code.evaluate({ x });
      return typeof y === "number" && Number.isFinite(y) ? y : null;
    } catch { return null; }
  };
}
const cache = new Map<string, Valutatore>();
export function valutaFunzione(input: string, x: number): number | null {
  try {
    const key = normalizzaFunzione(input);
    let fn = cache.get(key);
    if (!fn) {
      fn = compila(albero(key));
      if (cache.size >= 64) cache.clear();
      cache.set(key, fn);
    }
    return fn(x);
  } catch { return null; }
}
function testo(x: number): string {
  if (!Number.isFinite(x)) return x < 0 ? "-∞" : "+∞";
  if (Math.abs(x - Math.round(x)) < 1e-8) return String(Math.round(x));
  for (let n = 2; n <= 100; n++) if (Math.abs(Math.abs(x) - Math.sqrt(n)) < 1e-8)
    return `${x < 0 ? "-" : ""}√${n}`;
  return x.toFixed(6).replace(/0+$/, "").replace(/\.$/, "");
}
function unici(xs: number[]): number[] {
  return xs.filter(Number.isFinite).sort((a,b)=>a-b).filter((x,i,a)=>!i || Math.abs(x-a[i-1])>1e-7);
}
type Nodo = MathNode & { args?: MathNode[]; content?: MathNode; op?: string; name?: string; value?: number };
// Coefficienti in ordine crescente; i polinomi hanno radici isolate usando
// anche le radici della derivata, così si trovano gli zeri di molteplicità pari.
function polinomio(node: MathNode): number[] | null {
  const n = node as Nodo;
  if (n.content) return polinomio(n.content);
  if (n.type === "ConstantNode") return [Number(n.value)];
  if (n.type === "SymbolNode") return n.name === "x" ? [0,1] : null;
  if (n.type !== "OperatorNode" || !n.args) return null;
  const a = polinomio(n.args[0]);
  if (!a) return null;
  if (n.args.length === 1) return n.op === "-" ? a.map(x=>-x) : a;
  const b = polinomio(n.args[1]);
  if (!b) return null;
  if (n.op === "+" || n.op === "-") return Array.from({length:Math.max(a.length,b.length)},(_,i)=>(a[i]||0)+(n.op==="+"?1:-1)*(b[i]||0));
  if (n.op === "*") {
    const c = Array(a.length+b.length-1).fill(0) as number[];
    a.forEach((v,i)=>b.forEach((w,j)=>c[i+j]+=v*w)); return c;
  }
  if (n.op === "/" && b.length === 1 && b[0] !== 0) return a.map(x=>x/b[0]);
  if (n.op === "^" && b.length === 1 && Number.isInteger(b[0]) && b[0]>=0 && b[0]<=16) {
    let c = [1];
    for (let k=0;k<b[0];k++) {
      const d = Array(c.length+a.length-1).fill(0) as number[];
      c.forEach((v,i)=>a.forEach((w,j)=>d[i+j]+=v*w)); c=d;
    } return c;
  }
  return null;
}
function bisezione(fn: Valutatore, a: number, b: number): number | null {
  let fa=fn(a); const fb=fn(b);
  if (fa===null || fb===null || fa*fb>=0) return null;
  for (let i=0;i<80;i++) {
    const m=(a+b)/2, fm=fn(m);
    if (fm===null) return null;
    if (fm===0) return m;
    if (fa*fm<0) b=m; else { a=m; fa=fm; }
  }
  const x=(a+b)/2, y=fn(x);
  // Una variazione di segno attraverso un polo non è uno zero.
  return y!==null && Math.abs(y)<1e-7 ? x : null;
}
function radiciPolinomio(coeff: number[]): number[] {
  const c=[...coeff]; while(c.length>1 && c[c.length-1]===0) c.pop();
  if(c.length<2) return [];
  if(c.length===2) return [-c[0]/c[1]];
  const bound=1+Math.max(...c.slice(0,-1).map(x=>Math.abs(x/c[c.length-1])));
  const fn: Valutatore=x=>c.reduceRight((s,v)=>s*x+v,0);
  const critical=radiciPolinomio(c.slice(1).map((v,i)=>v*(i+1))).filter(x=>Math.abs(x)<bound);
  const xs=[-bound,...critical,bound], roots=critical.filter(x=>Math.abs(fn(x)!)<1e-9);
  for(let i=0;i<xs.length-1;i++) { const r=bisezione(fn,xs[i],xs[i+1]); if(r!==null) roots.push(r); }
  return unici(roots);
}
function radici(node: MathNode, valida: Valutatore = ()=>1): number[] {
  const p=polinomio(node), fn=compila(node);
  if(p) return radiciPolinomio(p).filter(x=>valida(x)!==null);
  const roots:number[]=[];
  // Risoluzione numerica dichiaratamente limitata a [-100,100].
  let a=-100, fa=valida(a)!==null ? fn(a) : null;
  for(let i=1;i<=20000;i++) {
    const b=-100+i/100, fb=valida(b)!==null ? fn(b) : null;
    if(fb===0) roots.push(b);
    if(fa!==null && fb!==null && fa*fb<0) {
      const r=bisezione(x=>valida(x)===null ? null : fn(x),a,b);
      if(r!==null) roots.push(r);
    }
    a=b; fa=fb;
  }
  // Zeri tangenti in fattori polinomiali (es. (x-0.123)^2 * exp(x)).
  node.traverse(n=> { const q=polinomio(n); if(q && q.length>1) {
    for(const x of radiciPolinomio(q)) if(valida(x)!==null && Math.abs(fn(x)??Infinity)<1e-9) roots.push(x);
  }});
  return unici(roots);
}
type Condizione = { fn: Valutatore; tipo: "positivo" | "nonnegativo" | "nonzero" };
function condizioni(node: MathNode): { condizioni: Condizione[]; confini: number[]; completo: boolean } {
  const cs:Condizione[]=[], confini:number[]=[]; let completo=true;
  function add(n:MathNode,tipo:Condizione["tipo"]) {
    const v=n as Nodo;
    if(v.content) { add(v.content,tipo); return; }
    if(v.type==="FunctionNode" && v.name==="sqrt" && v.args) {
      add(v.args[0],tipo==="nonnegativo"?"nonnegativo":"positivo"); return;
    }
    if(v.type==="FunctionNode" && v.name==="log" && v.args && tipo==="nonzero") {
      add(parse(`(${v.args[0].toString()})-1`),"nonzero"); return;
    }
    cs.push({fn:compila(n),tipo}); confini.push(...radici(n));
    if(!polinomio(n)) completo=false;
  }
  node.traverse(raw=> {
    const n=raw as Nodo, args=n.args||[];
    if(n.op==="/") add(args[1],"nonzero");
    if(n.op==="^" && args.length===2) {
      const exp=compila(args[1])(0);
      if(args[1].filter(n=>n.type==="SymbolNode" && n.toString()==="x").length) completo=false;
      else if(exp!==null && !Number.isInteger(exp)) add(args[0],exp<0?"positivo":"nonnegativo");
      else if(exp!==null && exp<0) add(args[0],"nonzero");
    }
    if(n.type==="FunctionNode") {
      if(n.name==="log") {
        add(args[0],"positivo");
        if(args[1]) { add(args[1],"positivo"); add(parse(`(${args[1].toString()})-1`),"nonzero"); }
      }
      if(n.name==="sqrt") add(args[0],"nonnegativo");
      if(n.name==="asin" || n.name==="acos") add(parse(`1-(${args[0].toString()})^2`),"nonnegativo");
      if(n.name==="tan") { add(parse(`cos(${args[0].toString()})`),"nonzero"); completo=false; }
    }
  });
  return {condizioni:cs,confini:unici(confini),completo};
}
function campione(a:number,b:number):number {
  if(a===-Infinity && b===Infinity) return 0;
  if(a===-Infinity) return b-Math.max(1,Math.abs(b));
  if(b===Infinity) return a+Math.max(1,Math.abs(a));
  return (a+b)/2;
}
function intervallo(a:number,b:number):string {return `(${testo(a)}, ${testo(b)})`;}
function modello(input:string) {
  const node=albero(input), raw=compila(node), d=condizioni(node);
  const valida:Valutatore=x=> {
    for(const c of d.condizioni) {
      const y=c.fn(x);
      if(y===null || (c.tipo==="positivo"?y<=0:c.tipo==="nonnegativo"?y<0:y===0)) return null;
    }
    return raw(x);
  };
  const bounds=[-Infinity,...d.confini,Infinity];
  const parti=bounds.slice(0,-1).map((a,i)=>({a,b:bounds[i+1]})).filter(v=>valida(campione(v.a,v.b))!==null);
  return {node,fn:valida,...d,parti};
}
export function calcolaDominio(input:string):string {
  const m=modello(input);
  if(!m.completo) return "Dominio non risolto globalmente: condizioni di esistenza verificate numericamente in [-100, 100].";
  if(!m.condizioni.length) return "ℝ";
  const pezzi=m.parti.map(({a,b})=>`${Number.isFinite(a)&&m.fn(a)!==null?"[":"("}${testo(a)}, ${testo(b)}${Number.isFinite(b)&&m.fn(b)!==null?"]":")"}`);
  for(const x of m.confini) if(m.fn(x)!==null && !m.parti.some(p=>p.a===x || p.b===x)) pezzi.push(`{${testo(x)}}`);
  return pezzi.join(" ∪ ") || "∅";
}
function derivataNode(input:string,ordine:number):MathNode {
  let n=albero(input); for(let i=0;i<ordine;i++) n=derivative(n,"x");
  try { return simplify(n); } catch { return n; }
}
export function calcolaDerivata(input:string):string {try{return derivataNode(input,1).toString();}catch{return "Non determinabile";}}
export function calcolaDerivataSeconda(input:string):string {try{return derivataNode(input,2).toString();}catch{return "Non determinabile";}}
function punti(input:string,ordine:number):number[] { const m=modello(input); return radici(ordine?derivataNode(input,ordine):m.node,m.fn); }
function coordinate(input:string,xs:number[]):string {const fn=modello(input).fn;return xs.map(x=>`(${testo(x)}, ${testo(fn(x)!)})`).join(" ; ");}
export function calcolaIntersezioniX(input:string):string {return coordinate(input,punti(input,0)) || "Nessuna intersezione trovata (ricerca numerica in [-100, 100])";}
export function calcolaIntersezioneY(input:string):string {const y=modello(input).fn(0);return y===null?"Non esiste":`(0, ${testo(y)})`;}
export function calcolaPuntiCritici(input:string):string {try{return coordinate(input,punti(input,1))||"Nessun punto stazionario trovato in [-100, 100]";}catch{return "Non determinabile";}}
function segni(input:string,ordine:number,positivo:string,negativo:string):string {
  const m=modello(input), n=ordine?derivataNode(input,ordine):m.node, fn=compila(n);
  const roots=radici(n,m.fn), bounds=[-Infinity,...unici([...roots,...m.confini]),Infinity];
  const risultati:string[]=[];
  for(let i=0;i<bounds.length-1;i++) {
    const a=bounds[i],b=bounds[i+1], x=campione(a,b);
    if(m.fn(x)===null) continue;
    const y=fn(x); if(y===null) continue;
    risultati.push(`${intervallo(a,b)} → ${y>0?positivo:y<0?negativo:"0"}`);
  }
  return risultati.join(" | ") || "Non determinabile";
}
export function calcolaSegno(input:string):string {return segni(input,0,"+","-");}
export function calcolaCrescenza(input:string):string {try{return segni(input,1,"crescente","decrescente");}catch{return "Non determinabile";}}
export function calcolaConcavita(input:string):string {try{return segni(input,2,"convessa","concava");}catch{return "Non determinabile";}}
function cambi(input:string,ordine:number):{x:number;sinistra:number;destra:number}[] {
  const m=modello(input), fn=compila(derivataNode(input,ordine)), roots=punti(input,ordine);
  return roots.flatMap((x,i)=> {
    const vicino=Math.min(...[...m.confini,...roots.filter((_,j)=>i!==j)].map(v=>Math.abs(v-x)),1);
    const h=Math.min(1e-4,vicino/4);
    if(h<=0 || m.fn(x-h)===null || m.fn(x+h)===null) return [];
    const l=fn(x-h),r=fn(x+h);
    return l!==null && r!==null && l*r<0 ? [{x,sinistra:l,destra:r}] : [];
  });
}
export function calcolaFlessi(input:string):string {try{return coordinate(input,cambi(input,2).map(p=>p.x))||"Nessun flesso trovato in [-100, 100]";}catch{return "Non determinabile";}}
export function calcolaMassimiMinimi(input:string):string {try{return cambi(input,1).map(p=>`${p.sinistra<0?"minimo":"massimo"} relativo: ${coordinate(input,[p.x])}`).join(" ; ")||"Nessun estremo stazionario trovato in [-100, 100]";}catch{return "Non determinabile";}}
export function calcolaAsintotiVerticali(input:string):string {
  const m=modello(input);
  const xs=m.confini.filter(x=>[-1,1].some(s=> {
    const ys=[1e-3,1e-5,1e-7].map(h=>m.fn(x+s*h));
    return ys.every(y=>y!==null) && Math.abs(ys[2]!)>Math.abs(ys[1]!)*1.2 && Math.abs(ys[1]!)>Math.abs(ys[0]!)*1.2;
  }));
  return xs.map(x=>`x = ${testo(x)} (stima numerica)`).join(" ; ")||"Nessun asintoto verticale trovato";
}
export function calcolaAsintotiOrizzontali(input:string):string {
  const fn=modello(input).fn, res:string[]=[];
  for(const s of [-1,1]) {
    const ys=[1e4,1e5,1e6].map(x=>fn(s*x));
    if(ys.every(y=>y!==null) && Math.abs(ys[2]!-ys[1]!)<1e-4 && Math.abs(ys[1]!-ys[0]!)<1e-3)
      res.push(`y ≈ ${testo(ys[2]!)} per x → ${s<0?"-∞":"+∞"}`);
  } return res.join(" | ")||"Nessun asintoto orizzontale trovato";
}
export function calcolaAsintotiObliqui(input:string):string {
  const fn=modello(input).fn,res:string[]=[];
  for(const s of [-1,1]) {
    const x=s*1e5,y1=fn(x),y2=fn(2*x),y3=fn(4*x);
    if(y1===null || y2===null || y3===null) continue;
    const m=(y2-y1)/x,q=y1-m*x;
    // Terzo campione indipendente: due punti definiscono sempre una retta.
    if(Math.abs(m)>1e-6 && Math.abs(y3-(m*4*x+q))<1e-3)
      res.push(`y ≈ ${testo(m)}x ${q<0?"-":"+"} ${testo(Math.abs(q))} per x → ${s<0?"-∞":"+∞"}`);
  }return res.join(" | ")||"Nessun asintoto obliquo trovato";
}
export function calcolaStudioCompleto(input:string) {
  albero(input); // Un input errato deve raggiungere il messaggio di errore della pagina.
  return {funzione:input,dominio:calcolaDominio(input),intersezioniX:calcolaIntersezioniX(input),intersezioneY:calcolaIntersezioneY(input),segno:calcolaSegno(input),derivataPrima:calcolaDerivata(input),puntiCritici:calcolaPuntiCritici(input),crescenza:calcolaCrescenza(input),estremi:calcolaMassimiMinimi(input),derivataSeconda:calcolaDerivataSeconda(input),concavita:calcolaConcavita(input),flessi:calcolaFlessi(input),asintotiVerticali:calcolaAsintotiVerticali(input),asintotiOrizzontali:calcolaAsintotiOrizzontali(input),asintotiObliqui:calcolaAsintotiObliqui(input)};
}

export function campionaGrafico(input:string,min=-8,max=8,numero=1600):Array<Array<[number,number]>> {
  if(!Number.isFinite(min)||!Number.isFinite(max)||max<=min) throw new Error("Finestra non valida");
  const m=modello(input), tratti:Array<Array<[number,number]>>=[];
  let tratto:Array<[number,number]>=[], precedente:number|null=null;
  const n=Math.max(2,Math.min(10000,Math.floor(numero)));
  for(let i=0;i<=n;i++) {
    const x=min+(max-min)*i/n,y=m.fn(x);
    const taglio=precedente!==null && m.confini.some(b=>b>precedente! && b<=x);
    if(y===null || taglio) {if(tratto.length>1)tratti.push(tratto);tratto=[];}
    if(y!==null) tratto.push([x,y]); precedente=x;
  }
  if(tratto.length>1)tratti.push(tratto);return tratti;
}
