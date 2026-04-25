"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Tarot de Marsella</Link>
      </div>
      <div className={styles.links}>
        <Link href="/aprendizaje">Aprender Tarot</Link>
        <Link href="/tirada">Tirada Interactiva</Link>
        {status === "loading" ? (
          <span>...</span>
        ) : session ? (
          <>
            <Link href="/perfil" className={styles.profileLink}>Perfil</Link>
            <button onClick={() => signOut()} className={styles.authBtn}>Cerrar Sesión</button>
          </>
        ) : (
          <button onClick={() => signIn("google")} className={styles.authBtn}>Iniciar con Google</button>
        )}
      </div>
    </nav>
  );
}
