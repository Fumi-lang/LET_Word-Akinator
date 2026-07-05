"use client";

import { Button } from "@/components/ui/Button";

export default function GmCheck({ onDecided }: { onDecided: () => void }) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm">
      <div className="text-5xl">🎙️</div>
      <div>
        <p className="text-lg font-semibold leading-relaxed text-white">
          テーブルのうち一人がゲームマスターになります。ゲームマスターが決まったらその人は下のボタンを押してください
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fuchsia-200/70">
          One person at the table becomes the game master. Once decided, that
          person should press the button below.
        </p>
      </div>
      <Button jaLabel="決まった" enLabel="Decided" onClick={onDecided} />
    </div>
  );
}
