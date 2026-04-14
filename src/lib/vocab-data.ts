export interface VocabWord {
  word: string;
  definition: string;
  translation: string;
  example: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
}

export const VOCAB_DATA: VocabWord[] = [
  // Basic (會考等級)
  {
    word: 'Achieve',
    definition: 'To successfully complete something or get a good result.',
    translation: '達成；實現',
    example: 'You can achieve anything if you work hard enough.',
    level: 'Basic'
  },
  {
    word: 'Environment',
    definition: 'The air, water, and land in or on which people, animals, and plants live.',
    translation: '環境',
    example: 'We must do more to protect the environment.',
    level: 'Basic'
  },
  // Intermediate (學測等級)
  {
    word: 'Abundant',
    definition: 'Existing in large quantities; more than enough.',
    translation: '豐富的；充裕的',
    example: 'The island has an abundant supply of fresh water.',
    level: 'Intermediate'
  },
  {
    word: 'Sustainable',
    definition: 'Able to continue over a period of time.',
    translation: '永續的；可持續的',
    example: 'Sustainable development is crucial for our planet.',
    level: 'Intermediate'
  },
  // Advanced (多益/雅思等級)
  {
    word: 'Ambiguous',
    definition: 'Having or expressing more than one possible meaning.',
    translation: '含糊不清的；模稜兩可的',
    example: 'His reply to my question was somewhat ambiguous.',
    level: 'Advanced'
  },
  {
    word: 'Implementation',
    definition: 'The act of starting to use a plan or system.',
    translation: '實施；執行',
    example: 'The full implementation of the new system will take time.',
    level: 'Advanced'
  }
];
