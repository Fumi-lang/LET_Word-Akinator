"use client";

import { Button } from "@/components/ui/Button";

type RoundResult = "correct" | "giveup";

const RESULTS: Record<RoundResult, { emoji: string; ja: string; en: string }> = {
  correct: {
    emoji: "🎉",
    ja: "探偵の勝利!",
    en: "The Detectives Win!",
  },
  giveup: {
    emoji: "🎩",
    ja: "ゲームマスターの勝利!",
    en: "The Game Master Wins!",
  },
};

export default function RoundEnd({
  result,
  onRestart,
}: {
  result: RoundResult;
  onRestart: () => void;
}) {
  const { emoji, ja, en } = RESULTS[result];

  return (
    <div className="flex flex-col items-center gap-8 rounded-3xl border border-[#3D3929]/10 bg-white/70 p-8 text-center shadow-xl backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="text-5xl">{emoji}</div>
        <p className="text-2xl font-extrabold text-[#3D3929]">{ja}</p>
        <p className="text-sm text-stone-500">{en}</p>
      </div>

      <div className="text-5xl">🏁</div>
      <div>
        <p className="text-lg font-semibold leading-relaxed text-[#3D3929]">
          参加者全員がゲームマスターになるまでゲームを続けてください。最も難しい言葉を考えた人が勝ちです。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">
          Continue the game until everyone has been the game master. The
          person whose word was hardest to guess wins.
        </p>
      </div>
      <Button jaLabel="最初から始める" enLabel="Start over" onClick={onRestart} />
    </div>
  );
}
