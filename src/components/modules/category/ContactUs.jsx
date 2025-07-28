import React from 'react';

function ContactUs() {
    return (
        // Container: Flex layout, wraps on small screens, nowrap on large, centered, with horizontal gap and top margin
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-6 mt-12">

            {/* Left section: Contact info and form */}
            <div className="bg-white dark:bg-[#151B2D] p-6 rounded-xl w-full lg:w-[75%]">

                {/* Title with icon */}
                <div className="border-b border-gray-300 dark:border-gray-500">
                    <ul className="text-gray-800 dark:text-white mb-4">
                        <li className="flex items-center gap-x-1">
                            <span className="text-red-500">
                                {/* Heart icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                                </svg>
                            </span>
                            <span className="font-semibold">تماس با ما</span>
                        </li>
                    </ul>
                </div>

                {/* Description paragraph */}
                <div className="text-gray-700 dark:text-gray-300 leading-[2] my-5">
                    <p>
                        {/* Persian text about the company */}
                        مجموعه زرین گیم از سال ۱400 تاکنون همراه با تیم فنی خود در زمینه خرید اکانت قانونی، خرید گیفت
                        کارت پلی استیشن، خرید کنسول و لوازم جانبی پلی استیشن، لوازم جانبی کامپیوتر، محصولات موس، کیبورد
                        و هدفون و همچنین محصولات تیشرت، فعالیت می‌کند. مجموعه زرین گیم محصولات و تجهیزات گیمینگ باکیفیت
                        و برند را با حذف واسطه‌‎ها به رقابتی‌ترین قیمت بازار به مشتریان خود عرضه می‌کند. شما می‌توانید
                        برای دریافت راهنمایی تخصصی با کارشناسان و متخصصین مجموعه زرین گیم ارتباط بگیرید و پس از دریافت
                        مشاوره فنی، برای خرید محصولات و تجهیزات گیمینگ مورد نیاز خود اقدام کنید. همچنین می‌توانید
                        راهنمای خرید بازی‌ها، راهنمای خرید تجهیزات گیمینگ، لیست برترین بازی‌های سال برای پلتفرم‌های
                        مختلف، مقالات آموزشی حوزه گیمینگ، راهنمای خرید لوازم جانبی و غیره را از وبسایت زرین گیم دریافت
                        کنید. تیم پشتیبانی زرین گیم شما را همراهی می‌کنند تا بهترین انتخاب‌ها را در حوزه گیمینگ داشته
                        باشید و از لحظات بازی خود نهایت استفاده را ببرید.</p>

                </div>

                {/* Contact form */}
                <div>
                    <form action="#" className="flex gap-x-4 flex-wrap">
                        {/* Full name input */}
                        <div className="w-full xs:w-[20rem]">
                            <input
                                type="text"
                                required
                                className="rounded-lg text-sm outline-none p-3 bg-white dark:bg-[#151B2D] text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 w-full placeholder:text-sm"
                                placeholder="نام و نام خانوادگی"
                            />
                        </div>

                        {/* Email input */}
                        <div className="w-full xs:w-[20rem]">
                            <input
                                type="email"
                                className="rounded-lg text-sm outline-none p-3 bg-white dark:bg-[#151B2D] text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 w-full placeholder:text-sm"
                                placeholder="ایمیل"
                            />
                        </div>

                        {/* Phone number input */}
                        <div className="w-full xs:w-[20rem]">
                            <input
                                type="text"
                                required
                                className="rounded-lg text-sm outline-none p-3 bg-white dark:bg-[#151B2D] text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 w-full placeholder:text-sm"
                                placeholder="شماره تماس"
                            />
                        </div>

                        {/* Message textarea */}
                        <div className="w-full mt-3">
                            <textarea
                                rows="9"
                                required
                                className="w-full rounded-lg outline-none bg-white dark:bg-[#151B2D] text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 p-3"
                                placeholder="یادداشت خود را بنویسید"
                            ></textarea>
                        </div>

                        {/* Submit button */}
                        <div className="bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900 transition-all duration-200 text-white p-4 rounded-xl w-36 flex items-center justify-center cursor-pointer">
                            <button type="submit">
                                <span className="font-semibold">ارسال پیام</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right section: Map image and contact details */}
            <div className="bg-white dark:bg-[#151B2D] p-8 rounded-xl w-full lg:w-[372px] mt-5 lg:mt-0">
                <div>
                    <img
                        loading="lazy"
                        decoding="async"
                        src="https://webdiaco-demo.ir/wp-content/uploads/2024/01/64d2310b77a293e18725a871_London_Day-Mapbox-Standard-2023-MKTG-approved-rounded-1-1024x650.png"
                        className="attachment-large size-large wp-image-2222 rounded-2xl w-full lg:w-[20rem] h-[14rem]"
                        alt="Map"
                    />
                </div>

                {/* Link button (example) */}
                <div className="flex gap-x-5 mt-5">
                    <div className="text-gray-800 dark:text-white border border-gray-300 dark:border-gray-500 w-[50%] rounded-lg p-3 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300">
                        <a href="#" className="flex items-center gap-x-1">
                            <span>آیکن</span>
                            <span>برنامه بلد</span>
                        </a>
                    </div>
                </div>

                {/* Contact info list */}
                <div className="mt-6">
                    <ul>
                        {/* Support email */}
                        <li className="flex items-center gap-x-1 border-b border-gray-300 dark:border-gray-700 py-4">
                            <span className="text-blue-600">
                                {/* Icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                                </svg>
                            </span>
                            <span className="text-gray-800 dark:text-white text-sm">ایمیل پشتیبانی : info@webdiaco.ir</span>
                        </li>

                        {/* Phone number */}
                        <li className="flex items-center gap-x-1 border-b border-gray-300 dark:border-gray-700 py-4">
                            <span className="text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                                </svg>
                            </span>
                            <span className="text-gray-800 dark:text-white text-sm">شماره تماس : 0214567676</span>
                        </li>

                        {/* Address */}
                        <li className="flex items-center gap-x-1 border-b border-gray-300 dark:border-gray-700 py-4">
                            <span className="text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                                </svg>
                            </span>
                            <span className="text-gray-800 dark:text-white text-sm">آدرس : 0214567676</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
