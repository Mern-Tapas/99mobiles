'use client'
import React from 'react'
import DivPrimary from '@/components/DivPrimary'
import Close from '@/public/icons/close.svg'
import AdminDropDown from './AdminDropDown'
import { useSession } from 'next-auth/react'


function AdminTopBar() {

    const { data: session, status } = useSession()


    return (
        <DivPrimary className='topbar p-2 sticky top-0 flex h-[60px] justify-between items-center'>
            <div>
                <button className='p-1.5 border rounded'>
                    <div className='h-[20px] w-[20px] me-auto'>
                        <Close className="h-full w-full text-gray-600 rotate-180" />
                    </div>
                </button>
            </div>
            <div>
                {session ?
                    <AdminDropDown />
                    : ""}
            </div>
        </DivPrimary>
    )
}

export default AdminTopBar