'use client'
import AnalyticsChild from '@/components/CustomUi/admin/AnalyticsChild'
import DivPrimary from '@/components/DivPrimary'
import React from 'react'
import UsersIcon from '@/public/icons/users.svg'
import GraphIcon from '@/public/icons/graph.svg'
import ListBox from '@/components/CustomUi/admin/ListBox'


function page() {
  return (
    <div className=''>
      <div className='mt-4'>
        <h2 className='text-2xl font-bold mb-1'>Hello Tapas Gharami</h2>
        <p className='text-gray-500'>This is what we've got for you today.</p>
      </div>

      <div className='mt-4'>
        <div className='grid gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>

          <AnalyticsChild Icon={GraphIcon} Name='Member onsite' Count={168} />
          <AnalyticsChild Icon={UsersIcon} Name='Member onsite' Count={89} />
          <AnalyticsChild Icon={UsersIcon} Name='Member onsite' Count={124} />
          <AnalyticsChild Icon={UsersIcon} Name='Member onsite' Count={0} />

        </div>
      </div>


      <div className='mt-2'>
        <div className='grid gap-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>


          <ListBox/>
          <ListBox/>

        </div>
      </div>
    </div>
  )
}

export default page