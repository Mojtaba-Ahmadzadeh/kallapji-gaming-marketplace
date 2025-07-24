import React from 'react';
import CODProductSlide from '@/components/modules/gameProductSlides/CODProductSlide';

// Array of Call of Duty products with details
const products = [
    {
        id: 1,
        title: '۸۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۷۵۹,۰۰۰',
    },
    {
        id: 2,
        title: '۵۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۵۵۹,۰۰۰',
    },
    {
        id: 3,
        title: '۵۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۵۵۹,۰۰۰',
    },
    {
        id: 4,
        title: '۵۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۵۵۹,۰۰۰',
    },
    {
        id: 5,
        title: '۵۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۵۵۹,۰۰۰',
    },
    {
        id: 6,
        title: '۵۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۵۵۹,۰۰۰',
    },
    {
        id: 7,
        title: '۵۸۰ سی پی کالاف دیوتی',
        image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
        price: '۵۵۹,۰۰۰',
    },
];

function CallOfDutySection() {
    return (
        <>
            {/* Display Call of Duty logo */}
            <div className="flex justify-center mb-5">
                <img
                    src="../images/call-of-duty-seeklogo.png"
                    className="w-[10rem] dark:invert dark:brightness-200 transition duration-300"
                    alt="Call of Duty Logo"
                />
            </div>

            {/* Render product slider with the products data */}
            <CODProductSlide products={products} />
        </>
    );
}

export default CallOfDutySection;
