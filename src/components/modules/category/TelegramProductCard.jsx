import React from 'react'

function TelegramProductCard() {
    return (
        <div className="group w-full p-4 rounded-3xl 
                                bg-white dark:bg-gradient-to-br dark:from-[#1b223c] dark:via-[#131a2f] dark:to-[#0e111d] 
                                border border-gray-200 dark:border-[#2d354f]/50 
                                shadow-md hover:shadow-lg 
                                transition duration-300 ease-in-out cursor-pointer">

            <div className="relative overflow-hidden rounded-2xl">
                <a href="/pages/gameAccountDetails.html" className="block relative">
                    <img src="/images/667d61112550730fade9c080_thumbnail.webp" alt="اکانت کالاف دیوتی" className="w-full h-auto rounded-2xl object-cover 
                                        transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                                        group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 
                                            transition-colors duration-500 rounded-2xl">
                    </div>
                </a>

                <div className="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 z-10">
                    <button className="bg-white/80 dark:bg-[#1b1f33]/70 p-3 rounded-full shadow 
                    text-gray-700 dark:text-white 
                    hover:text-yellow-400 hover:scale-110 
                    transition duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                            <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
                        </svg>
                    </button>

                    <button className="bg-white/80 dark:bg-[#1b1f33]/70 p-3 rounded-full shadow 
                    text-gray-700 dark:text-white 
                    hover:text-emerald-400 hover:scale-110 
                    transition duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-9-3h4"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="pt-5 flex flex-col items-center gap-2 text-center">
                <h3 className="text-gray-800 dark:text-gray-100 text-base font-semibold font-Shabnam-Medium-FD leading-tight 
                                    hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                    اکانت ویژه 880CP کالاف دیوتی
                </h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                    فعال‌سازی سریع + ضمانت اصالت
                </div>
                <div className="text-yellow-500 font-bold text-sm">
                    فقط ۷۵۹,۰۰۰ <span className="font-Shabnam-Bold-FD">تومان</span>
                </div>
            </div>
        </div>
    )
}

export default TelegramProductCard