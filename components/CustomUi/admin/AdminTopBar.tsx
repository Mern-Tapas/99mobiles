import React from 'react'
import DivPrimary from '@/components/DivPrimary'
import Close from '@/public/icons/close.svg'


function AdminTopBar() {
    return (
        <DivPrimary className='topbar p-2 sticky top-0'>
            <button className='p-2 border rounded'>
                <div className='h-[24px] w-[24px] me-auto'>
                    <Close className="h-full w-full text-gray-600" />
                </div>
            </button>
        </DivPrimary>
    )
}

export default AdminTopBar