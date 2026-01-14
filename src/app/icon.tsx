import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#2563eb',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="80" height="80" rx="4" fill="#2563eb" stroke="#1e40af" strokeWidth="2"/>
          <rect x="15" y="15" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="53" y="15" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="15" y="53" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="53" y="53" width="32" height="32" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
          <line x1="50" y1="15" x2="50" y2="85" stroke="#1e40af" strokeWidth="2"/>
          <line x1="15" y1="50" x2="85" y2="50" stroke="#1e40af" strokeWidth="2"/>
          <path d="M20 20 L25 25" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
          <path d="M58 20 L63 25" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
