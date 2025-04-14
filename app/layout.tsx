import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import {
  Geist,
  Geist_Mono,
  Bodoni_Moda,
  Great_Vibes,
  Inter,
} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bodoni',
});
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Laras & Indra',
  description: 'Generated by Dit',
  icons: {
    icon: '/rings.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} ${greatVibes.variable} ${inter.variable}antialiased`}
        style={{
          backgroundImage: "url('/assets/bg.jpg')",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <Toaster position="top-center" />
        <div className="mx-auto max-w-sm min-h-screen relative rounded-xl overflow-hidden">
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
