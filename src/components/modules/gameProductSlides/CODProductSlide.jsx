'use client'; // Enable client-side rendering for this component

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// Component to render a product slider for Call of Duty products
function CODProductSlide({ products }) {
    return (
        // Container with responsive padding
        <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {/* Swiper slider configuration */}
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
                {/* Loop through all products and render each in a SwiperSlide */}
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="w-full h-full pb-12">
                            {/* Individual product card */}
                            <div
                                role="group"
                                aria-label={`اسلاید ${product.id}`} // Accessible label in Persian
                                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 shadow-md hover:shadow-yellow-500/30 transition duration-300"
                            >
                                {/* Product image */}
                                <Link href={`/popular-accounts/callofduty/${product.slug}`}>
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

                                {/* Product description or fallback text */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    {product.description || 'بدون توضیحات'}
                                </p>

                                {/* Price and view link section */}
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

export default CODProductSlide;
