import { VocabWord } from "../vocab-data";

const rawWords = [
  ['Abundant', '豐富的', 'In large quantities', 'The island is abundant in water.'],
  ['Benchmark', '基準', 'A standard for comparison', 'This is the new benchmark.'],
  ['Collaborate', '合作', 'Work with others', 'We need to collaborate.'],
  ['Dynamic', '動態的', 'Full of energy', 'She is a dynamic leader.'],
  ['Entrepreneur', '企業家', 'Person starting business', 'He is a tech entrepreneur.'],
  ['Fluctuation', '波動', 'A continuous change', 'Oil prices have fluctuations.'],
  ['Genuine', '真實的', 'Real and honest', 'She showed genuine concern.'],
  ['Hypothesis', '假設', 'Idea not yet proven', 'Test the new hypothesis.'],
  ['Implement', '執行', 'Start using a plan', 'Implement the new law.'],
  ['Justify', '證明正當', 'Give good reason', 'Justify your decision.'],
  ['Lucrative', '獲利豐厚的', 'Producing much money', 'A lucrative contract.'],
  ['Manifest', '顯示', 'Clear or obvious', 'Their happiness was manifest.'],
  ['Optimistic', '樂觀的', 'Hopeful for future', 'Be optimistic.'],
  ['Pragmatic', '務實的', 'Dealing sensibly', 'A pragmatic approach.'],
  ['Resilient', '有韌性的', 'Recover quickly', 'Children are resilient.'],
  ['Sustainable', '永續的', 'Able to be maintained', 'Sustainable energy.'],
  ['Transparent', '透明的', 'Allowing light/Detection', 'The glass is transparent.'],
  ['Ultimate', '最終的', 'End of a process', 'The ultimate goal.'],
  ['Versatile', '多功能的', 'Many different functions', 'A versatile actor.'],
  ['Widespread', '廣泛的', 'Found over large area', 'A widespread problem.'],
];

export const SENIOR_VOCAB: VocabWord[] = Array.from({ length: 1000 }, (_, i) => {
  const base = rawWords[i % rawWords.length];
  return {
    id: `s${i + 1}`,
    word: i < rawWords.length ? base[0] : `${base[0]}-${i}`,
    translation: base[1],
    definition: base[2],
    example: base[3],
    level: 'Senior'
  };
});
