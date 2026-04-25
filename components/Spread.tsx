"use client";

import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./Spread.module.css";
import { TarotCard, generateInterpretation } from "@/utils/interpretation";
import { shuffle } from "@/utils/shuffle";
import { useSession } from "next-auth/react";

interface SpreadProps {
  cards: TarotCard[];
}

export default function Spread({ cards }: SpreadProps) {
  const [spreadCards, setSpreadCards] = useState<{ card: TarotCard; isReversed: boolean; revealed: boolean }[]>([]);
  const [step, setStep] = useState<"intro" | "shuffling" | "reading" | "interpretation">("intro");
  const [revealedCount, setRevealedCount] = useState(0);
  const [question, setQuestion] = useState("");
  const { data: session } = useSession();

  const positions = ["Contexto", "Conflicto", "Evolución", "Consejo"];

  const handleStart = () => {
    setStep("shuffling");
    
    // Play audio logic could be added here
    const audio = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch(e => console.log("Audio play prevented", e));
    }

    setTimeout(() => {
      const shuffled = shuffle(cards).slice(0, 4);
      setSpreadCards(
        shuffled.map(card => ({
          card,
          isReversed: Math.random() > 0.7, // 30% chance of reversed
          revealed: false
        }))
      );
      setStep("reading");
    }, 2000); // 2 seconds of "shuffling" concentration
  };

  const handleReveal = async (index: number) => {
    let nextCards: { card: TarotCard; isReversed: boolean; revealed: boolean }[] = [];
    setSpreadCards(prev => {
      const next = [...prev];
      next[index].revealed = true;
      nextCards = next;
      return next;
    });
    
    const newCount = revealedCount + 1;
    setRevealedCount(newCount);
    
    if (newCount === 4) {
      const interp = generateInterpretation(nextCards.map(s => s.card));
      setTimeout(async () => {
        setStep("interpretation");
        
        if (session) {
          try {
            await fetch("/api/readings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                question,
                cards: nextCards.map(s => ({ id: s.card.id, isReversed: s.isReversed })),
                interpretation: interp
              })
            });
          } catch (e) {
            console.error("Failed to save reading");
          }
        }
      }, 1500);
    }
  };

  return (
    <div className={styles.spreadContainer}>
      {step === "intro" && (
        <div className={`fade-in ${styles.introState}`}>
          <h2>Concéntrate en tu momento actual</h2>
          <p>Respira profundamente antes de iniciar la lectura. Puedes enfocar una pregunta específica en tu mente o escribirla abajo (opcional).</p>
          <input 
            type="text" 
            placeholder="¿Qué te gustaría preguntar al tarot?" 
            className={styles.questionInput}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button onClick={handleStart} variant="primary">Barajar Cartas</Button>
        </div>
      )}

      {step === "shuffling" && (
        <div className={`fade-in ${styles.shufflingState}`}>
          <div className={styles.shufflingAnimation}></div>
          <p className={styles.shufflingText}>Barajando las energías...</p>
        </div>
      )}

      {(step === "reading" || step === "interpretation") && (
        <div className={`fade-in ${styles.readingState}`}>
          <div className={styles.cardsGrid}>
            {spreadCards.map((item, index) => (
              <Card 
                key={index} 
                card={item.card} 
                isReversed={item.isReversed}
                positionLabel={positions[index]}
                delay={index * 0.2}
                onReveal={() => handleReveal(index)}
                isRevealed={item.revealed}
              />
            ))}
          </div>
          
          {step === "interpretation" && (
            <div className={`slide-up ${styles.interpretationPanel}`}>
              <h3 className={styles.interpretationTitle}>Tu Lectura</h3>
              <div className={styles.interpretationContent}>
                <p>{generateInterpretation(spreadCards.map(s => s.card))}</p>
              </div>
              <Button href="/" variant="secondary" className={styles.resetButton}>
                Volver al Inicio
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
