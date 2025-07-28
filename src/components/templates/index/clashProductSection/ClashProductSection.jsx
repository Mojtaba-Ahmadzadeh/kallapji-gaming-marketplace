import React from 'react';
import ClashProductCard from '@/components/modules/clashProductCard/ClashProductCard';

const products = [
    {
        slug: 'th15-max-hero-skin',
        title: 'اکانت تاون هال 15 مکس + اسکین هیرو',
        description: 'همراه با اسکین ویژه هیروها + تضمین بدون بن',
        price: 1950000,
        image: '/images/Gemini_Generated_Image_1fogf71fogf71fog.png',
    },
    {
        slug: 'th14-strong-clan-war',
        title: 'اکانت تاون هال 14 قوی برای کلن وار',
        description: 'مناسب کلن وار حرفه‌ای + ارتقای هیروها و نیروها',
        price: 1490000,
        image: '/images/clash_th14_war.jpg',
    },
    {
        slug: 'th13-balanced-upgrade',
        title: 'اکانت تاون هال 13 بالانس',
        description: 'ساختمان‌ها و نیروها متعادل + آماده ارتقا به TH14',
        price: 1090000,
        image: '/images/Gemini_Generated_Image_1fogf71fogf71fog.jpg',
    },
    {
        slug: 'th11-economic-choice',
        title: 'اکانت تاون هال 11 اقتصادی',
        description: 'قیمت مناسب + بدون هیچ تخلف یا بن',
        price: 720000,
        image: '/images/Gemini_Generated_Image_1fogf71fogf71fog.jpg',
    },
];


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
                {
                    products.map((product, index) => (
                        <ClashProductCard key={index} product={product} />
                    ))
                }
            </div>
        </div>
    );
}

export default ClashProductSection;
