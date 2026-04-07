-- 自學導航站資料庫結構 (Schema)

-- 1. 資源類別表 (Categories)
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT, -- 存放圖標名稱，如 Lucide Icon 名稱
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 精選資源表 (Resources)
CREATE TABLE resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL UNIQUE,
  level TEXT CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  media_type TEXT CHECK (media_type IN ('YouTube', 'Article', 'Interactive', 'Tool', 'Course')),
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 學習路徑表 (Roadmaps)
CREATE TABLE roadmaps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  nodes JSONB NOT NULL, -- 存放路徑圖的結構 (React Flow 格式)
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 範例資料 (可選，供初期測試)
-- INSERT INTO categories (name, slug, icon) VALUES ('網頁開發', 'web-dev', 'code');
-- INSERT INTO resources (title, url, level, media_type, category_id) VALUES ('Python 入門指南', 'https://example.com/python', 'Beginner', 'YouTube', (SELECT id FROM categories WHERE slug = 'web-dev'));
