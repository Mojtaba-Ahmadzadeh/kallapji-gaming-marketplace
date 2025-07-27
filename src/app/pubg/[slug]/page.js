"use client";

import React, { use, useState } from 'react';
import { notFound } from 'next/navigation';
import CommentsSection from '@/components/modules/commentsSection/CommentsSection';

// Mock data for product details keyed by slug
const mockProducts = {
    'vip-880cp-account': {
        name: 'اکانت VIP 880CP PUBG',
        price: '100,000',
        oldPrice: '120,000',
        description: 'توضیحات اکانت VIP 880CP در بازی PUBG',
        image: '/images/Gemini_Generated_Image_jd2makjd2makjd2m.jpeg',
    },
    'legendary-1300cp': {
        name: 'اکانت Legendary 1300CP PUBG',
        price: '200,000',
        oldPrice: '220,000',
        description: 'توضیحات اکانت Legendary 1300CP در بازی PUBG',
        image: '/images/Gemini_Generated_Image_jd2makjd2makjd2m.jpeg',
    },
};

function ProductDetails({ params }) {

    // Get the product details from mock data
    const { slug } = use(params); // ✅ باز کردن Promise

    const product = mockProducts[slug];

    // Local state to manage quantity of the product
    const [quantity, setQuantity] = useState(1);

    // Decrease quantity, minimum is 1
    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    // Increase quantity by 1
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    // Handle manual input change in quantity input field
    const handleQuantityChange = (e) => {
        const val = Number(e.target.value);
        if (val >= 1) setQuantity(val);
    };

    // If product not found, show 404 page
    if (!product) {
        return notFound();
    }

    return (
        <main className="container max-w-screen-2xl mt-16 px-4 mb-5">
            <div className="flex flex-wrap justify-center xl:justify-between gap-8 mb-5">
                {/* Product Image */}
                <div className="w-full xl:w-[30rem] flex justify-center xl:justify-start xl:mr-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="p-6 w-full xl:w-[60%] rounded-2xl shadow-lg bg-gradient-to-br from-white to-yellow-50 dark:from-[#121622] dark:to-[#1F273A]">
                    {/* Breadcrumb Navigation */}
                    <nav className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        <a href="/" className="hover:text-pink-500 transition">خانه</a>
                        <span className="mx-1">/</span>
                        <span className="text-gray-900 dark:text-white font-semibold">محصول</span>
                    </nav>

                    {/* Product Title */}
                    <h1 className="text-gray-900 dark:text-white text-3xl font-bold mb-4">{product.name}</h1>

                    {/* Price Section */}
                    <p className="text-xl font-bold mb-4 flex items-center space-x-1">
                        <bdi className="text-yellow-600 dark:text-yellow-400">
                            {product.price} <span className="text-sm">تومان</span>
                        </bdi>
                        {product.oldPrice && (
                            <>
                                <span className="text-gray-800 dark:text-gray-300 mx-2">-</span>
                                <bdi className="text-yellow-600 dark:text-yellow-400">
                                    {product.oldPrice} <span className="text-sm">تومان</span>
                                </bdi>
                            </>
                        )}
                    </p>

                    {/* Product Description */}
                    <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2 mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">کالاپجی گیم</h5>
                        <ul className="list-disc pr-5 space-y-2">
                            <li>دسترسی کامل به Photoshop، Lightroom و 1 ترابایت فضای ابری.</li>
                            <li>امکان فعال‌سازی روی ایمیل شما یا خرید آماده از سیب‌کده.</li>
                            <li>شامل قابلیت‌های AI مثل Generative Fill.</li>
                            <li>اکانت‌ها روی ریجن ترکیه فعال می‌شوند.</li>
                        </ul>
                    </div>

                    {/* Quantity Selector and Add to Cart Button */}
                    <div className="flex flex-wrap gap-4 items-center mb-8">
                        <p className="text-yellow-600 dark:text-yellow-400 text-2xl font-bold">
                            <bdi>{product.price} <span className="text-base">تومان</span></bdi>
                        </p>
                        <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1E263A]">
                            <button
                                onClick={decreaseQuantity}
                                className="w-11 h-11 bg-gray-100 dark:bg-[#1E263A] hover:bg-pink-600 text-gray-900 dark:text-white transition duration-200 font-bold text-lg flex items-center justify-center"
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                min={1}
                                onChange={handleQuantityChange}
                                className="w-12 h-11 bg-transparent text-gray-900 dark:text-white text-center outline-none font-semibold text-base [appearance:textfield]"
                                aria-label="Quantity input"
                            />
                            <button
                                onClick={increaseQuantity}
                                className="w-11 h-11 bg-gray-100 dark:bg-[#1E263A] hover:bg-pink-600 text-gray-900 dark:text-white transition duration-200 font-bold text-lg flex items-center justify-center"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-2.5 rounded-2xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                            type="button"
                        >
                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>
            </div>

            {/* Comments Section Component */}
            <CommentsSection />
        </main>
    );
}

export default ProductDetails;
