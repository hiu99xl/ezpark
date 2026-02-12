import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create next-intl plugin with the request config
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', pathname: '/**' },
      { protocol: 'https', hostname: '**', pathname: '/**' },
    ],
  },
  // Compression
  compress: true,
  // Power by header
  poweredByHeader: false,
  // Trailing slash for better SEO
  trailingSlash: false,
  // Generate ETags for better caching
  generateEtags: true,
  webpack: (config, { isServer }) => {
    const originalWarnings = config.ignoreWarnings || [];
    config.ignoreWarnings = [
      ...originalWarnings,
      {
        module: /node_modules\/next-intl/,
      },
      {
        message: /Parsing of.*for build dependencies failed/,
      },
      {
        message: /Build dependencies behind this expression are ignored/,
      },
      {
        file: /node_modules\/next-intl\/dist\/esm\/production\/extractor\/format\/index\.js/,
      },
    ];
    
    if (config.infrastructureLogging) {
      config.infrastructureLogging.level = 'error';
    } else {
      config.infrastructureLogging = {
        level: 'error',
      };
    }

    // Cấu hình SVG loader với @svgr/webpack
    // Hỗ trợ import SVG như React component và có thể gán ref
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    
    // Loại trừ SVG khỏi file loader mặc định
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Rule cho SVG import dạng React component: import Svg from './file.svg'
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: fileLoaderRule?.issuer,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      cleanupIds: false,
                    },
                  },
                },
              ],
            },
            // Hỗ trợ forwardRef để có thể gán ref cho SVG component
            ref: true,
            // Giữ nguyên title và desc trong SVG
            titleProp: true,
            descProp: true,
          },
        },
      ],
    });
    
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: http: https: blob:",
              "connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net",
              "frame-src 'self' https://www.google.com https://maps.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
}

export default withNextIntl(nextConfig);
