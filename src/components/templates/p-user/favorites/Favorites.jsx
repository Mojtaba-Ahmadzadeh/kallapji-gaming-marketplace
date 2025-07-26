
import React from 'react'
import SidebarUser from '../sidebarUser/SidebarUser'
import HeaderUser from '../headerUser/HeaderUser'

function Favorites() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <SidebarUser />
            <div className="bg-white dark:bg-gray-800 flex-1 flex flex-col">
                <HeaderUser />
                <main class=" flex-1 overflow-auto p-6 space-y-8 bg-gray-100 dark:bg-gray-900">

                    <h1 class="flex items-center gap-3 text-3xl font-bold mb-8">
                        <i class="fa-solid fa-heart text-red-500"></i>
                        علاقه‌مندی‌های من
                    </h1>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

                        <article class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-[0_4px_20px_rgba(255,255,255,0.03)] hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <img src="/images/Gemini_Generated_Image_9r6bpb9r6bpb9r6b.jpeg" alt="اکانت کالاف دیوتی" class="w-full h-52 object-cover rounded-t-2xl" />
                            <div class="px-6 pt-2 pb-6 flex flex-col flex-grow">
                                <h2 class="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-yellow-400">
                                    اکانت بازی کالاف دیوتی
                                </h2>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm flex-grow">
                                    اکانت با سطح طلایی، قابلیت بازی آنلاین و جوایز ویژه
                                </p>
                                <div class="mt-4 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold text-yellow-600 dark:text-yellow-400 text-base">
                                        ۲۵۰,۰۰۰ تومان
                                    </span>
                                    <span>۱۴۰۴/۰۵/۱۵</span>
                                </div>
                                <button class="mt-5 self-end bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-xs px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 flex items-center gap-2 font-semibold">
                                    <i class="fa-solid fa-trash-can text-sm"></i>
                                    حذف
                                </button>
                            </div>
                        </article>
                        <article class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-[0_4px_20px_rgba(255,255,255,0.03)] hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <img src="/images/Gemini_Generated_Image_9r6bpb9r6bpb9r6b.jpeg" alt="اکانت کالاف دیوتی" class="w-full h-52 object-cover rounded-t-2xl" />
                            <div class="px-6 pt-2 pb-6 flex flex-col flex-grow">
                                <h2 class="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-yellow-400">
                                    اکانت بازی کالاف دیوتی
                                </h2>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm flex-grow">
                                    اکانت با سطح طلایی، قابلیت بازی آنلاین و جوایز ویژه
                                </p>
                                <div class="mt-4 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold text-yellow-600 dark:text-yellow-400 text-base">
                                        ۲۵۰,۰۰۰ تومان
                                    </span>
                                    <span>۱۴۰۴/۰۵/۱۵</span>
                                </div>
                                <button class="mt-5 self-end bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-xs px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 flex items-center gap-2 font-semibold">
                                    <i class="fa-solid fa-trash-can text-sm"></i>
                                    حذف
                                </button>
                            </div>
                        </article>
                        <article class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-[0_4px_20px_rgba(255,255,255,0.03)] hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <img src="/images/Gemini_Generated_Image_9r6bpb9r6bpb9r6b.jpeg" alt="اکانت کالاف دیوتی" class="w-full h-52 object-cover rounded-t-2xl" />
                            <div class="px-6 pt-2 pb-6 flex flex-col flex-grow">
                                <h2 class="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-yellow-400">
                                    اکانت بازی کالاف دیوتی
                                </h2>
                                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm flex-grow">
                                    اکانت با سطح طلایی، قابلیت بازی آنلاین و جوایز ویژه
                                </p>
                                <div class="mt-4 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold text-yellow-600 dark:text-yellow-400 text-base">
                                        ۲۵۰,۰۰۰ تومان
                                    </span>
                                    <span>۱۴۰۴/۰۵/۱۵</span>
                                </div>
                                <button class="mt-5 self-end bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-xs px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 flex items-center gap-2 font-semibold">
                                    <i class="fa-solid fa-trash-can text-sm"></i>
                                    حذف
                                </button>
                            </div>
                        </article>


                    </div>

                </main>

            </div>

        </div>
    )
}

export default Favorites