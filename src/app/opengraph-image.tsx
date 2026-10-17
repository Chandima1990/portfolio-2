import { ImageResponse } from 'next/og';

import { siteConfig } from '@/common/lib/site';

export const alt = `${siteConfig.name}, ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background:
          'linear-gradient(135deg, #0b0b0f 0%, #1c1917 60%, #3b2a24 100%)',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 120,
          height: 8,
          borderRadius: 4,
          background: 'linear-gradient(90deg, #ffcbb4, #e29578)',
          marginBottom: 40,
        }}
      />
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
        {siteConfig.name}
      </div>
      <div
        style={{
          fontSize: 40,
          marginTop: 20,
          color: '#ffcbb4',
          fontWeight: 600,
        }}
      >
        {`${siteConfig.jobTitle} · ${siteConfig.location}`}
      </div>
      <div style={{ fontSize: 30, marginTop: 28, color: '#d6d3d1' }}>
        {siteConfig.tagline}
      </div>
      <div style={{ fontSize: 26, marginTop: 'auto', color: '#a8a29e' }}>
        {siteConfig.url.replace(/^https?:\/\//, '')}
      </div>
    </div>,
    size,
  );
}
