import React from 'react';
import CallOfDutySection from './CallOfDutySection';
import PubgSection from './PubgSection';
import ClashOfClansSection from './ClashOfClansSection';

function FeaturedAccountsSection() {
    return (
        <div className='mt-16'>
            {/* Section heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                🎮 اکانت های منتخب برای گیمرها
            </h2>

            {/* Featured accounts sections for each game */}
            <CallOfDutySection />
            <PubgSection />
            <ClashOfClansSection />
        </div>
    );
}

export default FeaturedAccountsSection;
