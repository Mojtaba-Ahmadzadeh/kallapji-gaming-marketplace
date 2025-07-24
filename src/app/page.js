import CallOfDutySection from '@/components/templates/index/CallOfDutySection/CallOfDutySection'
import Chanels from '@/components/templates/index/chanels/Chanels'
import ClashProductSection from '@/components/templates/index/clashProductSection/ClashProductSection'
import CustomerComments from '@/components/templates/index/customerComments/CustomerComments'
import FeaturedAccountsSection from '@/components/templates/index/FeaturedAccountsSection/FeaturedAccountsSection'
import GiftCards from '@/components/templates/index/giftCards/GiftCards'
import HeroSection from '@/components/templates/index/herosection/HeroSection'
import PubgProductSection from '@/components/templates/index/PubgProductSection/PubgProductSection'
import Pupular from '@/components/templates/index/pupular/Pupular'
import TelegramProduct from '@/components/templates/index/telegramProduct/TelegramProduct'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <main className='container max-w-screen-2xl'>
        <HeroSection />
        <Pupular />
        <CallOfDutySection />
        <PubgProductSection />
        <FeaturedAccountsSection />
        <Chanels />
        <ClashProductSection />
        <TelegramProduct />
        <GiftCards />
        <CustomerComments />
      </main>
    </>
  )
}

export default HomePage