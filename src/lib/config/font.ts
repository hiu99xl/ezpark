import localFont from "next/font/local";

export const PlusJakartaSans = localFont({
  src: [
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

export const Georgia = localFont({
  src: [
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

export const UTMAquarelle = localFont({
  src: '../../../public/fonts/UTM-Aquarelle.ttf',
  display: 'swap',
  variable: '--font-utm-aquarelle',
  fallback: ['Georgia', 'serif'],
});