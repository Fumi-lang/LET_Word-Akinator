"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { THEMES, Theme } from "@/lib/themes";

const ITEM_HEIGHT = 92;
const SPIN_STEPS = 22;
const SPIN_DURATION_MS = 2000;
const DECELERATION_POWER = 3;

function buildSequence(finalTheme: Theme, steps: number): Theme[] {
  const seq: Theme[] = [];
  for (let i = 0; i < steps; i++) {
    seq.push(THEMES[Math.floor(Math.random() * THEMES.length)]);
  }
  seq.push(finalTheme);
  return seq;
}

/** Returns wait time (ms) between each step so switching starts fast and slows down (ease-out). */
function buildStepDelays(steps: number, duration: number): number[] {
  const times = Array.from({ length: steps + 1 }, (_, i) =>
    duration * Math.pow(i / steps, DECELERATION_POWER)
  );
  return Array.from({ length: steps }, (_, i) => times[i + 1] - times[i]);
}

export default function ThemeReveal({
  drawTheme,
  onThought,
}: {
  drawTheme: () => Theme;
  onThought: () => void;
}) {
  const [sequence, setSequence] = useState<Theme[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const [winner, setWinner] = useState<Theme | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runSpin = (finalTheme: Theme) => {
    const seq = buildSequence(finalTheme, SPIN_STEPS);
    const delays = buildStepDelays(SPIN_STEPS, SPIN_DURATION_MS);

    setSequence(seq);
    setCurrentIndex(0);
    setWinner(null);
    setSpinning(true);

    let step = 0;
    const scheduleNext = () => {
      if (step >= SPIN_STEPS) {
        setSpinning(false);
        setWinner(finalTheme);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        step += 1;
        setCurrentIndex(step);
        scheduleNext();
      }, delays[step]);
    };
    scheduleNext();
  };

  useEffect(() => {
    const finalTheme = drawTheme();
    timeoutRef.current = setTimeout(() => runSpin(finalTheme), 0);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRedraw = () => {
    if (spinning) return;
    runSpin(drawTheme());
  };

  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-[#3D3929]/10 bg-white/70 p-6 shadow-xl backdrop-blur-sm">
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-stone-400">
          Theme Lottery
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[#3D3929]">
          テーマ抽選
        </p>
      </div>

      <div className="relative h-[276px] w-full overflow-hidden rounded-2xl border border-[#3D3929]/10 bg-[#2A241C]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#2A241C] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#2A241C] to-transparent" />
        <div className="pointer-events-none absolute inset-x-4 top-1/2 z-10 h-[92px] -translate-y-1/2 rounded-xl border-2 border-[#D97757]/70" />

        <motion.div
          className="absolute inset-x-0 top-1/2"
          style={{ marginTop: -ITEM_HEIGHT / 2 }}
          animate={{ y: -currentIndex * ITEM_HEIGHT }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {sequence.map((theme, i) => {
            const distance = Math.abs(i - currentIndex);
            const scale = distance === 0 ? 1 : distance === 1 ? 0.86 : 0.74;
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.5 : 0.25;
            return (
              <div
                key={i}
                style={{ height: ITEM_HEIGHT, transform: `scale(${scale})`, opacity }}
                className="flex flex-col items-center justify-center transition-all duration-150"
              >
                <span className="text-2xl font-extrabold text-white">
                  {theme.ja}
                </span>
                <span className="text-xs text-[#F0E9DD]/70">{theme.en}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="min-h-[104px]">
        {!spinning && winner && (
          <div
            key={winner.id}
            className="animate-pop-in rounded-2xl border border-[#D97757]/30 bg-[#D97757]/10 px-3 py-4 text-center"
          >
            <p className="text-sm text-[#3D3929]/80">
              このテーマをもとに単語を一つ考えてください。
            </p>
            <p className="text-xs text-stone-500">
              Think of one word based on this theme.
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <Button
          variant="secondary"
          jaLabel="引き直す"
          enLabel="Redraw"
          onClick={handleRedraw}
          disabled={spinning}
          className="flex-1"
        />
        <Button
          jaLabel="考えた"
          enLabel="I've thought of one"
          onClick={onThought}
          disabled={spinning}
          className="flex-1"
        />
      </div>
    </div>
  );
}
