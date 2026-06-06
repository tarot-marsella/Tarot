import React from "react";
import { Metadata } from "next";
import Spread from "@/components/Spread";
import tarotData from "@/data/tarot.json";
import styles from "./page.module.css";
import { TarotCard } from "@/utils/interpretation";

export const metadata: Metadata = {
  title: "Tirada de Tarot Gratis Online — Lectura Tarot de Marsella",
  description: "Realiza tu tirada de tarot gratis de 3 cartas en línea. Obtén una lectura interactiva personalizada con el significado psicológico y evolutivo de los arcanos.",
  alternates: {
    canonical: "https://tarotdemarsella.cl/tirada",
  },
};

export default function TiradaPage() {
  const cards: TarotCard[] = tarotData;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tirada de Tarot de Marsella Gratis",
    "operatingSystem": "All",
    "applicationCategory": "ReflectiveTool",
    "browserRequirements": "Requires JavaScript",
    "url": "https://tarotdemarsella.cl/tirada",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <h1 className={styles.title}>Tirada Interactiva</h1>
      <Spread cards={cards} />
      <div className={styles.glowOverlay}></div>
    </main>
  );
}
