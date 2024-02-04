import React from 'react'
import Link from 'next/link'
import SublinkIcon from '@/public/icons/sublink.svg'

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
    return (
        <div className=''>
            <Link href='/' className='flex items-center relative p-2 ps-6 hover:bg-slate-900 rounded'>
                <span className='h-[17px] w-[17px] me-3'>
                    <Icon className="h-full w-full" />
                </span>
                <p className='text-xs capitalize'>{LinkName}</p>
                {isActive ?
                    <span className='absolute  left-0 h-full w-[5px] bg-slate-100 rounded-r'></span>
                    : ""}
            </Link>
            {sublink ?
                <div className={isActive ? "d-block" : "hidden"}>
                    {sublink.map((links, index) => {

                        return <Link href='/' key={index} className='group flex items-center p-2 ps-10 hover:bg-slate-900 rounded relative text-gray-400 hover:text-gray-100'>
                            <span className='h-[12px]  w-[12px]  me-3 '>
                                <SublinkIcon className="h-full w-full" />
                            </span>
                            <p className='text-xs capitalize group-hover:translate-x-1 transition-all'>{links.linkname}</p>
                        </Link>
                    })}
                </div>
                : ""}

        </div>
    )

}

export default SidebarLink
