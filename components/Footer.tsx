import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Tarot de Marsella</h3>
            <p>Descubre el significado profundo de los Arcanos Mayores a través de nuestra academia y lecturas interactivas.</p>
          </div>
          
          <div className={styles.links}>
            <h4>Explora</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/tirada">Tirada Gratis</Link></li>
              <li><Link href="/aprendizaje">Academia</Link></li>
              <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            <strong>Aviso Legal (Disclaimer):</strong> El contenido de este sitio web y las lecturas de Tarot se proporcionan 
            exclusivamente con fines de entretenimiento, reflexión personal y autoconocimiento. El Tarot no es una ciencia exacta y 
            sus mensajes no deben tomarse como verdades absolutas ni predicciones infalibles. En ningún caso la información aquí 
            ofrecida sustituye el asesoramiento profesional médico, psicológico, legal o financiero. Las decisiones tomadas a partir 
            de las lecturas son de exclusiva responsabilidad del usuario.
          </p>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Tarot de Marsella. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
