"use client";

import { Button } from "@/components/ui/Button";

export default function RoundEnd({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm">
      <div className="text-5xl">🏁</div>
      <div>
        <p className="text-lg font-semibold leading-relaxed text-white">
          参加者全員がゲームマスターになるまでゲームを続けてください。最も難しい言葉を考えた人が勝ちです。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fuchsia-200/70">
          Continue the game until everyone has been the game master. The
          person whose word was hardest to guess wins.
        </p>
      </div>
      <Button jaLabel="最初から始める" enLabel="Start over" onClick={onRestart} />
    </div>
  );
}
