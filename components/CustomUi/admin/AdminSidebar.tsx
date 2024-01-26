import DivSecondary from '@/components/DivSecondary'
import React from 'react'
import { Button } from "@/components/ui/button"


function AdminSidebar() {
    return (
        <DivSecondary className='AdminSidebar  h-full w-[190px] shrink-0'>
            <div className='border p-2 flex items-center'>
                <div className='h-[30px] w-[30px] border me-2'>

                </div>
                <h2 className='font-bold'>Company Name</h2>
            </div>
            <div className="border p-2 mt-2">

            </div>
        </DivSecondary>
    )
}

export default AdminSidebar