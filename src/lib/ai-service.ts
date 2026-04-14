export async function generateQuiz(title: string, description: string) {
  const apiKey = localStorage.getItem('study_api_key');
  if (!apiKey) {
    throw new Error('請先在右上角 [AI 設定] 中填入 Gemini API Key');
  }

  const prompt = `你是一個專業的教育助手。請根據以下資源內容，生成 3 題繁體中文的選擇題。
資源標題：${title}
資源描述：${description}

格式要求：請直接返回 JSON 陣列，每個物件包含 question (字串), options (4個選項的字串陣列), answerIndex (正確選項索引 0-3)。
不要包含額外的文字或 markdown 代碼塊標籤。`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    
    // 清理可能的 markdown 標籤
    const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('AI 生成失敗:', error);
    throw new Error('AI 出題失敗，請檢查 API Key 是否正確或網路連線。');
  }
}
