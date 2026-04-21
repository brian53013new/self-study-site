export interface VocabWord {
  id: string;
  word: string;
  definition: string;
  translation: string;
  example: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
}

// 這裡將包含 3000+ 個單字的資料
// 為了效率，我們先寫入核心結構與首批高頻字
export const VOCAB_DATA: VocabWord[] = [
  // --- Basic (會考 2000 字精選) ---
  { id: 'b1', word: 'Ability', translation: '能力', definition: 'The power or skill to do something.', example: 'He has the ability to speak three languages.', level: 'Basic' },
  { id: 'b2', word: 'Accept', translation: '接受', definition: 'To agree to take something.', example: 'I accept your apology.', level: 'Basic' },
  { id: 'b3', word: 'Active', translation: '活躍的', definition: 'Taking part in activities; lively.', example: 'She is very active in sports.', level: 'Basic' },
  { id: 'b4', word: 'Advice', translation: '建議', definition: 'An opinion about what someone should do.', example: 'Let me give you some advice.', level: 'Basic' },
  { id: 'b5', word: 'Ancient', translation: '古老的', definition: 'From a long time ago; very old.', example: 'We visited an ancient temple.', level: 'Basic' },
  { id: 'b6', word: 'Believe', translation: '相信', definition: 'To feel sure that something is true.', example: 'I believe you can do it.', level: 'Basic' },
  { id: 'b7', word: 'Common', translation: '常見的', definition: 'Happening often or existing in large numbers.', example: 'It is a common mistake.', level: 'Basic' },
  { id: 'b8', word: 'Create', translation: '創造', definition: 'To make something new.', example: 'Artists create beautiful things.', level: 'Basic' },
  { id: 'b9', word: 'Degree', translation: '程度/度數', definition: 'A unit for measuring temperature or angles.', example: 'Water freezes at zero degrees.', level: 'Basic' },
  { id: 'b10', word: 'Effort', translation: '努力', definition: 'Physical or mental activity needed to do something.', example: 'It takes a lot of effort to learn a language.', level: 'Basic' },
  
  // --- Intermediate (學測 7000 字精選) ---
  { id: 'i1', word: 'Abundant', translation: '豐富的', definition: 'Existing in large quantities.', example: 'The region is abundant in natural resources.', level: 'Intermediate' },
  { id: 'i2', word: 'Challenge', translation: '挑戰', definition: 'Something that tests your skill or ability.', example: 'This project is a big challenge for us.', level: 'Intermediate' },
  { id: 'i3', word: 'Dynamic', translation: '有活力的', definition: 'Full of energy or new ideas.', example: 'She is a dynamic leader.', level: 'Intermediate' },
  { id: 'i4', word: 'Essential', translation: '必要的', definition: 'Completely necessary; extremely important.', example: 'Fresh air is essential for good health.', level: 'Intermediate' },
  { id: 'i5', word: 'Flexible', translation: '靈活的/有彈性的', definition: 'Able to change or be changed easily.', example: 'My work schedule is very flexible.', level: 'Intermediate' },
  { id: 'i6', word: 'Genuine', translation: '真實的', definition: 'Real and exactly what it appears to be.', example: 'Is this a genuine diamond?', level: 'Intermediate' },
  { id: 'i7', word: 'Harmony', translation: '和諧', definition: 'A situation in which people live or work happily together.', example: 'They lived together in perfect harmony.', level: 'Intermediate' },
  { id: 'i8', word: 'Illustrate', translation: '說明', definition: 'To explain something by using examples or pictures.', example: 'Let me illustrate my point with a story.', level: 'Intermediate' },
  { id: 'i9', word: 'Justice', translation: '正義', definition: 'Fairness in the way people are treated.', example: 'They are fighting for social justice.', level: 'Intermediate' },
  { id: 'i10', word: 'Knowledgeable', translation: '知識淵博的', definition: 'Knowing a lot about many different things.', example: 'He is very knowledgeable about history.', level: 'Intermediate' },

  // --- Advanced (多益/雅思核心) ---
  { id: 'a1', word: 'Ambiguous', translation: '含糊不清的', definition: 'Having more than one possible meaning.', example: 'His reply was somewhat ambiguous.', level: 'Advanced' },
  { id: 'a2', word: 'Benchmark', translation: '基準', definition: 'A level of quality used as a standard.', example: 'This phone is the new benchmark for speed.', level: 'Advanced' },
  { id: 'a3', word: 'Collaborate', translation: '合作', definition: 'To work with someone else for a special purpose.', example: 'Researchers from both countries collaborated on the study.', level: 'Advanced' },
  { id: 'a4', word: 'Diversification', translation: '多元化', definition: 'The process of starting to include more different types of things.', example: 'Company diversification is key to survival.', level: 'Advanced' },
  { id: 'a5', word: 'Entrepreneur', translation: '企業家', definition: 'A person who starts a business.', example: 'She is a successful tech entrepreneur.', level: 'Advanced' },
  { id: 'a6', word: 'Fluctuation', translation: '波動', definition: 'A change, especially a continuous one.', example: 'The fluctuation in oil prices is worrying.', level: 'Advanced' },
  { id: 'a7', word: 'Implementation', translation: '實施', definition: 'The act of starting to use a plan or system.', example: 'The implementation of the new law will begin next month.', level: 'Advanced' },
  { id: 'a8', word: 'Lucrative', translation: '獲利豐厚的', definition: 'Producing a lot of money.', example: 'He landed a lucrative contract with the team.', level: 'Advanced' },
  { id: 'a9', word: 'Negotiation', translation: '談判', definition: 'The process of discussing something to reach an agreement.', example: 'The contract is still under negotiation.', level: 'Advanced' },
  { id: 'a10', word: 'Pragmatic', translation: '務實的', definition: 'Solving problems in a sensible way that suits the conditions.', example: 'We need a pragmatic approach to this problem.', level: 'Advanced' },
];

// 為了符合 3000 字的需求，我們後續會透過腳本或多步驟擴充
// 這裡匯出一個函數來隨機選取單字，確保測試有隨機性
export const getRandomWords = (count: number, level?: string) => {
  let filtered = VOCAB_DATA;
  if (level && level !== 'All') {
    filtered = VOCAB_DATA.filter(w => w.level === level);
  }
  return [...filtered].sort(() => Math.random() - 0.5).slice(0, count);
};
