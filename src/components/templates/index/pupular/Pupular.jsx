import PupularItem from '@/components/modules/pupularItem/PupularItem'
import React from 'react'

function Pupular() {
    return (
        <div className="mt-16 container">
            <div className="flex items-center justify-between mb-9">
                <h4 className="text-[20px] md:text-3xl font-semibold tracking-tighter text-black dark:text-white">محبوب ترین
                    ها</h4>
                <a href="/pages/gameAccounts.html" className="flex items-center gap-2 dark:text-white bg-gray-200 dark:bg-[#151B2D] dark:hover:bg-[#1F263D] transition-colors duration-300 text-sm md:text-base font-Shabnam-Medium-FD px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow hover:shadow-lg group shrink-0">

                    <span className="group-hover:text-orange-400 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        مشاهده همه
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                    </svg>
                </a>
            </div>

            <section className="relative overflow-hidden rounded-2xl">
                <div className="absolute -top-40 left-1/2 w-[70vw] h-[70vw] opacity-10 blur-[160px] rounded-full transform -translate-x-1/2 z-0">
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 space-y-4 md:space-y-0">
                    <PupularItem />
                    <PupularItem />
                    <PupularItem />
                    <PupularItem />
                    <PupularItem />
                </div>
            </section>

        </div>
    )
}

export default Pupular