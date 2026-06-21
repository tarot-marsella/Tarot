import data from '@/data/arcanos-menores.json';

export interface CartaMenor {
  numero: number;
  slug: string;
  name: string;
  meaning_upright: string;
  meaning_reversed: string;
  advice: string;
  keywords: string[];
  image_url: string;
}

export interface Palo {
  slug: string;
  name: string;
  nameEs: string;
  element: string;
  keywords: string[];
  description: string;
  seoDescription: string;
  cartas: CartaMenor[];
}

export interface ArcanosMenoresData {
  palos: Palo[];
}

const arcanosMenoresData = data as ArcanosMenoresData;

/**
 * Devuelve todos los palos del Tarot de Marsella.
 */
export function getAllPalos(): Palo[] {
  return arcanosMenoresData.palos;
}

/**
 * Devuelve un palo por su slug (e.g., "bastos", "copas", "espadas", "oros").
 */
export function getPaloBySlug(slug: string): Palo | undefined {
  return arcanosMenoresData.palos.find((p) => p.slug === slug);
}

/**
 * Devuelve una carta específica dado el slug del palo y el slug de la carta.
 */
export function getCartaBySlug(
  paloSlug: string,
  cartaSlug: string
): { palo: Palo; carta: CartaMenor } | undefined {
  const palo = getPaloBySlug(paloSlug);
  if (!palo) return undefined;
  const carta = palo.cartas.find((c) => c.slug === cartaSlug);
  if (!carta) return undefined;
  return { palo, carta };
}

/**
 * Devuelve los slugs de todos los palos (para generateStaticParams).
 */
export function getAllPaloSlugs(): string[] {
  return arcanosMenoresData.palos.map((p) => p.slug);
}

/**
 * Devuelve todos los pares {palo, carta} aplanados (para generateStaticParams).
 */
export function getAllCartaSlugs(): { palo: string; slug: string }[] {
  const result: { palo: string; slug: string }[] = [];
  for (const palo of arcanosMenoresData.palos) {
    for (const carta of palo.cartas) {
      result.push({ palo: palo.slug, slug: carta.slug });
    }
  }
  return result;
}

/**
 * Devuelve el número ordinal en texto de una carta.
 */
export function getNumeroTexto(numero: number): string {
  const nombres: Record<number, string> = {
    1: 'As',
    2: 'Dos',
    3: 'Tres',
    4: 'Cuatro',
    5: 'Cinco',
    6: 'Seis',
    7: 'Siete',
    8: 'Ocho',
    9: 'Nueve',
    10: 'Diez',
    11: 'Sota',
    12: 'Caballo',
    13: 'Reina',
    14: 'Rey',
  };
  return nombres[numero] ?? `${numero}`;
}

/**
 * Devuelve el color asociado a cada palo para estilado dinámico.
 */
export function getPaloColor(paloSlug: string): {
  primary: string;
  secondary: string;
  gradient: string;
} {
  const colors: Record<string, { primary: string; secondary: string; gradient: string }> = {
    bastos: {
      primary: '#e8650a',
      secondary: '#c44d00',
      gradient: 'linear-gradient(135deg, #e8650a 0%, #c44d00 100%)',
    },
    copas: {
      primary: '#1a73c4',
      secondary: '#0d5a9e',
      gradient: 'linear-gradient(135deg, #1a73c4 0%, #0d5a9e 100%)',
    },
    espadas: {
      primary: '#64748b',
      secondary: '#475569',
      gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    },
    oros: {
      primary: '#d4af37',
      secondary: '#b8962e',
      gradient: 'linear-gradient(135deg, #d4af37 0%, #b8962e 100%)',
    },
  };
  return (
    colors[paloSlug] ?? {
      primary: '#6b21a8',
      secondary: '#581c87',
      gradient: 'linear-gradient(135deg, #6b21a8 0%, #581c87 100%)',
    }
  );
}
