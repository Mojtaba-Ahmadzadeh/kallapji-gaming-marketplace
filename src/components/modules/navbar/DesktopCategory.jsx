import React from 'react'
import {
    faChevronDown,
    faGamepad,
    faCrosshairs,
    faSkullCrossbones,
    faGift,
    faShieldHalved,
    faEnvelope,
    faPhone,
    faQuestionCircle,
    faGavel,
    faUsers,
    faSignInAlt,
    faUserCircle,
    faGauge,
    faShoppingCart,
    faTicketAlt,
    faComments,
    faHeart,
    faChevronLeft,
    faFileCirclePlus
} from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DesktopCategory() {
    return (
        <>
            {/* Wrapper for the category dropdown menu  */}
            <div className="relative w-52 font-Shabnam-Bold-FD text-slate-200 text-xs group">

                {/* Dropdown trigger button */}
                <div className="relative w-52 font-Shabnam-Bold-FD text-slate-800 dark:text-slate-200 text-xs group">

                    {/* Main dropdown button */}
                    <button className="w-full flex items-center justify-between bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-lg transition hover:bg-yellow-100 dark:hover:bg-white/20">

                        {/* Icon and label */}
                        <div className="flex items-center gap-2">

                            {/* Icon background container */}
                            <div className="w-7 h-7 flex items-center justify-center 
                                    bg-yellow-200 dark:bg-yellow-400/30 
                                    rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                                {/* Icon image */}
                                <img src="../images/icon-2.svg" alt="icon" className="w-4 h-4 dark:filter-none filter invert" />
                            </div>

                            {/* Label  */}
                            <span className="transition group-hover:text-yellow-600 dark:group-hover:text-yellow-400 text-slate-800 dark:text-slate-100 text-sm">
                                دسته‌بندی
                            </span>
                        </div>
                        {/* Dropdown arrow icon */}
                        <FontAwesomeIcon icon={faChevronDown}
                            className="text-yellow-500 dark:text-yellow-400 w-3.5 h-3.5"
                        />
                    </button>

                </div>

                {/* Dropdown content container  */}
                <div className="absolute top-14 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-3 rounded-lg w-56 z-50 transition-all text-slate-900 dark:text-white shadow-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-400/40 dark:ring-yellow-500/40 border border-yellow-300/30 dark:border-yellow-400/10">

                    {/* Dropdown items list */}
                    <ul className="space-y-1 text-white font-gamer text-sm custom-scroll">

                        {/* Mobile games item with sub-menu */}
                        <li className="relative group/sub">
                            <a href="#" className="flex items-center justify-between px-4 py-2 
                                text-slate-800 dark:text-white 
                                hover:text-yellow-600 dark:hover:text-yellow-300 
                                transition-all rounded-lg">

                                {/* Icon and label */}
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faGamepad}
                                        className="text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-400/10 p-2 rounded-full w-3 h-3"
                                    />

                                    <span>بازی های موبایل</span>
                                </div>

                                {/* Chevron icon */}
                                <FontAwesomeIcon icon={faChevronLeft} className="fas fa-chevron-left 
                                    text-yellow-500 dark:text-yellow-300 w-3 h-3 
                                    text-[10px]" />
                            </a>

                            {/* Sub-menu: Mobile games */}
                            <div className="absolute top-0 right-[13.5rem] w-60 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-3 rounded-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-500/40 border dark:border-yellow-400/10 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50 max-h-[109px] overflow-y-auto custom-scroll">
                                <ul className="space-y-3 text-black dark:text-white text-sm">
                                    {/* Sub-menu items */}
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">کالاف
                                        دیوتی</a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">پابجی</a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">کلش
                                        آف کلنز</a>
                                    </li>
                                    <li><a href="./clashRoyale.html" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">کلش
                                        رویال</a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">فورت
                                        نایت</a>
                                    </li>
                                    <li>
                                        <a href="#" className="
                                            text-slate-800 dark:text-white block
                                            hover:text-yellow-600 dark:hover:text-yellow-300 
                                            transition-all rounded-lg">
                                            <span>موبایل لجند</span>
                                        </a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">فری
                                        فایر</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Telegram products item */}
                        <li className="relative group/sub">
                            {/* Same structure as above with different icon and sub-items */}
                            <a href="#" className="flex items-center justify-between px-4 py-2 
                                text-slate-800 dark:text-white 
                                hover:text-yellow-600 dark:hover:text-yellow-300 
                                transition-all rounded-lg">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faTelegramPlane} className="text-yellow-600 dark:text-yellow-400 
                                        bg-yellow-100 dark:bg-yellow-400/10 
                                        p-1.5 rounded-full text-xs w-3 h-3" />
                                    <span>محصولات تلگرام</span>
                                </div>
                                {/* Chevron icon - */}
                                <FontAwesomeIcon icon={faChevronLeft} className="fas fa-chevron-left 
                                    text-yellow-500 dark:text-yellow-300 w-3 h-3 
                                    text-[10px]" />
                            </a>

                            <div className="absolute top-0 right-[13.5rem] w-60 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-3 rounded-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-500/40 border dark:border-yellow-400/10 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50 max-h-[109px] overflow-y-auto custom-scroll">
                                <ul className="space-y-3 text-black dark:text-white text-sm">

                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-300 transition-all">تلگرام
                                        پرمیوم</a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-300 transition-all">استارز
                                        تلگرام</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Gift cards item */}
                        <li className="relative group/sub">
                            {/* Same structure as above with different icon and sub-items */}
                            <a href="#" className="flex items-center justify-between px-4 py-2 
                                text-slate-800 dark:text-white 
                                hover:text-yellow-600 dark:hover:text-yellow-300 
                                transition-all rounded-lg">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faGift} className=" text-yellow-600 dark:text-yellow-400 
                                        bg-yellow-100 dark:bg-yellow-400/10 w-3 h-3
                                        p-1.5 rounded-full text-xs" />
                                    <span>گیفت کارت</span>
                                </div>
                                <FontAwesomeIcon icon={faChevronLeft} className="fas fa-chevron-left 
                                    text-yellow-500 dark:text-yellow-300 w-3 h-3 
                                    text-[10px]" />
                            </a>

                            <div className="absolute top-0 right-[13.5rem] w-60 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-3 rounded-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-500/40 border dark:border-yellow-400/10 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50 max-h-[109px] overflow-y-auto custom-scroll">
                                <ul className="space-y-3 text-black dark:text-white text-sm">
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">گیفت
                                        کارت
                                        اسپاتیفای</a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">گیفت
                                        کارت پلی
                                        استیشن</a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">گیفت
                                        کارت اپل</a>
                                    </li>
                                    <li><a href="#" className="block hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">گیفت
                                        کارت ایکس
                                        باکس</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Register Ad (no sub-menu) */}
                        <li>
                            <a href="./register-ad.html" className="flex items-center justify-between px-4 py-2 
                                text-slate-800 dark:text-white 
                                hover:text-yellow-600 dark:hover:text-yellow-300 
                                transition-all rounded-lg">

                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faFileCirclePlus} className="
                                        text-yellow-600 dark:text-yellow-400 
                                        bg-yellow-100 dark:bg-yellow-400/10 
                                        p-1.5 rounded-full text-xs w-3 h-3" />
                                    <span>ثبت آگهی</span>
                                </div>
                            </a>

                        </li>
                    </ul>
                </div>

            </div>

            {/* Separator line */}
            <span className="bg-gray-500 w-[1px] h-[1.5rem] mt-[0.6rem]"></span>

            {/*  Main horizontal navigation */}
            <div>
                {/* Each <li> here is a navigation item  */}
                <ul className="hidden lg:flex flex-wrap gap-x-7 items-center">
                    {/* Example: PUBG */}
                    <li>
                        <a
                            href="/pages/pubg.html"
                            className="flex items-center gap-x-2 text-slate-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition"
                        >
                            <FontAwesomeIcon icon={faCrosshairs} className="text-yellow-400 w-4 h-4" />
                            <span>پابجی</span>
                        </a>
                    </li>

                    <li>
                        <a href="/pages/giftCard.html" className="flex items-center gap-x-2 text-slate-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition">
                            <FontAwesomeIcon icon={faGift} className="text-pink-400 w-4 h-4" />
                            <span>گیفت کارت</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/pages/telegram-products.html"
                            className="flex items-center gap-x-2 text-slate-800 dark:text-white dark:hover:text-[#0088cc] hover:text-[#0088cc] transition group"
                        >
                            <FontAwesomeIcon
                                icon={faTelegram}
                                className="text-[#0088cc] w-4 h-4"
                            />
                            <span>محصولات تلگرام</span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="/pages/callofDuty.html"
                            className="flex items-center gap-x-2 text-slate-800 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition group"
                        >
                            <FontAwesomeIcon
                                icon={faSkullCrossbones}
                                className="text-red-500 transition group-hover:text-red-600 dark:group-hover:text-red-500 w-4 h-4"// ← اینجا سایز واقعی SVG
                            />
                            <span>کالاف دیوتی</span>
                        </a>
                    </li>

                    <li>
                        <a href="/pages/ClashOfClans.html" className="flex items-center gap-x-2 text-slate-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition">
                            <FontAwesomeIcon icon={faShieldHalved} className="text-red-500 w-4 h-4" />
                            <span>کلش آف کلنز</span>
                        </a>
                    </li>

                    {/* Dropdown: Contact Us */}
                    <li className="relative group">
                        {/* Contact Us button with sub-menu */}
                        <a href="#" className="flex items-center gap-x-2 text-slate-800 dark:text-white hover:text-blue-400 transition">
                            <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 w-4 h-4" />
                            <span>ارتباط با ما</span>
                            <FontAwesomeIcon icon={faChevronDown} className="text-sm text-gray-500 dark:text-gray-300 w-3 h-3" />
                        </a>
                        <div className="absolute top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-5 rounded-lg w-56 z-50 transition-all text-slate-900 dark:text-white shadow-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-400/40 dark:ring-yellow-500/40 border border-yellow-300/30 dark:border-yellow-400/10">
                            <ul className="text-sm space-y-3 font-gamer">
                                <li>
                                    <a href="/pages/contact.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faPhone} className="text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>تماس با ما</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/rules.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faGavel} className=" text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>قوانین و مقررات</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/questions.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faQuestionCircle} className=" text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>سوالات متدوال</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/about.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faUsers} className="text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>درباره ما</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* Login/Signup */}
                    <li>
                        <a href="/pages/login.html" className="flex items-center gap-x-2 text-slate-800 dark:text-white hover:text-green-500 dark:hover:text-green-400 transition">
                            <FontAwesomeIcon icon={faSignInAlt} className="text-green-400 w-4 h-4" />
                            <span>ورود / عضویت</span>
                        </a>
                    </li>

                    {/* User Account dropdown */}
                    <li className="relative group">
                        <a href="#" className="flex items-center gap-x-2 text-slate-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition">
                            <FontAwesomeIcon icon={faUserCircle} className="text-cyan-400 w-4 h-4" />
                            <span>حساب کاربری</span>
                            <FontAwesomeIcon icon={faChevronDown} className="text-sm text-gray-500 dark:text-gray-300 w-3 h-3" />
                        </a>
                        <div className="absolute top-8 -right-9 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-5 rounded-lg w-56 z-50 transition-all text-slate-900 dark:text-white shadow-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-400/40 dark:ring-yellow-500/40 border border-yellow-300/30 dark:border-yellow-400/10">

                            <div className="flex items-center gap-3 border-b border-yellow-400/40 pb-3 mb-3">
                                <img src="https://secure.gravatar.com/avatar/221d58ad75e354575e6ded2ee3a6e1a2?s=96&amp;d=mm&amp;r=g" alt="نام کاربر" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                                <div className="text-sm font-gamer tracking-tight">
                                    <span>نام کاربر</span>
                                </div>
                            </div>


                            <ul className="text-sm space-y-3 font-gamer">
                                <li>
                                    <a href="/pages/p-user.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faGauge} className="text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>پیشخوان</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/orders.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faShoppingCart} className="text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>سفارشات</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/tickets.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faTicketAlt} className="fas fa-ticket-alt text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>تیکت‌ها</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/registered-comments.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faComments} className="text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>کامنت‌ها</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/favorites.html" className="flex items-center gap-x-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition duration-200">
                                        <FontAwesomeIcon icon={faHeart} className="text-slate-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition duration-200 w-4 h-4" />
                                        <span>علاقه‌مندی‌ها</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default DesktopCategory