import React from 'react'

function ClashProductCard() {
    return (
        <div className="w-full h-[337px] bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative h-[60%] overflow-hidden">
                <a href="/pages/pubgUcِDetails.html" className="block overflow-hidden rounded-2xl shadow-lg">
                    <img src="../images/Gemini_Generated_Image_rp0wemrp0wemrp0w.jpeg" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" alt="یوسی پابجی 3850 عددی" />
                </a>
                <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    پرفروش</div>
            </div>

            <div className="p-4 flex flex-col justify-between h-[40%]">
                <div>
                    <h3 className="text-zinc-800 dark:text-white text-lg font-semibold">UC پابجی - 660 عدد</h3>
                    <p className="text-zinc-600 dark:text-gray-400 text-sm mt-1">تحویل سریع | مستقیم روی اکانت</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-600 dark:text-green-400 text-lg font-bold">185٬000 تومان</span>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-bold px-4 py-2 rounded transition-colors duration-300">
                        خرید
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClashProductCard