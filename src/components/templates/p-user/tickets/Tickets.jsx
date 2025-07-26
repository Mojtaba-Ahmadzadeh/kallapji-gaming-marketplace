import React from 'react'
import SidebarUser from '../sidebarUser/SidebarUser'
import HeaderUser from '../headerUser/HeaderUser'

function Tickets() {
    return (
        <>
            <div className='flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
                <SidebarUser />
                <div className="bg-white dark:bg-gray-800 flex-1 flex flex-col">
                    <HeaderUser />
                    <div class="px-4 mt-3">

                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">تیکت‌های من</h1>
                                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    در این بخش می‌توانید تمامی درخواست‌های پشتیبانی خود را مشاهده نمایید.
                                </p>
                            </div>
                            <a href="/account/tickets/newTicket" class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg text-white">
                                <i data-lucide="plus" class="w-4 h-4"></i>
                                ایجاد تیکت جدید
                            </a>

                        </div>

                        <div class="space-y-4">

                            <div class=" flex flex-col sm:flex-row sm:items-start p-4 rounded-2xl shadow-md hover:shadow-xl transition gap-3 sm:gap-5
                    bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 border border-gray-200 dark:border-gray-700">
                                <div class="w-full sm:w-2 h-1 sm:h-auto rounded-xl bg-yellow-400 mr-0 sm:mr-2"></div>

                                <div class="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <i data-lucide="help-circle" class="w-5 h-5 text-yellow-400"></i>
                                            <h2 class="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
                                                مشکل در لاگین</h2>
                                        </div>
                                        <p class="text-sm text-gray-700 dark:text-gray-300 break-words">
                                            در هنگام ورود، ارور 401 دریافت می‌کنم.
                                        </p>
                                    </div>

                                    <div class="flex sm:flex-col items-start sm:items-end gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                                        <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-4 h-4"></i>
                                            1403/03/10</span>
                                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">مشاهده</a>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 border border-gray-200 dark:border-gray-700
                flex flex-col sm:flex-row sm:items-start p-4 rounded-2xl shadow-md hover:shadow-xl transition gap-3 sm:gap-5
                backdrop-blur-md">
                                <div class="w-full sm:w-2 h-1 sm:h-auto rounded-xl bg-green-500 mr-0 sm:mr-2"></div>
                                <div class="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <i data-lucide="check-circle" class="w-5 h-5 text-green-400"></i>
                                            <h2 class="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
                                                تأیید بازپرداخت</h2>
                                        </div>
                                        <p class="text-sm text-gray-700 dark:text-gray-300 break-words">بازپرداخت سفارش 294
                                            تایید شد.</p>
                                    </div>

                                    <div class="flex sm:flex-col items-start sm:items-end gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                                        <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-4 h-4"></i>
                                            1403/03/09</span>
                                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">مشاهده</a>
                                    </div>
                                </div>
                            </div>


                            <div class="glass flex flex-col sm:flex-row sm:items-start p-4 rounded-2xl shadow-md hover:shadow-xl transition gap-3 sm:gap-5
                    bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 border border-gray-200 dark:border-gray-700">
                                <div class="w-full sm:w-2 h-1 sm:h-auto rounded-xl bg-red-500 mr-0 sm:mr-2"></div>
                                <div class="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <i data-lucide="x-circle" class="w-5 h-5 text-red-400"></i>
                                            <h2 class="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
                                                تیکت بسته شده</h2>
                                        </div>
                                        <p class="text-sm text-gray-700 dark:text-gray-300 break-words">پشتیبان تیکت را بسته
                                            است.</p>
                                    </div>

                                    <div class="flex sm:flex-col items-start sm:items-end gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                                        <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-4 h-4"></i>
                                            1403/03/07</span>
                                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">مشاهده</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Tickets