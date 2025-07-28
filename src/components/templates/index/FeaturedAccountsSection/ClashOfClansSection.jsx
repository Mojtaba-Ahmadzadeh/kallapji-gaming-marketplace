import React from 'react';
import ClashProductSlide from '@/components/modules/gameProductSlides/ClashProductSlide';

// Array of Call of Duty products with details
const products = [
{
    id: 1,
    title: 'اکانت تاون هال ۱۵ مکس',
    slug: 'th15-max-clash-account',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۴,۵۰۰,۰۰۰',
  },
  {
    id: 2,
    title: 'اکانت کلش تاون هال ۱۴ قوی',
    slug: 'th14-strong-account',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۳,۸۰۰,۰۰۰',
  },
  {
    id: 3,
    title: 'اکانت کلش تاون هال ۱۴ قوی',
    slug: 'th14-strong-account',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۳,۸۰۰,۰۰۰',
  },
  {
    id: 4,
    title: 'اکانت کلش تاون هال ۱۴ قوی',
    slug: 'th14-strong-account',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۳,۸۰۰,۰۰۰',
  },
  {
    id: 5,
    title: 'اکانت کلش تاون هال ۱۴ قوی',
    slug: 'th14-strong-account',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۳,۸۰۰,۰۰۰',
  },
  {
    id: 6,
    title: 'اکانت کلش تاون هال ۱۴ قوی',
    slug: 'th14-strong-account',
    image: '/images/Gemini_Generated_Image_t9ezxat9ezxat9ez.jpeg',
    price: '۳,۸۰۰,۰۰۰',
  },
];


function ClashOfClansSection() {
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
      <ClashProductSlide products={products} />
    </>
  );
}

export default ClashOfClansSection;
