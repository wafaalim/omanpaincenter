import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { ReactNode } from 'react'; // ✅ importer ReactNode

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Oman Pain Center',
  description: 'Integrated pain management clinic in Oman',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
