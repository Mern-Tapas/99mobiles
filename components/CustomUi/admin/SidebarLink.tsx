import React, { useContext } from 'react'
import Link from 'next/link'
import SublinkIcon from '@/public/icons/sublink.svg'
import { AdminContexts } from '@/components/providers/AdminContextProvider'
import DivSecondary from '@/components/DivSecondary'

interface Props {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    LinkName: string,
    isActive: Boolean,
    sublink?: SubLink[]
}

interface SubLink {
    linkname: string,
    path: string
}

function SidebarLink({ Icon, LinkName, isActive, sublink }: Props) {

    const { sidebar } = useContext(AdminContexts)

    return (
        <div className='relative group'>
            <Link href='/' className='flex items-center relative p-2 ps-6 hover:bg-slate-900 rounded'>
                <span className='h-[17px] w-[17px] me-3'>
                    <Icon className="h-full w-full" />
                </span>
                <p className={`${sidebar ? "" : "hidden"} text-xs capitalize`}>{LinkName}</p>
                {isActive ?
                    <span className='absolute  left-0 h-full w-[5px] bg-slate-100 rounded-r'></span>
                    : ""}
            </Link>
            {sublink ?


                <DivSecondary className={`${isActive ? "d-block" : "hidden"} ${sidebar ? "" : "hidden group-hover:block hover:block absolute left-[85px] top-0 shadow-lg rounded w-[170px]"} `}>
                    {sublink.map((links, index) => {

                        return <Link href='/' key={index} className={`group flex items-center p-2 ${sidebar ? "ps-10" : " p-3"} hover:bg-slate-900 rounded relative text-gray-400 hover:text-gray-100`}>
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
