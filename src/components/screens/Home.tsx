"use client";

import { Button } from "@/components/ui/Button";

const RULES = [
  {
    ja: "テーブルのうち一人がゲームマスターになって、みんなが知っている言葉を一つ考えて選びます",
    en: "One participant becomes the game master and chooses a word that everyone knows",
  },
  {
    ja: "他の参加者はyes/noで答えられる質問をゲームマスターにします。ゲームマスターはその質問に答えます",
    en: "Other participants ask the game master yes/no questions, and the game master answers",
  },
  {
    ja: "その言葉が何かわかったらゲームマスターにそれが正解かどうか尋ねます",
    en: "When you think you know the word, ask the game master if you're correct",
  },
  {
    ja: "ゲームマスターを参加者の中で一周して、最も答えにくい言葉を選んだ人が勝ちです",
    en: "Play until everyone has been the game master. The person whose word was hardest to guess wins",
  },
];

export default function Home({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          ワードアキネーター
        </h1>
        <p className="mt-1 text-sm text-fuchsia-200/80">Word Akinator</p>
      </div>

      <ul className="flex flex-col gap-4">
        {RULES.map((rule, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/30 text-xs font-bold text-fuchsia-100">
              {i + 1}
            </span>
            <div>
              <p className="text-sm leading-relaxed text-white">{rule.ja}</p>
              <p className="mt-0.5 text-xs leading-snug text-fuchsia-200/60">
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
