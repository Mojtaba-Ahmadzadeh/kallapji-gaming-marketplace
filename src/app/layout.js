import './globals.css';
import Navbar from '@/components/modules/navbar/Navbar';
import Footer from '@/components/modules/footer/Footer';
import ClientWrapper from '@/components/templates/ClientWrapper/ClientWrapper';

export const metadata = {
  title: "مارکت گیم | خرید و فروش اکانت بازی‌های ویدیویی",
  description:
    "مارکت گیم، پلتفرم امن و سریع برای خرید و فروش انواع اکانت‌ بازی مثل Clash of Clans، Call of Duty، Pubg Mobile و دیگر بازی‌های پرطرفدار با بهترین قیمت.",
  icons: {
    icon: './images/logo(2).png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-gray-100 dark:bg-[#070E1C] transition-all">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
