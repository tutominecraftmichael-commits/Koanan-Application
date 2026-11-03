/**
 * LECTEUR D'EXPRESSIONS MATHÉMATIQUES (sans eval, sans exécution de code)
 *
 * Transforme une expression en x écrite comme au tableau en une fonction calculable,
 * pour tracer les courbes EXACTES des cours (fonctions de référence, par intervalles…).
 *
 * Accepte : nombres (3 ; 2.5 ; 2,5), x, + − × * / ^, parenthèses, |…| (valeur absolue),
 * multiplication implicite (2x, 3(x+1), 2|x|), notations ², ³, √ et les fonctions
 * sqrt, abs, E / floor (partie entière), exp, ln, sin, cos, tan.
 */

export type CompiledExpression = (x: number) => number;

type Token =
  | { kind: 'num'; value: number }
  | { kind: 'x' }
  | { kind: 'op'; value: '+' | '-' | '*' | '/' | '^' }
  | { kind: 'lparen' }
  | { kind: 'rparen' }
  | { kind: 'bar' }
  | { kind: 'func'; name: FuncName };

type FuncName = 'sqrt' | 'abs' | 'E' | 'exp' | 'ln' | 'sin' | 'cos' | 'tan';

const FUNCS: Record<string, FuncName> = {
  sqrt: 'sqrt', racine: 'sqrt', abs: 'abs', e: 'E', floor: 'E', ent: 'E',
  exp: 'exp', ln: 'ln', sin: 'sin', cos: 'cos', tan: 'tan',
};

const FUNC_IMPL: Record<FuncName, (v: number) => number> = {
  sqrt: Math.sqrt, abs: Math.abs, E: Math.floor, exp: Math.exp, ln: Math.log,
  sin: Math.sin, cos: Math.cos, tan: Math.tan,
};

function normalize(src: string): string {
  return src
    .replace(/[−–]/g, '-')
    .replace(/[×·]/g, '*')
    .replace(/÷/g, '/')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/√/g, ' sqrt ')
    .replace(/(\d),(\d)/g, '$1.$2');
}

function tokenize(src: string): Token[] {
  const s = normalize(src);
  const tokens: Token[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const value = Number(s.slice(i, j));
      if (!Number.isFinite(value)) throw new Error(`Nombre invalide « ${s.slice(i, j)} »`);
      tokens.push({ kind: 'num', value });
      i = j;
      continue;
    }
    if (/[a-zA-Z]/.test(c)) {
      let j = i;
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j++;
      const word = s.slice(i, j);
      const lower = word.toLowerCase();
      if (lower === 'x') {
        tokens.push({ kind: 'x' });
      } else if (lower === 'pi') {
        tokens.push({ kind: 'num', value: Math.PI });
      } else if (FUNCS[lower] && s[j] === '(') {
        tokens.push({ kind: 'func', name: FUNCS[lower] });
      } else if (FUNCS[lower] && lower === 'sqrt') {
        // √x écrit sans parenthèses : la racine porte sur le facteur suivant
        tokens.push({ kind: 'func', name: 'sqrt' });
      } else {
        throw new Error(`Symbole inconnu « ${word} »`);
      }
      i = j;
      continue;
    }
    if ('+-*/^'.includes(c)) { tokens.push({ kind: 'op', value: c as '+' | '-' | '*' | '/' | '^' }); i++; continue; }
    if (c === '(') { tokens.push({ kind: 'lparen' }); i++; continue; }
    if (c === ')') { tokens.push({ kind: 'rparen' }); i++; continue; }
    if (c === '|') { tokens.push({ kind: 'bar' }); i++; continue; }
    throw new Error(`Caractère inattendu « ${c} »`);
  }
  return tokens;
}

type Node = (x: number) => number;

class Parser {
  private pos = 0;
  private absDepth = 0;
  private readonly tokens: Token[];
  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse(): Node {
    const node = this.parseExpr();
    if (this.pos < this.tokens.length) throw new Error('Expression mal formée');
    return node;
  }

  private peek(): Token | undefined { return this.tokens[this.pos]; }

  private parseExpr(): Node {
    let left = this.parseTerm();
    for (;;) {
      const t = this.peek();
      if (t?.kind === 'op' && (t.value === '+' || t.value === '-')) {
        this.pos++;
        const right = this.parseTerm();
        const l = left;
        left = t.value === '+' ? (x) => l(x) + right(x) : (x) => l(x) - right(x);
      } else {
        return left;
      }
    }
  }

  private startsFactor(t: Token | undefined): boolean {
    if (!t) return false;
    if (t.kind === 'bar') return this.absDepth === 0; // dans |…|, une barre ferme la valeur absolue
    return t.kind === 'num' || t.kind === 'x' || t.kind === 'lparen' || t.kind === 'func';
  }

  private parseTerm(): Node {
    let left = this.parseUnary();
    for (;;) {
      const t = this.peek();
      if (t?.kind === 'op' && (t.value === '*' || t.value === '/')) {
        this.pos++;
        const right = this.parseUnary();
        const l = left;
        left = t.value === '*' ? (x) => l(x) * right(x) : (x) => l(x) / right(x);
      } else if (this.startsFactor(t)) {
        const right = this.parsePower();
        const l = left;
        left = (x) => l(x) * right(x);
      } else {
        return left;
      }
    }
  }

  private parseUnary(): Node {
    const t = this.peek();
    if (t?.kind === 'op' && (t.value === '-' || t.value === '+')) {
      this.pos++;
      const inner = this.parseUnary();
      return t.value === '-' ? (x) => -inner(x) : inner;
    }
    return this.parsePower();
  }

  private parsePower(): Node {
    const base = this.parsePrimary();
    const t = this.peek();
    if (t?.kind === 'op' && t.value === '^') {
      this.pos++;
      const exponent = this.parseUnary(); // associativité à droite : 2^3^2 = 2^(3^2)
      return (x) => Math.pow(base(x), exponent(x));
    }
    return base;
  }

  private parsePrimary(): Node {
    const t = this.peek();
    if (!t) throw new Error('Expression incomplète');
    this.pos++;
    switch (t.kind) {
      case 'num': { const v = t.value; return () => v; }
      case 'x': return (x) => x;
      case 'lparen': {
        const inner = this.parseExpr();
        if (this.peek()?.kind !== 'rparen') throw new Error('Parenthèse fermante manquante');
        this.pos++;
        return inner;
      }
      case 'bar': {
        this.absDepth++;
        const inner = this.parseExpr();
        this.absDepth--;
        if (this.peek()?.kind !== 'bar') throw new Error('Barre de valeur absolue fermante manquante');
        this.pos++;
        return (x) => Math.abs(inner(x));
      }
      case 'func': {
        const impl = FUNC_IMPL[t.name];
        const arg = this.peek()?.kind === 'lparen' ? this.parsePrimary() : this.parsePower();
        return (x) => impl(arg(x));
      }
      default:
        throw new Error('Expression mal formée');
    }
  }
}

const cache = new Map<string, CompiledExpression>();

/** Compile une expression en x. Lève une erreur explicite (en français) si elle est mal écrite. */
export function compileExpression(expr: string): CompiledExpression {
  const cached = cache.get(expr);
  if (cached) return cached;
  const fn = new Parser(tokenize(expr)).parse();
  cache.set(expr, fn);
  return fn;
}

/** Version tolérante : renvoie null au lieu de lever une erreur (pour l'affichage). */
export function tryCompileExpression(expr: string): CompiledExpression | null {
  try {
    return compileExpression(expr);
  } catch {
    return null;
  }
}
