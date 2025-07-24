import React from 'react'

function FavoriteIcon() {
    return (
        <a href="./Favorites.html" className="hidden lg:block relative text-gray-800 dark:text-white hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
            </svg>
            <span className="absolute top-0 left-[-0.5rem] mt-[-0.3rem] bg-pink-600 flex justify-center items-center w-4 h-4 text-xs rounded-full text-white">0</span>
        </a>
    )
}

export default FavoriteIcon