import React from 'react'
import DesktopCategory from './DesktopCategory'


function Navbar() {
    return (
        <>
            <div class="hidden lg:flex  items-center gap-x-7 mt-[1rem] ">
                <DesktopCategory />
            </div>
        </>
    )
}

export default Navbar