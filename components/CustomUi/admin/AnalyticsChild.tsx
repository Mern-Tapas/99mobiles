'use client'
import React from 'react'

interface Props{
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    Name:string,
    Count:number  

}

function AnalyticsChild({Icon,Name,Count}:Props) {
    return (
        <div className='h-[130px] bg-white rounded-md bg-gray-50 p-4 relative'>
            <h4 className='mb-2 font-bold text-gray-500 text-xs'>{Name}</h4>
            <h4 className='mb-1 text-4xl font-extrabold'>{Count}</h4>
            <div className='h-[70px] w-[140px] flex absolute bottom-2 right-0'>

                <Icon className='h-full ms-auto text-[#a427d0]/50' />
            </div>
        </div>
    )
}

export default AnalyticsChild