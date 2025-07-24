import React from 'react';
import ClashProductCard from '@/components/modules/clashProductCard/ClashProductCard';

function ClashProductSection() {
    return (
        <div className="mt-16">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-9 gap-4 overflow-x-auto whitespace-nowrap text-white">

                {/* Section Title */}
                <h4 className="text-[18px] md:text-3xl font-extrabold tracking-tight leading-tight text-black dark:text-white font-Shabnam-Bold-FD">
                    محصولات کلش آف کلنز
                </h4>

                {/* 'See All' Button */}
                <a href="/pages/cpKalaf.html"
                    className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base rounded-full shadow hover:shadow-lg 
                               transition-colors duration-300 shrink-0 text-black dark:text-white 
                               bg-gray-200 dark:bg-[#151B2D] dark:hover:bg-[#1F263D] font-Shabnam-Medium-FD group"
                >
                    {/* Button label with hover color */}
                    <span className="group-hover:text-orange-400 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        مشاهده همه
                    </span>

                    {/* Arrow Icon */}
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

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Product Cards */}
                <ClashProductCard />
                <ClashProductCard />
                <ClashProductCard />
                <ClashProductCard />
            </div>
        </div>
    );
}

export default ClashProductSection;
