"use client";

import React, { useState } from "react";
import styles from "./Card.module.css";
import { TarotCard } from "@/utils/interpretation";
import Image from "next/image";

interface CardComponentProps {
  card: TarotCard;
  isReversed?: boolean;
  delay?: number;
  onReveal?: (card: TarotCard) => void;
  positionLabel?: string;
  isRevealed?: boolean;
}

export default function Card({ 
  card, 
  isReversed = false, 
  delay = 0, 
  onReveal,
  positionLabel,
  isRevealed = false
}: CardComponentProps) {
  const [revealed, setRevealed] = useState(isRevealed);

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true);
      if (onReveal) {
        onReveal(card);
      }
    }
  };

  return (
    <div 
      className={`${styles.cardContainer} fade-in`} 
      style={{ animationDelay: `${delay}s` }}
    >
      {positionLabel && <div className={styles.positionLabel}>{positionLabel}</div>}
      
      <div 
        className={`${styles.card} ${revealed ? styles.revealed : ""}`} 
        onClick={handleReveal}
      >
        <div className={styles.cardInner}>
          {/* Back of the card */}
          <div className={styles.cardBack}>
            <div className={styles.cardBackImage}></div>
            <div className={styles.glowEffect}></div>
          </div>
          
          {/* Front of the card */}
          <div className={`${styles.cardFront} ${isReversed ? styles.isReversed : ""}`}>
            <Image 
              src={card.image_url} 
              alt={card.name} 
              fill
              className={styles.cardFrontImage}
              sizes="220px"
              priority
            />
            <div className={styles.cardFrontOverlay}>
              <div className={styles.cardNumber}>{card.id}</div>
              <h3 className={styles.cardName}>{card.name}</h3>
            </div>
          </div>
        </div>
      </div>
      
      {revealed && (
        <div className={`slide-up ${styles.cardInfo}`}>
          <h4>{card.name}</h4>
          <p>{isReversed ? card.meaning_reversed : card.meaning_upright}</p>
        </div>
      )}
    </div>
  );
}
