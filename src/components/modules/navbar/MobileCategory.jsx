"use client"

import React, { useState } from 'react'

function MobileCategory() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (

    

    <div class="menu lg:hidden active">

      <div class="lg:hidden flex items-center w-full h-16 rounded-[1.7rem] mb-5 bg-white dark:bg-[#1b2138] px-6 shadow-lg shadow-gray-300 dark:shadow-[#111827]/60 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
        <form action="#" class="flex items-center w-full h-full relative">
          <input type="text" placeholder="دنبال چه محصولی می‌گردی؟" class="flex-1 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-Shabnam-Bold-FD text-base outline-none px-5 h-full rounded-[1.2rem] focus:placeholder:text-blue-500 transition-colors" />
          <button type="submit" class="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 dark:text-white hover:text-blue-500 transition-all duration-200" aria-label="جستجو">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.2 5.2a7.5 7.5 0 0010.6 10.6z"></path>
            </svg>
          </button>
        </form>
      </div>

      <ul id="mobileMenu" class="lg:hidden flex flex-col gap-y-1 p-4 text-gray-900 dark:text-white bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg">

        <li class="menu-group border-b border-gray-400">
          <button onclick="showSubmenu('gamesMenu')" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <i class="fas fa-gamepad text-indigo-400 text-lg"></i>
              </div>
              <span>محصولات بازی‌</span>
            </div>
            <i class="fas fa-chevron-left text-gray-400 group-hover:text-white text-sm transition-transform duration-300 group-hover:-translate-x-1"></i>
          </button>
        </li>
        <li class="menu-group border-b border-gray-400">
          <button onclick="showSubmenu('gamesMenu')" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <i class="fas fa-gamepad text-indigo-400 text-lg"></i>
              </div>
              <span>خرید اکانت</span>
            </div>
            <i class="fas fa-chevron-left text-gray-400 group-hover:text-white text-sm transition-transform duration-300 group-hover:-translate-x-1"></i>
          </button>
        </li>
        <li class="menu-group border-b border-gray-400">
          <a href="./register-ad.html" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <i class="fas fa-bullhorn text-indigo-500 dark:text-indigo-300 text-lg"></i>
              </div>
              <span>ثبت آگهی</span>
            </div>
          </a>
        </li>
        <li class="menu-group border-b border-gray-400">
          <button onclick="showSubmenu('gamesMenu')" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <i class="fas fa-gamepad text-indigo-400 text-lg"></i>
              </div>
              <span>گیفت کارت ها</span>
            </div>
            <i class="fas fa-chevron-left text-gray-400 group-hover:text-white text-sm transition-transform duration-300 group-hover:-translate-x-1"></i>
          </button>
        </li>

        <li class="menu-group border-b border-gray-400">
          <button onclick="showSubmenu('telegramMenu')" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center shadow-inner">
                <i class="fab fa-telegram-plane text-sky-400 text-lg"></i>
              </div>
              <span>محصولات تلگرام</span>
            </div>
            <i class="fas fa-chevron-left text-gray-400 group-hover:text-white text-sm transition-transform duration-300 group-hover:-translate-x-1"></i>
          </button>
        </li>

        <li class="menu-group border-b border-gray-400">
          <button onclick="showSubmenu('servicesMenu')" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <i class="fas fa-store text-pink-400"></i>
              </div>
              <span>خدمات</span>
            </div>
            <i class="fas fa-chevron-left text-gray-400 group-hover:text-white text-sm transition-transform duration-300 group-hover:-translate-x-1"></i>
          </button>
        </li>
        <li class="menu-group border-b border-gray-400">
          <button onclick="showSubmenu('servicesMenu')" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <i class="fas fa-store text-pink-400"></i>
              </div>
              <span>ارتباط با ما</span>
            </div>
            <i class="fas fa-chevron-left text-gray-400 group-hover:text-white text-sm transition-transform duration-300 group-hover:-translate-x-1"></i>
          </button>
        </li>

        <li class="menu-group border-b border-gray-400">
          <button onclick="showSubmenu('accountMenu')" class="flex items-center justify-between w-full py-3">
            <div class="flex items-center gap-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner">
                <i class="fas fa-user text-cyan-400"></i>
              </div>
              <span>حساب کاربری</span>
            </div>
            <i class="fas fa-chevron-left text-gray-400 group-hover:text-white text-sm transition-transform duration-300 group-hover:-translate-x-1"></i>
          </button>
        </li>


      </ul>

      <ul id="gamesMenu" class="hidden flex-col p-4 bg-white text-gray-800 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white rounded-xl shadow-lg animate-fade-in divide-y divide-gray-200 dark:divide-gray-700">

        <button onclick="goBack()" class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-4 transition-all duration-300">
          <i class="fas fa-arrow-right text-gray-800 dark:text-white rotate-180"></i>
          <span>بازگشت به منوی اصلی</span>
        </button>

        <li>
          <a href="/pages/pubg.html" class="flex items-center gap-x-3 py-3 px-3 hover:bg-yellow-500/10 text-gray-800 dark:text-white hover:text-yellow-400 transition-all rounded-md">
            <i class="fas fa-crosshairs text-yellow-400"></i>
            <span class="font-medium">پابجی</span>
          </a>
        </li>
        <li>
          <a href="/pages/Fortnite.html" class="flex items-center gap-x-3 py-3 px-3 hover:bg-purple-500/10 text-gray-800 dark:text-white hover:text-purple-400 transition-all rounded-md">
            <i class="fas fa-hat-wizard text-purple-400"></i>
            <span class="font-medium">فورتنایت</span>
          </a>
        </li>
        <li>
          <a href="/pages/callofDuty.html" class="flex items-center gap-x-3 py-3 px-3 hover:bg-red-500/10 text-gray-800 dark:text-white hover:text-red-500 transition-all rounded-md">
            <i class="fas fa-skull-crossbones text-red-500"></i>
            <span class="font-medium">کالاف دیوتی</span>
          </a>
        </li>
        <li>
          <a href="/pages/clashofclans.html" class="flex items-center gap-x-3 py-3 px-3 hover:bg-orange-400/10 text-gray-800 dark:text-white hover:text-orange-400 transition-all rounded-md">
            <i class="fas fa-shield-halved text-orange-400"></i>
            <span class="font-medium">کلش آف کلنز</span>
          </a>
        </li>
        <li>
          <a href="/pages/freefire.html" class="flex items-center gap-x-3 py-3 px-3 hover:bg-red-400/10 text-gray-800 dark:text-white hover:text-red-400 transition-all rounded-md">
            <i class="fas fa-fire text-red-400"></i>
            <span class="font-medium">فری فایر</span>
          </a>
        </li>
        <li>
          <a href="/pages/clashRoyale.html" class="flex items-center gap-x-3 py-3 px-3 hover:bg-red-400/10 text-gray-800 dark:text-white hover:text-red-400 transition-all rounded-md">
            <i class="fas fa-fire text-red-400"></i>
            <span class="font-medium">کلش رویال</span>
          </a>
        </li>
      </ul>

      <ul id="servicesMenu" class="hidden flex-col p-4 bg-white text-gray-800 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white rounded-xl shadow-lg animate-fade-in divide-y divide-gray-200 dark:divide-gray-700">

        <button onclick="goBack()" class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-4 transition-all duration-300">
          <i class="fas fa-arrow-right text-gray-800 dark:text-white rotate-180"></i>
          <span>بازگشت به منوی اصلی</span>
        </button>

        <li>
          <a href="/pages/store.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-green-500/10 hover:text-green-400 transition-all rounded-md">
            <i class="fas fa-shopping-cart text-green-400 text-lg"></i>
            <span class="font-medium">فروشگاه</span>
          </a>
        </li>
        <li>
          <a href="/pages/all-accounts.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-green-500/10 hover:text-green-400 transition-all rounded-md">
            <i class="fas fa-shopping-cart text-green-400 text-lg"></i>
            <span class="font-medium">آگهی های اکانت</span>
          </a>
        </li>

      </ul>

      <ul id="accountMenu" class="hidden flex-col p-4 bg-white text-gray-800 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white rounded-xl shadow-lg animate-fade-in divide-y divide-gray-200 dark:divide-gray-700">

        <button onclick="goBack()" class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-4 transition-all duration-300">
          <i class="fas fa-arrow-right text-gray-800 dark:text-white rotate-180"></i>
          <span>بازگشت به منوی اصلی</span>
        </button>

        <li>
          <a href="/pages/login.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-green-500/10 hover:text-green-400 transition-all rounded-md">
            <i class="fas fa-sign-in-alt text-green-400 text-lg"></i>
            <span class="font-medium">ورود / ثبت‌نام</span>
          </a>
        </li>

        <li>
          <a href="/pages/p-user" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all rounded-md">
            <i class="fas fa-user-circle text-cyan-400 text-lg"></i>
            <span class="font-medium">حساب کاربری</span>
          </a>
        </li>

      </ul>

      <ul id="telegramMenu" class="hidden flex-col p-4 bg-white text-gray-800 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white rounded-xl shadow-lg animate-fade-in divide-y divide-gray-200 dark:divide-gray-700">

        <button onclick="goBack()" class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-4 transition-all duration-300">
          <i class="fas fa-arrow-right text-gray-800 dark:text-white rotate-180"></i>
          <span>بازگشت به منوی اصلی</span>
        </button>

        <li>
          <a href="/pages/telegram/real-member.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-emerald-500/10 hover:text-emerald-400 transition-all rounded-md">
            <i class="fab fa-telegram-plane text-sky-400"></i>
            <span class="font-medium">تلگرام پرمیوم</span>
          </a>
        </li>

        <li>
          <a href="/pages/telegram/fake-member.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all rounded-md">
            <i class="fas fa-user-secret text-orange-400 text-lg"></i>
            <span class="font-medium">ممبر فیک</span>
          </a>
        </li>

        <li>
          <a href="/pages/telegram/post-view.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-blue-500/10 hover:text-blue-400 transition-all rounded-md">
            <i class="fas fa-eye text-blue-400 text-lg"></i>
            <span class="font-medium">بازدید پست</span>
          </a>
        </li>


        <li>
          <a href="/pages/telegram/reactions.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-pink-500/10 hover:text-pink-400 transition-all rounded-md">
            <i class="fas fa-heart text-pink-400 text-lg"></i>
            <span class="font-medium">ری‌اکشن و کامنت</span>
          </a>
        </li>

        <li>
          <a href="/pages/telegram/custom-orders.html" class="flex items-center gap-x-3 py-3 px-3 text-gray-800 dark:text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all rounded-md">
            <i class="fas fa-cogs text-purple-400 text-lg"></i>
            <span class="font-medium">سفارش اختصاصی</span>
          </a>
        </li>
      </ul>

      <div id="toggle-theme" class="hidden lg:block relative cursor-pointer transition-colors text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-gray-300 mt-4 px-3">

        <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" class="size-7 hidden dark:inline-block" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z">
          </path>
        </svg>

        <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 inline-block dark:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z">
          </path>
        </svg>
      </div>

    </div>
  )
}

export default MobileCategory