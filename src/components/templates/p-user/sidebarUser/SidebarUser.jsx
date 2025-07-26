import React from 'react'
import {
    faHome, faBoxesStacked,
    faComments,
    faChartLine,
    faBullhorn,
    faCreditCard, faGamepad,
    faTicket,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


function SidebarUser() {
    return (
        <aside id="sidebar" className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 p-6 space-y-6 z-50 transform translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block shadow-md dark:shadow-lg">
            <div className="text-center">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=user" className="w-20 h-20 mx-auto rounded-full border border-gray-300 dark:border-gray-600" />
                <h3 className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">کاربر حرفه‌ای</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">سطح: طلایی</p>
            </div>
            <nav className="space-y-4">
                <Link href="#" className="flex items-center gap-3 p-2 rounded bg-gray-200 dark:bg-gray-700 transition ">
                    <FontAwesomeIcon icon={faHome} className="w-5 h-5 text-yellow-400" />
                    <span>خانه</span>
                </Link>
                <Link href="/account/user-products" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ">
                    <FontAwesomeIcon icon={faBoxesStacked} className="w-5 h-5 text-yellow-400" />
                    <span>محصولات من</span>
                </Link>
                <Link href="/account/registered-comments" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ">
                    <FontAwesomeIcon icon={faComments} className="w-5 h-5 text-yellow-400" />
                    <span>نظرات ثبت شده</span>
                </Link>
                <a href="./registered-comments.html" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ">
                    <FontAwesomeIcon icon={faChartLine} className="w-h h-5 text-yellow-400" />
                    <span>کامنت های من</span>
                </a>
                <Link href="/account/my-listings" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ">
                    <FontAwesomeIcon icon={faBullhorn} className="w-h h-5 text-yellow-400" />
                    <span>آگهی های من</span>
                </Link>
                <Link href="./store.html" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FontAwesomeIcon icon={faCreditCard} className=" w-5 h-5 text-yellow-400" />
                    <span>فروشگاه</span>
                </Link>
                <Link href="./all-accounts.html" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FontAwesomeIcon icon={faGamepad} className="w-5 h-5 text-yellow-400" />
                    <span>فروش اکانت</span>
                </Link>
                <Link href="/account/tickets" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FontAwesomeIcon icon={faTicket} className="w-5 h-5 text-yellow-400" />
                    <span>تیکت‌ها</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5 text-red-600" />
                    <span>خروج از حساب</span>
                </Link>
            </nav>
        </aside>
    )
}

export default SidebarUser