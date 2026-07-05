"use client";

import { useCallback, useRef, useState } from "react";
import Home from "@/components/screens/Home";
import GmCheck from "@/components/screens/GmCheck";
import ThemeReveal from "@/components/screens/ThemeReveal";
import Question from "@/components/screens/Question";
import RoundEnd from "@/components/screens/RoundEnd";
import { THEMES, Theme } from "@/lib/themes";

type Screen = "home" | "gm_check" | "theme" | "question" | "round_end";

const HISTORY_LIMIT = 3;

export default function Page() {
  const [screen, setScreen] = useState<Screen>("home");
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
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 p-4">
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
              onCorrect={() => setScreen("round_end")}
              onGiveUp={() => setScreen("round_end")}
            />
          )}
          {screen === "round_end" && (
            <RoundEnd onRestart={() => setScreen("home")} />
          )}
        </div>
      </div>
    </div>
  );
}
