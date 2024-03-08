import AnalyticsChild from '@/components/CustomUi/admin/AnalyticsChild'
import DivPrimary from '@/components/DivPrimary'
import React from 'react'

function page() {
  return (
    <div className=''>
      <div className='my-4'>
        <h2 className='text-2xl font-bold mb-1'>Hello Tapas Gharami</h2>
        <p className='text-gray-600'>This is what we've got for you today.</p>
      </div>
      <div className=''>
        <div className='grid gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>

          <AnalyticsChild/>
          <AnalyticsChild/>
          <AnalyticsChild/>
          <AnalyticsChild/>
         
        </div>

      </div>
    </div>
  )
}

export default page