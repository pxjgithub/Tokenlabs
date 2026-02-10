import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'TokenLabs - 将每一个 token 转化为用户价值';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
           {/* Simple Logo Representation */}
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
            <path d="M6.453 15h11.094" />
            <path d="M8.5 2h7" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            background: 'linear-gradient(to right, #fff, #888)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
            letterSpacing: -2,
          }}
        >
          TokenLabs
        </div>
        <div style={{ fontSize: 32, opacity: 0.8, textAlign: 'center', lineHeight: 1.5 }}>
          将每一个 token 转化为用户价值
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
