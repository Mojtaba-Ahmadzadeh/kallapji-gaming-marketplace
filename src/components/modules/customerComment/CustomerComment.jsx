'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample comments data
const comments = [
    {
        id: 1,
        name: 'امیرحسین کاظمی',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        comment: 'کیفیت عالی، قطعا باز هم از کالاپجی خرید می‌کنم.',
        stars: 5,
        role: 'مشتری سایت',
    },
    {
        id: 2,
        name: 'امیرحسین کاظمی',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        comment: 'کیفیت عالی، قطعا باز هم از کالاپجی خرید می‌کنم.',
        stars: 5,
        role: 'مشتری سایت',
    },
    {
        id: 3,
        name: 'امیرحسین کاظمی',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        comment: 'کیفیت عالی، قطعا باز هم از کالاپجی خرید می‌کنم.',
        stars: 5,
        role: 'مشتری سایت',
    },
    {
        id: 4,
        name: 'امیرحسین کاظمی',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        comment: 'کیفیت عالی، قطعا باز هم از کالاپجی خرید می‌کنم.',
        stars: 5,
        role: 'مشتری سایت',
    },
    {
        id: 5,
        name: 'امیرحسین کاظمی',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        comment: 'کیفیت عالی، قطعا باز هم از کالاپجی خرید می‌کنم.',
        stars: 5,
        role: 'مشتری سایت',
    },
    {
        id: 6,
        name: 'امیرحسین کاظمی',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        comment: 'کیفیت عالی، قطعا باز هم از کالاپجی خرید می‌کنم.',
        stars: 5,
        role: 'مشتری سایت',
    },
];

// Main slider component
const CODProductSlide = () => {
    return (
        <div className="w-full mx-auto py-6">
            {/* Swiper container with pagination and autoplay modules */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {comments.map((comment) => (
                    <SwiperSlide key={comment.id}>
                        <div className="w-full h-full pb-12">
                            <div className="
                  p-4 
                  w-[20rem] mx-auto md:w-[16rem] 
                  flex flex-col space-y-3 
                  text-sm rounded-[1.5rem] shadow-lg 
                  transition-transform duration-300 ease-in-out
                  bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(40,32,62,0.35)] 
                  backdrop-blur-[12px] 
                  border border-[rgba(255,215,0,0.3)] dark:border-[rgba(255,215,0,0.3)]
                  text-[#222222] dark:text-[#E0BBFF] 
                  hover:scale-[1.015]
                  hover:shadow-[0_4px_15px_rgba(255,215,0,0.2)] 
                  dark:hover:shadow-[0_4px_15px_rgba(255,215,0,0.35),inset_0_0_15px_rgba(255,215,0,0.2)]
                  hover:border-[rgba(255,215,0,0.45)] dark:hover:border-[rgba(255,215,0,0.45)]
                "
                            >
                                {/* User info section */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    <img
                                        src={comment.avatar}
                                        alt={`${comment.name} avatar`}
                                        className="rounded-full object-cover border-[2.5px] border-[#FFD700] shadow-[0_0_8px_#FFD700]"
                                    />
                                    {/* Name, role and stars */}
                                    <div className="flex flex-col">
                                        <span className="font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                                            {comment.name}
                                        </span>
                                        <span className="text-[#6b21a8] dark:text-[#cbb7ff] text-xs">{comment.role}</span>
                                        {/* Star rating */}
                                        <div className="stars flex mt-1 gap-0.5">
                                            {Array.from({ length: comment.stars }, (_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-3.5 h-3.5 fill-[#FFD700] drop-shadow-[0_0_2px_#FFA500]"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Comment text */}
                                <div className="
                    comment 
                    bg-[rgba(255,215,0,0.12)] dark:bg-[rgba(255,215,0,0.12)] 
                    rounded-[1rem] p-4 
                    text-[0.9rem] leading-[1.5] 
                    text-[#222222] dark:text-[#fff6d1] 
                     shadow-[inset_0_0_10px_rgba(255,215,0,0.2)] 
                    text-right
                  "
                                >
                                    {comment.comment}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CODProductSlide;
