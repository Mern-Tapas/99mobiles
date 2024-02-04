'use client'
import AdminSidebar from '@/components/CustomUi/admin/AdminSidebar'
import AdminTopBar from '@/components/CustomUi/admin/AdminTopBar'
import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'

interface AdminContext {
  sidebar: boolean | undefined
  handleSidebar(value: boolean): void
}

export const adminContext = createContext<AdminContext>({ sidebar: false, handleSidebar: (value: boolean) => { } });

function Layout({ children }: { children: React.ReactNode }) {


  const [sidebar, setSidebar] = useState<boolean>()

  const handleSidebar = (value: boolean) => {
    localStorage.setItem("sidebar", JSON.stringify(value))
    setSidebar(value)
  }


  useEffect(() => {
    const getsidebar = localStorage.getItem("sidebar")
    if (getsidebar) {
      setSidebar(JSON.parse(getsidebar))
    }
  }, [sidebar])

  return (
    <adminContext.Provider value={{ sidebar, handleSidebar }}>

      <div className='h-screen bg-white flex overflow-hidden'>
        <AdminSidebar />
        <div className='h-full w-full overflow-y-scroll bg-gray-100'>
          <AdminTopBar />
          <div className='p-2'>
            {children}
          </div>
        </div>
      </div>
    </adminContext.Provider>
  )
}

export default Layout