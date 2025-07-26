import React from 'react'
import SidebarUser from '../sidebarUser/SidebarUser'
import HeaderUser from '../headerUser/HeaderUser'

function MyListings() {
  return (
    <>
      <div className='flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
        <SidebarUser />
        <div className="bg-white dark:bg-gray-800 flex-1 flex flex-col">
          <HeaderUser />
          <main class=" flex-1 overflow-auto p-6 space-y-8 bg-gray-100 dark:bg-gray-900">

            <h1 class="flex items-center gap-3 text-3xl font-bold mb-8">
              <i class="fa-solid fa-clipboard-list text-blue-500"></i>
              آگهی های من
            </h1>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


              <div class="ad-box relative group w-full max-w-md p-4 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#1e253f] dark:via-[#151c33] dark:to-[#0d111d] 
  border border-gray-200 dark:border-[#2c334d]/50 shadow-md hover:shadow-lg transition duration-300 space-y-4 overflow-hidden" data-id="205" data-game="clash">

                <div class="relative overflow-hidden rounded-xl">
                  <img src="/images/Gemini_Generated_Image_1fogf71fogf71fog.png" alt="آگهی من" class="w-full h-40 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    تأیید شده
                  </div>

                  <div class="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button onclick="toggleEdit(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-yellow-400 hover:scale-110 transition">
                      <a href="./edit.html">
                        ✏️
                      </a>
                    </button>
                    <button onclick="deleteAd(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-red-500 hover:scale-110 transition">
                      ❌
                    </button>
                  </div>
                </div>

                <div class="view-mode space-y-2">
                  <div class="flex items-center justify-between">
                    <h2 class="ad-title text-base font-bold text-gray-800 dark:text-yellow-500 truncate max-w-[70%]">
                      اکانت پابجی لول 70 با اسکین افسانه‌ای
                    </h2>
                    <span class="text-sm text-gray-500 dark:text-gray-400">3 روز پیش</span>
                  </div>

                  <ul class="text-sm text-gray-600 dark:text-zinc-300 space-y-1">
                    <li class="ad-region">ریجن: خاورمیانه</li>
                    <li class="ad-price">قیمت: ۱٬۵۰۰٬۰۰۰ تومان</li>
                    <li>شماره آگهی: 205</li>
                  </ul>
                </div>

                <div class="pt-2 border-t border-gray-200 dark:border-gray-600">
                  <a href="/my-listings/205" class="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline transition">
                    مشاهده جزئیات →
                  </a>
                </div>
              </div>
              <div class="ad-box relative group w-full max-w-md p-4 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#1e253f] dark:via-[#151c33] dark:to-[#0d111d] 
  border border-gray-200 dark:border-[#2c334d]/50 shadow-md hover:shadow-lg transition duration-300 space-y-4 overflow-hidden" data-id="205" data-game="clash">

                <div class="relative overflow-hidden rounded-xl">
                  <img src="/images/Gemini_Generated_Image_1fogf71fogf71fog.png" alt="آگهی من" class="w-full h-40 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    تأیید شده
                  </div>

                  <div class="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button onclick="toggleEdit(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-yellow-400 hover:scale-110 transition">
                      <a href="./edit.html">
                        ✏️
                      </a>
                    </button>
                    <button onclick="deleteAd(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-red-500 hover:scale-110 transition">
                      ❌
                    </button>
                  </div>
                </div>

                <div class="view-mode space-y-2">
                  <div class="flex items-center justify-between">
                    <h2 class="ad-title text-base font-bold text-gray-800 dark:text-yellow-500 truncate max-w-[70%]">
                      اکانت پابجی لول 70 با اسکین افسانه‌ای
                    </h2>
                    <span class="text-sm text-gray-500 dark:text-gray-400">3 روز پیش</span>
                  </div>

                  <ul class="text-sm text-gray-600 dark:text-zinc-300 space-y-1">
                    <li class="ad-region">ریجن: خاورمیانه</li>
                    <li class="ad-price">قیمت: ۱٬۵۰۰٬۰۰۰ تومان</li>
                    <li>شماره آگهی: 205</li>
                  </ul>
                </div>

                <div class="pt-2 border-t border-gray-200 dark:border-gray-600">
                  <a href="/my-listings/205" class="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline transition">
                    مشاهده جزئیات →
                  </a>
                </div>
              </div>
              <div class="ad-box relative group w-full max-w-md p-4 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#1e253f] dark:via-[#151c33] dark:to-[#0d111d] 
  border border-gray-200 dark:border-[#2c334d]/50 shadow-md hover:shadow-lg transition duration-300 space-y-4 overflow-hidden" data-id="205" data-game="clash">

                <div class="relative overflow-hidden rounded-xl">
                  <img src="/images/Gemini_Generated_Image_1fogf71fogf71fog.png" alt="آگهی من" class="w-full h-40 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    تأیید شده
                  </div>

                  <div class="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button onclick="toggleEdit(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-yellow-400 hover:scale-110 transition">
                      <a href="./edit.html">
                        ✏️
                      </a>
                    </button>
                    <button onclick="deleteAd(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-red-500 hover:scale-110 transition">
                      ❌
                    </button>
                  </div>
                </div>

                <div class="view-mode space-y-2">
                  <div class="flex items-center justify-between">
                    <h2 class="ad-title text-base font-bold text-gray-800 dark:text-yellow-500 truncate max-w-[70%]">
                      اکانت پابجی لول 70 با اسکین افسانه‌ای
                    </h2>
                    <span class="text-sm text-gray-500 dark:text-gray-400">3 روز پیش</span>
                  </div>

                  <ul class="text-sm text-gray-600 dark:text-zinc-300 space-y-1">
                    <li class="ad-region">ریجن: خاورمیانه</li>
                    <li class="ad-price">قیمت: ۱٬۵۰۰٬۰۰۰ تومان</li>
                    <li>شماره آگهی: 205</li>
                  </ul>
                </div>

                <div class="pt-2 border-t border-gray-200 dark:border-gray-600">
                  <a href="/my-listings/205" class="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline transition">
                    مشاهده جزئیات →
                  </a>
                </div>
              </div>
              <div class="ad-box relative group w-full max-w-md p-4 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#1e253f] dark:via-[#151c33] dark:to-[#0d111d] 
  border border-gray-200 dark:border-[#2c334d]/50 shadow-md hover:shadow-lg transition duration-300 space-y-4 overflow-hidden" data-id="205" data-game="clash">

                <div class="relative overflow-hidden rounded-xl">
                  <img src="/images/Gemini_Generated_Image_1fogf71fogf71fog.png" alt="آگهی من" class="w-full h-40 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    تأیید شده
                  </div>

                  <div class="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button onclick="toggleEdit(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-yellow-400 hover:scale-110 transition">
                      <a href="./edit.html">
                        ✏️
                      </a>
                    </button>
                    <button onclick="deleteAd(this)" class="bg-white/90 dark:bg-[#1a1f2e]/80 p-2 rounded-full shadow hover:text-red-500 hover:scale-110 transition">
                      ❌
                    </button>
                  </div>
                </div>

                <div class="view-mode space-y-2">
                  <div class="flex items-center justify-between">
                    <h2 class="ad-title text-base font-bold text-gray-800 dark:text-yellow-500 truncate max-w-[70%]">
                      اکانت پابجی لول 70 با اسکین افسانه‌ای
                    </h2>
                    <span class="text-sm text-gray-500 dark:text-gray-400">3 روز پیش</span>
                  </div>

                  <ul class="text-sm text-gray-600 dark:text-zinc-300 space-y-1">
                    <li class="ad-region">ریجن: خاورمیانه</li>
                    <li class="ad-price">قیمت: ۱٬۵۰۰٬۰۰۰ تومان</li>
                    <li>شماره آگهی: 205</li>
                  </ul>
                </div>

                <div class="pt-2 border-t border-gray-200 dark:border-gray-600">
                  <a href="/my-listings/205" class="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline transition">
                    مشاهده جزئیات →
                  </a>
                </div>
              </div>


              {/* <div class="col-span-full flex flex-col items-center justify-center py-20 text-gray-600 dark:text-gray-400">
                        <i class="fa-regular fa-heart text-7xl mb-4 text-red-500"></i>
                        <p class="text-xl font-semibold">لیست علاقه‌مندی‌های شما خالی است.</p>
                    </div>  */}

            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default MyListings