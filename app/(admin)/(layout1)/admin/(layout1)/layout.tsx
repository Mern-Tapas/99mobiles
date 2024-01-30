import AdminSidebar from '@/components/CustomUi/admin/AdminSidebar'
import AdminTopBar from '@/components/CustomUi/admin/AdminTopBar'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen bg-white flex'>
      <AdminSidebar />
      <div className='h-full w-full overflow-y-scroll bg-gray-100'>
        <AdminTopBar />
        <div className='p-2 '>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout