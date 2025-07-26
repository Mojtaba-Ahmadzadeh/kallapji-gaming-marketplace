import React from 'react'

function HeaderUser() {
    return (
        <>
            <header className=" p-4 shadow-md dark:shadow-lg flex justify-between items-center sticky top-0 z-10">
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">پنل کاربری</h1>
                <div className="flex items-center gap-x-3 ">

                    <button id="menuToggle" className="lg:hidden text-yellow-400">
                        <i className="fa-solid fa-bars text-2xl"></i>
                    </button>
                    <div id="toggle-theme" className="block relative cursor-pointer transition-colors text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-gray-300">
                        <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" className="size-7 hidden dark:inline-block" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z">
                            </path>
                        </svg>

                        <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 inline-block dark:hidden">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z">
                            </path>
                        </svg>

                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderUser