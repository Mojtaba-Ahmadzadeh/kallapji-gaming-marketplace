import React from 'react'

function LogoAndTitle() {
    return (
        <>
            {/* <!-- Logo Header --> */}
            <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer transition-all duration-300">

                <a href="./index.html" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg overflow-hidden shadow-lg ring-1 ring-violet-500/30 group-hover:scale-105 transition-transform duration-300 bg-white">
                    <img src="../images/logo.png" alt="لوگو فروشگاه" className="w-full h-full object-cover rounded-lg" />
                </a>


                <a href="./index.html" className="flex flex-col justify-center leading-tight">
                    <span className="text-sm sm:text-base md:text-xl font-Shabnam-Bold-FD text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300">
                        کالاپجی گیم
                    </span>
                    <span className="text-[0.65rem] sm:text-xs text-gray-600 leading-none mt-[2px]">
                        فروشگاه بازی دیجیتال
                    </span>
                </a>
            </div>
        </>
    )
}

export default LogoAndTitle