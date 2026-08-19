"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Tarot de Marsella</Link>
        </div>
        <div className={styles.links}>
          <Link href="/aprendizaje">Arcanos</Link>
          <Link href="/tiradas">Tiradas</Link>
          <Link href="/tirada">Lectura Gratis</Link>
          <Link href="/blog">Estudia</Link>
          {status === "loading" ? (
            <span className={styles.loadingDot}>···</span>
          ) : session ? (
            <>
              <Link href="/perfil" className={styles.profileLink}>
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "Perfil"}
                    className={styles.avatar}
                  />
                ) : (
                  <span className={styles.avatarFallback}>
                    {session.user?.name?.charAt(0) || "U"}
                  </span>
                )}
                <span>Perfil</span>
              </Link>
              <button onClick={() => signOut()} className={styles.authBtnSecondary}>
                Salir
              </button>
            </>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className={styles.authBtn}
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {loginOpen && (
        <div className={styles.modalOverlay} onClick={() => setLoginOpen(false)}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
          >
            <button
              className={styles.modalClose}
              onClick={() => setLoginOpen(false)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalStar}>✦</div>
              <h2 id="login-modal-title" className={styles.modalTitle}>
                Accede al Arcano
              </h2>
              <p className={styles.modalSubtitle}>
                Guarda tus lecturas y lleva un diario de tus tiradas
              </p>
            </div>

            <div className={styles.modalBody}>
              <button
                id="google-signin-btn"
                className={styles.googleBtn}
                onClick={() => signIn("google", { callbackUrl: "/perfil" })}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar con Google
              </button>

              <p className={styles.privacyNote}>
                Al acceder, aceptas que guardemos tu historial de lecturas de
                forma privada y segura.
              </p>
            </div>

            <div className={styles.modalDivider}>
              <span>✦ ✦ ✦</span>
            </div>

            <div className={styles.modalFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📖</span>
                <span>Historial de lecturas</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🌙</span>
                <span>Diario personal del Tarot</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✨</span>
                <span>Acceso completo sin anuncios</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
