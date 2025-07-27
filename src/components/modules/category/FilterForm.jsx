import React from 'react'

function FilterForm() {
    return (
        <div className="bg-white dark:bg-[#1A1F36] border border-gray-300 dark:border-gray-700 rounded-xl p-5 shadow-sm transition-colors duration-300 w-full mx-auto">
            <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-5 flex items-center gap-3">
                <i className="fas fa-filter text-yellow-400"></i>
                فیلتر سریع
            </h3>
            <form className="space-y-6" action="#" method="GET">
                {/* search */}
                <div>
                    <label htmlFor="search" className="block mb-1 text-gray-700 dark:text-gray-300 text-sm font-medium">
                        جستجو
                    </label>
                    <input type="text" id="search" name="search" placeholder="جستجوی اکانت یا تجهیزات" className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2A2F4A] text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
                </div>

                {/* category */}
                <div>
                    <label htmlFor="category" className="block mb-1 text-gray-700 dark:text-gray-300 text-sm font-medium">دسته‌بندی</label>
                    <select id="category" name="category" className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2A2F4A] text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
                        <option value="">همه</option>
                        <option value="accounts">اکانت‌ها</option>
                        <option value="equipment">تجهیزات گیمینگ</option>
                        <option value="gift-cards">گیفت کارت</option>
                    </select>
                </div>

                {/* checkboxes */}
                <div>
                    <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm font-medium">وضعیت موجودی</label>
                    <div className="flex flex-wrap gap-4">
                        <label className="inline-flex items-center text-gray-600 dark:text-gray-300 text-sm cursor-pointer">
                            <input type="checkbox" name="in_stock" className="form-checkbox text-yellow-400" />
                            <span className="mr-2">فقط موجود‌ها</span>
                        </label>
                        <label className="inline-flex items-center text-gray-600 dark:text-gray-300 text-sm cursor-pointer">
                            <input type="checkbox" name="on_sale" className="form-checkbox text-red-500" />
                            <span className="mr-2">فروش ویژه</span>
                        </label>
                    </div>
                </div>

                {/* price range */}
                <div>
                    <label className="block mb-1 text-gray-700 dark:text-gray-300 text-sm font-medium">محدوده قیمت (تومان)</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input type="number" name="price_min" placeholder="حداقل" min="0" className="w-full sm:w-1/2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2A2F4A] text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
                        <input type="number" name="price_max" placeholder="حداکثر" min="0" className="w-full sm:w-1/2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2A2F4A] text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
                    </div>
                </div>

                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition">
                    اعمال فیلترها
                </button>
            </form>
        </div>
    )
}

export default FilterForm