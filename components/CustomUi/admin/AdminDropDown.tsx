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


function AdminDropDown() {
    const { data: session, status } = useSession()
    return (
        <div className='flex items-center rounded-full'>
            <button className="group object-cover rounded-full relative me-2 hover:bg-slate-100">
                <div className="imagebox h-[35px] w-[35px] rounded-full overflow-hidden p-1.5 border">
                    <NotificationIcon className='h-full w-full text-slate-500' />
                </div>
            </button>
            <button className="group object-cover rounded-full relative me-2 hover:bg-slate-100">
                <div className="imagebox h-[35px] w-[35px] rounded-full overflow-hidden p-1.5 border">
                    <NotificationIcon className='h-full w-full text-slate-500' />
                </div>
            </button>
            <button className="group object-cover rounded-full relative w-[130px] border flex p">
                <div className="imagebox h-[35px] w-[35px] rounded-full overflow-hidden ms-auto">
                    {session?.user?.image ?
                        <Image alt='profile image' className='h-full w-full' src={session?.user?.image || ""} height={200} width={200} />
                        : ""
                    }
                </div>
                <div className='group-hover:block group hidden  right-0 top-0 z-20  absolute'>
                    <DivPrimary className='w-[210px] p-1 rounded mt-12 shadow-lg'>
                        <Link className='capitalize p-3 block w-full text-xs rounded mb-1 hover:bg-gray-50 text-left flex' href={"profile"}>
                            <div className='h-[16px] w-[16px] '>
                                <ProfileIcon className="h-full w-full" />
                            </div>
                            <span className='ms-3'>profile</span>
                        </Link>
                        <Link className='capitalize p-3 block w-full text-xs rounded mb-1 hover:bg-gray-50 text-left flex' href={"profile"}>
                            <div className='h-[16px] w-[16px] '>
                                <HeartIcon className="h-full w-full" />
                            </div>
                            <span className='ms-3'>Saved</span>
                        </Link>
                        <button className='text-xs flex p-3 w-full rounded bg-red-600 text-white hover:bg-red-700 text-left' onClick={() => { signOut() }}>
                            <div className='h-[16px] w-[16px] '>
                                <LogoutIcon className="h-full w-full" />
                            </div>
                            <span className='ms-3'>Logout</span>
                        </button>
                    </DivPrimary>
                </div>

            </button>
        </div>

    )
}


export default AdminDropDown
