import { ELEMENTARY_VOCAB } from "./vocab/elementary";
import { JUNIOR_VOCAB } from "./vocab/junior";
import { SENIOR_VOCAB } from "./vocab/senior";

export interface VocabWord {
  id: string;
  word: string;
  definition: string;
  translation: string;
  example: string;
  level: 'Elementary' | 'Junior' | 'Senior';
}

// 合併所有單字庫
export const VOCAB_DATA: VocabWord[] = [
  ...ELEMENTARY_VOCAB,
  ...JUNIOR_VOCAB,
  ...SENIOR_VOCAB,
];

export const getRandomWords = (count: number, level?: string) => {
  let filtered = VOCAB_DATA;
  if (level && level !== 'All') {
    filtered = VOCAB_DATA.filter(w => w.level === level);
  }
  return [...filtered].sort(() => Math.random() - 0.5).slice(0, count);
};
