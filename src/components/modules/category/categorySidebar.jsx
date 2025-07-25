import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function CategorySidebar() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleMenu = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const categories = [
        {
            title: 'محصولات بازی ها',
            icon: 'fa-gamepad text-blue-400',
            items: [
                { title: 'کالاف دیوتی CP', href: '#' },
                { title: 'پابجی UC', href: '#' },
                { title: 'کلش آف کلنز', href: '#' },
            ],
        },
        {
            title: 'اکانت های بازی',
            icon: 'fa-crosshairs text-red-400',
            items: [
                { title: 'اکانت‌ کالاف دیوتی', href: '#' },
                { title: 'اکانت پابجی موبایل', href: '#' },
                { title: 'اکانت کلش آف کلنز', href: '#' },
            ],
        },
    ];

    return (
        <div className="bg-white dark:bg-[#1A1F36] border rounded-xl p-5 shadow-sm">
            <h3>دسته‌بندی‌ها</h3>
            <ul className='transition-all'>
                {categories.map((category, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <li key={index}>
                            <button onClick={() => toggleMenu(index)} aria-expanded={isOpen}>
                                {category.title}
                                <FontAwesomeIcon icon={faChevronDown} className={`w-3 h-3 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div style={{ display: isOpen ? 'block' : 'none', paddingLeft: '1.5rem' }}>
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx}><a href={item.href}>{item.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>

    );
}

export default CategorySidebar;
