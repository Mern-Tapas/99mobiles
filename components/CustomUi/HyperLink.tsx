
import React from 'react'
import Link from 'next/link'

interface Props {
    link: string,
    linkName: string,
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    className?: string,
    IconSize:number

}

function HyperLink({ link, linkName, Icon, className, IconSize }: Props) {
    return (
        <Link href={link} className={`flex items-center ${className}`}>
            {Icon ?
                <div className={`h-[22px] w-[22px]`}>
                    <Icon className="h-full w-full" />
                </div>
                : ""}
            <span className='ms-2 capitalize text-xs'>{linkName}</span>
        </Link>
    )
}

export default HyperLink