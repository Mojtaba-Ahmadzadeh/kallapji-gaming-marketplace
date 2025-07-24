import React from 'react'

function GiftCard() {
    return (
        <div className="rounded-2xl overflow-hidden transition-all duration-300 group
                            bg-white text-gray-900 shadow-[0_0_15px_#00000022] border border-[#FFD70066] hover:shadow-[0_0_40px_#FFD70088]
                            dark:bg-[#111111] dark:text-white dark:shadow-[0_0_15px_#000000cc] dark:border-[#FFD70033] dark:hover:shadow-[0_0_40px_#FFD70066]">

            <a href="#" className="block">
                <div className="relative">
                    <img src="../images/Gemini_Generated_Image_wtz4w3wtz4w3wtz4.jpeg" alt="گیفت کارت اسپاتیفای" className="w-full h-44 object-cover rounded-t-2xl group-hover:brightness-110 transition duration-500" />
                    <span className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        ویژه
                    </span>
                </div>
            </a>

            <div className="p-5 text-center space-y-3">
                <h3 className="font-Shabnam-Bold-FD text-black dark:text-white text-lg leading-tight">گیفت کارت اسپاتیفای</h3>

                <div className="flex justify-center items-center gap-3">
                    <del className="text-gray-400 text-sm"><bdi>586,000 <span>تومان</span></bdi></del>
                    <span className="text-yellow-500 font-bold text-xl tracking-tight">
                        <bdi>487,000 <span>تومان</span></bdi>
                    </span>
                </div>

                <button className="mt-2 w-full bg-[#FFD700] text-black font-Shabnam-Medium-FD py-2 rounded-lg shadow-md hover:bg-[#e6c200] transition-all duration-300 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h11.4m-10.2 0a1 1 0 102 0m6 0a1 1 0 102 0"></path>
                    </svg>
                    خرید محصول
                </button>
            </div>
        </div>
    )
}

export default GiftCard