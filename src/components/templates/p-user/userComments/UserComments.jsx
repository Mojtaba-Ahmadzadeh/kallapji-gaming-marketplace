import React from 'react'
import SidebarUser from '../sidebarUser/SidebarUser'
import HeaderUser from '../headerUser/HeaderUser'
import CommentCard from '@/components/modules/p-user/commentCard/CommentCard'

function UserComments() {

    const comments = [
        {
            avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=user1",
            name: "نام کاربر",
            date: "۱۴۰۴/۰۳/۰۵",
            content: "این محصول واقعاً عالی بود! کیفیت اکانت بالا بود و تحویل به موقع انجام شد.",
            status: "published"
        },
        {
            avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
            name: "نام کاربر",
            date: "۱۴۰۴/۰۲/۲۷",
            content: "هنوز محصول به دستم نرسیده، لطفاً بررسی کنید که چه زمانی ارسال می‌شه.",
            status: "pending"
        }
    ]

    return (
        <div className='flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <SidebarUser />
            <div className="bg-white dark:bg-gray-800 flex-1 flex flex-col">
                <HeaderUser />
                <main class="flex-1 overflow-auto p-6 space-y-8 bg-gray-100 dark:bg-gray-900">
                    <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6 space-y-6 max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                        <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 border-b pb-2 border-gray-300 dark:border-gray-600">
                            <i class="fa-solid fa-comments text-yellow-400"></i>
                            نظرات شما
                        </h2>

                        <div class="space-y-4">
                            {
                                comments.map((comment, index) => (
                                    <CommentCard key={index} {...comment} />
                                ))
                            }
                        </div>
                    </section>

                </main>
            </div>
        </div>
    )
}

export default UserComments