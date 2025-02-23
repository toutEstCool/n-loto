import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'online-static.website.cloud.croc.ru',
      'i.pinimg.com',
      'cdn.sanity.io',
      'img.freepik.com',
      'photogora.ru',
    ],
  },
  i18n: {
    locales: ['ru', 'en', 'kg'],
    defaultLocale: 'ru',
  },
};

export default nextConfig;
