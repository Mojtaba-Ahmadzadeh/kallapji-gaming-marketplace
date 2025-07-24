import { faHandHoldingDollar, faHeadset, faRocket, faShoppingCart, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function HeroSection() {
    return (
        <div className="flex justify-around flex-col items-center xl:items-start xl:flex-row wow animate__ animate__fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
            <div className="mt-[3rem]">
                <img src="../images/game-play.png" className="w-[16rem] xs:w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-[16rem] xs:h-[18rem] sm:h-[27rem] md:h-[40rem] m-auto lg:m-0 mt-[1rem] xs:mt-[2rem] md:mt-[2.5rem]" alt="" />
            </div>
            <div className="text-gray-800 dark:text-white mt-0 xl:mt-[5rem] mr-0 lg:mr-[-2rem] xl:mr-[-7rem] p-[0.5rem] md:p-[2rem] xs:p-[3rem] text-center lg:text-right">
                <div>
                    <h2 className="text-center xl:text-right text-[15px] xs:text-[20px] sm:text-[25px] tracking-tighter">
                        با ورود به دنیای بازی های حرفه ای
                    </h2>
                </div>
                <div>
                    <h2 className="text-center xl:text-right font-bold text-[30px] xs:text-[40px] sm:text-[50px] xl:text-[60px] font-Shabnam-Bold-FD tracking-tighter">
                        تبدیل شو به افسانه گیمینگ
                    </h2>
                </div>
                <div className="text-[0.8rem] flex justify-center lg:justify-start">
                    <p className="py-2 text-center xl:text-right text-[13px] md:text-[16px] max-w-[35rem]">
                        با کالاپجی، بهترین تجهیزات و اکانت‌های قانونی رو داشته باش، تجربه‌ای بی‌نظیر و سرعتی در بازی‌ها
                        بدست بیار.
                    </p>
                </div>
                <div className="flex gap-x-4 mt-[0.8rem] justify-center xl:justify-start flex-col xs:flex-row gap-y-4">
                    <a href="/pages/all-accounts.html" className="bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-400 dark:from-yellow-600 dark:via-yellow-700 dark:to-yellow-800 text-yellow-900 dark:text-white font-Shabnam-Medium-FD text-center text-base xl:text-lg px-6 py-3 2xl:px-8 rounded-xl border border-yellow-400 dark:border-yellow-600 shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] hover:from-yellow-200 hover:via-yellow-400 hover:to-yellow-500 dark:hover:from-yellow-500 dark:hover:to-yellow-600">
                        <span className="drop-shadow-sm">خرید و فروش اکانت های قانونی</span>
                    </a>
                    <a href="/pages/store.html" className="flex items-center justify-center gap-x-2 px-6 py-3 rounded-xl border border-yellow-500 dark:border-yellow-600 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 hover:from-gray-100 hover:to-white dark:hover:from-gray-700 dark:hover:to-gray-800 text-yellow-700 dark:text-yellow-400 font-Shabnam-Medium-FD text-sm xl:text-base shadow-[0_3px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_3px_10px_rgba(255,255,255,0.05)] hover:shadow-[0_5px_16px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_5px_16px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out group">
                        <span className="drop-shadow-sm">مشاهده فروشگاه</span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} className='w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
                    </a>
                </div>
                <div className="pt-[2rem] pb-[3rem] flex justify-center xl:justify-start">
                    <span className="block bg-gray-300 dark:bg-gray-600 w-[8rem] xs:w-[14.5rem] h-[1px]"></span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto xl:mx-0">
                    <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center gap-4 border border-yellow-400 dark:border-yellow-600">
                        <FontAwesomeIcon icon={faRocket} className="text-yellow-500 text-3xl min-w-[40px] w-8 h-8" />
                        <div>
                            <h3 className="font-Shabnam-Bold-FD text-lg mb-1">تحویل فوری</h3>
                            <p className="font-Shabnam-Light-FD text-sm">در کمتر از 10 دقیقه</p>
                        </div>
                    </div>
                    <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center gap-4 border border-yellow-400 dark:border-yellow-600">
                        <FontAwesomeIcon icon={faShoppingCart} className=" text-yellow-500 text-3xl min-w-[40px] w-8 h-8" />
                        <div>
                            <h3 className="font-Shabnam-Bold-FD text-lg mb-1">خرید آسان</h3>
                            <p className="font-Shabnam-Light-FD text-sm">تنها با چند کلیک</p>
                        </div>
                    </div>
                    <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center gap-4 border border-yellow-400 dark:border-yellow-600">
                        <FontAwesomeIcon icon={faHeadset} className="text-yellow-500 text-3xl min-w-[40px] w-8 h-8" />
                        <div>
                            <h3 className="font-Shabnam-Bold-FD text-lg mb-1">پشتیبانی سریع</h3>
                            <p className="font-Shabnam-Light-FD text-sm">در تلگرام و چت آنلاین</p>
                        </div>
                    </div>
                    <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center gap-4 border border-yellow-400 dark:border-yellow-600">
                        <FontAwesomeIcon icon={faHandHoldingDollar} className="text-yellow-500 text-3xl min-w-[40px] w-8 h-8" />
                        <div>
                            <h3 className="font-Shabnam-Bold-FD text-lg mb-1">بازگشت وجه</h3>
                            <p className="font-Shabnam-Light-FD text-sm">در کمترین زمان ممکن</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection