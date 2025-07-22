import Navbar from '@/components/modules/navbar/Navbar'
import Topbar from '@/components/modules/topbar/Topbar'
import HeroSection from '@/components/templates/index/herosection/HeroSection'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <header className='container max-w-screen-2xl'>
        <Topbar />
        <Navbar />
        <HeroSection />
      </header>
    </>
  )
}

export default HomePage