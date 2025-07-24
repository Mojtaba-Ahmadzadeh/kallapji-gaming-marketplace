import React from 'react'

function SearchBar() {
    return (
        // Search input (only visible on desktop)
        <div className="hidden lg:flex items-center bg-white dark:bg-[#151B2D] w-[30rem] xl:w-[45rem] h-12 rounded-[1.3rem] overflow-hidden mr-12 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <form action="#" className="relative flex items-center w-full h-full px-4">
                <input
                    type="text"
                    placeholder="جست‌وجوی محصولات"
                    className="flex-1 h-full bg-transparent border-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none font-Shabnam-Bold-FD text-sm"
                />
                <button
                    type="submit"
                    className="ml-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 xl:w-7 xl:h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default SearchBar
