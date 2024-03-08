import React from 'react'
import UsersIcon from '@/public/icons/users.svg'


function AnalyticsChild() {
    return (
        <div className='h-[130px] bg-white rounded-md bg-gray-50 p-4 relative'>
            <h4 className='mb-2 font-bold text-gray-500 text-sm'>Members onsite</h4>
            <h4 className='mb-1 text-4xl font-extrabold'>45</h4>
            <div className='h-[70px] w-[140px] flex absolute bottom-0 right-0'>

                <UsersIcon className='h-full ms-auto text-[#a427d0]/50' />
            </div>
        </div>
    )
}

export default AnalyticsChild