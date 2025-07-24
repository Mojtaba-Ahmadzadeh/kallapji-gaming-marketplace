import React from 'react'

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-white via-[#fffaf0] to-[#ffeaa7]
    dark:bg-gradient-to-br dark:from-[#0a0a12] dark:via-[#1f1f38] dark:to-[#0a0a12]
    text-gray-700 dark:text-gray-300 pt-12 pb-10 mt-16
    shadow-[0_0_20px_rgba(255,215,0,0.2)] font-sans">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-sm rtl text-right">
                <div className="mb-6 flex flex-col items-center text-center border-b-2 border-yellow-400 pb-3">
                    <a href="./index.html" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 rounded-lg overflow-hidden shadow-lg ring-1 ring-violet-500/30 group-hover:scale-105 transition-transform duration-300 bg-white">
                        <img src="../images/logo.png" alt="لوگو فروشگاه" className="w-full h-full object-cover rounded-lg" />
                    </a>
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text mb-2 tracking-wide drop-shadow-lg dark:drop-shadow-none">

                        Kalapji Game
                    </h2>
                    <p className="leading-relaxed text-gray-700 dark:text-gray-400 max-w-xl">
                        بهترین مارکت آنلاین برای خرید و فروش اکانت‌ها و آیتم‌های بازی، با تضمین امنیت بالا، سرعت فوق‌العاده
                        در انجام تراکنش‌ها، و پشتیبانی ۲۴ ساعته.
                        با KalapjiGame تجربه‌ای مطمئن و راحت در دنیای گیمینگ داشته باشید.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm md:text-base">

                    <div>
                        <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4 uppercase tracking-widest border-b-2 border-yellow-400 dark:border-yellow-500 pb-1">
                            🛒 فروشگاه
                        </h3>

                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700 dark:text-gray-300 md:block md:space-y-2">
                            <li>
                                <a href="#" className="group flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                    <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                    UC پابجی
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                    <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                    CP کالاف دیوتی
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                    <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                    گیفت کارت
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                    <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                    محصولات تلگرام
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                    <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                    تجهیزات گیمینگ
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4 uppercase tracking-widest border-b-2 border-yellow-400 dark:border-yellow-500 pb-1">
                            🎮 اکانت‌ها
                        </h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700 dark:text-gray-300 md:block md:space-y-2">
                            <li><a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                اکانت کلش آف کلنز
                            </a></li>
                            <li><a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                اکانت کلش رویال
                            </a></li>
                            <li><a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                اکانت کالاف دیوتی
                            </a></li>
                            <li><a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                اکانت فورتنایت
                            </a></li>
                            <li><a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                اکانت پابجی
                            </a></li>
                            <li><a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                اکانت فری فایر
                            </a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4 uppercase tracking-widest border-b-2 border-yellow-400 dark:border-yellow-500 pb-1">
                            💬 پشتیبانی
                        </h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700 dark:text-gray-300 md:grid-cols-1 md:gap-y-2">
                            <a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                سوالات متداول
                            </a>
                            <a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                تماس با ما
                            </a>
                            <a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                قوانین سایت
                            </a>
                            <a href="#" className="group flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                                <span className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
                                درباره ما
                            </a>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4 uppercase tracking-widest border-b-2 border-yellow-400 dark:border-yellow-500 pb-1">
                            📬 خبرنامه و ارتباط
                        </h3>

                        <p className="mb-3 text-gray-700 dark:text-gray-400">
                            برای دریافت تخفیف‌ها و اخبار، ایمیل‌تان را وارد کنید:
                        </p>

                        <form className="flex flex-col gap-3 md:gap-2 md:flex-col items-start mb-6 max-w-2xl md:mx-auto">
                            <div className="flex w-full sm:flex-1 overflow-hidden rounded-xl border border-yellow-400 bg-white dark:bg-gray-900 dark:border-yellow-500">
                                <input type="email" required="" placeholder="ایمیل خود را وارد کنید" className="flex-1 px-4 py-2 bg-transparent text-yellow-700 placeholder-yellow-600 focus:outline-none dark:text-yellow-300 dark:placeholder-yellow-400" />
                                <button type="submit" className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold transition-colors duration-300 dark:bg-yellow-400 dark:hover:bg-yellow-500">
                                    ارسال
                                </button>
                            </div>
                        </form>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <ul className="space-y-1.5 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center gap-x-2 text-sm md:text-base">
                                    <i className="fa-solid fa-user text-gray-400"></i>
                                    آدرس: تهران، خیابان انقلاب، پلاک ۱۲۳
                                </li>
                                <li className="flex items-center gap-x-2 text-sm md:text-base">
                                    <i className="fas fa-phone-alt text-gray-400"></i>
                                    تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
                                </li>
                                <li className="flex items-center gap-x-2 text-sm md:text-base">
                                    <i className="fas fa-phone-alt text-gray-400"></i>
                                    موبایل : 09122345454

                                </li>
                            </ul>
                            <ul className="space-y-1.5 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center gap-x-2 text-sm md:text-base">
                                    <i className="fa-solid fa-envelope text-gray-400"></i> ایمیل:
                                    <a href="mailto:info@kalapjigame.com" className="footer-link">kalapji.game@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-x-2 text-sm md:text-base">
                                    <i className="fas fa-clock text-gray-400"></i>
                                    ساعت کاری: 7 صبح تا 12 شب

                                </li>
                                <li>
                                    <h4 className="text-md font-semibold text-yellow-600 dark:text-yellow-400 mt-2 mb-1">نماد
                                        اعتماد</h4>
                                    <div className="flex gap-3">
                                        <a href="#" className="inline-block p-2 rounded-lg bg-yellow-100 bg-opacity-40 dark:bg-yellow-900 dark:bg-opacity-20 hover:bg-opacity-60 dark:hover:bg-opacity-40 transition duration-300 shadow-lg shadow-yellow-400/30 dark:shadow-yellow-500/40">
                                            <img src="../images/enamad (3).png" alt="نماد اعتماد الکترونیکی" className="h-16 w-auto" />
                                        </a>
                                        <a href="#" className="inline-block p-2 rounded-lg bg-yellow-100 bg-opacity-40 dark:bg-yellow-900 dark:bg-opacity-20 hover:bg-opacity-60 dark:hover:bg-opacity-40 transition duration-300 shadow-lg shadow-yellow-400/30 dark:shadow-yellow-500/40">
                                            <img src="../images/zarinpal.webp" alt="نماد اعتماد الکترونیکی" className="h-16 w-auto" />
                                        </a>
                                        <a href="#" className="inline-block p-2 rounded-lg bg-yellow-100 bg-opacity-40 dark:bg-yellow-900 dark:bg-opacity-20 hover:bg-opacity-60 dark:hover:bg-opacity-40 transition duration-300 shadow-lg shadow-yellow-400/30 dark:shadow-yellow-500/40">
                                            <img src="../images/enamad (3).png" alt="نماد اعتماد الکترونیکی" className="h-16 w-auto" />
                                        </a>
                                    </div></li></ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 px-0 text-yellow-600 dark:text-yellow-400 border-t border-yellow-600 dark:border-yellow-400 pt-4">
                    <p className="text-center text-gray-600 dark:text-gray-400 text-xs mt-2 sm:mt-0">
                        © 2025 تمامی حقوق برای KalapjiGame محفوظ است.
                    </p>
                    <div className="flex justify-center lg:justify-normal gap-6">
                        <a href="#" aria-label="اینستاگرام" className="text-gray-700 dark:text-gray-300 hover:text-[#E4405F] transition">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" aria-label="تلگرام" className="text-gray-700 dark:text-gray-300 hover:text-[#0088cc] transition">
                            <i className="fab fa-telegram-plane text-2xl"></i>
                        </a>
                        <a href="#" aria-label="توییتر" className="text-gray-700 dark:text-gray-300 hover:text-[#1DA1F2] transition">
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="#" aria-label="یوتیوب" className="text-gray-700 dark:text-gray-300 hover:text-[#FF0000] transition">
                            <i className="fab fa-youtube text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer