import React from 'react'

function TelegramProductCard({product}) {
    return (
        <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl shadow-lg p-6 
                        border border-zinc-200 dark:border-zinc-700 transition-all group">

            {/* Header: icon + title + badge */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-500 p-2 rounded-full">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                            alt="آیکون تلگرام"
                            className="w-5 h-5"
                        />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        خرید استارز تلگرام
                    </h3>
                </div>
                <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-600 dark:text-white px-3 py-1 rounded-full">
                    پرفروش
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 line-clamp-2">
                افزایش سریع استارز در چت‌های عمومی برای افزایش اعتبار و دیده شدن.
            </p>

            {/* Price + Action */}
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">از</span>{' '}
                    <span className="text-lg font-extrabold text-green-500 dark:text-green-400">
                        ۶۰,۰۰۰ تومان
                    </span>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 
                                   hover:from-blue-600 hover:to-purple-600 
                                   text-white px-4 py-2 rounded-xl text-sm font-medium 
                                   shadow-md transition-all duration-300">
                    خرید
                </button>
            </div>
        </div>
    )
}

export default TelegramProductCard
