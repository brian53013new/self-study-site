export const MOCK_CATEGORIES = [
  { id: '1', name: '全部', slug: 'all' },
  { id: '2', name: '網頁開發', slug: 'web-dev' },
  { id: '3', name: '程式設計', slug: 'programming' },
  { id: '4', name: '設計/美感', slug: 'design' },
]

export const MOCK_RESOURCES = [
  {
    id: '1',
    title: 'CS50 - 哈佛大學電腦科學入門',
    description: '全球最知名的電腦科學入門課程，由 David J. Malan 教授主講，內容深入淺出且非常幽默。',
    url: 'https://www.youtube.com/@cs50',
    level: 'Beginner',
    media_type: 'YouTube',
    category_slug: 'programming',
    likes_count: 1250,
  },
  {
    id: '2',
    title: 'Roadmap.sh',
    description: '視覺化學習路徑指南，幫助你了解成為前端、後端或 DevOps 工程師需要學習的所有技術。',
    url: 'https://roadmap.sh',
    level: 'Beginner',
    media_type: 'Interactive',
    category_slug: 'web-dev',
    likes_count: 3400,
  },
  {
    id: '3',
    title: 'MDN Web Docs',
    description: 'Mozilla 維護的開發者文件，是學習網頁技術 (HTML, CSS, JS) 的權威資源。',
    url: 'https://developer.mozilla.org',
    level: 'Beginner',
    media_type: 'Article',
    category_slug: 'web-dev',
    likes_count: 5600,
  },
  {
    id: '4',
    title: 'Canva Design School',
    description: '適合新手的設計基礎課程，教你如何運用色彩、字體與排版打造吸睛的設計。',
    url: 'https://www.canva.com/designschool/',
    level: 'Beginner',
    media_type: 'Course',
    category_slug: 'design',
    likes_count: 850,
  },
]
