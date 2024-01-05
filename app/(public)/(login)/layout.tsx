'use client'
import React from 'react'
import Header from '@/components/CustomUi/landingPage/Header'

function layout({ children }: { children: React.ReactNode }) {

    return (
        <div className='min-h-screen  bg-[#f9f9ff] dark:bg-gray-900'>
            <Header className="sticky top-0 z-10" />
            <div className='flex min-h-full lg:min-h-[calc(100vh-60px)] py-2'>
                {children}
            </div>
        </div >
    )
}

export default layout