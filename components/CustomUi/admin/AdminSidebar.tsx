'use client'
import DivSecondary from '@/components/DivSecondary'
import React, { useContext } from 'react'
import logo from '@/public/images/company/logo.png'
import Dashboard from '@/public/icons/frame-2.svg'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import ProfileIcon from '@/public/icons/user-square.svg'
import SmsIcon from '@/public/icons/sms.svg'
import Blog from '@/public/icons/edit.svg'
import WalletIcon from '@/public/icons/wallet-3.svg'
import SettingIcon from '@/public/icons/setting-3.svg'
import { AdminContexts } from '@/components/providers/AdminContextProvider'


function AdminSidebar() {


    const { sidebar } = useContext(AdminContexts)


    return (
        <DivSecondary className={`AdminSidebar  h-full ${sidebar ? "w-[210px]" : "w-[80px]"} shrink-0 lg:flex flex-col hidden`}>
            <div className=' p-2 flex items-center'>
                <div className='h-[40px] w-[40px] me-1'>
                    <Image alt='logo' height={100} width={100} src={logo} />
                </div>
                <h2 className={`font-bold uppercase ${sidebar ? "" : "hidden"}`}>Company Name</h2>
            </div>
            <div className=" py-2 mt-2">
                <h2 className='text-xs font-medium text-gray-400 ps-6'>Menu</h2>
                <div className='mt-2'>
                    <SidebarLink isActive={false} LinkName='dashboard' Icon={Dashboard} />
                    <SidebarLink isActive={true} sublink={[{ linkname: "Create", path: "" }, { linkname: "Edit Post", path: "" }]} LinkName='Post' Icon={Blog} />
                    <SidebarLink isActive={false} LinkName='uses' Icon={ProfileIcon} />
                    <SidebarLink isActive={false} LinkName='Messages' Icon={SmsIcon} />
                </div>
            </div>
            <div className=" py-2 mt-2">
                <h2 className='text-xs font-medium text-gray-400 ps-6'>Others</h2>
                <div className='mt-2'>
                    <SidebarLink isActive={false} LinkName='Wallet' Icon={WalletIcon} />
                    <SidebarLink isActive={false} LinkName='Settings' Icon={SettingIcon} />
                </div>
            </div>
            {sidebar ?
                <div className='mt-auto m-3 p-4 bg-gray-800/60 flex flex-col h-[130px] rounded-lg'>
                    <h1 className='text-center font-semibold'>Become a PRO</h1>
                    <p className='text-center text-gray-300 text-xs mt-1 '>Get More Free</p>
                    <button className='mt-auto bg-purple-500 p-2 rounded text-sm'>Upgrade</button>
                </div>
                : ""}
        </DivSecondary>

    )
}

export default AdminSidebar