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
    <div className="flex flex-col items-center gap-8 rounded-3xl border border-[#3D3929]/10 bg-white/70 p-8 text-center shadow-xl backdrop-blur-sm">
      <div className="text-5xl">❓</div>
      <div>
        <p className="text-lg font-semibold leading-relaxed text-[#3D3929]">
          探偵たちは、ゲームマスターに一人2〜3回ずつyes/noで答えられる質問をすることができます。質問可能回数を有効に使って、何の言葉か当てましょう。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">
          Each detective can ask the game master 2-3 yes/no questions. Use
          your questions wisely to guess the word.
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
