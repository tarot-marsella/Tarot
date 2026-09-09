"use client";

import React, { useState } from "react";
import styles from "@/app/perfil/page.module.css";
import tarotData from "@/data/tarot.json";

interface ReadingHistoryItemProps {
  reading: {
    id: string;
    createdAt: string | Date;
    question: string | null;
    cards: string;
    interpretation: string;
  };
  onDelete?: (id: string) => void;
}

export default function ReadingHistoryItem({
  reading,
  onDelete,
}: ReadingHistoryItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  let cardsList: any[] = [];
  try {
    cardsList =
      typeof reading.cards === "string"
        ? JSON.parse(reading.cards)
        : reading.cards;
  } catch {
    cardsList = [];
  }

  const handleDelete = async () => {
    if (!confirm("¿Estás seguro de que deseas eliminar esta lectura?")) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/readings/${reading.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setDeleted(true);
        if (onDelete) onDelete(reading.id);
      } else {
        alert("No se pudo eliminar la lectura.");
      }
    } catch (e) {
      console.error(e);
      alert("Error al eliminar la lectura.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (deleted) return null;

  const dateObj = new Date(reading.createdAt);
  const formattedDate = dateObj.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = dateObj.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article className={styles.readingCard}>
      <header className={styles.readingHeader}>
        <div className={styles.metaRow}>
          <time dateTime={dateObj.toISOString()} className={styles.dateTime}>
            🗓️ {formattedDate} a las {formattedTime} hs
          </time>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={styles.deleteBtn}
            title="Eliminar lectura"
          >
            {isDeleting ? "..." : "🗑️ Eliminar"}
          </button>
        </div>
        {reading.question && (
          <p className={styles.questionText}>
            <strong>Pregunta enfocada:</strong> &ldquo;{reading.question}&rdquo;
          </p>
        )}
      </header>

      <div className={styles.cardsMiniGrid}>
        {cardsList.map((cardData: any, i: number) => {
          const cardDef = tarotData.find((c) => c.id === cardData.id);
          const name = cardDef?.name || cardData.name || `Carta ${cardData.id}`;
          const isReversed = cardData.isReversed;
          const positionLabel = cardData.position;

          return (
            <div key={i} className={styles.miniCardInfo}>
              {positionLabel && (
                <span className={styles.positionBadge}>{positionLabel}</span>
              )}
              <span className={styles.miniCardName}>
                {name} {isReversed ? "↺ (Invertida)" : "↑ (Al derecho)"}
              </span>
            </div>
          );
        })}
      </div>

      <div className={styles.interpretationBox}>
        <h4 className={styles.adviceLabel}>💡 Consejo e Interpretación:</h4>
        <p className={styles.interpretationText}>{reading.interpretation}</p>
      </div>
    </article>
  );
}
