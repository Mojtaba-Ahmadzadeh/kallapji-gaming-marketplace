import React from 'react';
import CODProductSlide from '@/components/modules/gameProductSlides/CODProductSlide';

// Sample product data for Call of Duty section
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
    // You can add more products here...
];

function CallOfDutySection() {
    return (
        <>
            {/* Call of Duty logo section */}
            <div className="flex justify-center mb-5">
                <img
                    src="../images/call-of-duty-seeklogo.png"
                    className="w-[10rem] dark:invert dark:brightness-200 transition duration-300"
                    alt="Call of Duty Logo"
                />
            </div>

            {/* Product slider component */}
            <CODProductSlide products={products} />
        </>
    );
}

export default CallOfDutySection;
