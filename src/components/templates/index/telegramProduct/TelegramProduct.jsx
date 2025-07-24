import TelegramProductCard from '@/components/modules/telegramProductCard/TelegramProductCard'
import React from 'react'

function TelegramProduct() {
    return (
        // Container with top margin
        <div className="mt-16">

            {/* Header section with title and 'View All' link */}
            <div className="flex items-center justify-between text-white mb-9 gap-4 overflow-x-auto whitespace-nowrap">

                {/* Section title */}
                <h4 className="text-[18px] md:text-3xl text-black dark:text-white font-extrabold tracking-tight leading-tight font-Shabnam-Bold-FD">
                    محصولات تلگرام
                </h4>

                {/* 'View All' link styled with hover effects */}
                <a href="/pages/telegram-products.html" className="flex items-center gap-2 text-black dark:text-white bg-gray-200 dark:bg-[#151B2D] dark:hover:bg-[#1F263D] transition-colors duration-300 text-sm md:text-base font-Shabnam-Medium-FD px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow hover:shadow-lg group shrink-0">

                    {/* Link text with hover color transition */}
                    <span className="group-hover:text-orange-400 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        مشاهده همه
                    </span>

                    {/* Arrow icon that moves right on hover */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                    </svg>
                </a>
            </div>

            {/* Grid layout for product cards, responsive columns and gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <TelegramProductCard />
                <TelegramProductCard />
                <TelegramProductCard />
                <TelegramProductCard />
            </div>
        </div>
    )
}

export default TelegramProduct
