'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft, faGamepad, faBullhorn, faStore, faUser, faEye,
  faHeart, faCogs, faSignInAlt, faUserCircle, faShoppingCart,
  faShieldHalved, faFire, faHatWizard, faCrosshairs,
  faSkullCrossbones, faArrowRight, faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

// Menu configuration object
const menuData = {
  main: [
    { key: 'gamesMenu', icon: faGamepad, iconColor: 'text-orange-400', label: 'محصولات بازی‌' },
    { key: 'accountsMenu', icon: faGamepad, iconColor: 'text-rose-400', label: 'خرید اکانت' },
    { href: '/register-ad', icon: faBullhorn, iconColor: 'text-yellow-400', label: 'ثبت آگهی' },
    { key: 'giftcardsMenu', icon: faGamepad, iconColor: 'text-green-400', label: 'گیفت کارت ها' },
    { key: 'telegramMenu', icon: faTelegramPlane, iconColor: 'text-sky-400', label: 'محصولات تلگرام' },
    { key: 'servicesMenu', icon: faStore, iconColor: 'text-violet-400', label: 'خدمات' },
    { key: 'contactMenu', icon: faStore, iconColor: 'text-pink-400', label: 'ارتباط با ما' },
    { key: 'accountMenu', icon: faUser, iconColor: 'text-indigo-400', label: 'حساب کاربری' },
  ],
  gamesMenu: [
    { href: '/pages/pubg.html', icon: faCrosshairs, iconColor: 'text-yellow-400', label: 'پابجی' },
    { href: '/pages/Fortnite.html', icon: faHatWizard, iconColor: 'text-purple-400', label: 'فورتنایت' },
    { href: '/pages/callofDuty.html', icon: faSkullCrossbones, iconColor: 'text-red-500', label: 'کالاف دیوتی' },
    { href: '/pages/clashofclans.html', icon: faShieldHalved, iconColor: 'text-orange-400', label: 'کلش آف کلنز' },
    { href: '/pages/freefire.html', icon: faFire, iconColor: 'text-red-400', label: 'فری فایر' },
    { href: '/pages/clashRoyale.html', icon: faFire, iconColor: 'text-blue-400', label: 'کلش رویال' },
  ],
  accountsMenu: [
    { href: '/pages/accounts/steam.html', icon: faGamepad, iconColor: 'text-gray-400', label: 'اکانت استیم' },
    { href: '/pages/accounts/epic.html', icon: faGamepad, iconColor: 'text-fuchsia-400', label: 'اکانت اپیک گیمز' },
    { href: '/pages/accounts/origin.html', icon: faGamepad, iconColor: 'text-amber-400', label: 'اکانت اوریجین' },
  ],
  giftcardsMenu: [
    { href: '/giftcards/playstation', icon: faShoppingCart, iconColor: 'text-indigo-400', label: 'گیفت کارت پلی استیشن' },
    { href: '/giftcards/xbox', icon: faShoppingCart, iconColor: 'text-green-500', label: 'گیفت کارت ایکس‌باکس' },
    { href: '/giftcards/googleplay', icon: faShoppingCart, iconColor: 'text-yellow-500', label: 'گیفت کارت گوگل پلی' },
    { href: '/giftcards/appstore', icon: faShoppingCart, iconColor: 'text-blue-400', label: 'گیفت کارت اپ استور' },
  ],
  telegramMenu: [
    { href: '/pages/telegram/real-member.html', icon: faTelegramPlane, iconColor: 'text-sky-400', label: 'تلگرام پرمیوم' },
    { href: '/pages/telegram/fake-member.html', icon: faUserSecret, iconColor: 'text-rose-400', label: 'ممبر فیک' },
    { href: '/pages/telegram/post-view.html', icon: faEye, iconColor: 'text-indigo-400', label: 'بازدید پست' },
    { href: '/pages/telegram/reactions.html', icon: faHeart, iconColor: 'text-pink-400', label: 'ری‌اکشن و کامنت' },
    { href: '/pages/telegram/custom-orders.html', icon: faCogs, iconColor: 'text-gray-400', label: 'سفارش اختصاصی' },
  ],
  servicesMenu: [
    { href: '/pages/store.html', icon: faShoppingCart, iconColor: 'text-green-400', label: 'فروشگاه' },
    { href: '/pages/all-accounts.html', icon: faShoppingCart, iconColor: 'text-orange-400', label: 'آگهی های اکانت' },
  ],
  contactMenu: [
    { href: '/pages/about.html', icon: faStore, iconColor: 'text-purple-400', label: 'درباره ما' },
    { href: '/pages/contact.html', icon: faStore, iconColor: 'text-pink-400', label: 'تماس با پشتیبانی' },
  ],
  accountMenu: [
    { href: '/pages/login.html', icon: faSignInAlt, iconColor: 'text-red-400', label: 'ورود / ثبت‌نام' },
    { href: '/pages/p-user', icon: faUserCircle, iconColor: 'text-blue-400', label: 'حساب کاربری' },
  ],
}

export default function MobileSidebar({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState('main')

  const handleBack = () => setActiveMenu('main')
  const currentMenu = menuData[activeMenu] || []

  return (
    <>
      {/* Overlay background when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`
          fixed top-0 bottom-0 right-0 z-50 w-80 overflow-y-auto
          bg-white dark:bg-[#1b2138] shadow-2xl p-4
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden
        `}
      >
        {/* Search bar */}
        <div className="flex items-center w-full h-16 rounded-[1.7rem] mb-5 bg-white dark:bg-[#1b2138] px-6 shadow-lg shadow-gray-300 dark:shadow-[#111827]/60 transition-all">
          <form className="flex items-center w-full relative">
            <input
              type="text"
              placeholder="دنبال چه محصولی می‌گردی؟"
              className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-Shabnam-Bold-FD text-base outline-none px-5 h-full rounded-[1.2rem]"
            />
            <button type="submit" className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 dark:text-white hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.2 5.2a7.5 7.5 0 0010.6 10.6z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Menu items */}
        <ul className="flex flex-col gap-y-1 p-4 text-gray-900 dark:text-white bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg animate-fade-in divide-y divide-gray-300 dark:divide-gray-700">
          {/* Back button if not in main menu */}
          {activeMenu !== 'main' && (
            <li>
              <button
                onClick={handleBack}
                className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-4 transition-all"
              >
                <FontAwesomeIcon icon={faArrowRight} className="rotate-180" />
                بازگشت به منوی اصلی
              </button>
            </li>
          )}

          {/* Render current menu */}
          {currentMenu.map((item, i) => {
            const isSubMenu = item.key && menuData[item.key]
            const iconClasses = `w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shadow-inner`
            const iconColor = item.iconColor || 'text-indigo-400 dark:text-indigo-300'

            const content = (
              <div className="flex items-center gap-x-2">
                <div className={iconClasses}>
                  <FontAwesomeIcon icon={item.icon} className={iconColor} />
                </div>
                <span>{item.label}</span>
              </div>
            )

            if (isSubMenu) {
              return (
                <li key={i} className="py-3 border-b border-gray-300 dark:border-gray-700">
                  <button
                    onClick={() => setActiveMenu(item.key)}
                    className="flex items-center justify-between w-full"
                  >
                    {content}
                    <FontAwesomeIcon icon={faChevronLeft} className="text-gray-400 text-sm" />
                  </button>
                </li>
              )
            }

            return (
              <li key={i} className="py-3 border-b border-gray-300 dark:border-gray-700">
                <a href={item.href} onClick={onClose} className="flex items-center justify-between w-full">
                  {content}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
