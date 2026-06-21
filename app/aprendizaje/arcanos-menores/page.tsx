import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPalos, getPaloColor } from '@/utils/arcanos-menores';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Arcanos Menores del Tarot de Marsella | Los 56 Naipes Explicados',
  description:
    'Guía completa de los 56 Arcanos Menores del Tarot de Marsella: Bastos, Copas, Espadas y Oros. Significados upright y al revés, consejos y aplicaciones prácticas.',
  keywords: ['arcanos menores', 'tarot de marsella', 'bastos', 'copas', 'espadas', 'oros'],
  openGraph: {
    title: 'Arcanos Menores del Tarot de Marsella | Guía Completa',
    description:
      'Los 56 Arcanos Menores explicados en profundidad: los cuatro palos del Tarot de Marsella y el significado de cada carta.',
    type: 'website',
  },
};

const elementEmojis: Record<string, string> = {
  Fuego: '🔥',
  Agua: '💧',
  Aire: '🌬️',
  Tierra: '🌍',
};

export default function ArcanosMenoresPage() {
  const palos = getAllPalos();

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Silo de Aprendizaje</span>
        <h1 className={styles.heroTitle}>
          Los 56 <span className={styles.accent}>Arcanos Menores</span>
          <br />
          del Tarot de Marsella
        </h1>
        <p className={styles.heroSubtitle}>
          Los Arcanos Menores representan los eventos cotidianos, las situaciones prácticas y las
          energías que moldean nuestra vida diaria. Organizados en cuatro palos, cada uno
          corresponde a un elemento y un dominio de la experiencia humana.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Palos</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>56</span>
            <span className={styles.statLabel}>Cartas</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>14</span>
            <span className={styles.statLabel}>Por palo</span>
          </div>
        </div>
      </section>

      {/* Palos Grid */}
      <section className={styles.palosSection}>
        <h2 className={styles.sectionTitle}>Los Cuatro Palos</h2>
        <div className={styles.palosGrid}>
          {palos.map((palo) => {
            const colors = getPaloColor(palo.slug);
            const emoji = elementEmojis[palo.element] ?? '✨';
            return (
              <Link
                key={palo.slug}
                href={`/aprendizaje/arcanos-menores/${palo.slug}`}
                className={styles.paloCard}
                style={
                  {
                    '--palo-primary': colors.primary,
                    '--palo-secondary': colors.secondary,
                    '--palo-gradient': colors.gradient,
                  } as React.CSSProperties
                }
              >
                <div className={styles.paloEmoji}>{emoji}</div>
                <div className={styles.paloElement}>{palo.element}</div>
                <h3 className={styles.paloName}>{palo.nameEs}</h3>
                <p className={styles.paloDescription}>{palo.description}</p>
                <div className={styles.paloKeywords}>
                  {palo.keywords.map((kw) => (
                    <span key={kw} className={styles.keyword}>
                      {kw}
                    </span>
                  ))}
                </div>
                <div className={styles.paloFooter}>
                  <span className={styles.cartasCount}>{palo.cartas.length} cartas</span>
                  <span className={styles.paloArrow}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Diferencias con Arcanos Mayores */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2 className={styles.infoTitle}>¿Qué son los Arcanos Menores?</h2>
          <div className={styles.infoContent}>
            <p>
              Mientras que los <strong>Arcanos Mayores</strong> (los 22 triunfos) representan las
              grandes fuerzas arquetípicas y los momentos transformadores de la vida, los{' '}
              <strong>Arcanos Menores</strong> describen la textura de la experiencia cotidiana: las
              situaciones, emociones, pensamientos y circunstancias materiales que forman el tejido
              de nuestra existencia.
            </p>
            <p>
              En el Tarot de Marsella, los Arcanos Menores no tienen figuras ilustradas en las
              cartas numéricas (del As al 10); solo muestran los palos o símbolos distribuidos
              geométricamente. Esto los diferencia de versiones como el Rider-Waite y requiere un
              acercamiento basado en la numerología y la simbología elemental.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://tarotdemarsella.cl' },
              { '@type': 'ListItem', position: 2, name: 'Aprendizaje', item: 'https://tarotdemarsella.cl/aprendizaje' },
              { '@type': 'ListItem', position: 3, name: 'Arcanos Menores', item: 'https://tarotdemarsella.cl/aprendizaje/arcanos-menores' },
            ],
          }),
        }}
      />
    </main>
  );
}
