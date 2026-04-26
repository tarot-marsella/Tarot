"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import styles from "./AmbientAudio.module.css";

// Spiritual scale notes (D minor pentatonic + mystical intervals)
const NOTES = [
  146.83, // D3
  174.61, // F3
  196.0,  // G3
  220.0,  // A3
  261.63, // C4
  293.66, // D4
  349.23, // F4
  392.0,  // G4
  440.0,  // A4
  523.25, // C5
];

// Deep drone frequencies
const DRONES = [73.42, 110.0, 146.83]; // D2, A2, D3

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const createDrone = useCallback((ctx: AudioContext, masterGain: GainNode) => {
    DRONES.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Subtle detuning for warmth
      osc.detune.setValueAtTime((i - 1) * 5, ctx.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      filter.Q.setValueAtTime(1, ctx.currentTime);

      oscGain.gain.setValueAtTime(0, ctx.currentTime);
      oscGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 3);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();

      oscillatorsRef.current.push(osc);
    });
  }, []);

  const playMelodicNote = useCallback((ctx: AudioContext, masterGain: GainNode) => {
    const note = NOTES[Math.floor(Math.random() * NOTES.length)];
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    const reverb = ctx.createConvolver();

    // Create simple reverb impulse
    const rate = ctx.sampleRate;
    const length = rate * 3;
    const impulse = ctx.createBuffer(2, length, rate);
    for (let channel = 0; channel < 2; channel++) {
      const channelData = impulse.getChannelData(channel);
      for (let i = 0; i < length; i++) {
        channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.5);
      }
    }
    reverb.buffer = impulse;

    osc.type = Math.random() > 0.5 ? "sine" : "triangle";
    osc.frequency.setValueAtTime(note, ctx.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200 + Math.random() * 800, ctx.currentTime);

    const duration = 3 + Math.random() * 4;
    const volume = 0.03 + Math.random() * 0.04;

    noteGain.gain.setValueAtTime(0, ctx.currentTime);
    noteGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 1.5);
    noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(reverb);
    reverb.connect(masterGain);
    noteGain.connect(masterGain); // Dry signal too

    osc.start();
    osc.stop(ctx.currentTime + duration + 0.1);
  }, []);

  const startAudio = useCallback(() => {
    const ctx = new AudioContext();
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 2);
    masterGain.connect(ctx.destination);

    audioCtxRef.current = ctx;
    gainRef.current = masterGain;

    // Start drones
    createDrone(ctx, masterGain);

    // Play melodic notes at random intervals
    const melodyInterval = setInterval(() => {
      if (ctx.state === "running") {
        playMelodicNote(ctx, masterGain);
      }
    }, 2500 + Math.random() * 3000);

    // Play first note immediately
    playMelodicNote(ctx, masterGain);

    // Occasional singing bowl sound
    const bowlInterval = setInterval(() => {
      if (ctx.state === "running") {
        const bowlOsc = ctx.createOscillator();
        const bowlGain = ctx.createGain();
        const bowlFreq = [528, 396, 639, 741][Math.floor(Math.random() * 4)]; // Solfeggio

        bowlOsc.type = "sine";
        bowlOsc.frequency.setValueAtTime(bowlFreq, ctx.currentTime);

        bowlGain.gain.setValueAtTime(0, ctx.currentTime);
        bowlGain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 2);
        bowlGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 8);

        bowlOsc.connect(bowlGain);
        bowlGain.connect(masterGain);
        bowlOsc.start();
        bowlOsc.stop(ctx.currentTime + 8.1);
      }
    }, 8000 + Math.random() * 6000);

    intervalsRef.current = [melodyInterval, bowlInterval];
    setIsPlaying(true);
  }, [createDrone, playMelodicNote]);

  const stopAudio = useCallback(() => {
    const ctx = audioCtxRef.current;
    const gain = gainRef.current;

    if (ctx && gain) {
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try { osc.stop(); } catch { /* already stopped */ }
        });
        oscillatorsRef.current = [];
        ctx.close();
      }, 1600);
    }

    intervalsRef.current.forEach(clearInterval);
    intervalsRef.current = [];
    setIsPlaying(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        oscillatorsRef.current.forEach((osc) => {
          try { osc.stop(); } catch { /* already stopped */ }
        });
        audioCtxRef.current.close();
      }
      intervalsRef.current.forEach(clearInterval);
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  return (
    <button
      className={`${styles.audioToggle} ${isPlaying ? styles.playing : ""}`}
      onClick={toggleAudio}
      aria-label={isPlaying ? "Silenciar melodía" : "Reproducir melodía espiritual"}
      title={isPlaying ? "Silenciar" : "Melodía espiritual"}
    >
      <span className={styles.icon}>
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </span>
      {isPlaying && (
        <span className={styles.waves}>
          <span className={styles.wave}></span>
          <span className={styles.wave}></span>
          <span className={styles.wave}></span>
        </span>
      )}
    </button>
  );
}
