export const MOCK_CATEGORIES = [
  { id: '1', name: '全部資源', slug: 'all' },
  { id: '2', name: '程式開發', slug: 'web-dev' },
  { id: '3', name: '國中英文', slug: 'jh-english' },
  { id: '4', name: '高中英文', slug: 'sh-english' },
  { id: '5', name: '大學/多益', slug: 'uni-english' },
  { id: '6', name: '基礎學科', slug: 'basic-subjects' },
];

export const MOCK_RESOURCES = [
  {
    id: '1',
    title: '國中必備 1200 單字表',
    description: '涵蓋教育部規定的國中基礎單字，適合會考複習與基礎建立。',
    url: 'https://example.com/jh-vocab',
    level: 'Beginner',
    media_type: 'Article',
    category_slug: 'jh-english',
    likes_count: 150
  },
  {
    id: '2',
    title: '高中 7000 單字精選',
    description: '針對學測與指考設計的進階單字庫，包含例句與同義字解析。',
    url: 'https://example.com/sh-vocab',
    level: 'Intermediate',
    media_type: 'Article',
    category_slug: 'sh-english',
    likes_count: 230
  },
  {
    id: '3',
    title: '基礎物理：牛頓三大運動定律',
    description: '用最簡單的實驗演示與動畫，讓你徹底理解力學基礎。',
    url: 'https://example.com/physics-101',
    level: 'Beginner',
    media_type: 'YouTube',
    category_slug: 'basic-subjects',
    likes_count: 95
  },
  {
    id: '4',
    title: 'React 18 全攻略',
    description: '從 Hook 到 Server Components，掌握現代網頁開發的核心技術。',
    url: 'https://react.dev',
    level: 'Intermediate',
    media_type: 'Article',
    category_slug: 'web-dev',
    likes_count: 320
  }
];
