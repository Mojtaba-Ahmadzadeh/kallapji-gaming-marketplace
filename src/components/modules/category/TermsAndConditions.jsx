import React from 'react'

function TermsAndConditions() {
    return (
        <div className='flex-grow max-w-5xl mx-auto px-6 py-12'>

            <h2 className="text-4xl font-bold mb-4 text-yellow-500">
                قوانین و مقررات استفاده از کالاپجی
            </h2>

            <p className="mb-8 text-gray-700 dark:text-gray-300">
                لطفاً قبل از استفاده از خدمات ما، این قوانین را با دقت مطالعه فرمایید.
            </p>


            <p className="mb-12 text-sm text-gray-500 dark:text-gray-400">
                آخرین به‌روزرسانی: ۱۴۰۴/۰۳/۰۵
            </p>

            <nav aria-label="فهرست قوانین" className="mb-10 bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                    فهرست مطالب
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside cursor-pointer">
                    <li><a href="#acceptance" className="hover:underline">۱. پذیرش قوانین</a></li>
                    <li><a href="#privacy" className="hover:underline">۲. حریم خصوصی کاربران</a></li>
                    <li><a href="#responsibility" className="hover:underline">۳. مسئولیت محتوا</a></li>
                    <li><a href="#changes" className="hover:underline">۴. تغییرات در قوانین</a></li>
                    <li><a href="#terms" className="hover:underline">۵. شرایط خرید و فروش</a></li>
                </ul>
            </nav>

            <article className="space-y-12 leading-relaxed text-gray-800 dark:text-gray-200 text-justify">


                <section id="acceptance">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                        ۱. پذیرش قوانین
                    </h3>
                    <p>
                        با استفاده از وب‌سایت کالاپجی، شما موافقت کامل خود را با کلیه قوانین و شرایط مندرج در این صفحه اعلام می‌دارید...
                    </p>
                </section>

                <section id="privacy">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 .27.1.53.29.72l5.59 5.59a2 2 0 01-2.83 2.83l-5.6-5.6a.996.996 0 010-1.41L15.87 7.4c.39-.39 1.02-.39 1.41 0z"></path>
                        </svg>
                        ۲. حریم خصوصی کاربران
                    </h3>
                    <p>
                        ما متعهد به حفظ اطلاعات شخصی کاربران هستیم و اطلاعات شما بدون اجازه‌تان در اختیار شخص یا سازمانی قرار نخواهد گرفت مگر با حکم قانونی...
                    </p>
                </section>


                <section id="responsibility">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-6a3 3 0 016 0v6"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-2"></path>
                        </svg>
                        ۳. مسئولیت محتوا
                    </h3>
                    <p>
                        مسئولیت صحت و قانونی بودن کالاها و اطلاعات ارائه شده توسط فروشندگان بر عهده خود آنهاست...
                    </p>
                </section>


                <section id="changes">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v4l3 3"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20a8 8 0 10-8-8"></path>
                        </svg>
                        ۴. تغییرات در قوانین
                    </h3>
                    <p>
                        کالاپجی این حق را برای خود محفوظ می‌دارد که در هر زمان، بدون اطلاع قبلی، قوانین را تغییر دهد...
                    </p>
                </section>


                <section id="terms">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 17v4"></path>
                        </svg>
                        ۵. شرایط خرید و فروش
                    </h3>
                    <p>
                        فروشندگان موظف‌اند کالاهای خود را مطابق با قوانین کشور و عرف جامعه عرضه کنند...
                    </p>
                </section>
            </article>
        </div>
    )
}

export default TermsAndConditions