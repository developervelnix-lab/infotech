import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnnouncementTicker from '@/components/layout/AnnouncementTicker';
import { LenisProvider } from '@/lib/lenis';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Infotech | Build Smarter. Scale Faster.',
    template: '%s | Infotech',
  },
  description:
    'Infotech is your digital growth partner — AI-powered solutions, modern development, and growth-focused strategies for businesses that want to scale.',
  keywords: ['digital agency', 'web development', 'AI automation', 'growth marketing', 'custom software'],
  authors: [{ name: 'Infotech' }],
  creator: 'Infotech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infotech.com',
    siteName: 'Infotech',
    title: 'Infotech | Build Smarter. Scale Faster.',
    description:
      'We help businesses transform digitally with AI-powered solutions, modern development, and growth-focused strategies.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Infotech' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infotech | Build Smarter. Scale Faster.',
    description: 'AI-powered digital agency for modern businesses.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://infotech.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>
        <LenisProvider>
          <Navbar />
          <AnnouncementTicker />
          <main style={{ paddingTop: 'calc(var(--navbar-h) + var(--ticker-h))' }}>
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
