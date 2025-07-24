import React from 'react'
import CallOfDutySection from './CallOfDutySection'
import PubgSection from './PubgSection'
import ClashOfClansSection from './ClashOfClansSection'

function FeaturedAccountsSection() {
    return (
        <div className='mt-16'>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                🎮 اکانت های منتخب برای گیمرها
            </h2>
            <CallOfDutySection />
            <PubgSection />
            <ClashOfClansSection />
        </div>
    )
}

export default FeaturedAccountsSection