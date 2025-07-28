import CustomerComments from '@/components/templates/index/customerComments/CustomerComments'
import { faHeadset, faShieldAlt, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AboutUs() {
    return (
        <>
            {/* Container with max width, padding and vertical spacing */}
            <div className='max-w-8xl mx-auto px-6 py-12 space-y-20'>

                {/* About section with image and description */}
                <section
                    id="about"
                    className="flex flex-col md:flex-row items-center gap-12 
                        bg-white dark:bg-gray-900 
                        rounded-xl shadow-[0_4px_20px_rgba(250,204,21,0.3)] 
                        dark:shadow-[0_4px_20px_rgba(250,204,21,0.2)] 
                        p-8 transition-colors duration-500"
                >
                    {/* Logo Image */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                        alt="KalaPG Game Logo"
                        className="w-48 h-48 object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    />

                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-4xl font-extrabold mb-4 text-yellow-500 dark:text-yellow-400 transition-colors duration-300">
                            درباره کالاپجی گیم
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            کالاپجی گیم از سال ۱۴۰۰ با هدف تسهیل خرید و فروش اکانت‌های بازی و تجهیزات گیمینگ فعالیت می‌کند.
                            ما بهترین اکانت‌ها با ضمانت کیفیت و قیمت رقابتی، به همراه انواع لوازم جانبی کامپیوتر و کنسول در اختیار شما قرار می‌دهیم.
                            تیم پشتیبانی ما آماده پاسخگویی و مشاوره تخصصی است تا بهترین تجربه خرید را برای شما فراهم کند.
                        </p>
                    </div>
                </section>

                {/* Why choose us section with icon cards */}
                <section
                    id="why-us"
                    className="bg-white dark:bg-gray-900 
                        rounded-xl 
                        shadow-[0_4px_20px_rgba(250,204,21,0.2)] 
                        dark:shadow-[0_4px_20px_rgba(250,204,21,0.1)] 
                        p-8 transition-colors duration-500"
                >
                    {/* Section heading */}
                    <h3 className="text-3xl font-bold mb-8 border-b text-yellow-500 dark:text-yellow-400 inline-block pb-2">
                        چرا کالاپجی گیم؟
                    </h3>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700 dark:text-gray-300">
                        {/* Security Card */}
                        <div className="p-6 rounded-xl border border-indigo-300 dark:border-indigo-700 hover:shadow-lg transition-shadow cursor-default">
                            <FontAwesomeIcon icon={faShieldAlt} className="w-14 h-14 text-indigo-600 mb-4 mx-auto" />
                            <h4 className="font-semibold text-xl mb-2">امنیت کامل</h4>
                            <p>تمامی اکانت‌ها با ضمانت اصالت و امنیت معامله ارائه می‌شوند.</p>
                        </div>

                        {/* Fast Delivery Card */}
                        <div className="p-6 rounded-xl border border-indigo-300 dark:border-indigo-700 hover:shadow-lg transition-shadow cursor-default">
                            <FontAwesomeIcon icon={faTruckFast} className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
                            <h4 className="font-semibold text-xl mb-2">ارسال سریع</h4>
                            <p>سفارشات در کمترین زمان ممکن و با بسته‌بندی ایمن ارسال می‌شوند.</p>
                        </div>

                        {/* 24/7 Support Card */}
                        <div className="p-6 rounded-xl border border-indigo-300 dark:border-indigo-700 hover:shadow-lg transition-shadow cursor-default">
                            <FontAwesomeIcon icon={faHeadset} className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
                            <h4 className="font-semibold text-xl mb-2">پشتیبانی ۲۴ ساعته</h4>
                            <p>تیم پشتیبانی ما همیشه آماده پاسخگویی و کمک به شماست.</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section
                    id="team"
                    className="bg-white dark:bg-gray-900 
                    rounded-xl 
                    shadow-[0_4px_20px_rgba(250,204,21,0.2)] 
                    dark:shadow-[0_4px_20px_rgba(250,204,21,0.1)] 
                    p-8 transition-colors duration-500"
                >
                    {/* Team heading */}
                    <h3 className="text-3xl font-bold mb-8 border-b inline-block pb-2 text-center text-yellow-500 dark:text-yellow-400">
                        تیم حرفه‌ای کالاپجی گیم
                    </h3>

                    {/* Team members grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center text-gray-800 dark:text-gray-200">
                        {/* Team member card */}
                        <div className="bg-gray-100 dark:bg-[#1f2937] rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(250,204,21,0.15)] transition-shadow duration-300">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="محمد مظلومی"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h4 className="font-semibold text-xl mb-1">محمد مظلومی</h4>
                            <p className="text-yellow-600 dark:text-yellow-400 text-sm mb-2">مدیر فروشگاه</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                مدیریت کلی فروشگاه، نظارت بر سفارشات، ارتباط با مشتریان و هدایت تیم
                            </p>
                            {/* Social links */}
                            <div className="flex justify-center gap-4 mt-3 text-indigo-600 dark:text-indigo-400 text-xl">
                                <a href="#" aria-label="اینستاگرام محمد" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" aria-label="تلگرام محمد" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-telegram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Repeat similarly for other team members */}

                        <div className="bg-gray-100 dark:bg-[#1f2937] rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(250,204,21,0.15)] transition-shadow duration-300">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="رضا غیبی شوی"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h4 className="font-semibold text-xl mb-1">رضا غیبی شوی</h4>
                            <p className="text-yellow-600 dark:text-yellow-400 text-sm mb-2">مدیر اجرایی و پشتیبانی</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                مسول پاسخگویی به کاربران و پیگیری مشکلات (پشتیبانی)، هماهنگ کننده و ناظر بر عملکرد تیم فنی
                            </p>
                            <div className="flex justify-center gap-4 mt-3 text-indigo-600 dark:text-indigo-400 text-xl">
                                <a href="#" aria-label="اینستاگرام رضا" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" aria-label="تلگرام رضا" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-telegram"></i>
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-[#1f2937] rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(250,204,21,0.15)] transition-shadow duration-300">
                            <img
                                src="https://randomuser.me/api/portraits/men/76.jpg"
                                alt="مجتبی احمدزاده"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h4 className="font-semibold text-xl mb-1">مجتبی احمدزاده</h4>
                            <p className="text-yellow-600 dark:text-yellow-400 text-sm mb-2">
                                توسعه دهنده رابط و تجربه کاربری <br />
                                <span className="text-gray-800 dark:text-gray-300">(Frontend Developer)</span>
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                مسول طراحی، توسعه و بهینه‌سازی ظاهر سایت برای ارائه بهترین تجربه به کاربران
                            </p>
                            <div className="flex justify-center gap-4 mt-3 text-indigo-600 dark:text-indigo-400 text-xl">
                                <a href="#" aria-label="لینکدین مجتبی" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" aria-label="گیت‌هاب مجتبی" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-[#1f2937] rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(250,204,21,0.12)] transition-shadow duration-300">
                            <img
                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                alt="حسین فلاح"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h4 className="font-semibold text-xl mb-1">حسین فلاح</h4>
                            <p className="text-yellow-600 dark:text-yellow-400 text-sm mb-2">توسعه دهنده بک‌اند</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                برنامه‌نویس سرور و پایگاه داده، توسعه و نگهداری بخش‌های فنی و امنیتی سایت
                            </p>
                            <div className="flex justify-center gap-4 mt-3 text-indigo-600 dark:text-indigo-400 text-xl">
                                <a href="#" aria-label="گیت‌هاب حسین" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" aria-label="تلگرام حسین" className="hover:text-indigo-500 transition">
                                    <i className="fab fa-telegram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customer comments component */}
                <CustomerComments />
            </div>
        </>
    )
}

export default AboutUs
