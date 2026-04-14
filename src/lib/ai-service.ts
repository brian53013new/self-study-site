export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export async function generateQuiz(title: string, description: string): Promise<QuizQuestion[]> {
  const apiKey = typeof window !== 'undefined' ? localStorage.getItem('study-guide-api-key') : null;

  if (!apiKey) {
    // 如果沒有 API Key，回傳模擬資料但保持隨機性
    return generateMockQuiz(title);
  }

  try {
    // 這裡實作真正的 Gemini API 呼叫 (範例邏輯)
    // const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, { ... });
    // const data = await response.json();
    // return parseAiResponse(data);
    
    // 目前先以模擬但具備隨機邏輯的結果替代，直到串接完成
    return generateMockQuiz(title);
  } catch (error) {
    console.error('AI Generation Error:', error);
    throw new Error('無法生成測驗，請檢查 API 金鑰。');
  }
}

function generateMockQuiz(title: string): QuizQuestion[] {
  const mockPool = [
    {
      question: `關於「${title}」的核心目的，以下哪項描述最正確？`,
      options: ['提供娛樂內容', '促進學術研究', '幫助使用者自學與成長', '推廣商業產品'],
      correctAnswer: '幫助使用者自學與成長',
      explanation: '自學平台的核心價值在於提供資源並引導使用者達成學習目標。'
    },
    {
      question: `在使用「${title}」這類資源時，最有效率的學習方法是？`,
      options: ['只看不動手', '死記硬背', '結合實作與筆記', '快速瀏覽過一次'],
      correctAnswer: '結合實作與筆記',
      explanation: '主動學習（實作）比被動讀取更能強化記憶。'
    }
  ];

  return mockPool.map(item => {
    // 隨機打亂選項
    const shuffledOptions = [...item.options].sort(() => Math.random() - 0.5);
    const newAnswerIndex = shuffledOptions.indexOf(item.correctAnswer);

    return {
      question: item.question,
      options: shuffledOptions,
      answerIndex: newAnswerIndex,
      explanation: item.explanation
    };
  });
}
