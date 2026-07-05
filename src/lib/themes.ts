export type Theme = {
  id: string;
  ja: string;
  en: string;
};

export const THEMES: Theme[] = [
  { id: "food", ja: "食べ物", en: "Food" },
  { id: "animals", ja: "動物", en: "Animals" },
  { id: "sports", ja: "スポーツ", en: "Sports" },
  { id: "celebrities", ja: "有名人", en: "Famous people" },
  { id: "places", ja: "場所・国", en: "Places & countries" },
  { id: "school", ja: "学校生活", en: "School life" },
  { id: "movies", ja: "映画・アニメ", en: "Movies & anime" },
  { id: "objects", ja: "日常の物", en: "Everyday objects" },
  { id: "occupations", ja: "職業", en: "Occupations" },
  { id: "emotions", ja: "感情・状態", en: "Emotions" },
];
