import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Light, Regular, Bold
});

export const metadata: Metadata = {
  title: 'Dra. Renata Cristina',
  description: 'Biomédica especializada em procedimentos estéticos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
