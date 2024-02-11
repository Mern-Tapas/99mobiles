'use client'
import React from 'react'
import DivPrimary from '@/components/DivPrimary'
import CloseIcon from '@/public/icons/close.svg'
import MenuIcon from '@/public/icons/menu-1.svg'
import AdminDropDown from './AdminDropDown'
import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { AdminContexts } from '@/components/providers/AdminContextProvider'
import { usePathname } from 'next/navigation'


function AdminTopBar() {

    const currentPath = usePathname()

    const { data: session, status } = useSession()
    const { sidebar, handleSidebar } = useContext(AdminContexts)

    return (
        <DivPrimary className='topbar p-2 px-5 sticky top-0 flex h-[50px] items-center z-10'>
            <div className='me-2'>
                <button className='p-1.5 border rounded' onClick={() => { handleSidebar(!sidebar) }}>
                    <div className='h-[20px] w-[20px]' >
                        {sidebar ?
                            <CloseIcon className="h-full w-full text-gray-600 " />
                            :
                            <MenuIcon className="h-full w-full text-gray-600 " />
                        }
                    </div>
                </button>
            </div>
            <div className='me-2'>
                <h1 className='font-semibold text-2xl capitalize'>{(currentPath?.split("/")[2] == null) ? "dashboard" : currentPath.split('/')[2]}</h1>
            </div>
            <div className='ms-auto'>
                {session ?
                    <AdminDropDown />
                    : ""}
            </div>
        </DivPrimary>
    )
}

export default AdminTopBar