"use client";

import { Button } from "@/components/ui/Button";

export default function GmCheck({ onDecided }: { onDecided: () => void }) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-3xl border border-[#3D3929]/10 bg-white/70 p-8 text-center shadow-xl backdrop-blur-sm">
      <div className="text-5xl">🎙️</div>
      <div>
        <p className="text-lg font-semibold leading-relaxed text-[#3D3929]">
          テーブルのうち一人がゲームマスターになります。ゲームマスターが決まったらその人は下のボタンを押してください
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">
          One person at the table becomes the game master. Once decided, that
          person should press the button below.
        </p>
      </div>
      <Button jaLabel="決まった" enLabel="Decided" onClick={onDecided} />
    </div>
  );
}
