'use client'
import React from 'react'
import Header from '@/components/CustomUi/landingPage/Header'

function layout({ children }: { children: React.ReactNode }) {

    return (
        <div className='min-h-screen bg-[#f9f9ff] dark:bg-gray-900'>
            <Header className="sticky top-0" />
            <div className='bg-pink-100'>
                {children}
            </div>
        </div >
    )
}

export default layout