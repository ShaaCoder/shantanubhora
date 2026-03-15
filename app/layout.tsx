import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Script from "next/script"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Shantanu Bhora - AI-Powered Full Stack Developer',
    template: '%s | Shantanu Bhora',
  },
  description: 'AI-Powered Full Stack Developer building modern web apps, AI tools, automation systems, and data-driven solutions. Specialized in Next.js, TypeScript, Node.js, and AI integration.',
  keywords: ['Full Stack Developer', 'AI Developer', 'Web Development', 'Next.js', 'TypeScript', 'Automation', 'AI Tools', 'Shantanu Bhora'],
  authors: [{ name: 'Shantanu Bhora' }],
  creator: 'Shantanu Bhora',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shantanubhora.com',
    siteName: 'Shantanu Bhora Portfolio',
    title: 'Shantanu Bhora - AI-Powered Full Stack Developer',
    description: 'AI-Powered Full Stack Developer building modern web apps, AI tools, automation systems, and data-driven solutions.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'Shantanu Bhora Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shantanu Bhora - AI-Powered Full Stack Developer',
    description: 'AI-Powered Full Stack Developer building modern web apps, AI tools, and automation systems.',
    images: ['https://bolt.new/static/og_default.png'],
    creator: '@shantanubhora',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
         <Script
    src="https://www.instagram.com/embed.js"
    strategy="lazyOnload"
  />

      </body>
    </html>
  );
}
