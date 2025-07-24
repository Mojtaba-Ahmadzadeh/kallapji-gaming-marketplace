'use client'

import LogoAndTitle from './LogoAndTitle'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import FavoriteIcon from './FavoriteIcon'
import UserMenuMobile from './UserMenuMobile'
import ShoppingCartIcon from './ShoppingCartIcon'

function Topbar({ onHamburgerClick }) {
    return (
        <div className="flex items-center justify-between container px-4 xl:px-0 m-auto lg:m-0 pt-[1rem]">
            {/* Hamburger icon - visible only on mobile */}
            <div
                onClick={onHamburgerClick}
                className="lg:hidden text-black dark:text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-9"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
            </div>

            {/* Logo and Search bar */}
            <div className="flex items-center gap-x-8">
                <LogoAndTitle />
                <SearchBar />
            </div>

            {/* Icons on the right side */}
            <div className="flex gap-x-2 xl:gap-x-5 items-center">
                <ThemeToggle />
                <FavoriteIcon />
                <UserMenuMobile />
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default Topbar
