import DivPrimary from '@/components/DivPrimary'
import React from 'react'

function page() {
  return (
    <div className='grid gap-2 grid-cols-3'>
      <DivPrimary className='col-span-2 p-3 rounded-md'>
        d
      </DivPrimary>
      <DivPrimary className='col-span-1'>
        d
      </DivPrimary>

    </div>
  )
}

export default page