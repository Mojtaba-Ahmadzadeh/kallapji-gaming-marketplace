'use client'

import { useState } from 'react'
import DesktopCategory from './DesktopCategory'
import MobileCategory from './MobileCategory'
import Topbar from '../topbar/Topbar'

function Navbar() {
  // State to control the visibility of the mobile sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Top navigation bar */}
      <Topbar onHamburgerClick={() => setIsSidebarOpen(true)} />

      {/* Desktop navigation (visible only on large screens) */}
      <div className="hidden lg:flex items-center gap-x-7 mt-[1rem]">
        <DesktopCategory />
      </div>

      {/* Mobile sidebar (visible on smaller screens) */}
      <MobileCategory isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}

export default Navbar
