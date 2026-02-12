import type { Metadata } from 'next';
import '@styles/globals.css';
import { PlusJakartaSans, Georgia } from '@lib/config/font';
import Toaster from '@/components/Toaster';

export const metadata: Metadata = {
  title: 'Ez.Park',
  description: 'Hệ sinh thái khu công nghiệp',
  icons: {
    icon: '/images/home/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${PlusJakartaSans.variable} ${Georgia.variable}`}>
      <head>
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${PlusJakartaSans.variable} ${Georgia.variable}`}
        style={{ scrollBehavior: "smooth" }}
        suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
