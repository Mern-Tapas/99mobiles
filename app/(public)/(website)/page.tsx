import MaxWScreenXl from '@/components/MaxWScreenXl'
import React from 'react'

function page() {
  return (
   <div>
    <MaxWScreenXl className='mt-2'>
      <h1 className='font-medium text-xl mb-3'>Recent Updated</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        
        <div className="grid-child h-[220px] bg-white transition cursor-pointer"></div>
        <div className="grid-child h-[220px] bg-white"></div>
        <div className="grid-child h-[220px] bg-white"></div>
        <div className="grid-child h-[220px] bg-white"></div>
        <div className="grid-child h-[220px] bg-white"></div>

      </div>
    </MaxWScreenXl>
   </div>
  )
}

export default page