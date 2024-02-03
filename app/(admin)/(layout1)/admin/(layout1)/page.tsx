import DivPrimary from '@/components/DivPrimary'
import React from 'react'

function page() {
  return (
    <div className=''>
      <div className='mt-4'>
        <input type="text" placeholder='Search Chat' className=' focus:outline-0 px-6 ps-8 p-1 py-3 text-sm bg-white w-[200px] rounded-full' />
      </div>

      <div className="mt-4">
        <DivPrimary className='rounded'>
          <div className='border p-2'>

          </div>
          <div className='p-2'>

          </div>
        </DivPrimary>
      </div>

    </div>
  )
}

export default page