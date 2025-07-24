import React from 'react';
import GiftCard from '@/components/modules/giftCard/GiftCard';

function GiftCards() {
    return (
        <div className="mt-[4rem]">
            {/* Header section with title and "View All" link */}
            <div className="flex items-center justify-between text-white mb-9">
                <h4 className="text-[20px] md:text-3xl font-semibold tracking-tighter text-black dark:text-white">
                    اکانت پرمیوم
                </h4>

                {/* Link to view all premium accounts */}
                <a
                    href="/pages/premiumAccount.html"
                    className="flex items-center gap-2 text-black dark:text-white bg-gray-200 dark:bg-[#151B2D] dark:hover:bg-[#1F263D] transition-colors duration-300 text-sm md:text-base font-Shabnam-Medium-FD px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow hover:shadow-lg group shrink-0"
                >
                    <span className="group-hover:text-orange-400 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        مشاهده همه
                    </span>

                    {/* Arrow icon indicating navigation */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </a>
            </div>

            {/* Grid container for gift cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12 rounded-2xl">
                {/* Multiple GiftCard components displayed in grid */}
                <GiftCard />
                <GiftCard />
                <GiftCard />
                <GiftCard />
            </div>
        </div>
    );
}

export default GiftCards;
