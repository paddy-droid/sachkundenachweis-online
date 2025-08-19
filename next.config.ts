import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.willenskraft.co.at',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
   return [
     {
       source: '/niederoesterreich/st-poelten',
       destination: '/st-poelten',
       permanent: true,
     },
     {
       source: '/niederoesterreich/baden',
       destination: '/baden',
       permanent: true,
     },
     {
       source: '/niederoesterreich/moedling',
       destination: '/moedling',
       permanent: true,
     },
     {
       source: '/niederoesterreich/tulln',
       destination: '/tulln',
       permanent: true,
     },
     {
       source: '/niederoesterreich/wiener-neustadt',
       destination: '/wiener-neustadt',
       permanent: true,
     },
   ]
 },
};

export default nextConfig;
