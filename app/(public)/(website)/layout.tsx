import React, { useEffect, useState } from 'react'
import Header from '@/components/CustomUi/landingPage/Header'
import HeaderLinks from '@/components/CustomUi/landingPage/HeaderLinks'
import Footer from '@/components/CustomUi/landingPage/Footer'

function layout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
                <div className="shadow-[0px_10px_37.3px_0px_rgba(0, 0, 0, 0.06)] sticky top-0 z-10">
                    <Header className="border-b" />
                    <HeaderLinks />
                </div>

                <div className='py-8 min-h-screen'>
                    {children}
                </div>
                <div>
                    <Footer />
                </div>
            </div >

        </>
    )
}

export default layout