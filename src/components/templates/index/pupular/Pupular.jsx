import PupularItem from '@/components/modules/pupularItem/PupularItem'
import React from 'react'

const products = [
{
slug: 'vip-880cp-account',
    name: 'CP 880 کالاف دیوتی',
    price: '759,000 تومان',
    oldPrice: '820,000 تومان',
    description: 'مناسب برای خرید آیتم‌ها، اسکین‌ها و Battle Pass در بازی Call of Duty Mobile.',
    image: '/images/Gemini_Generated_Image_qt55nzqt55nzqt55.jpeg',
  },
  {
    slug: 'vip-1300cp-account',
    name: 'CP 1300 کالاف دیوتی',
    price: '1,150,000 تومان',
    oldPrice: '1,220,000 تومان',
    description: 'خرید CP جهت ارتقاء سطح بازی و استفاده از امکانات پریمیوم.',
    image: '/images/Gemini_Generated_Image_f08nbsf08nbsf08n.jpeg',
  },
  {
    slug: 'battle-pass-premium',
    name: 'بتل پس پریمیوم کالاف دیوتی',
    price: '340,000 تومان',
    oldPrice: '390,000 تومان',
    description: 'دسترسی به جوایز ویژه فصل جدید و XP بوستر در Call of Duty Mobile.',
    image: '/images/Gemini_Generated_Image_f08nbsf08nbsf08n.jpeg',
  },
  {
    slug: 'rare-cod-account',
    name: 'اکانت نایاب کالاف دیوتی',
    price: '2,900,000 تومان',
    oldPrice: '3,200,000 تومان',
    description: 'اکانت با اسکین‌های لجندری، سطح بالا و امنیت کامل.',
    image: '/images/Gemini_Generated_Image_f08nbsf08nbsf08n.jpeg',
  },
  {
    slug: 'rare-cod-account',
    name: 'اکانت نایاب کالاف دیوتی',
    price: '2,900,000 تومان',
    oldPrice: '3,200,000 تومان',
    description: 'اکانت با اسکین‌های لجندری، سطح بالا و امنیت کامل.',
    image: '/images/Gemini_Generated_Image_f08nbsf08nbsf08n.jpeg',
  },
    // ..
]

function Pupular() {
    return (
        // Main container with top margin and max-width container class
        <div className="mt-16 container">

            {/* Header with title and 'View All' link */}
            <div className="flex items-center justify-between mb-9">

                {/* Section title */}
                <h4 className="text-[20px] md:text-3xl font-semibold tracking-tighter text-black dark:text-white">
                    محبوب ترین ها
                </h4>

                {/* 'View All' link with hover effect and icon */}
                <a href="/pages/gameAccounts.html" className="flex items-center gap-2 dark:text-white bg-gray-200 dark:bg-[#151B2D] dark:hover:bg-[#1F263D] transition-colors duration-300 text-sm md:text-base font-Shabnam-Medium-FD px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow hover:shadow-lg group shrink-0">

                    {/* Link text with hover color transition */}
                    <span className="group-hover:text-orange-400 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        مشاهده همه
                    </span>

                    {/* Arrow icon with right shift animation on hover */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                    </svg>
                </a>
            </div>

            {/* Section wrapper with relative positioning for decorative effect */}
            <section className="relative overflow-hidden rounded-2xl">

                {/* Decorative blurred circle background */}
                <div className="absolute -top-40 left-1/2 w-[70vw] h-[70vw] opacity-10 blur-[160px] rounded-full transform -translate-x-1/2 z-0"></div>

                {/* Grid layout for popular items, responsive columns with spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 space-y-4 md:space-y-0">
                    {
                        products.map((product, index) => (
                            <PupularItem key={index} product={product} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Pupular
