/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statische export: razendsnel op Vercel, perfect voor Core Web Vitals
  output: 'export',
  trailingSlash: true,
  images: {
    // Afbeeldingen zijn al handmatig geoptimaliseerd (WebP + srcset)
    unoptimized: true,
  },
};

export default nextConfig;
