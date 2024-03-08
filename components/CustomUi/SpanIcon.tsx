import React from 'react'

interface Props {
    link: string,
    linkName: string,
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    className?: string,
    IconSize:number

}

function SpanIcon({ link, linkName, Icon, className, IconSize }: Props) {
    return (
        <span  className={`flex items-center ${className}`}>
            {Icon ?
                <div className={`h-[${IconSize}px] w-[${IconSize}px]`}>
                    <Icon className="h-full w-full" />
                </div>
                : ""}
            <span className='ms-2 capitalize text-xs'>{linkName}</span>
        </span>
    )
}

export default SpanIcon