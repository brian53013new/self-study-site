export const MOCK_CATEGORIES = [
  { id: '1', name: '全部資源', slug: 'all' },
  { id: '2', name: '網頁開發', slug: 'web-dev' },
  { id: '3', name: '英語學習', slug: 'english' },
  { id: '4', name: '生物與生命科學', slug: 'biology' },
  { id: '5', name: '物理與化學實驗', slug: 'physics-chem' },
  { id: '6', name: '數位設計', slug: 'design' },
  { id: '7', name: '職場生產力', slug: 'productivity' },
  { id: '8', name: '財務理財', slug: 'finance' },
];

export const MOCK_RESOURCES = [
  // Science & Biology (World-renowned)
  {
    id: 's1',
    title: 'PhET 互動式模擬教材',
    description: '科羅拉多大學開發，全球最強的物理、化學、生物概念視覺化工具，支援繁體中文。',
    url: 'https://phet.colorado.edu/zh_TW/',
    level: 'Beginner',
    media_type: 'Tool',
    category_slug: 'physics-chem',
    likes_count: 8500,
    language: '繁體中文',
    is_experiment: true
  },
  {
    id: 's2',
    title: 'LabXchange (哈佛大學)',
    description: '提供虛擬實驗室體驗，讓你親手操作 PCR、凝膠電泳等頂尖生物技術流程。',
    url: 'https://www.labxchange.org/',
    level: 'Advanced',
    media_type: 'Course',
    category_slug: 'biology',
    likes_count: 4200,
    language: '提供中文字幕',
    is_experiment: true
  },
  {
    id: 's3',
    title: 'HHMI BioInteractive',
    description: '由霍華德·休斯醫學研究所提供，包含深度的演化、生態學與基因組學研究資源。',
    url: 'https://www.biointeractive.org/',
    level: 'Advanced',
    media_type: 'Video',
    category_slug: 'biology',
    likes_count: 3100,
    language: '英文/中字',
    is_experiment: false
  },

  // Web Development (Chinese Friendly)
  {
    id: 'w1',
    title: 'GrandmaCan - 阿嬤的程式教室',
    description: '最白話的程式入門頻道，包含 Python、網頁開發與 AI 基礎實作。',
    url: 'https://www.youtube.com/@GrandmaCan',
    level: 'Beginner',
    media_type: 'YouTube',
    category_slug: 'web-dev',
    likes_count: 5600,
    language: '繁體中文'
  },
  {
    id: 'w2',
    title: 'freeCodeCamp (繁體版)',
    description: '全球公認最強的免費網頁開發課程，從 HTML 到後端開發與資料科學。',
    url: 'https://www.freecodecamp.org/chinese/',
    level: 'Beginner',
    media_type: 'Course',
    category_slug: 'web-dev',
    likes_count: 12000,
    language: '繁體中文'
  },

  // English
  {
    id: 'e1',
    title: '阿滴英文 Ray Du English',
    description: '台灣最大的英語學習頻道，分享實用的語法、考試技巧與日常會話。',
    url: 'https://www.youtube.com/@RayDuEnglish',
    level: 'Beginner',
    media_type: 'YouTube',
    category_slug: 'english',
    likes_count: 9800,
    language: '繁體中文'
  },
  {
    id: 'e2',
    title: 'VoiceTube',
    description: '看影片學英文，提供繁體中文字幕對照、單字點選與聽力練習。',
    url: 'https://tw.voicetube.com/',
    level: 'All Levels',
    media_type: 'Tool',
    category_slug: 'english',
    likes_count: 6700,
    language: '繁體中文'
  },

  // Design
  {
    id: 'd1',
    title: 'Papaya 電腦教室',
    description: '極速學習 PS、Figma、Premiere 等設計工具的操作，節奏明快適合初學者。',
    url: 'https://www.youtube.com/@PapayaClass',
    level: 'Beginner',
    media_type: 'YouTube',
    category_slug: 'design',
    likes_count: 7400,
    language: '繁體中文'
  },

  // Productivity & Finance
  {
    id: 'p1',
    title: '電腦玩物',
    description: '分享如何運用數位工具提升工作效率、數位筆記與時間管理。',
    url: 'https://www.playpcesor.com/',
    level: 'All Levels',
    media_type: 'Article',
    category_slug: 'productivity',
    likes_count: 3500,
    language: '繁體中文'
  },
  {
    id: 'f1',
    title: '柴鼠兄弟 ZRBros',
    description: '將複雜的理財投資知識轉化為淺顯易懂的影片，非常適合理財初學者。',
    url: 'https://www.youtube.com/@ZRBros',
    level: 'Beginner',
    media_type: 'YouTube',
    category_slug: 'finance',
    likes_count: 5100,
    language: '繁體中文'
  }
];
