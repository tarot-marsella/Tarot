import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllCartaSlugs,
  getCartaBySlug,
  getPaloBySlug,
  getPaloColor,
} from '@/utils/arcanos-menores';
import styles from './page.module.css';

interface Props {
  params: Promise<{ palo: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllCartaSlugs().map(({ palo, slug }) => ({ palo, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { palo: paloSlug, slug } = await params;
  const result = getCartaBySlug(paloSlug, slug);
  if (!result) return { title: 'No encontrado' };

  const { palo, carta } = result;
  const desc = `${carta.meaning_upright.slice(0, 140)}. Significado en el ${palo.nameEs} del Tarot de Marsella.`;

  return {
    title: `${carta.name} | Significado en el ${palo.nameEs} | Tarot de Marsella`,
    description: desc,
    keywords: [
      carta.name.toLowerCase(),
      `${carta.name.toLowerCase()} tarot`,
      palo.nameEs.toLowerCase(),
      'tarot de marsella',
      ...carta.keywords,
    ],
    openGraph: {
      title: `${carta.name} — Tarot de Marsella`,
      description: desc,
      type: 'article',
    },
  };
}

function getRelatedCards(paloSlug: string, currentSlug: string, count = 3) {
  const palo = getPaloBySlug(paloSlug);
  if (!palo) return [];
  return palo.cartas.filter((c) => c.slug !== currentSlug).slice(0, count);
}

export default async function CartaPage({ params }: Props) {
  const { palo: paloSlug, slug } = await params;
  const result = getCartaBySlug(paloSlug, slug);

  if (!result) notFound();

  const { palo, carta } = result;
  const colors = getPaloColor(paloSlug);
  const related = getRelatedCards(paloSlug, slug, 4);

  const elementEmojis: Record<string, string> = {
    Fuego: '🔥',
    Agua: '💧',
    Aire: '🌬️',
    Tierra: '🌍',
  };
  const emoji = elementEmojis[palo.element] ?? '✨';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${carta.name} - Significado en el Tarot de Marsella`,
    description: `${carta.meaning_upright}. ${carta.meaning_reversed}.`,
    author: {
      '@type': 'Organization',
      name: 'TarotdeMarsella.cl',
      url: 'https://tarotdemarsella.cl',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TarotdeMarsella.cl',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${paloSlug}/${slug}`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://tarotdemarsella.cl' },
        { '@type': 'ListItem', position: 2, name: 'Aprendizaje', item: 'https://tarotdemarsella.cl/aprendizaje' },
        { '@type': 'ListItem', position: 3, name: 'Arcanos Menores', item: 'https://tarotdemarsella.cl/aprendizaje/arcanos-menores' },
        { '@type': 'ListItem', position: 4, name: palo.nameEs, item: `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${paloSlug}` },
        { '@type': 'ListItem', position: 5, name: carta.name, item: `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${paloSlug}/${slug}` },
      ],
    },
  };

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
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/aprendizaje">Aprendizaje</Link>
        <span>›</span>
        <Link href="/aprendizaje/arcanos-menores">Arcanos Menores</Link>
        <span>›</span>
        <Link href={`/aprendizaje/arcanos-menores/${paloSlug}`}>{palo.name}</Link>
        <span>›</span>
        <span aria-current="page">{carta.name}</span>
      </nav>

      <div className={styles.layout}>
        {/* Columna principal */}
        <article className={styles.article}>
          {/* Cabecera de carta */}
          <header className={styles.cardHeader}>
            <div className={styles.cardVisual}>
              <div className={styles.cardPlaceholder}>
                <span className={styles.cardEmoji}>{emoji}</span>
                <span className={styles.cardNum}>{carta.numero}</span>
              </div>
            </div>
            <div className={styles.cardMeta}>
              <div className={styles.paloBadge}>
                {emoji} {palo.nameEs} · {palo.element}
              </div>
              <h1 className={styles.cardTitle}>{carta.name}</h1>
              <div className={styles.keywords}>
                {carta.keywords.map((kw) => (
                  <span key={kw} className={styles.keyword}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Significados */}
          <section className={styles.meaningSection}>
            <div className={styles.meaningCard} data-type="upright">
              <div className={styles.meaningHeader}>
                <span className={styles.meaningIcon}>⬆️</span>
                <h2 className={styles.meaningTitle}>Significado Upright (Derecha)</h2>
              </div>
              <p className={styles.meaningText}>{carta.meaning_upright}</p>
            </div>

            <div className={styles.meaningCard} data-type="reversed">
              <div className={styles.meaningHeader}>
                <span className={styles.meaningIcon}>⬇️</span>
                <h2 className={styles.meaningTitle}>Significado Invertida (Al revés)</h2>
              </div>
              <p className={styles.meaningText}>{carta.meaning_reversed}</p>
            </div>
          </section>

          {/* Consejo */}
          <section className={styles.adviceSection}>
            <div className={styles.adviceCard}>
              <div className={styles.adviceIcon}>🔮</div>
              <div>
                <h2 className={styles.adviceTitle}>Consejo de la Carta</h2>
                <p className={styles.adviceText}>{carta.advice}</p>
              </div>
            </div>
          </section>

          {/* Navegación entre cartas del mismo palo */}
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Más cartas del {palo.nameEs}</h2>
            <div className={styles.relatedGrid}>
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/aprendizaje/arcanos-menores/${paloSlug}/${rel.slug}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedNum}>{rel.numero}</span>
                  <span className={styles.relatedName}>{rel.name}</span>
                  <span className={styles.relatedArrow}>→</span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Sobre este Palo</h3>
            <p className={styles.sidebarText}>{palo.description}</p>
            <Link
              href={`/aprendizaje/arcanos-menores/${paloSlug}`}
              className={styles.sidebarLink}
            >
              Ver las 14 cartas del {palo.name} →
            </Link>
          </div>

          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Palabras clave</h3>
            <div className={styles.sidebarKeywords}>
              {carta.keywords.map((kw) => (
                <span key={kw} className={styles.sidebarKw}>
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Elemento: {palo.element}</h3>
            <p className={styles.sidebarText}>
              {palo.element === 'Fuego' &&
                'El Fuego representa la voluntad, la energía vital y el impulso creador. Es el motor de la acción.'}
              {palo.element === 'Agua' &&
                'El Agua representa el mundo emocional, la intuición y el inconsciente. Es el origen del sentimiento.'}
              {palo.element === 'Aire' &&
                'El Aire representa el pensamiento, la comunicación y el conflicto. Es el poder de la mente.'}
              {palo.element === 'Tierra' &&
                'La Tierra representa la materia, el cuerpo y los recursos. Es la base de la manifestación concreta.'}
            </p>
          </div>

          <Link href="/tirada" className={styles.ctaButton}>
            🃏 Hacer una tirada de Tarot gratis
          </Link>
        </aside>
      </div>
    </main>
  );
}
