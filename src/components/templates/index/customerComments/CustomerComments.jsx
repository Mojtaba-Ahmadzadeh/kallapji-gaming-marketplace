import CustomerComment from '@/components/modules/customerComment/CustomerComment'
import React from 'react'

function CustomerComments() {
    return (
        <>
            <div className="mb-7">
                <h3 className="text-center text-[20px] md:text-3xl font-semibold tracking-tighter text-black dark:text-white">
                    نظرات مشتریان کالاپجی گیم</h3>
            </div>
            
            <CustomerComment/>
        </>
    )
}

export default CustomerComments