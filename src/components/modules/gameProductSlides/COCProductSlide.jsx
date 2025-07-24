'use client';

// Import necessary Swiper modules and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// CODProductSlide component to display Call of Duty products in a Swiper carousel
function CODProductSlide({ products }) {
    return (
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
                {/* Render each product inside a SwiperSlide */}
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="w-full h-full pb-12">
                            {/* Product card container */}
                            <div
                                role="group"
                                aria-label={`Slide ${product.id}`}
                                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 shadow-md hover:shadow-yellow-500/30 transition duration-300"
                            >
                                {/* Product image */}
                                <img
                                    src={product.image}
                                    className="rounded-xl w-full h-44 object-cover mb-4"
                                    alt={product.title}
                                />
                                {/* Product title */}
                                <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-1">
                                    {product.title}
                                </h3>
                                {/* Product description or fallback */}
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
