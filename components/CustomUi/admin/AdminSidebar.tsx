'use client'
import DivSecondary from '@/components/DivSecondary'
import React, { useContext } from 'react'
import logo from '@/public/images/company/logo.png'
import Dashboard from '@/public/icons/frame-2.svg'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { AdminContexts } from '@/components/providers/AdminContextProvider'
import BlogIcon from '@/public/icons/edit.svg'
import { usePathname } from 'next/navigation'
import UserIcon from '@/public/icons/profile.svg'



export interface SubLink {
    linkname: string,
    path: string
}

function AdminSidebar() {


    const currentPath = usePathname()

    interface SidebarLink {
        linkname: string,
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
        path: string,
        sublinks?: SubLink[]
    }

    const { sidebar } = useContext(AdminContexts)


    const sidebarlinks: SidebarLink[] = [
        {
            linkname: "Post",
            Icon: BlogIcon,
            path: "/post",
            sublinks: [
                {
                    linkname: "Create",
                    path: "/create",
                },
                {
                    linkname: "Update",
                    path: "/dashboard",
                },
                {
                    linkname: "Update",
                    path: "/dashboard",
                },
            ]
        },
        {
            linkname: "User",
            Icon: UserIcon,
            path: "/user",
            sublinks: [
                {
                    linkname: "Create",
                    path: "/dashboard",
                },
                {
                    linkname: "Update",
                    path: "/dashboard",
                },
                {
                    linkname: "Update",
                    path: "/dashboard",
                },
                {
                    linkname: "Update",
                    path: "/dashboard",
                },
            ]
        },
    ]


    const checkpath = (linkname: string) => {

        if (currentPath?.includes(linkname)) {
            return true
        }

    }


    return (
        <DivSecondary className={`AdminSidebar  h-full ${sidebar ? "w-[210px]" : "w-[80px]"} shrink-0 lg:flex flex-col hidden z-10`}>
            <div className=' p-2 flex items-center'>
                <div className='h-[40px] w-[40px] me-1 '>
                    <Image alt='logo' height={100} width={100} src={logo} />
                </div>
                <h2 className={`font-bold uppercase ${sidebar ? "" : "hidden"}`}>Company Name</h2>
            </div>
            <div className=" py-2 mt-2">
                <h2 className='text-xs font-medium text-gray-400 ps-6'>Menu</h2>
                <div className='mt-2'>
                    {/* <SidebarLink isActive={false} LinkName='dashboard' Icon={Dashboard} />
                    <SidebarLink isActive={true} sublink={[{ linkname: "Create", path: "" }, { linkname: "Edit Post", path: "" }]} LinkName='Post' Icon={Blog} />
                    <SidebarLink isActive={false} LinkName='uses' Icon={ProfileIcon} />
                    <SidebarLink isActive={false} LinkName='Messages' Icon={SmsIcon} /> */}
                    <SidebarLink path={`/admin`} isActive={(currentPath == '/admin') ? true : false} LinkName='Dashboard' Icon={Dashboard} />
                    {sidebarlinks.map((link, index) => {
                        return <SidebarLink path={`/admin${link.path}`} key={index} isActive={checkpath(link.path)} LinkName={link.linkname} sublink={link.sublinks} Icon={link.Icon} />
                    })}
                </div>
            </div>
            <div className=" py-2 mt-2">
                <h2 className='text-xs font-medium text-gray-400 ps-6'>Others</h2>
                <div className='mt-2'>
                    {/* <SidebarLink isActive={false} LinkName='Wallet' Icon={WalletIcon} />
                    <SidebarLink isActive={false} LinkName='Settings' Icon={SettingIcon} /> */}
                </div>
            </div>

        </DivSecondary>

    )
}

export default AdminSidebar