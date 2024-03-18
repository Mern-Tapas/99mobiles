'use client'
import AdminSidebar from '@/components/CustomUi/admin/AdminSidebar'
import AdminTopBar from '@/components/CustomUi/admin/AdminTopBar'
import MaxWScreenXl from '@/components/MaxWScreenXl'
import AdminContextProvider from '@/components/providers/AdminContextProvider'
import React, { createContext } from 'react'
import { useState, useEffect } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <AdminContextProvider>
      <div className='h-screen bg-white flex overflow-hidden'>
        <AdminSidebar />
        <div className='h-full w-full overflow-y-scroll overflow-x-hidden  bg-gray-100'>
          <AdminTopBar />


          <div className='p-2 px-5 w-full'>
            <MaxWScreenXl className=''>
              {children}
            </MaxWScreenXl>
          </div>
        </div>
      </div>
    </AdminContextProvider>
  )
}

export default Layout