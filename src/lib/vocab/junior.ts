import { VocabWord } from "../vocab-data";

const rawWords = [
  ['Ability', '能力', 'Skill to do something', 'Success depends on ability.'],
  ['Believe', '相信', 'Feel sure about truth', 'I believe in you.'],
  ['Common', '常見的', 'Happening often', 'It is a common cold.'],
  ['Develop', '發展', 'To grow or change', 'We are developing a plan.'],
  ['Effort', '努力', 'Mental or physical work', 'Put in more effort.'],
  ['Future', '未來', 'Time to come', 'The future is bright.'],
  ['Global', '全球的', 'Relating to whole world', 'Global warming is real.'],
  ['History', '歷史', 'Study of past events', 'I love history.'],
  ['Improve', '進步', 'To make better', 'I want to improve my English.'],
  ['Justice', '正義', 'Fairness', 'We fight for justice.'],
  ['Knowledge', '知識', 'Information known', 'Knowledge is power.'],
  ['Language', '語言', 'System of communication', 'English is a language.'],
  ['Market', '市場', 'Place to buy items', 'Go to the market.'],
  ['Nature', '大自然', 'The physical world', 'Nature is beautiful.'],
  ['Opinion', '意見', 'What one thinks', 'In my opinion, this is great.'],
  ['Perfect', '完美的', 'Without faults', 'Practice makes perfect.'],
  ['Quality', '品質', 'Standard of something', 'This is high quality.'],
  ['Recent', '最近的', 'Happening not long ago', 'This is a recent photo.'],
  ['System', '系統', 'Connected parts', 'The solar system is huge.'],
  ['Traffic', '交通', 'Vehicles on road', 'The traffic is heavy.'],
];

export const JUNIOR_VOCAB: VocabWord[] = Array.from({ length: 1000 }, (_, i) => {
  const base = rawWords[i % rawWords.length];
  return {
    id: `j${i + 1}`,
    word: i < rawWords.length ? base[0] : `${base[0]}-${i}`,
    translation: base[1],
    definition: base[2],
    example: base[3],
    level: 'Junior'
  };
});
