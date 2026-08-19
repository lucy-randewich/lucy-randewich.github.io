import { useCallback, useEffect, useRef, useState } from "react";

const CHORD_ROOTS = [174.61, 196, 220, 196];
const CHORD_INTERVAL_MS = 6500;

const playAmbientChord = (context: AudioContext, root: number) => {
  [root, root * 1.25, root * 1.5].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = index === 0 ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    oscillator.detune.setValueAtTime(index === 2 ? 5 : -3, context.currentTime);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      index === 0 ? 0.018 : 0.007,
      context.currentTime + 1.4,
    );
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 6.7);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 6.8);
  });
};

export const useTankAudio = () => {
  const [isMuted, setIsMuted] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = null;
    if (contextRef.current) void contextRef.current.close();
    contextRef.current = null;
  }, []);

  const start = useCallback(() => {
    stop();
    const context = new AudioContext();
    contextRef.current = context;
    let chordIndex = 0;
    const playNext = () => {
      playAmbientChord(context, CHORD_ROOTS[chordIndex % CHORD_ROOTS.length]);
      chordIndex += 1;
    };
    playNext();
    timerRef.current = window.setInterval(playNext, CHORD_INTERVAL_MS);
    setIsMuted(false);
  }, [stop]);

  const toggle = useCallback(() => {
    const context = contextRef.current;
    if (!context) return;
    if (context.state === "running") {
      void context.suspend();
      setIsMuted(true);
    } else {
      void context.resume();
      setIsMuted(false);
    }
  }, []);

  useEffect(() => stop, [stop]);

  return { isMuted, start, stop, toggle };
};
