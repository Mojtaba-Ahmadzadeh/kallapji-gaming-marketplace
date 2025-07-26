import React from "react";

function OrderCard({ id, status, date, price }) {
    const statusMap = {
        processing: {
            label: "در حال پردازش",
            class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
        },
        delivered: {
            label: "تحویل شده",
            class: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
        },
        canceled: {
            label: "لغو شده",
            class: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
        },
    };

    const { label, class: badgeClass } = statusMap[status] || {
        label: 'نامشخص',
        class: 'bg-gray-200 text-gray-800'
    };

    return (
        <div
            data-status={status}
            className="order-box bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 transition"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    سفارش #{id}
                </h2>
                <span className={`px-3 py-1 text-sm rounded-full ${badgeClass}`}>
                    {label}
                </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="space-y-1">
                    <p>تاریخ سفارش: {date}</p>
                    <p>مبلغ: {price}</p>
                </div>
                <button className="mt-2 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    مشاهده جزئیات
                </button>
            </div>
        </div>
    );
}

export default OrderCard;
