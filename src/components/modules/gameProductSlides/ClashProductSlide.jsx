'use client'; // Enables client-side rendering for this component

// Import Swiper components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// CODProductSlide component receives an array of product objects and displays them in a Swiper carousel
function ClashProductSlide({ products }) {
    return (
        // Outer container with responsive padding and spacing
        <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {/* Swiper configuration */}
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
                {/* Loop through each product and create a slide */}
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="w-full h-full pb-12">
                            {/* Product card with light/dark theme support */}
                            <div
                                role="group"
                                aria-label={`اسلاید ${product.id}`} // Accessible label in Persian
                                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 shadow-md hover:shadow-yellow-500/30 transition duration-300"
                            >
                                <Link href={`/popular-accounts/clashofclans/${product.slug}`}>
                                    {/* Product image */}
                                    <img
                                        src={product.image}
                                        className="rounded-xl w-full h-44 object-cover mb-4"
                                        alt={product.title}
                                    />
                                </Link>

                                {/* Product title */}
                                <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-1">
                                    {product.title}
                                </h3>

                                {/* Product description with fallback */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    {product.description || 'بدون توضیحات'}
                                </p>

                                {/* Footer section with price and detail link */}
                                <div className="flex justify-between items-center">
                                    <span className="text-yellow-600 font-semibold text-sm">
                                        {product.price}
                                    </span>
                                    <a
                                        href={product.link || '#'}
                                        className="text-sm text-yellow-500 hover:underline font-medium"
                                    >
                                        مشاهده
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ClashProductSlide;
