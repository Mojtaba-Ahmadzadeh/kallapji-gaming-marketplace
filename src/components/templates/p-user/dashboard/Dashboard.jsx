
import React from 'react'
import SidebarUser from '../sidebarUser/SidebarUser'
import HeaderUser from '../headerUser/HeaderUser'

function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <SidebarUser />
            <div className="bg-white dark:bg-gray-800 flex-1 flex flex-col">
                <HeaderUser />
                <main className="flex-1 overflow-auto p-6 space-y-8 bg-gray-100 dark:bg-gray-900">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl transition">
                            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">موجودی کیف پول</h3>
                            <p className="text-2xl font-bold text-primary dark:text-yellow-400">۲۵۰٬۰۰۰ تومان</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl transition">
                            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">اکانت‌های فروخته شده</h3>
                            <p className="text-2xl font-bold text-accent dark:text-green-400">۱۲</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl transition">
                            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">درخواست‌های خرید فعال</h3>
                            <p className="text-2xl font-bold text-secondary dark:text-blue-400">۳</p>
                        </div>
                    </div>

                    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-4">
                        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">تراکنش‌های اخیر</h2>
                        <div className="overflow-auto">
                            <table className="w-full table-auto text-sm text-gray-900 dark:text-gray-100">
                                <thead className="text-right text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-600">
                                    <tr>
                                        <th className="py-2">تاریخ</th>
                                        <th className="py-2">نوع</th>
                                        <th className="py-2">مبلغ</th>
                                        <th className="py-2">وضعیت</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                        <td className="py-3">۱۴۰۴/۰۳/۰۱</td>
                                        <td className="py-3">خرید CP</td>
                                        <td className="py-3">۵۰٬۰۰۰ تومان</td>
                                        <td className="py-3 text-green-600 dark:text-green-400">موفق</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                        <td className="py-3">۱۴۰۴/۰۲/۲۹</td>
                                        <td className="py-3">فروش اکانت</td>
                                        <td className="py-3">۳۰۰٬۰۰۰ تومان</td>
                                        <td className="py-3 text-yellow-600 dark:text-yellow-400">در انتظار</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6 space-y-6 max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                        <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                            <i className="fa-solid fa-user-pen text-yellow-400"></i>
                            ویرایش حساب کاربری
                        </h2>

                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=user" alt="avatar" className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-600 object-cover transition duration-300 group-hover:brightness-75" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                                    <label className="text-xs text-white cursor-pointer px-2 py-1 bg-pink-600 rounded-lg hover:bg-pink-700">
                                        تغییر
                                        <input type="file" name="avatar" accept="image/*" className="hidden" />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-900 dark:text-gray-100 mb-1 font-medium">تصویر پروفایل شما</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">برای تغییر روی عکس کلیک کنید</p>
                            </div>
                        </div>

                        <form action="/update-profile" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

                            <div>
                                <label for="fullName" className="block text-gray-700 dark:text-gray-300 mb-1">نام کامل</label>
                                <div className="flex items-center bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md px-3">
                                    <i className="fa-solid fa-user text-gray-400"></i>
                                    <input type="text" id="fullName" name="fullName" className="w-full bg-transparent py-2 px-2 text-gray-900 dark:text-gray-100 focus:outline-none" placeholder="نام شما" />
                                </div>
                            </div>

                            <div>
                                <label for="email" className="block text-gray-700 dark:text-gray-300 mb-1">ایمیل</label>
                                <div className="flex items-center bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md px-3">
                                    <i className="fa-solid fa-envelope text-gray-400"></i>
                                    <input type="email" id="email" name="email" className="w-full bg-transparent py-2 px-2 text-gray-900 dark:text-gray-100 focus:outline-none" placeholder="your@email.com" />
                                </div>
                            </div>

                            <div>
                                <label for="mobile" className="block text-gray-700 dark:text-gray-300 mb-1">شماره موبایل</label>
                                <div className="flex items-center bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md px-3">
                                    <i className="fa-solid fa-phone text-gray-400"></i>
                                    <input type="tel" id="mobile" name="mobile" className="w-full bg-transparent py-2 px-2 text-gray-900 dark:text-gray-100 focus:outline-none" placeholder="09xx xxx xxxx" />
                                </div>
                            </div>

                            <div>
                                <label for="telegramId" className="block text-gray-700 dark:text-gray-300 mb-1">آیدی تلگرام</label>
                                <div className="flex items-center bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md px-3">
                                    <i className="fa-brands fa-telegram text-blue-400"></i>
                                    <input type="text" id="telegramId" name="telegramId" className="w-full bg-transparent py-2 px-2 text-gray-900 dark:text-gray-100 focus:outline-none" placeholder="آیدی تلگرام شما" />
                                </div>
                            </div>


                            <div className="md:col-span-2">
                                <label for="bio" className="block text-gray-700 dark:text-gray-300 mb-1">بیوگرافی</label>
                                <textarea id="bio" name="bio" className="w-full h-24 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="درباره خودتان بنویسید..."></textarea>

                            </div>

                            <div className="md:col-span-2 pt-2">
                                <button type="submit" className="relative w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 active:scale-[.98] transition-all duration-200 py-3 rounded-xl font-semibold text-gray-900 shadow-md hover:shadow-lg">
                                    <i className="fa-solid fa-floppy-disk"></i>
                                    <span>ذخیره تغییرات</span>

                                    <span className="absolute left-4 hidden loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                </button>
                            </div>
                        </form>

                        <div className="hidden" id="profile-update-msg">
                            <p className="text-green-400 mt-4">تغییرات با موفقیت ذخیره شدند!</p>
                        </div>
                    </section>

                </main>

            </div>

        </div>
    )
}

export default Dashboard