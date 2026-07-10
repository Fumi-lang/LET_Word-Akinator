"use client";

import { Button } from "@/components/ui/Button";

const RULES = [
  {
    ja: "テーブルのうち一人がゲームマスターになって、みんなが知っている言葉を一つ考えて選びます",
    en: "One participant becomes the game master and chooses a word that everyone knows",
  },
  {
    ja: "探偵たちはyes/noで答えられる質問をゲームマスターにします。ゲームマスターはその質問に答えます",
    en: "The detectives ask the game master yes/no questions, and the game master answers",
  },
  {
    ja: "その言葉が何かわかったら、探偵はゲームマスターにそれが正解かどうか尋ねます",
    en: "When a detective thinks they know the word, they ask the game master if they're correct",
  },
  {
    ja: "ゲームマスターを参加者の中で一周して、最も答えにくい言葉を選んだ人が勝ちです",
    en: "Play until everyone has been the game master. The person whose word was hardest to guess wins",
  },
];

export default function Home({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-[#3D3929]/10 bg-white/70 p-6 shadow-xl backdrop-blur-sm">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-[#3D3929]">
          ワードアキネーター
        </h1>
        <p className="mt-1 text-sm text-stone-500">Word Akinator</p>
      </div>

      <ul className="flex flex-col gap-4">
        {RULES.map((rule, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D97757]/15 text-xs font-bold text-[#D97757]">
              {i + 1}
            </span>
            <div>
              <p className="text-sm leading-relaxed text-[#3D3929]">{rule.ja}</p>
              <p className="mt-0.5 text-xs leading-snug text-stone-500">
                {rule.en}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <Button
        jaLabel="ワードアキネーターを始める"
        enLabel="Start Word Akinator"
        onClick={onStart}
      />
    </div>
  );
}
