import React, { useContext } from 'react'
import Link from 'next/link'
import { AdminContexts } from '@/components/providers/AdminContextProvider'
import DivSecondary from '@/components/DivSecondary'
import { SubLink } from './AdminSidebar'
import SublinkIcon from '@/public/icons/sublink.svg'
import { usePathname } from 'next/navigation'

interface Props {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    path: string,
    LinkName: string,
    isActive: Boolean | undefined,
    sublink?: SubLink[] | undefined,
    className?: string
}



function SidebarLink({ Icon, LinkName, isActive, sublink, path, className }: Props) {

    const { sidebar } = useContext(AdminContexts)
    const currentPath = usePathname()


    return (
        <div className='relative group '>
            <Link href={path} className={`${isActive?"":"text-gray-500 "}flex items-center w-full relative p-3 ps-6 hover:bg-slate-900 rounded focus:outline-0 focus:bg-slate-900 ${className}`}>
                <span className={`h-[15px] w-[15px] me-3`}>
                    <Icon className="h-full w-full" />
                </span>
                <p className={`${sidebar ? "" : "hidden"} text-xs capitalize `}>{LinkName}</p>
                {isActive ?
                    <span className='absolute  left-0 h-full w-[5px] bg-slate-100 rounded-r'></span>
                    : ""}
            </Link>
            {sublink ?


                <DivSecondary className={`${isActive ? "d-block" : "hidden"} ${sidebar ? "" : "hidden group-hover:block hover:block absolute left-[70px] top-0 shadow-lg rounded-r w-[170px]"} `}>



                    {sublink.map((links, index) => {

                        return <Link href={`${path}/${links.path}`} key={index} className={`${path}/${links.path} group flex items-center p-3 ${sidebar ? "ps-10" : " p-3"} ${isActive&&(currentPath?.includes(links.path))?"text-white":"text-gray-500"} hover:bg-slate-900 rounded relative text-gray-400 hover:text-gray-100`}>
                            {sidebar ?
                                <span className='h-[12px]  w-[12px]  me-3 '>
                                    <SublinkIcon className="h-full w-full" />
                                </span>
                                : ""}
                            <p className={`${sidebar ? "" : ""} text-xs capitalize`}>{links.linkname}</p>
                        </Link>
                    })}
                </DivSecondary>


                : ""}

        </div>
    )

}

export default SidebarLink
