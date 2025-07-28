import Link from 'next/link'
import React from 'react'


// PopularItem component - shows a product card with image, info and action buttons
function PopularItem({ product }) {
    return (
        <div
            className="
        group relative mx-auto cursor-pointer
        w-full md:max-w-[17rem] h-[23.1rem] sm:h-[23rem]
        p-2 xl:p-2 px-2 rounded-3xl
        bg-gradient-to-br from-white via-gray-100 to-white
        dark:from-[#0a0e1c] dark:via-[#121a36] dark:to-[#0a0e1c]
        border border-gray-300 dark:border-[#2b3250]
        shadow-[0_5px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_20px_rgba(0,0,0,0.6)]
        hover:shadow-[0_8px_25px_rgba(255,215,0,0.15)] dark:hover:shadow-[0_8px_25px_rgba(255,215,0,0.2)]
        transition-all duration-300 ease-in-out
      "
        >
            {/* Product Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-300 dark:border-[#1f2a58] shadow-inner">
                <Link href={`/pupular/${product.slug}`} className="block h-[13rem]">
                    <img
                        src="/images/Gemini_Generated_Image_qt55nzqt55nzqt55.jpeg"
                        alt="Product"
                        className="
              w-full h-full object-cover rounded-2xl
              transition-transform duration-500 ease-in-out
              group-hover:scale-105 group-hover:brightness-110
            "
                    />
                </Link>

                {/* Hover action buttons: Favorite and Cart */}
                <div className="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Favorite Button */}
                    <button
                        aria-label="Add to favorite"
                        className="
              bg-white/70 dark:bg-[#1b1f33]/70 p-3 rounded-full shadow
              text-gray-800 dark:text-white
              hover:text-yellow-500 hover:scale-110 transition duration-300
            "
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                        </svg>
                    </button>

                    {/* Cart Button */}
                    <button
                        aria-label="Add to cart"
                        className="
              bg-white/70 dark:bg-[#1b1f33]/70 p-3 rounded-full shadow
              text-gray-800 dark:text-white
              hover:text-emerald-500 hover:scale-110 transition duration-300
            "
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-9-3h4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Product Information */}
            <div className="pt-3 flex flex-col items-center gap-1 text-center">
                {/* Product Title */}
                <h3
                    className="
            text-gray-800 dark:text-gray-200 text-[17px] md:text-[16px]
            font-medium font-Shabnam-Medium-FD
            hover:text-gray-600 dark:hover:text-gray-300
            transition-colors leading-tight
          "
                >
                    ۸۸۰ سی پی کالاف دیوتی
                </h3>

                {/* Rating Stars */}
                <div className="flex text-amber-500 text-[18px]">
                    {'★'.repeat(5).split('').map((star, i) => (
                        <span key={i}>{star}</span>
                    ))}
                </div>

                {/* Price */}
                <div className="text-yellow-600 font-bold text-[16px]">
                    ۷۵۹,۰۰۰ <span className="font-Shabnam-Bold-FD">تومان</span>
                </div>

                {/* Buy Button */}
                <button
                    className="
            mt-2 w-full py-2 rounded-xl text-sm font-bold
            text-[#0f172a] dark:text-[#0f172a]
            bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500
            hover:from-yellow-300 hover:to-yellow-400
            shadow-lg hover:shadow-yellow-300/30
            transition-all duration-300
            flex items-center justify-center gap-2
          "
                    aria-label="Buy product"
                >
                    <svg
                        className="w-5 h-5 animate-bounce-slow"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-9-3h4" />
                    </svg>
                    خرید
                </button>
            </div>
        </div>
    )
}

export default PopularItem
