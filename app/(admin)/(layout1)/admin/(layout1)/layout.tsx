'use client'
import AdminSidebar from '@/components/CustomUi/admin/AdminSidebar'
import AdminTopBar from '@/components/CustomUi/admin/AdminTopBar'
import React from 'react'
import { useState, useEffect } from 'react'

function Layout({ children }: { children: React.ReactNode }) {


  const [sidebar, setSidebar] = useState<null | string>()

  const handleSidebar = (value: string) => {
    localStorage.setItem("sidebar", value)
    setSidebar(value)
  }


  useEffect(() => {
    const sidebar = localStorage.getItem("sidebar")
    setSidebar(sidebar)
  }, [])

  return (
    <div className='h-screen bg-white flex'>
      <AdminSidebar />
      <div className='h-full w-full overflow-y-scroll bg-gray-100'>
        <AdminTopBar />
        <div className='p-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout