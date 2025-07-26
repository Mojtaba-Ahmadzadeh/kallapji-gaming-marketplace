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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                        ۱. پذیرش قوانین
                    </h3>
                    <p>
                        با استفاده از وب‌سایت کالاپجی، شما موافقت کامل خود را با کلیه قوانین و شرایط مندرج در این صفحه اعلام می‌دارید...
                    </p>
                </section>

                <section id="privacy">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                        ۲. حریم خصوصی کاربران
                    </h3>
                    <p>
                        ما متعهد به حفظ اطلاعات شخصی کاربران هستیم و اطلاعات شما بدون اجازه‌تان در اختیار شخص یا سازمانی قرار نخواهد گرفت مگر با حکم قانونی...
                    </p>
                </section>


                <section id="responsibility">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                        ۳. مسئولیت محتوا
                    </h3>
                    <p>
                        مسئولیت صحت و قانونی بودن کالاها و اطلاعات ارائه شده توسط فروشندگان بر عهده خود آنهاست...
                    </p>
                </section>


                <section id="changes">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                        ۴. تغییرات در قوانین
                    </h3>
                    <p>
                        کالاپجی این حق را برای خود محفوظ می‌دارد که در هر زمان، بدون اطلاع قبلی، قوانین را تغییر دهد...
                    </p>
                </section>


                <section id="terms">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                        ۵. شرایط خرید و فروش
                    </h3>
                    <p>
                        فروشندگان موظف‌اند کالاهای خود را مطابق با قوانین کشور و عرف جامعه عرضه کنند...
                    </p>
                </section>
            </article>
        </div >
    )
}

export default TermsAndConditions