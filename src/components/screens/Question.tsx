"use client";

import { Button } from "@/components/ui/Button";

export default function Question({
  onCorrect,
  onGiveUp,
}: {
  onCorrect: () => void;
  onGiveUp: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm">
      <div className="text-5xl">❓</div>
      <div>
        <p className="text-lg font-semibold leading-relaxed text-white">
          他の人はyes/noで答えられる質問をゲームマスターにしてください。答えがわかったと思ったらその言葉を言ってください。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fuchsia-200/70">
          Other participants should ask the game master yes/no questions.
          When you think you know the answer, say the word.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3">
        <Button jaLabel="正解した" enLabel="Correct answer" onClick={onCorrect} />
        <Button
          variant="secondary"
          jaLabel="ギブアップ"
          enLabel="Give up"
          onClick={onGiveUp}
        />
      </div>
    </div>
  );
}
