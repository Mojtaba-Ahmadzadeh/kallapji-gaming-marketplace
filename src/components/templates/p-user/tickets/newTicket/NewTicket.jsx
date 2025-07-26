import React from 'react'

import SidebarUser from '../../sidebarUser/SidebarUser'
import HeaderUser from '../../headerUser/HeaderUser'

function NewTicket() {
    return (
        <>
            <div className='flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
                <SidebarUser />
                <div className="bg-white dark:bg-gray-800 flex-1 flex flex-col">
                    <HeaderUser />
                    <main class="flex-1 overflow-auto p-6 space-y-8 bg-gray-100 dark:bg-gray-900">
                        <div class="max-w-3xl mx-auto space-y-6">

                            <div class="flex justify-between items-center">
                                <div>
                                    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">ایجاد تیکت جدید
                                    </h1>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">در این بخش می‌توانید یک درخواست
                                        پشتیبانی ارسال
                                        کنید.</p>
                                </div>
                                <a href="tickets.html" class="text-blue-600 dark:text-blue-400 text-sm hover:underline flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" data-lucide="arrow-right" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> بازگشت به لیست تیکت‌ها
                                </a>
                            </div>

                            <form class="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-6 shadow-lg transition-colors duration-300">

                                <div>
                                    <label for="subject" class="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">عنوان
                                        تیکت</label>
                                    <input type="text" id="subject" name="subject" required="" class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                </div>

                                <div>
                                    <label for="description" class="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">توضیحات</label>
                                    <textarea id="description" name="description" rows="5" required="" class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
                                </div>

                                <div>
                                    <label for="priority" class="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">اولویت</label>
                                    <select id="priority" name="priority" class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition">
                                        <option value="low">کم</option>
                                        <option value="medium" selected="">متوسط</option>
                                        <option value="high">زیاد</option>
                                    </select>
                                </div>

                                <div class="flex justify-end">
                                    <a href="./tickets.html" class="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-xl text-sm font-semibold flex
                    items-center gap-2 shadow-md text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" data-lucide="send" class="lucide lucide-send w-4 h-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                                        ارسال تیکت
                                    </a>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default NewTicket