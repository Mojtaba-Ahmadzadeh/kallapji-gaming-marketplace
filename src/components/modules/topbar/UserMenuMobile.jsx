import React from 'react'

function UserMenuMobile() {
    return (
        <div className="relative block lg:hidden" id="user-menu-container">
            {/* User icon button, visible only on mobile */}
            <a href="#" id="user-menu-toggle" className="shop-icon relative text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-7 lg:h-7" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" stroke="url(#gold-gradient)">
                    <defs>
                        <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FFD700"></stop>
                            <stop offset="100%" stopColor="#B8860B"></stop>
                        </linearGradient>
                    </defs>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M5.5 21c0-4.142 13-4.142 13 0"></path>
                </svg>
            </a>

            {/* Dropdown menu - initially hidden, shown on hover or toggle */}
            <div id="user-menu-mobile" className="absolute top-10 right-[-9rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-5 rounded-lg w-56 z-50 transition-all text-slate-900 dark:text-white shadow-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-400/40 dark:ring-yellow-500/40 border border-yellow-300/30 dark:border-yellow-400/10">

                {/* Background gradient layer */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100/70 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#2b2b2b]/80 dark:to-[#facc15]/25 p-5 w-56  transition-all text-slate-900 dark:text-white shadow-lg dark:shadow-[0_4px_30px_rgba(250,204,21,0.4)] backdrop-blur-lg ring-1 ring-yellow-400/40 dark:ring-yellow-500/40 border border-yellow-300/30 dark:border-yellow-400/10">
                </div>

                {/* User info and navigation links */}
                <div className="relative z-10">
                    {/* User avatar and name */}
                    <div className="flex items-center gap-3 border-b border-yellow-400/40 pb-3 mb-3">
                        <img src="https://secure.gravatar.com/avatar/221d58ad75e354575e6ded2ee3a6e1a2?s=96&amp;d=mm&amp;r=g" alt="User Name" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                        <div className="text-lg font-gamer tracking-tight antialiased"><span>User Name</span></div>
                    </div>

                    {/* User menu links */}
                    <ul className="text-sm space-y-3 font-gamer antialiased">
                        <li><a href="/pages/p-user.html" className="flex items-center gap-x-2 text-lg hover:text-yellow-600 dark:hover:text-yellow-300 transition-all"><i className="fas fa-gauge"></i><span>Dashboard</span></a></li>
                        <li><a href="/pages/orders.html" className="flex items-center gap-x-2 text-lg hover:text-yellow-600 dark:hover:text-yellow-300 transition-all"><i className="fas fa-shopping-cart"></i><span>Orders</span></a></li>
                        <li><a href="/pages/tickets.html" className="flex items-center gap-x-2 text-lg hover:text-yellow-600 dark:hover:text-yellow-300 transition-all"><i className="fas fa-ticket-alt"></i><span>Tickets</span></a></li>
                        <li><a href="/pages/comments.html" className="flex items-center gap-x-2 text-lg hover:text-yellow-600 dark:hover:text-yellow-300 transition-all"><i className="fas fa-comments"></i><span>Comments</span></a></li>
                        <li><a href="/pages/favorites.html" className="flex items-center gap-x-2 text-lg hover:text-yellow-600 dark:hover:text-yellow-300 transition-all"><i className="fas fa-heart"></i><span>Favorites</span></a></li>
                        <li><a href="/pages/p-user.html" className="flex items-center gap-x-2 text-lg hover:text-yellow-600 dark:hover:text-yellow-300 transition-all"><i className="fas fa-user-cog"></i><span>Account Details</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserMenuMobile
