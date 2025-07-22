import React from 'react'
import MobileMenuButton from './MobileMenuButton'
import SearchBar from './SearchBar'
import LogoAndTitle from './LogoAndTitle'
import ThemeToggle from './ThemeToggle'
import FavoriteIcon from './FavoriteIcon'
import UserMenuMobile from './UserMenuMobile'
import ShoppingCartIcon from './ShoppingCartIcon'

function Topbar() {
    return (
        <>
            <div class="flex items-center justify-between container px-4 xl:px-0 m-auto lg:m-0 pt-[1rem]">
                {/* <!-- Hamberger Menu Mobile --> */}
                <MobileMenuButton />
                {/* <!-- Wrapper --> */}
                <div class="flex items-center gap-x-8">
                    <LogoAndTitle />
                    <SearchBar />

                </div>
                {/*  Icons on the left of the header  */}
                <div class="flex gap-x-2 xl:gap-x-5 items-center">
                    <ThemeToggle />
                    <FavoriteIcon />
                    <UserMenuMobile />
                    <ShoppingCartIcon />
                </div>
            </div>
        </>
    )
}

export default Topbar