import React from 'react';
import CODProductSlide from '@/components/modules/CODProductSlide/CODProductSlide';

function CallOfDutySection() {
    return (
        <div className="mt-16">
            {/* Section header with title and 'See All' button */}
            <div className="flex items-center justify-between mb-9 gap-4 overflow-x-auto whitespace-nowrap">

                {/* Section title */}
                <h4 className="text-[18px] md:text-3xl font-extrabold text-black dark:text-white tracking-tight leading-tight font-Shabnam-Bold-FD">
                    محصولات کالاف دیوتی
                </h4>

                {/* 'See All' button linking to full list of game accounts */}
                <a href="/pages/gameAccounts.html"
                    className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base rounded-full shadow hover:shadow-lg transition-colors duration-300 shrink-0 
                               text-black dark:text-white bg-gray-200 dark:bg-[#151B2D] dark:hover:bg-[#1F263D] font-Shabnam-Medium-FD group">
                                
                    {/* Button label with hover color effect */}
                    <span className="group-hover:text-orange-400 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        مشاهده همه
                    </span>

                    {/* Arrow icon with hover slide effect */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                </a>
            </div>

            {/* Swiper slider showcasing Call of Duty products */}
            <CODProductSlide />
        </div>
    );
}

export default CallOfDutySection;
