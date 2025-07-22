import "./globals.css";


export const metadata = {
  title: "مارکت گیم | خرید و فروش اکانت بازی‌های ویدیویی",
  description: "مارکت گیم، پلتفرم امن و سریع برای خرید و فروش انواع اکانت‌ بازی مثل Clash of Clans، Call of Duty، Pubg Mobile و دیگر بازی‌های پرطرفدار با بهترین قیمت.",
  icons: {
    icon: './images/logo(2).png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100 dark:bg-[#070E1C] transition-all">
        {children}
      </body>
    </html>
  );
}
