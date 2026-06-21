import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPaloSlugs, getPaloBySlug, getPaloColor } from '@/utils/arcanos-menores';
import styles from './page.module.css';

interface Props {
  params: Promise<{ palo: string }>;
}

export async function generateStaticParams() {
  return getAllPaloSlugs().map((slug) => ({ palo: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { palo: paloSlug } = await params;
  const palo = getPaloBySlug(paloSlug);
  if (!palo) return { title: 'No encontrado' };

  return {
    title: `${palo.nameEs} | Significado de las 14 Cartas | Tarot de Marsella`,
    description: palo.seoDescription,
    keywords: [
      palo.nameEs.toLowerCase(),
      'tarot de marsella',
      `${palo.name.toLowerCase()} tarot`,
      ...palo.keywords,
    ],
    openGraph: {
      title: `${palo.nameEs} del Tarot de Marsella`,
      description: palo.seoDescription,
      type: 'website',
    },
  };
}

const elementEmojis: Record<string, string> = {
  Fuego: '🔥',
  Agua: '💧',
  Aire: '🌬️',
  Tierra: '🌍',
};

const numeralNames: Record<number, string> = {
  1: 'As',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  11: 'Sota',
  12: 'Cab.',
  13: 'Reina',
  14: 'Rey',
};

export default async function PaloPage({ params }: Props) {
  const { palo: paloSlug } = await params;
  const palo = getPaloBySlug(paloSlug);

  if (!palo) notFound();

  const colors = getPaloColor(paloSlug);
  const emoji = elementEmojis[palo.element] ?? '✨';
  const numericCards = palo.cartas.filter((c) => c.numero <= 10);
  const courtCards = palo.cartas.filter((c) => c.numero > 10);

  return (
    <main
      className={styles.main}
      style={
        {
          '--palo-primary': colors.primary,
          '--palo-secondary': colors.secondary,
          '--palo-gradient': colors.gradient,
        } as React.CSSProperties
      }
    >
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/aprendizaje">Aprendizaje</Link>
        <span>›</span>
        <Link href="/aprendizaje/arcanos-menores">Arcanos Menores</Link>
        <span>›</span>
        <span aria-current="page">{palo.name}</span>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.elementBadge}>
          {emoji} {palo.element}
        </div>
        <h1 className={styles.heroTitle}>{palo.nameEs}</h1>
        <p className={styles.heroSubtitle}>{palo.description}</p>
        <div className={styles.keywords}>
          {palo.keywords.map((kw) => (
            <span key={kw} className={styles.keyword}>
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* Cartas Numéricas */}
      <section className={styles.cartasSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🃏</span>
          Cartas Numéricas
        </h2>
        <p className={styles.sectionSubtitle}>
          Del As al Diez — representan situaciones y energías concretas en el área del{' '}
          {palo.element.toLowerCase()}.
        </p>
        <div className={styles.cartasGrid}>
          {numericCards.map((carta) => (
            <Link
              key={carta.slug}
              href={`/aprendizaje/arcanos-menores/${paloSlug}/${carta.slug}`}
              className={styles.cartaCard}
            >
              <div className={styles.cartaNumber}>{numeralNames[carta.numero]}</div>
              <h3 className={styles.cartaName}>{carta.name}</h3>
              <p className={styles.cartaMeaning}>{carta.meaning_upright.slice(0, 90)}…</p>
              <div className={styles.cartaKeywords}>
                {carta.keywords.slice(0, 3).map((kw) => (
                  <span key={kw} className={styles.cartaKw}>
                    {kw}
                  </span>
                ))}
              </div>
              <span className={styles.cartaLink}>Ver significado →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Cartas de Corte */}
      <section className={styles.cartasSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>👑</span>
          Cartas de Corte
        </h2>
        <p className={styles.sectionSubtitle}>
          Sota, Caballo, Reina y Rey — representan personalidades, arquetipos y figuras que
          encarnan la energía del palo en su máxima expresión.
        </p>
        <div className={styles.cartasGrid}>
          {courtCards.map((carta) => (
            <Link
              key={carta.slug}
              href={`/aprendizaje/arcanos-menores/${paloSlug}/${carta.slug}`}
              className={`${styles.cartaCard} ${styles.courtCard}`}
            >
              <div className={styles.cartaNumber}>{numeralNames[carta.numero]}</div>
              <h3 className={styles.cartaName}>{carta.name}</h3>
              <p className={styles.cartaMeaning}>{carta.meaning_upright.slice(0, 90)}…</p>
              <div className={styles.cartaKeywords}>
                {carta.keywords.slice(0, 3).map((kw) => (
                  <span key={kw} className={styles.cartaKw}>
                    {kw}
                  </span>
                ))}
              </div>
              <span className={styles.cartaLink}>Ver significado →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Navegación entre palos */}
      <section className={styles.navSection}>
        <Link href="/aprendizaje/arcanos-menores" className={styles.backLink}>
          ← Ver todos los palos
        </Link>
      </section>

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${palo.nameEs} - Tarot de Marsella`,
            description: palo.seoDescription,
            url: `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${palo.slug}`,
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://tarotdemarsella.cl' },
                { '@type': 'ListItem', position: 2, name: 'Aprendizaje', item: 'https://tarotdemarsella.cl/aprendizaje' },
                { '@type': 'ListItem', position: 3, name: 'Arcanos Menores', item: 'https://tarotdemarsella.cl/aprendizaje/arcanos-menores' },
                { '@type': 'ListItem', position: 4, name: palo.nameEs, item: `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${palo.slug}` },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
