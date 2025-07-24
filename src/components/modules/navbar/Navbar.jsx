'use client'
import { useState } from 'react'
import DesktopCategory from './DesktopCategory'
import MobileCategory from './MobileCategory'
import Topbar from '../topbar/Topbar'

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <>
            <Topbar onHamburgerClick={() => setIsSidebarOpen(true)} />

            {/* دسکتاپ فقط */}
            <div className="hidden lg:flex items-center gap-x-7 mt-[1rem]">
                <DesktopCategory />
            </div>

            {/* سایدبار موبایل */}
            <MobileCategory isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    )
}

export default Navbar