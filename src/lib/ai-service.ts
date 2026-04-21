import { VOCAB_DATA, VocabWord } from './vocab-data';

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export async function generateQuiz(title: string, description: string): Promise<QuizQuestion[]> {
  // 檢查是否為單字測驗 (標題包含「單字」或描述涉及 vocab)
  if (title.includes('單字') || description.toLowerCase().includes('vocab')) {
    return generateFixedVocabQuiz(title);
  }

  const apiKey = typeof window !== 'undefined' ? localStorage.getItem('study-guide-api-key') : null;

  // 如果是科學或數學資源
  if (title.includes('平方根') || title.includes('Math') || title.includes('物理') || title.includes('科學')) {
    return generateKnowledgeQuiz(title, description, apiKey);
  }

  return generateGeneralQuiz(title, description, apiKey);
}

/**
 * 不需要 AI 的固定單字題庫生成器
 */
function generateFixedVocabQuiz(title: string): QuizQuestion[] {
  // 隨機選取 5 個單字作為題目
  const selectedWords = [...VOCAB_DATA]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return selectedWords.map(wordItem => {
    // 隨機選取 3 個錯誤答案 (其他單字的翻譯)
    const wrongAnswers = VOCAB_DATA
      .filter(w => w.id !== wordItem.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.translation);

    // 合併正確與錯誤答案並隨機洗牌
    const options = [wordItem.translation, ...wrongAnswers].sort(() => Math.random() - 0.5);
    const answerIndex = options.indexOf(wordItem.translation);

    return {
      question: `請問單字「${wordItem.word}」的中文意思是？`,
      options,
      answerIndex,
      explanation: `「${wordItem.word}」的意思是「${wordItem.translation}」。\n例句：${wordItem.example}`
    };
  });
}

/**
 * 知識型題目 (支援 AI 或 模擬)
 */
async function generateKnowledgeQuiz(title: string, description: string, apiKey: string | null): Promise<QuizQuestion[]> {
  if (apiKey) {
    // 這裡實作真正的 AI 呼叫邏輯 (針對知識點出題)
    // 暫時回傳模擬的高品質題目
  }

  // 模擬知識型題目
  if (title.includes('平方根')) {
    return [
      {
        question: '若 x² = 16，則 x 的值為何？',
        options: ['4', '-4', '4 或 -4', '8'],
        answerIndex: 2,
        explanation: '一個正數的平方根有正負兩個值，√16 = 4，所以 x 可以是 4 或 -4。'
      }
    ];
  }
  
  return [
    {
      question: `關於「${title}」的核心知識點，以下哪項描述最正確？`,
      options: ['這是關於工具的操作', '這是關於理論的原理', '這是關於歷史的背景', '這是關於應用的技巧'],
      answerIndex: 1,
      explanation: '自學的核心在於理解底層原理，而不僅僅是操作。'
    }
  ];
}

async function generateGeneralQuiz(title: string, description: string, apiKey: string | null): Promise<QuizQuestion[]> {
  // 通用題目邏輯...
  return [
    {
      question: `你剛剛學習了「${title}」，你認為它的核心價值是什麼？`,
      options: ['獲得新技能', '應付考試', '增加談資', '單純好玩'],
      answerIndex: 0,
      explanation: '學習的最重要目的是將新知識轉化為可應用的技能。'
    }
  ];
}
