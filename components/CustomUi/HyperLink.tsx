import React from 'react'
import Link from 'next/link'

interface Props {
    link: string,
    linkName: string,
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    className?:string

}

function HyperLink({ link, linkName, Icon }: Props) {
    return (
        <Link href={'latest'} className='flex items-center text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm'>
            {Icon ?
                <div className='h-[22px] w-[22px]'>
                    <Icon className="h-full w-full" />
                </div>
                : ""}
            <span className='ms-2 capitalize text-xs'>{linkName}</span>
        </Link>
    )
}

export default HyperLink