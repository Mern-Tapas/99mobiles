'use client'
import DivSecondary from '@/components/DivSecondary'
import React from 'react'
import logo from '@/public/images/company/logo.jpg'
import Link from 'next/link'
import Dashboard from '@/public/icons/frame-2.svg'
import Users from '@/public/icons/profile.svg'
import Image from 'next/image'

function AdminSidebar() {
    return (
        <DivSecondary className='AdminSidebar  h-full w-[200px] shrink-0'>
            <div className=' p-2 flex items-center'>
                <div className='h-[40px] w-[40px] me-1'>
                    <Image alt='logo' height={100} width={100} src={logo} />
                </div>
                <h2 className='font-bold'>Company Name</h2>
            </div>
            <div className=" py-2 mt-2">
                <h2 className='text-xs font-medium text-gray-300 ps-6'>Menu</h2>
                <div className='mt-2'>
                    <Link href='/' className='flex items-center  p-2 ps-6 hover:bg-slate-900 rounded relative text-slate-400'>
                        <span className='h-[17px] w-[17px] me-3'>
                            <Dashboard className="h-full w-full" />
                        </span>
                        <p className='text-sm '>Dashboard</p>
                    </Link>
                    <Link href='/' className='flex items-center  p-2 ps-6 hover:bg-slate-900 rounded relative'>
                        <span className='h-[17px] w-[17px] me-3'>
                            <Users className="h-full w-full" />
                        </span>
                        <p className='text-sm '>Users</p>
                        <span className='absolute  left-0 h-full w-[5px] bg-slate-100 rounded-r'></span>
                    </Link>
                </div>
            </div>
        </DivSecondary>
    )
}

export default AdminSidebar