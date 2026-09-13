import { Cairo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Providers from '../components/Providers';

const cairo = Cairo({ subsets: ['arabic', 'latin'], weight: ['300', '400', '600', '700', '800'], variable: '--font-cairo' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jetbrains' });

export const metadata = {
  title: 'CodeHub — منصة مشاركة الأكواد',
  description: 'منصة مفتوحة لنشر ومشاركة الأكواد بين المبرمجين العرب'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${jetbrains.variable}`}>
      <body className="font-cairo">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
