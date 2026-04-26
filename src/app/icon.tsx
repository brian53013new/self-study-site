import { ImageResponse } from 'next/og';

// 網站圖示設定
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function Icon() {
  return new ImageResponse(
    (
      // 繪製一個華麗的學士帽圖示
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(to bottom right, #2563eb, #4f46e5)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
          boxShadow: '0 0 10px rgba(37, 99, 235, 0.5)',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
