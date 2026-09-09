"use client";

import React, { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import Button from "./Button";
import styles from "./Spread.module.css";
import { TarotCard, generateInterpretation } from "@/utils/interpretation";
import { shuffle } from "@/utils/shuffle";
import { useSession, signIn } from "next-auth/react";

interface SpreadProps {
  cards: TarotCard[];
}

export default function Spread({ cards }: SpreadProps) {
  const [spreadCards, setSpreadCards] = useState<
    { card: TarotCard; isReversed: boolean; revealed: boolean }[]
  >([]);
  const [step, setStep] = useState<
    "intro" | "shuffling" | "reading" | "interpretation"
  >("intro");
  const [revealedCount, setRevealedCount] = useState(0);
  const [question, setQuestion] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const { data: session } = useSession();

  const positions = ["Contexto", "Conflicto", "Evolución", "Consejo"];

  const handleStart = () => {
    setStep("shuffling");
    setIsSaved(false);
    setSaveError(null);

    const audio = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch((e) => console.log("Audio play prevented", e));
    }

    setTimeout(() => {
      const shuffled = shuffle(cards).slice(0, 4);
      setSpreadCards(
        shuffled.map((card) => ({
          card,
          isReversed: Math.random() > 0.7,
          revealed: false,
        }))
      );
      setStep("reading");
    }, 2000);
  };

  const saveReadingToDatabase = async (
    cardsToSave: { card: TarotCard; isReversed: boolean }[],
    interp: string
  ) => {
    if (!session) return;
    setIsSaving(true);
    setSaveError(null);

    try {
      const formattedCards = cardsToSave.map((s, idx) => ({
        id: s.card.id,
        name: s.card.name,
        isReversed: s.isReversed,
        position: positions[idx],
      }));

      const res = await fetch("/api/readings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.trim() || undefined,
          cards: formattedCards,
          interpretation: interp,
        }),
      });

      if (res.ok) {
        setIsSaved(true);
      } else {
        const data = await res.json();
        setSaveError(data?.error || "No se pudo guardar la tirada");
      }
    } catch (e) {
      console.error("Failed to save reading", e);
      setSaveError("Error de conexión al guardar la lectura");
    } finally {
      setIsSaving(false);
    }
  };

  const handleReveal = async (index: number) => {
    let nextCards: { card: TarotCard; isReversed: boolean; revealed: boolean }[] =
      [];
    setSpreadCards((prev) => {
      const next = [...prev];
      next[index].revealed = true;
      nextCards = next;
      return next;
    });

    const newCount = revealedCount + 1;
    setRevealedCount(newCount);

    if (newCount === 4) {
      const interp = generateInterpretation(nextCards.map((s) => s.card));
      setTimeout(() => {
        setStep("interpretation");
        if (session) {
          saveReadingToDatabase(nextCards, interp);
        }
      }, 1500);
    }
  };

  const currentInterpretation =
    spreadCards.length === 4
      ? generateInterpretation(spreadCards.map((s) => s.card))
      : "";

  return (
    <div className={styles.spreadContainer}>
      {step === "intro" && (
        <div className={`fade-in ${styles.introState}`}>
          <h2>Concéntrate en tu momento actual</h2>
          <p>
            Respira profundamente antes de iniciar la lectura. Puedes enfocar una
            pregunta específica en tu mente o escribirla abajo (opcional).
          </p>
          <input
            type="text"
            placeholder="¿Qué te gustaría preguntar al tarot?"
            className={styles.questionInput}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button onClick={handleStart} variant="primary">
            Barajar Cartas
          </Button>
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
                <p>{currentInterpretation}</p>
              </div>

              {/* SAVE READING SECTION */}
              <div className={styles.saveSection}>
                {session ? (
                  isSaved ? (
                    <div className={styles.savedBadge}>
                      <span>✨ Tirada guardada exitosamente en tu perfil</span>
                      <Link href="/perfil" className={styles.viewProfileBtn}>
                        Ver mi Historial →
                      </Link>
                    </div>
                  ) : isSaving ? (
                    <div className={styles.savingState}>
                      <span>⏳ Guardando lectura en tu perfil...</span>
                    </div>
                  ) : (
                    <div className={styles.manualSaveBox}>
                      {saveError && (
                        <p className={styles.saveErrorText}>{saveError}</p>
                      )}
                      <button
                        onClick={() =>
                          saveReadingToDatabase(
                            spreadCards,
                            currentInterpretation
                          )
                        }
                        className={styles.saveBtn}
                      >
                        💾 Guardar Tirada en mi Historial
                      </button>
                    </div>
                  )
                ) : (
                  <div className={styles.loginPromptBox}>
                    <p className={styles.loginPromptText}>
                      ✦ Accede con Google para guardar esta lectura en tu historial
                    </p>
                    <button
                      onClick={() => signIn("google")}
                      className={styles.googleLoginBtn}
                    >
                      Iniciar sesión para guardar
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.actionButtonsRow}>
                <Button
                  onClick={handleStart}
                  variant="primary"
                  className={styles.resetButton}
                >
                  Realizar otra Tirada
                </Button>
                <Button
                  href="/"
                  variant="secondary"
                  className={styles.resetButton}
                >
                  Volver al Inicio
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
