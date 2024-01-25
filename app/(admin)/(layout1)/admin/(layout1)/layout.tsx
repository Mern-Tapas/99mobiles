'use client'
import AdminSidebar from '@/components/CustomUi/admin/AdminSidebar'
import AdminTopBar from '@/components/CustomUi/admin/AdminTopBar'
import DivPrimary from '@/components/DivPrimary'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen bg-gray-100 flex'>
      <AdminSidebar />
      <div className='h-full w-full overflow-y-scroll'>
        <AdminTopBar />
        <div className='p-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout