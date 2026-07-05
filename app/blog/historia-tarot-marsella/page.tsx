import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Historia del Tarot de Marsella | Origen y Evolución Completa SEO",
  description: "Descubre la historia del Tarot de Marsella, desde sus orígenes misteriosos en Italia hasta las restauraciones de Jodorowsky y Camoin.",
  alternates: {
    canonical: `${BASE_URL}/blog/historia-tarot-marsella`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "La Historia Completa del Tarot de Marsella: De Italia a la Psicomagia",
  description: "Descubre la historia del Tarot de Marsella, desde sus orígenes misteriosos en Italia hasta las restauraciones de Camoin y Jodorowsky.",
  author: {
    "@type": "Organization",
    name: "Tarot de Marsella",
    url: BASE_URL,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde se inventó originalmente el Tarot de Marsella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aunque su nombre definitivo hace honor a la ciudad francesa de Marsella, sus verdaderas raíces históricas se encuentran en el norte de Italia (Milán, Bolonia y Ferrara) a principios del siglo XV. En esa época, las barajas se pintaban a mano para la corte y eran conocidas como 'Trionfi' (triunfos), utilizándose como un juego lúdico de salón para la aristocracia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la principal diferencia histórica con el Tarot Rider-Waite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La gran diferencia radica en el diseño de los Arcanos Menores y el orden de los Arcanos Mayores. El Tarot de Marsella conserva ilustraciones puramente geométricas y numéricas en sus Arcanos Menores, mientras que el Rider-Waite (creado en 1909 por Arthur Edward Waite y Pamela Colman Smith) incluye ilustraciones con personajes humanos y escenas detalladas en las 78 cartas. Además, Waite intercambió el orden numérico tradicional de las cartas de La Justicia (VIII en el Marsella, XI en el Rider) y La Fuerza (XI en el Marsella, VIII en el Rider).",
      },
    },
    {
      "@type": "Question",
      name: "¿Quiénes fueron los principales impresores de cartas en Marsella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durante los siglos XVII y XVIII, la industria de cartas en Francia floreció enormemente. Entre los impresores más célebres de Marsella destacan Jean Noblet (quien imprimió un mazo icónico en París hacia 1650), Jean Dodal (en Lyon, hacia 1701) y Nicolas Conver (en Marsella, en 1760), cuya baraja se convirtió en el estándar clásico sobre el cual se basan la mayoría de las reproducciones y estudios modernos.",
      },
    },
  ],
};

export default function BlogPost7() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>La Historia Completa y Evolución del Tarot de Marsella</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 13 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            El <strong>Tarot de Marsella</strong> es, sin lugar a dudas, el mazo de cartas más estudiado, analizado y respetado de toda la historia de la cartomancia occidental. Antes de la aparición de las miles de variantes digitales para <Link href="/blog/tarot-online-gratis" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>leer cartas del tarot</Link> que pueblan internet en la actualidad, las láminas impresas mediante tacos de madera en las imprentas francesas ya dominaban el mercado espiritual europeo. Sin embargo, su historia es un viaje laberíntico de varios siglos que mezcla el arte renacentista, la industria del papel y el nacimiento del psicoanálisis moderno.
          </p>

          <h2>El Nacimiento en las Cortes Italianas del Siglo XV</h2>
          <p>
            A pesar del nombre con el que ha pasado a la posteridad, las raíces más antiguas de esta baraja esotérica no se encuentran en Francia, sino en el norte de Italia. A principios del siglo XV, en cortes refinadas como las de Milán, Ferrara y Bolonia, aparecieron los primeros mazos similares al tarot moderno. Estas cartas, ricamente pintadas a mano con láminas de pan de oro por artistas cortesanos (como la famosa baraja Visconti-Sforza), eran conocidas originalmente como <em>Trionfi</em> (triunfos) o <em>Tarocchi</em>.
          </p>
          <p>
            En sus orígenes, estas cartas no se empleaban para la adivinación o la meditación psicológica. Se trataba de un refinado juego de mesa de bazas (similar al bridge actual) practicado exclusivamente por la aristocracia. Sus imágenes combinaban la herencia cultural de la mitología grecorromana, la astrología medieval y las alegorías morales de la Iglesia Católica, reflejando el orden del cosmos renacentista.
          </p>

          <h2>La Migración a Francia y el Auge Industrial en Marsella</h2>
          <p>
            Al desatarse las guerras de Italia a finales del siglo XV y principios del siglo XVI, los soldados franceses descubrieron el juego de los <em>Tarocchi</em> y lo llevaron de vuelta a su patria, donde se popularizó bajo el nombre de <em>Jeu de Tarot</em>.
          </p>
          <p>
            Con el paso de las décadas, la fabricación de cartas de juego pasó de ser una artesanía de lujo pintada a mano a convertirse en una próspera industria papelera. La ciudad portuaria de Marsella, con su estratégica salida al mar Mediterráneo, abundantes fuentes de agua limpia necesarias para la producción de pulpa de papel e imprentas de grabado xilográfico (tacos de madera tallados a mano), se consolidó como el epicentro absoluto de exportación de cartas en toda Europa durante los siglos XVII y XVIII.
          </p>

          <div className={styles.ctaBox}>
            <h3>Conéctate con la Historia Viva</h3>
            <p>Nuestra herramienta digital gratuita utiliza la iconografía clásica y los colores históricos recuperados del Tarot de Marsella. Realiza tu lectura ahora mismo.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tirada" variant="primary">
                Iniciar Tirada Histórica
              </Button>
            </div>
          </div>

          <h2>Los Maestros Impresores y los Mazos de Referencia</h2>
          <p>
            La estandarización visual de las imágenes que hoy asociamos al Tarot de Marsella fue obra de una serie de maestros artesanos franceses que grabaron las planchas de madera que sirvieron para imprimir miles de mazos. Los historiadores del tarot dividen estas barajas clásicas en dos tipologías principales (Tarot de Marsella Tipo I y Tipo II):
          </p>
          <ul>
            <li>
              <strong>Jean Noblet (París, circa 1650):</strong> El mazo Tipo I más antiguo que se conserva completo. Sus figuras tienen rasgos más toscos pero cargados de detalles mágicos sutiles. En esta versión, por ejemplo, <Link href="/aprendizaje/el-loco" style={{ color: "var(--accent-gold)" }}>El Loco</Link> muestra sus genitales de forma explícita, representando la total anarquía y desapego social del bufón sagrado.
            </li>
            <li>
              <strong>Jean Dodal (Lyon, circa 1701):</strong> Otro mazo Tipo I sumamente influyente, cuyas cartas destacan por la intensidad de su trazado y la pureza de sus expresiones faciales, influyendo en gran medida en los ocultistas posteriores.
            </li>
            <li>
              <strong>Nicolas Conver (Marsella, 1760):</strong> Considerado el estándar definitivo del Tarot de Marsella Tipo II. Los grabados de Conver eran extremadamente finos y limpios. Su mazo sirvió como base para casi todas las reproducciones de tarotología contemporánea y fue la baraja que fascinó a los primeros ocultistas del siglo XIX.
            </li>
          </ul>

          <h2>El Siglo XVIII y XIX: De Juego Lúdico a Oráculo Ocultista</h2>
          <p>
            El giro definitivo de la baraja hacia los misterios esotéricos ocurrió en la segunda mitad del siglo XVIII. En 1781, el arqueólogo, clérigo y masón francés Antoine Court de Gébelin publicó un ensayo dentro de su monumental obra <em>Le Monde Primitif</em> donde aseguraba que el Tarot de Marsella no era un juego ordinario, sino la supervivencia camuflada del Libro de Thoth, un conjunto de jeroglíficos sagrados del antiguo Egipto que contenía la sabiduría de los sacerdotes herméticos.
          </p>
          <p>
            Aunque las teorías de Gébelin sobre el origen egipcio carecían de base científica real, encendieron una llama. Poco después, un peluquero reconvertido en adivino llamado Jean-Baptiste Alliette (bajo el pseudónimo de Etteilla) adaptó la baraja del Marsella, modificó algunas ilustraciones y fundó la cartomancia comercial moderna. En el siglo XIX, el ocultista Eliphas Lévi integró el tarot con la Cábala hebrea y la alquimia, asociando las 22 letras del alfabeto hebreo con los 22 Arcanos Mayores.
          </p>

          <h2>La Gran Restauración: El Legado de Jodorowsky y Camoin</h2>
          <p>
            Con la llegada del siglo XX y la industrialización, las planchas del Tarot de Marsella se redibujaron en imprentas baratas, perdiendo por el camino detalles geométricos vitales, códigos de color y líneas sutiles. El mazo se simplificó enormemente.
          </p>
          <p>
            En la década de 1990, el cineasta, escritor y creador de la psicomagia, Alejandro Jodorowsky, unió fuerzas con Philippe Camoin (descendiente directo de la última dinastía de impresores marselleses). Durante varios años de trabajo minucioso, recopilaron y compararon decenas de mazos históricos de todo el mundo utilizando modernas herramientas informáticas. Su objetivo era reconstruir el trazado de líneas y la paleta cromática original de 1760 de Nicolas Conver, recuperando símbolos perdidos como el huevo cósmico detrás de La Papisa o los colores sagrados en la indumentaria de <Link href="/aprendizaje/el-mago" style={{ color: "var(--accent-gold)" }}>El Mago</Link>.
          </p>
          <p>
            Esta monumental restauración redefinió el tarot contemporáneo. Hoy en día, el Tarot de Marsella ha dejado de verse exclusivamente como una herramienta de predicción supersticiosa. Psicólogos, terapeutas y artistas lo utilizan como un maravilloso instrumento de proyección psicológica, terapia y autodescubrimiento interior.
          </p>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre la Historia del Tarot</h2>

            <div className={styles.faqItem}>
              <h3>¿Dónde se inventó originalmente el Tarot de Marsella?</h3>
              <p>Aunque su nombre definitivo hace honor a la ciudad francesa de Marsella, sus verdaderas raíces históricas se encuentran en el norte de Italia (Milán, Bolonia y Ferrara) a principios del siglo XV. En esa época, las barajas se pintaban a mano para la corte y eran conocidas como 'Trionfi' (triunfos), utilizándose como un juego lúdico de salón para la aristocracia.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Cuál es la principal diferencia histórica con el Tarot Rider-Waite?</h3>
              <p>La gran diferencia radica en el diseño de los Arcanos Menores y el orden de los Arcanos Mayores. El Tarot de Marsella conserva ilustraciones puramente geométricas y numéricas en sus Arcanos Menores, mientras que el Rider-Waite (creado en 1909 por Arthur Edward Waite y Pamela Colman Smith) incluye ilustraciones con personajes humanos y escenas detalladas en las 78 cartas. Además, Waite intercambió el orden numérico tradicional de las cartas de La Justicia (VIII en el Marsella, XI en el Rider) y La Fuerza (XI en el Marsella, VIII en el Rider).</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Quiénes fueron los principales impresores de cartas en Marsella?</h3>
              <p>Durante los siglos XVII y XVIII, la industria de cartas en Francia floreció enormemente. Entre los impresores más célebres de Marsella destacan Jean Noblet (quien imprimió un mazo icónico en París hacia 1650), Jean Dodal (en Lyon, hacia 1701) y Nicolas Conver (en Marsella, en 1760), cuya baraja se convirtió en el estándar clásico sobre el cual se basan la mayoría de las reproducciones y estudios modernos.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
