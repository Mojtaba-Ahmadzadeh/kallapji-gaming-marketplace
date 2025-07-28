import React from 'react';
import CODProductSlide from '@/components/modules/gameProductSlides/CODProductSlide';

// Sample product data for Call of Duty section
// Sample product data
const products = [
  {
    id: 1,
    slug: 'vip-880cp-account-880',
    title: '۸۸۰ سی پی کالاف دیوتی',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۷۵۹,۰۰۰',
  },
  {
    id: 2,
    slug: 'vip-880cp-account-880',
    title: '۱۳۰۰ سی پی کالاف دیوتی',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۱,۰۵۰,۰۰۰',
  },
  {
    id: 3,
    slug: 'vip-880cp-account-880',
    title: '۱۳۰۰ سی پی کالاف دیوتی',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۱,۰۵۰,۰۰۰',
  },
  {
    id: 4,
    slug: 'vip-880cp-account-880',
    title: '۱۳۰۰ سی پی کالاف دیوتی',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۱,۰۵۰,۰۰۰',
  },
  {
    id: 5,
    slug: 'vip-880cp-account-880',
    title: '۱۳۰۰ سی پی کالاف دیوتی',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۱,۰۵۰,۰۰۰',
  },
  {
    id: 6,
    slug: 'vip-880cp-account-880',
    title: '۱۳۰۰ سی پی کالاف دیوتی',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۱,۰۵۰,۰۰۰',
  },

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
