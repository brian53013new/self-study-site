import { ELEMENTARY_VOCAB } from './vocab/elementary';
import { JUNIOR_VOCAB } from './vocab/junior';
import { SENIOR_VOCAB } from './vocab/senior';
import { VocabWord } from './vocab-data';

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export async function generateQuiz(title: string, description: string): Promise<QuizQuestion[]> {
  // 識別難度等級
  let targetBank: VocabWord[] = [];
  
  if (title.includes('Elementary') || title.includes('小學')) {
    targetBank = ELEMENTARY_VOCAB;
  } else if (title.includes('Junior') || title.includes('國中')) {
    targetBank = JUNIOR_VOCAB;
  } else if (title.includes('Senior') || title.includes('高中')) {
    targetBank = SENIOR_VOCAB;
  } else {
    // 混合模式
    targetBank = [...ELEMENTARY_VOCAB, ...JUNIOR_VOCAB, ...SENIOR_VOCAB];
  }

  // 判斷是否為馬拉松模式 (如果是，我們一次生成多一點題目)
  const isMarathon = description.includes('Marathon');
  const count = isMarathon ? 50 : 10;

  return generateFixedVocabQuiz(targetBank, count);
}

function generateFixedVocabQuiz(bank: VocabWord[], count: number): QuizQuestion[] {
  // 隨機選取單字
  const selectedWords = [...bank]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(count, bank.length));

  return selectedWords.map(wordItem => {
    // 從同一個 bank 中隨機選取 3 個錯誤答案 (不重複)
    const wrongAnswers = bank
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
