import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 외부 이미지 출처 허가
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.aladin.co.kr',
      },
    ],
  },
}

export default nextConfig
