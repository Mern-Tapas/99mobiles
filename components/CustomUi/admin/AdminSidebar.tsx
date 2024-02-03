'use client'
import DivSecondary from '@/components/DivSecondary'
import React from 'react'
import logo from '@/public/images/company/logo.png'
import Dashboard from '@/public/icons/frame-2.svg'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import ProfileIcon from '@/public/icons/user-square.svg'
import SmsIcon from '@/public/icons/sms.svg'
import Blog from '@/public/icons/edit.svg'
import WalletIcon from '@/public/icons/wallet-3.svg'
import SettingIcon from '@/public/icons/setting-3.svg'


function AdminSidebar() {
    return (
        <DivSecondary className='AdminSidebar  h-full w-[210px] shrink-0'>
            <div className=' p-2 flex items-center'>
                <div className='h-[40px] w-[40px] me-1'>
                    <Image alt='logo' height={100} width={100} src={logo} />
                </div>
                <h2 className='font-bold'>Company Name</h2>
            </div>
            <div className=" py-2 mt-2">
                <h2 className='text-xs font-medium text-gray-300 ps-6'>Menu</h2>
                <div className='mt-2'>
                    <SidebarLink sublink={[{ linkname: "sub links", path: "" }, { linkname: "sub links", path: "" }, { linkname: "sub links", path: "" }]} isActive={true} LinkName='dashboard' Icon={Dashboard} />
                    <SidebarLink isActive={false} LinkName='Post' Icon={Blog} />
                    <SidebarLink isActive={false} LinkName='profile' Icon={ProfileIcon} />
                    <SidebarLink isActive={false} LinkName='Messages' Icon={SmsIcon} />
                    <SidebarLink isActive={false} LinkName='Wallet' Icon={WalletIcon} />
                    <SidebarLink isActive={false} LinkName='Settings' Icon={SettingIcon} />
                </div>  
            </div>
        </DivSecondary>
    )
}

export default AdminSidebar