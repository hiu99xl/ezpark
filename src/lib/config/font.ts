import localFont from "next/font/local";

/**
 * Cấu hình font Plus Jakarta Sans từ folder public/fonts/
 * Ưu tiên sử dụng các file .woff2 (format tối ưu nhất) cho tất cả các weights
 * Bao gồm cả normal và italic styles
 */
export const PlusJakartaSans = localFont({
  src: [
    // Normal styles
    {
      path: '../../../public/fonts/PlusJakartaSans-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    // Italic styles
    {
      path: '../../../public/fonts/PlusJakartaSans-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PlusJakartaSans-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  fallback: ['system-ui', 'arial'],
});

/**
 * Cấu hình font Georgia từ folder public/fonts/
 * Sử dụng file .woff2 (format tối ưu nhất) cho tất cả các weights
 * Bao gồm cả normal và italic styles
 */
export const Georgia = localFont({
  src: [
    // Normal styles
    {
      path: '../../../public/fonts/Georgia.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Georgia-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    // Italic styles
    {
      path: '../../../public/fonts/Georgia-Italic.woff2',
      weight: '400',
      style: 'normal-italic',
    },
    {
      path: '../../../public/fonts/Georgia-BoldItalic.woff2',
      weight: '700',
      style: 'bold-italic',
    },
  ],
  display: 'swap',
  variable: '--font-georgia',
  fallback: ['Georgia', 'serif'],
});

/**
 * UTM Aquarelle - used on Legacy page
 */
export const UTMAquarelle = localFont({
  src: '../../../public/fonts/UTM-Aquarelle.ttf',
  display: 'swap',
  variable: '--font-utm-aquarelle',
  fallback: ['Georgia', 'serif'],
});