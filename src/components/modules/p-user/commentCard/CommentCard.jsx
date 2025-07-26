import React from 'react'

function CommentCard({ avatar, name, date, content, status }) {
    const statusMap = {
        published: {
            label: 'منتشر شده',
            className: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
        },
        pending: {
            label: 'در انتظار بررسی',
            className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
        }
    }

    const { label, className } = statusMap[status] || {}

    return (
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm dark:shadow-inner transition hover:shadow-md dark:hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600" />
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
                    </div>
                </div>
                {label && (
                    <span className={`text-xs px-2 py-1 rounded ${className}`}>
                        {label}
                    </span>
                )}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {content}
            </p>

            <div className="flex justify-end mt-4 text-xs">
                <button className="flex items-center gap-1 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition">
                    <i className="fa-solid fa-trash-can text-sm"></i>
                    حذف
                </button>
            </div>
        </div>
    )
}

export default CommentCard
