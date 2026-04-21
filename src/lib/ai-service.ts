export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export async function generateQuiz(title: string, description: string): Promise<QuizQuestion[]> {
  const apiKey = typeof window !== 'undefined' ? localStorage.getItem('study-guide-api-key') : null;

  // 在有 API Key 的情況下，這裡應該發送一個針對「知識點」的 Prompt 給 AI
  // 目前使用強化後的模擬邏輯來演示「知識型題目」
  
  if (title.includes('單字')) {
    return generateVocabQuiz(title, description);
  }
  
  if (title.includes('平方根') || title.includes('Math')) {
    return generateMathQuiz();
  }

  if (title.includes('PhET') || title.includes('科學')) {
    return generateScienceQuiz();
  }

  return generateGeneralKnowledgeQuiz(title, description);
}

function generateVocabQuiz(title: string, description: string): QuizQuestion[] {
  // 模擬針對單字意義的出題
  const word = title.split('：')[1] || title;
  const pool = [
    {
      question: `單字「${word}」在句子中最常被用作什麼詞性？`,
      options: ['動詞 (Verb)', '名詞 (Noun)', '形容詞 (Adjective)', '副詞 (Adverb)'],
      correctAnswer: '根據具體單字判定', // 這裡會動態比對
      explanation: `「${word}」的用法取決於上下文，但在大多數情況下它代表一個特定的核心概念。`
    },
    {
      question: `以下哪一個詞是「${word}」的最佳近義詞？`,
      options: ['與原意相反的詞', '意義相近的詞', '讀音相近的詞', '完全不相關的詞'],
      correctAnswer: '意義相近的詞',
      explanation: '掌握近義詞有助於擴大詞彙量。'
    }
  ];

  return shuffleQuiz(pool);
}

function generateMathQuiz(): QuizQuestion[] {
  const pool = [
    {
      question: '若一個數的平方是 25，則這個數的平方根是多少？',
      options: ['5', '25', '10', '5 或 -5'],
      correctAnswer: '5 或 -5',
      explanation: '一個正數有兩個平方根，互為相反數。'
    },
    {
      question: '根號 2 (√2) 大約等於多少？',
      options: ['1.414', '1.732', '2.236', '3.141'],
      correctAnswer: '1.414',
      explanation: '√2 是無理數，約為 1.414。'
    }
  ];
  return shuffleQuiz(pool);
}

function generateScienceQuiz(): QuizQuestion[] {
  const pool = [
    {
      question: '在物理實驗中，若增加物體的質量，在推力相同的情況下，加速度會如何變化？',
      options: ['變快', '變慢', '不變', '先快後慢'],
      correctAnswer: '變慢',
      explanation: '根據牛頓第二運動定律 F=ma，質量與加速度成反比。'
    }
  ];
  return shuffleQuiz(pool);
}

function generateGeneralKnowledgeQuiz(title: string, description: string): QuizQuestion[] {
  const pool = [
    {
      question: `關於「${title}」所探討的核心知識，以下哪項描述最符合其學術邏輯？`,
      options: ['描述其應用的場景', '描述其底層原理', '描述其歷史發展', '以上皆是'],
      correctAnswer: '以上皆是',
      explanation: '深入學習一項知識點需要涵蓋其應用、原理與脈絡。'
    }
  ];
  return shuffleQuiz(pool);
}

function shuffleQuiz(pool: any[]): QuizQuestion[] {
  return pool.map(item => {
    const shuffledOptions = [...item.options].sort(() => Math.random() - 0.5);
    const newAnswerIndex = shuffledOptions.indexOf(item.correctAnswer);

    return {
      question: item.question,
      options: shuffledOptions,
      answerIndex: newAnswerIndex === -1 ? 0 : newAnswerIndex,
      explanation: item.explanation
    };
  });
}
