"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

const BLOG_ARTICLES = [
  { title: "Cómo Leer las Cartas del Tarot", slug: "como-leer-cartas-tarot-marsella" },
  { title: "Tirada de 3 Cartas Gratis", slug: "tirada-tarot-gratis-tres-cartas" },
  { title: "Significado de los 22 Arcanos", slug: "significado-arcanos-mayores-tarot-marsella" },
  { title: "Tarot Online Gratis", slug: "tarot-online-gratis" },
  { title: "El Loco: Significado Profundo", slug: "el-loco-tarot-marsella-significado" },
  { title: "Los Mejores Tarotistas Online", slug: "mejores-tarotistas-online" },
  { title: "Historia del Tarot de Marsella", slug: "historia-tarot-marsella" },
  { title: "Tirada de la Cruz Celta", slug: "tirada-cruz-celta-tarot" },
  { title: "Tarot del Amor Gratis", slug: "tarot-amor-gratis" },
  { title: "Cómo Hacer Preguntas al Tarot", slug: "como-hacer-preguntas-tarot" },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Tarot de Marsella</Link>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className={styles.hamburger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menú"
      >
        <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen1 : ""}`} />
        <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen2 : ""}`} />
        <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen3 : ""}`} />
      </button>

      <div className={`${styles.links} ${mobileOpen ? styles.linksOpen : ""}`}>
        <Link href="/aprendizaje" onClick={() => setMobileOpen(false)}>Arcanos Mayores</Link>
        <Link href="/tirada" onClick={() => setMobileOpen(false)}>Tirada Interactiva</Link>
        
        {/* Blog dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setBlogOpen(true)}
          onMouseLeave={() => setBlogOpen(false)}
        >
          <button
            className={styles.dropdownToggle}
            onClick={() => setBlogOpen(!blogOpen)}
            aria-expanded={blogOpen}
          >
            Blog
            <svg className={`${styles.chevron} ${blogOpen ? styles.chevronOpen : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {blogOpen && (
            <div className={styles.dropdownMenu}>
              <Link
                href="/blog"
                className={styles.dropdownHeader}
                onClick={() => { setBlogOpen(false); setMobileOpen(false); }}
              >
                Ver todos los artículos
              </Link>
              <div className={styles.dropdownDivider} />
              {BLOG_ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className={styles.dropdownItem}
                  onClick={() => { setBlogOpen(false); setMobileOpen(false); }}
                >
                  {article.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {status === "loading" ? (
          <span>...</span>
        ) : session ? (
          <>
            <Link href="/perfil" className={styles.profileLink} onClick={() => setMobileOpen(false)}>Perfil</Link>
            <button onClick={() => signOut()} className={styles.authBtn}>Cerrar Sesión</button>
          </>
        ) : (
          <button onClick={() => signIn("google")} className={styles.authBtn}>Iniciar con Google</button>
        )}
      </div>
    </nav>
  );
}
