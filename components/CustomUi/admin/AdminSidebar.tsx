'use client'
import DivSecondary from '@/components/DivSecondary'
import React from 'react'
import logo from '@/public/images/company/logo.jpg'
import Link from 'next/link'
import Dashboard from '@/public/icons/profile.svg'
import Image from 'next/image'

function AdminSidebar() {
    return (
        <DivSecondary className='AdminSidebar  h-full w-[190px] shrink-0'>
            <div className=' p-2 flex items-center'>
                <div className='h-[40px] w-[40px] me-1'>
                    <Image alt='logo' height={100} width={100} src={logo} />
                </div>
                <h2 className='font-bold'>Company Name</h2>
            </div>
            <div className=" p-2 mt-2">
                <h2 className='text-sm font-medium text-gray-500 px-1'>Menu</h2>
                <div className='mt-2'>
                    <Link href='/' className='flex items-center  p-1 py-2 hover:bg-gray-100 rounded'>
                        <span className='h-[20px] w-[20px] me-1'>
                            <Dashboard className="h-full w-full" />
                        </span>
                        <p className='text-sm font-medium'>Dashboard</p>
                    </Link>
                    <Link href='/' className='flex items-center  p-1 py-2 hover:bg-gray-100 rounded'>
                        <span className='h-[20px] w-[20px] me-1'>
                            <Dashboard className="h-full w-full" />
                        </span>
                        <p className='text-sm '>Users</p>
                    </Link>
                </div>
            </div>
        </DivSecondary>
    )
}

export default AdminSidebar