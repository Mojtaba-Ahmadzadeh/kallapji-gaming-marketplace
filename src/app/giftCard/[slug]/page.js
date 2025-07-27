"use client"

import React, { use, useState } from 'react'
import { notFound } from 'next/navigation';
import CommentsSection from '@/components/modules/commentsSection/CommentsSection';

const mockProducts = {
    'google-play-10usd': {
        name: 'Google Play 10 USD Gift Card',
        price: '320,000 Toman',
        oldPrice: '350,000 Toman',
        description: 'Suitable for purchasing apps, games, and in-app payments on Google Play.',
        image: '/images/Gemini_Generated_Image_b4oxq0b4oxq0b4ox.png',
    },
    'itunes-15usd': {
        name: 'iTunes 15 USD Gift Card',
        price: '470,000 Toman',
        oldPrice: '490,000 Toman',
        description: 'Usable for buying music, movies, apps, and Apple services.',
        image: '/images/Gemini_Generated_Image_b4oxq0b4oxq0b4ox.png',
    },
    'playstation-20usd': {
        name: 'PlayStation 20 USD Gift Card',
        price: '620,000 Toman',
        oldPrice: '650,000 Toman',
        description: 'For purchasing games, DLCs, and Plus subscription in PlayStation Store.',
        image: '/images/Gemini_Generated_Image_b4oxq0b4oxq0b4ox.png',
    },
    'xbox-25usd': {
        name: 'Xbox 25 USD Gift Card',
        price: '780,000 Toman',
        oldPrice: '800,000 Toman',
        description: 'For buying games, services, and Xbox Game Pass subscription.',
        image: '/images/Gemini_Generated_Image_b4oxq0b4oxq0b4ox.png',
    },
};

function ProductDetails({ params }) {
    // Extract the slug parameter from props
    const { slug } = use(params)
    // Find product based on slug
    const product = mockProducts[slug];

    // State to control quantity input
    const [value, setValue] = useState(1)

    // Decrease quantity but not below 1
    const decrease = () => {
        setValue((prev) => (prev > 1 ? prev - 1 : 1))
    }

    // Increase quantity
    const increase = () => {
        setValue((prev) => prev + 1)
    }

    // Update quantity from input field, minimum 1
    const onChange = (e) => {
        const val = Number(e.target.value)
        if (val >= 1) setValue(val)
    }

    // If product not found, show 404 page
    if (!product) return notFound()

    return (
        <>
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
                            <a href="/" className="hover:text-pink-500 transition">Home</a>
                            <span className="mx-1">/</span>
                            <span className="text-gray-900 dark:text-white font-semibold">Product</span>
                        </nav>

                        {/* Product Title and Price */}
                        <h1 className="text-gray-900 dark:text-white text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-xl font-bold mb-4 space-x-1 flex items-center">
                            <bdi className="text-yellow-600 dark:text-yellow-400">
                                {product.price} <span className="text-sm">Toman</span>
                            </bdi>
                            {product.oldPrice && (
                                <>
                                    <span className="text-gray-800 dark:text-gray-300 mx-2">-</span>
                                    <bdi className="text-yellow-600 dark:text-yellow-400">
                                        {product.oldPrice} <span className="text-sm">Toman</span>
                                    </bdi>
                                </>
                            )}
                        </p>

                        {/* Product Description */}
                        <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2 mb-6">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Calapji Game</h5>
                            <ul className="list-disc pr-5 space-y-2">
                                <li>Full access to Photoshop, Lightroom, and 1TB cloud storage.</li>
                                <li>Activation available on your email or ready-to-buy from Sibkade.</li>
                                <li>Includes AI features like Generative Fill.</li>
                                <li>Accounts are activated in Turkey region.</li>
                            </ul>
                        </div>

                        {/* Price and Quantity Controls */}
                        <div className="flex flex-wrap gap-4 items-center mb-8">
                            <p className="text-yellow-600 dark:text-yellow-400 text-2xl font-bold">
                                <bdi>{product.price} <span className="text-base">Toman</span></bdi>
                            </p>
                            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1E263A]">
                                <button
                                    onClick={decrease}
                                    className="w-11 h-11 bg-gray-100 dark:bg-[#1E263A] hover:bg-pink-600 text-gray-900 dark:text-white transition duration-200 font-bold text-lg flex items-center justify-center"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={value}
                                    min={1}
                                    onChange={onChange}
                                    className="w-12 h-11 bg-transparent text-gray-900 dark:text-white text-center outline-none font-semibold text-base [appearance:textfield]"
                                />
                                <button
                                    onClick={increase}
                                    className="w-11 h-11 bg-gray-100 dark:bg-[#1E263A] hover:bg-pink-600 text-gray-900 dark:text-white transition duration-200 font-bold text-lg flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-2.5 rounded-2xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <CommentsSection />

            </main>
        </>
    )
}

export default ProductDetails
