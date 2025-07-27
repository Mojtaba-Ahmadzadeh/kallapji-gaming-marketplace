'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// Sample product data
const products = [
    {
        id: 1,
        slug: 'vip-880cp-account',
        title: '۸۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۷۵۹,۰۰۰',
    },
    {
        id: 2,
        slug: 'vip-1300cp-account',
        title: '۱۳۰۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۱,۰۵۰,۰۰۰',
    },
    {
        id: 3,
        slug: 'vip-2400cp-account',
        title: '۲۴۰۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۱,۸۵۰,۰۰۰',
    },
    {
        id: 4,
        slug: 'vip-2400cp-account',
        title: '۲۴۰۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۱,۸۵۰,۰۰۰',
    },
    {
        id: 6,
        slug: 'vip-2400cp-account',
        title: '۲۴۰۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۱,۸۵۰,۰۰۰',
    },
    {
        id: 7,
        slug: 'vip-2400cp-account',
        title: '۲۴۰۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۱,۸۵۰,۰۰۰',
    },
    // ... سایر محصولات
];


function CODProductSlide({product}) {
    return (
        // Wrapper container for the swiper with padding and centered width
        <div className="w-full mx-auto">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className='w-full h-full pb-12'>
                            {/* Card container with rounded corners, shadow, hover scale effect */}
                            <div className="group w-full p-4 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1A213A] dark:to-[#0f1322] border border-gray-300 dark:border-[#2B3250] shadow-xl hover:scale-[1.015] transition duration-300 ease-in-out cursor-pointer">
                                <div className="relative">
                                    {/* Product image wrapped in a link */}
                                    <Link href={`/callofduty/${product.slug}`} className="block">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-64 object-cover rounded-2xl" // Fixed height and rounded corners
                                        />
                                    </Link>

                                    {/* Hover buttons: like (heart) and add to cart */}
                                    <div className="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <button className="bg-white/70 dark:bg-[#1b1f33]/70 p-3 rounded-full shadow text-gray-700 dark:text-white hover:text-yellow-500 hover:scale-110 transition duration-300">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                                                ></path>
                                            </svg>
                                        </button>
                                        <button className="bg-white/70 dark:bg-[#1b1f33]/70 p-3 rounded-full shadow text-gray-700 dark:text-white hover:text-emerald-500 hover:scale-110 transition duration-300">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-9-3h4"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Product title, rating stars and price */}
                                <div className="pt-4 flex flex-col items-center gap-1 text-center">
                                    <h3 className="text-gray-800 dark:text-gray-200 text-[18px] lg:text-[16px] font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                        {product.title}
                                    </h3>
                                    <div className="text-[1.4rem] xl:text-[1.2rem] flex gap-1 text-yellow-500">
                                        {/* Star rating, static 5 stars */}
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </div>
                                    <div className="text-yellow-600 dark:text-yellow-500 font-bold text-[17px] lg:text-[16px]">
                                        {product.price} <span className="font-Shabnam-Bold-FD">تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CODProductSlide
