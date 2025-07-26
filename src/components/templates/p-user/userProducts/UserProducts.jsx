'use client'
import React, { useState } from 'react';
import SidebarUser from '../sidebarUser/SidebarUser';
import HeaderUser from '../headerUser/HeaderUser';
import OrderCard from '@/components/modules/p-user/orderCard/OrderCard';

function UserProducts() {

    const [filter, setFilter] = useState('all')

    const handleFilterChange = (status) => {
        setFilter(status)
    }

    const orders = [
        { id: "12345", status: "processing", date: "1403/05/01", price: "250,000 تومان" },
        { id: "12346", status: "delivered", date: "1403/05/02", price: "180,000 تومان" },
        { id: "12347", status: "canceled", date: "1403/05/03", price: "320,000 تومان" },
        { id: "12348", status: "processing", date: "1403/05/04", price: "99,000 تومان" },
        { id: "12349", status: "delivered", date: "1403/05/05", price: "1,000,000 تومان" },
    ];

    const filteredOrders = filter === 'all'
        ? orders
        : orders.filter(order => order.status === filter);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <SidebarUser />
            <div className="bg-white dark:bg-gray-800 flex-1 flex flex-col">
                <HeaderUser />
                <main className="flex-1 overflow-auto p-6 space-y-8 bg-gray-100 dark:bg-gray-900">
                    <div className="space-y-8">
                        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">سفارشات من</h1>

                        {/* فیلترها */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            <button onClick={() => handleFilterChange('all')} data-filter="all" className="filter-btn px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">همه</button>
                            <button onClick={() => handleFilterChange('processing')} data-filter="processing" className="filter-btn px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800 dark:text-yellow-100 dark:hover:bg-yellow-700 transition">در حال پردازش</button>
                            <button onClick={() => handleFilterChange('delivered')} data-filter="delivered" className="filter-btn px-4 py-2 rounded-full bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700 transition">تحویل شده</button>
                            <button onClick={() => handleFilterChange('canceled')} data-filter="canceled" className="filter-btn px-4 py-2 rounded-full bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-700 transition">لغو شده</button>
                        </div>

                        {/* سفارش نمونه - تکراری */}
                        {filteredOrders.map(order => (
                            <OrderCard
                                key={order.id}
                                id={order.id}
                                status={order.status}
                                date={order.date}
                                price={order.price}
                            />
                        ))}

                        <div id="ordersContainer" className="space-y-6"></div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserProducts;
