"use client";

import { useCallback, useRef, useState } from "react";
import Home from "@/components/screens/Home";
import GmCheck from "@/components/screens/GmCheck";
import ThemeReveal from "@/components/screens/ThemeReveal";
import Question from "@/components/screens/Question";
import RoundEnd from "@/components/screens/RoundEnd";
import { THEMES, Theme } from "@/lib/themes";

type Screen = "home" | "gm_check" | "theme" | "question" | "round_end";
type RoundResult = "correct" | "giveup";

const HISTORY_LIMIT = 3;

export default function Page() {
  const [screen, setScreen] = useState<Screen>("home");
  const [roundResult, setRoundResult] = useState<RoundResult | null>(null);
  const historyRef = useRef<string[]>([]);

  const drawTheme = useCallback((): Theme => {
    const excluded = new Set(historyRef.current);
    const candidates = THEMES.filter((t) => !excluded.has(t.id));
    const picked = candidates[Math.floor(Math.random() * candidates.length)];
    historyRef.current = [picked.id, ...historyRef.current].slice(
      0,
      HISTORY_LIMIT
    );
    return picked;
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#F0E9DD] p-4">
      <div className="w-full max-w-md">
        <div key={screen} className="animate-fade-in-up">
          {screen === "home" && <Home onStart={() => setScreen("gm_check")} />}
          {screen === "gm_check" && (
            <GmCheck onDecided={() => setScreen("theme")} />
          )}
          {screen === "theme" && (
            <ThemeReveal
              drawTheme={drawTheme}
              onThought={() => setScreen("question")}
            />
          )}
          {screen === "question" && (
            <Question
              onCorrect={() => {
                setRoundResult("correct");
                setScreen("round_end");
              }}
              onGiveUp={() => {
                setRoundResult("giveup");
                setScreen("round_end");
              }}
            />
          )}
          {screen === "round_end" && roundResult && (
            <RoundEnd result={roundResult} onRestart={() => setScreen("home")} />
          )}
        </div>
      </div>
    </div>
  );
}
