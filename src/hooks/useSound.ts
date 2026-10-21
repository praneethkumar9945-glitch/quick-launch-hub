import { useCallback, useEffect, useRef, useState } from "react";

export type SoundName = "click" | "select" | "progress" | "reveal" | "achievement";

const TONES: Record<SoundName, { freq: number[]; dur: number; type: OscillatorType }> = {
  click: { freq: [420], dur: 0.06, type: "square" },
  select: { freq: [520, 760], dur: 0.1, type: "triangle" },
  progress: { freq: [300], dur: 0.05, type: "sine" },
  reveal: { freq: [400, 600, 900], dur: 0.16, type: "sine" },
  achievement: { freq: [520, 660, 880, 1100], dur: 0.14, type: "triangle" },
};

export function useSound() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("fs_sound");
      if (stored) setEnabled(stored === "on");
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem("fs_sound", next ? "on" : "off");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const play = useCallback(
    (name: SoundName) => {
      if (!enabled || typeof window === "undefined") return;
      try {
        const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!Ctx) return;
        ctxRef.current ??= new Ctx();
        const ctx = ctxRef.current;
        if (ctx.state === "suspended") void ctx.resume();
        const tone = TONES[name];
        tone.freq.forEach((f, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = tone.type;
          osc.frequency.value = f;
          const start = ctx.currentTime + i * tone.dur * 0.7;
          gain.gain.setValueAtTime(0.0001, start);
          gain.gain.exponentialRampToValueAtTime(0.12, start + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.0001, start + tone.dur);
          osc.connect(gain).connect(ctx.destination);
          osc.start(start);
          osc.stop(start + tone.dur + 0.02);
        });
      } catch {
        /* audio unavailable */
      }
    },
    [enabled],
  );

  return { enabled, toggle, play };
}
