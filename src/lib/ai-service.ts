export async function generateQuiz(title: string, description: string) {
  // 這裡之後可以串接真正的 AI API (如 OpenAI)
  console.log('Generating quiz for:', title);
  
  // 暫時回傳一份模擬測驗
  return [
    {
      question: `關於「${title}」的一個基礎問題？`,
      options: ['選項 A', '選項 B', '正確答案', '選項 D'],
      answer: '正確答案'
    }
  ];
}
