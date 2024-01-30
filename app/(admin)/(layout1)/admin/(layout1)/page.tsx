import DivPrimary from '@/components/DivPrimary'
import React from 'react'

function page() {
  return (
    <div className='flex'>
      <div className='p-2'>
        <input type="text" placeholder='Search Chat' className=' focus:outline-0 px-6 ps-8 p-3 bg-white w-[240px] rounded-full' />
      </div>

    </div>
  )
}

export default page