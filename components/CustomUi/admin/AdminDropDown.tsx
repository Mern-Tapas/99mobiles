'use client'
import React from 'react'
import Image from 'next/image'
import DivPrimary from '@/components/DivPrimary'
import { signOut } from 'next-auth/react'
import LogoutIcon from '@/public/icons/logout-1.svg'
import ProfileIcon from '@/public/icons/profile.svg'
import HeartIcon from '@/public/icons/heart.svg'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import NotificationIcon from '@/public/icons/notification.svg'
import MessageIcon from '@/public/icons/message.svg'
import DashboardIcon from '@/public/icons/frame-2.svg'
import ArrowDownIcon from '@/public/icons/arrow-down.svg'
import MenuButton from '../MenuButton'


function AdminDropDown() {
    const { data: session, status } = useSession()
    return (
        <div className='flex items-center '>


            <button className='ms-2 text-xs bg-white flex items-center rounded-full border group'>
                <div className='h-[37px] w-[37px] p-1  rounded-full '>
                    <div className="h-full w-full flex items-center justify-center rounded-full box overflow-hidden">
                        <NotificationIcon className='h-4 w-4 text-slate-500' />
                    </div>
                </div>
            </button>

            <button className='ms-2 text-xs bg-white flex items-center rounded-full border group'>
                <div className='h-[37px] w-[37px] p-1  rounded-full '>
                    <div className="h-full w-full flex items-center justify-center rounded-full box overflow-hidden">
                        <MessageIcon className='h-4 w-4 text-slate-500' />

                    </div>
                </div>
            </button>


            <MenuButton />

        </div>

    )
}


export default AdminDropDown
