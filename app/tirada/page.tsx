import React from "react";
import Spread from "@/components/Spread";
import tarotData from "@/data/tarot.json";
import styles from "./page.module.css";
import { TarotCard } from "@/utils/interpretation";

export default function TiradaPage() {
  const cards: TarotCard[] = tarotData;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Tirada Interactiva</h1>
      <Spread cards={cards} />
      <div className={styles.glowOverlay}></div>
    </main>
  );
}
