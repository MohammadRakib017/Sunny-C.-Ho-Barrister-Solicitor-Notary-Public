import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sunny C. Ho, Barrister & Solicitor, Notary Public | Richmond Hill, ON',
  description: 'Professional legal counsel in Richmond Hill, Ontario, specializing in family law, criminal defense, civil litigation, real estate, and notary services.',
  openGraph: {
    title: 'Sunny C. Ho, Barrister & Solicitor, Notary Public | Richmond Hill, ON',
    description: 'Professional legal counsel in Richmond Hill, Ontario, specializing in family law, criminal defense, civil litigation, real estate, and notary services.',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunny C. Ho, Barrister & Solicitor, Notary Public',
    description: 'Professional legal counsel in Richmond Hill, Ontario, specializing in family law, criminal defense, civil litigation, real estate, and notary services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-stone-900 font-sans antialiased selection:bg-[#8B2635] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
