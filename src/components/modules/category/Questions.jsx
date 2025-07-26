import React from 'react'

function Questions() {
  return (
    <>
        <section className="relative py-20 px-6 text-center shadow-lg mt-5
            dark:bg-gradient-to-br dark:from-black dark:via-[#1a1510] dark:to-yellow-900
            bg-yellow-50">
            
            <h1 className="text-5xl font-extrabold leading-tight
            text-yellow-700 dark:text-yellow-400">
            سوالات متداول
            </h1>

            <p className="mt-4 text-gray-800 dark:text-yellow-100 text-lg max-w-xl mx-auto">
            پاسخ به رایج‌ترین سوالات شما درباره خرید و فروش اکانت‌ و محصولات گیمینگ در کالاپچی گیم
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></div>
        </section>


        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="space-y-6">


            <div className="border rounded-2xl overflow-hidden shadow-lg
                bg-white border-yellow-300
                dark:bg-gradient-to-br dark:from-black dark:to-yellow-900 dark:border-yellow-700">
                
                <button onclick="toggleFAQ(this)" className="w-full flex justify-between items-center px-6 py-5
                bg-transparent hover:bg-yellow-100 dark:hover:bg-black/30 transition">
                
                <span className="text-yellow-700 dark:text-yellow-400 text-lg font-semibold">
                    چطور اکانتم رو برای فروش ثبت کنم؟
                </span>
                
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300 transition-transform transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoinround" d="M19 9l-7 7-7-7"></path>
                </svg>
                </button>

                <div className="faq-content px-6 pb-5 text-gray-800 dark:text-yellow-100 leading-relaxed">
                وارد حساب کاربری شوید و از بخش داشبورد، فرم ثبت محصول جدید را تکمیل و ارسال کنید. تیم پشتیبانی پس از بررسی، در صورت تایید، محصول را منتشر می‌کند.
                </div>
            </div>
            <div className="border rounded-2xl overflow-hidden shadow-lg
                bg-white border-yellow-300
                dark:bg-gradient-to-br dark:from-black dark:to-yellow-900 dark:border-yellow-700">
                
                <button onclick="toggleFAQ(this)" className="w-full flex justify-between items-center px-6 py-5
                bg-transparent hover:bg-yellow-100 dark:hover:bg-black/30 transition">
                
                <span className="text-yellow-700 dark:text-yellow-400 text-lg font-semibold">
                آیا خرید و فروش اکانت قانونی است؟
                </span>
                
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300 transition-transform transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoinround" d="M19 9l-7 7-7-7"></path>
                </svg>
                </button>

                <div className="faq-content px-6 pb-5 text-gray-800 dark:text-yellow-100 leading-relaxed">
                    بستگی به قوانین هر بازی دارد. کالاپچی گیم به عنوان بستری امن برای معامله بین کاربران فعالیت می‌کند و مسئولیت رعایت قوانین بازی‌ها با کاربران است.
                </div>
            </div>
            <div className="border rounded-2xl overflow-hidden shadow-lg
                bg-white border-yellow-300
                dark:bg-gradient-to-br dark:from-black dark:to-yellow-900 dark:border-yellow-700">
                
                <button onclick="toggleFAQ(this)" className="w-full flex justify-between items-center px-6 py-5
                bg-transparent hover:bg-yellow-100 dark:hover:bg-black/30 transition">
                
                <span className="text-yellow-700 dark:text-yellow-400 text-lg font-semibold">
                    چه زمانی مبلغ فروش واریز می‌شود؟
                </span>
                
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300 transition-transform transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoinround" d="M19 9l-7 7-7-7"></path>
                </svg>
                </button>

                <div className="faq-content px-6 pb-5 text-gray-800 dark:text-yellow-100 leading-relaxed">
                پس از تایید تحویل موفق اکانت، مبلغ طی ۲۴ تا ۷۲ ساعت کاری به حساب بانکی شما واریز خواهد شد.
                </div>
            </div>
            <div className="border rounded-2xl overflow-hidden shadow-lg
                bg-white border-yellow-300
                dark:bg-gradient-to-br dark:from-black dark:to-yellow-900 dark:border-yellow-700">
                
                <button onclick="toggleFAQ(this)" className="w-full flex justify-between items-center px-6 py-5
                bg-transparent hover:bg-yellow-100 dark:hover:bg-black/30 transition">
                
                <span className="text-yellow-700 dark:text-yellow-400 text-lg font-semibold">
                    &gt;در صورت پس گرفتن اکانت چه می‌شود؟
                </span>
                
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300 transition-transform transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoinround" d="M19 9l-7 7-7-7"></path>
                </svg>
                </button>

                <div className="faq-content px-6 pb-5 text-gray-800 dark:text-yellow-100 leading-relaxed">
                در صورت اثبات تقلب فروشنده، وجه به خریدار بازگردانده می‌شود و کاربر متخلف از پلتفرم مسدود خواهد شد.
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Questions