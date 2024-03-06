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
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react'

import ArrowDownIcon from '@/public/icons/arrow-down.svg'


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

            <button className='ms-2 text-xs bg-whiDte flex items-center rounded-full border group relative'>
                <div className='h-[37px] w-[37px] p-1  rounded-full '>
                    <div className="h-full w-full border rounded-full box overflow-hidden">
                        {session?.user?.image ?
                            <Image alt='profile image' className='h-full w-full' src={session?.user?.image || ""} height={200} width={200} />
                            : ""
                        }
                    </div>
                </div>
                <div className='lg:block hidden my-auto flex flex-col'>
                    <p className='text-start capitalize text-[10px] '>{session?.user?.name}</p>
                    <p className='text-start capitalize text-[9px]'>{session?.user?.email}</p>

                </div>
                <div className='lg:block hidden h-[37px] w-[37px] p-1  rounded-full '>
                    <div className="h-full w-full  rounded-full box flex items-center justify-center">
                        <ArrowDownIcon className='h-4 w-4 text-slate-500' />

                    </div>
                </div>

                <div className='group-hover:opacity-100 transition-all group-hover:pointer-events-auto pointer-events-none group-hover:top-10  group opacity-0  right-0 top-9 duration-75 z-20  absolute'>
                    <DivPrimary className='w-[210px] p-1 rounded mt-4 shadow-lg'>
                        <Link className='capitalize p-3 block w-full text-xs rounded mb-1 hover:bg-gray-50 text-left flex' href={"user"}>
                            <div className='h-[16px] w-[16px] '>
                                <DashboardIcon className="h-full w-full" />
                            </div>
                            <span className='ms-3'>dashboard</span>
                        </Link>
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
                        <div className='text-xs flex p-3 w-full rounded bg-red-600 text-white hover:bg-red-700 text-left' onClick={() => { signOut() }}>
                            <div className='h-[16px] w-[16px] '>
                                <LogoutIcon className="h-full w-full" />
                            </div>
                            <span className='ms-3'>Logout</span>
                        </div>
                    </DivPrimary>
                </div>

            </button>

            <Menu >
                <MenuButton className='ms-2 text-xs bg-whiDte  rounded-full border group' as={Button} >
                    <div className='flex items-center'>
                        <div className='h-[37px] w-[37px] p-1  rounded-full '>
                            <div className="h-full w-full border rounded-full box overflow-hidden">
                                {session?.user?.image ?
                                    <Image alt='profile image' className='h-full w-full' src={session?.user?.image || ""} height={200} width={200} />
                                    : ""
                                }
                            </div>
                        </div>
                        <div className='lg:block hidden h-[37px] w-[37px] p-1  rounded-full '>
                            <div className="h-full w-full  rounded-full box flex items-center justify-center">
                                <ArrowDownIcon className='h-4 w-4 text-slate-500' />

                            </div>
                        </div>
                    </div>


                </MenuButton>
                <MenuList className='w-[210px] p-1 rounded mt-4 bg-white'>
                    <MenuItem>
                        <Link className='capitalize p-3 block w-full text-xs rounded mb-1 hover:bg-gray-50 text-left flex' href={"user"}>
                            <div className='h-[16px] w-[16px] '>
                                <DashboardIcon className="h-full w-full" />
                            </div>
                            <span className='ms-3'>dashboard</span>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className='capitalize p-3 block w-full text-xs rounded mb-1 hover:bg-gray-50 text-left flex' href={"profile"}>
                            <div className='h-[16px] w-[16px] '>
                                <ProfileIcon className="h-full w-full" />
                            </div>
                            <span className='ms-3'>profile</span>
                        </Link>
                    </MenuItem>

                    <MenuItem>
                    <Link className='capitalize p-3 block w-full text-xs rounded mb-1 hover:bg-gray-50 text-left flex' href={"profile"}>
                        <div className='h-[16px] w-[16px] '>
                            <HeartIcon className="h-full w-full" />
                        </div>
                        <span className='ms-3'>Saved</span>
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <div className='text-xs flex p-3 w-full rounded bg-red-600 text-white hover:bg-red-700 text-left' onClick={() => { signOut() }}>
                        <div className='h-[16px] w-[16px] '>
                            <LogoutIcon className="h-full w-full" />
                        </div>
                        <span className='ms-3'>Logout</span>
                    </div>
                    </MenuItem>

                </MenuList>
            </Menu>

        </div>

    )
}


export default AdminDropDown
