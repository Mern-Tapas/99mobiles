import UserBoxList from '@/components/CustomUi/UserBoxList'
import React from 'react'

function page() {
  return (
    <div>
      <div className='mt-4'>
        <h2 className='text-xl font-bold mb-1'>Users</h2>
      </div>
      <div className='mt-4'>
        <div className='flex justify-between'>
          <div className='p-1 bg-white rounded flex border'>
            <button className='bg-black text-white rounded text-xs me-2  p-2 px-3 hover:bg-gray-100'>All Users</button>
            <button className=' rounded text-xs me-2  p-2 px-3 hover:bg-gray-100'>New User</button>
            <button className=' rounded text-xs me-2  p-2 px-3 hover:bg-gray-100'>Verified</button>
            <button className=' rounded text-xs me-2  p-2 px-3 hover:bg-gray-100'>Not Verfied</button>

          </div>
          <div className='p-1 bg-white rounded flex border'>
            <button className=' rounded text-xs me-2  p-2 px-3 hover:bg-gray-100'>Filter</button>
            <button className='bg-black text-white rounded text-xs  p-2 px-3 hover:bg-gray-100'>Filter</button>

          </div>

        </div>
      </div>

      <div className="mt-8 grid gap-4 grid-cols-6">
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
       <UserBoxList/>
      </div>
    </div>
  )
}

export default page