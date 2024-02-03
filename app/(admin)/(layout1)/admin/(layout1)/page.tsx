import InputIcon from '@/components/CustomUi/InputIcon'
import DivPrimary from '@/components/DivPrimary'
import React from 'react'
import SearchIcon from '@/public/icons/search-normal-1.svg'

function page() {
  return (
    <div className=''>
      <div className='mt-4'>
        <InputIcon Icon={SearchIcon} />
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