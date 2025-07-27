"use client"
import FiltersAside from '@/components/modules/category/FilterAside'
import GiftCardProductCard from '@/components/modules/category/GiftCardProductCard'
import React, { useEffect } from 'react'


const products = [
    {
        slug: 'google-play-10usd',
        title: 'گیفت کارت 10 دلاری گوگل پلی',
        description: 'قابل استفاده در Google Play برای خرید بازی، برنامه و آیتم‌های درون‌برنامه‌ای',
        price: 320000,
        image: '/images/giftcards/google-play-10usd.jpg',
    },
    {
        slug: 'itunes-15usd',
        title: 'گیفت کارت 15 دلاری اپل (آیتونز)',
        description: 'مناسب برای خرید موزیک، فیلم و اپلیکیشن از فروشگاه Apple',
        price: 470000,
        image: '/images/giftcards/itunes-15usd.jpg',
    },
    {
        slug: 'playstation-20usd',
        title: 'گیفت کارت 20 دلاری پلی‌استیشن',
        description: 'برای خرید بازی و محتوا در PlayStation Store',
        price: 620000,
        image: '/images/giftcards/playstation-20usd.jpg',
    },
    {
        slug: 'xbox-25usd',
        title: 'گیفت کارت 25 دلاری ایکس‌باکس',
        description: 'مناسب برای Game Pass، بازی و سرویس‌های ایکس‌باکس',
        price: 780000,
        image: '/images/giftcards/xbox-25usd.jpg',
    },
];


function GiftCardProducts() {

    useEffect(() => {
        const buttons = document.querySelectorAll('[data-toggle-submenu]')
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const submenu = btn.nextElementSibling
                if (submenu.style.maxHeight && submenu.style.maxHeight !== '0px') {
                    submenu.style.maxHeight = '0px'
                } else {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px'
                }
                btn.querySelector('i')?.classList.toggle('rotate-180')
            })
        })
    }, [])

    const toggleMobileFilters = () => {
        const el = document.getElementById('mobile-filters')
        el?.classList.toggle('hidden')
    }

    return (

        <section className="grid lg:grid-cols-[20rem_1fr] gap-x-4 p-0 lg:p-4 pt-[40px]">

            <div className="lg:hidden px-4 mb-4">
                <button onClick={toggleMobileFilters} className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition">
                    🎯 فیلتر و دسته‌بندی
                </button>
            </div>

            <FiltersAside />

            <div className="w-full">
                <div className="w-full 
                        bg-white dark:bg-[#0f172a] 
                        border border-gray-300 dark:border-[#1e293b] 
                        rounded-2xl px-6 py-3 
                        shadow-md transition-colors duration-300">

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">

                        <nav className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300 font-medium">
                            <a href="/pages/index.html" className="hover:text-yellow-500 transition flex items-center gap-1">
                                <i className="fas fa-home text-yellow-500 text-xs"></i>
                                خانه
                            </a>
                            <span className="text-gray-400 dark:text-gray-500">/</span>
                            <span className="text-gray-500 dark:text-gray-400">فروشگاه</span>
                        </nav>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <label htmlhtmlFor="sort" className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">مرتب‌سازی:</label>
                            <div className="relative w-full sm:w-52">
                                <select id="sort" className="appearance-none w-full 
                            bg-gray-100 dark:bg-[#1e293b] 
                            text-yellow-600 dark:text-yellow-300 
                            border border-yellow-300/40 
                            rounded-xl px-4 py-2 text-sm 
                            focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-8 transition-all duration-200">
                                    <option>محبوب‌ترین</option>
                                    <option>جدیدترین</option>
                                    <option>میانگین رتبه</option>
                                    <option>قیمت: کم به زیاد</option>
                                    <option>قیمت: زیاد به کم</option>
                                </select>
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <i className="fas fa-chevron-down text-yellow-600 dark:text-yellow-300 text-[10px]"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pt-3 gap-3">
                    {
                        products.map((product, index)=> (
                            <GiftCardProductCard key={index} product={product}/>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default GiftCardProducts 