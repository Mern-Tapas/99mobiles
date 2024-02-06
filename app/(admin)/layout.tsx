'use client'
import AdminSidebar from '@/components/CustomUi/admin/AdminSidebar'
import AdminTopBar from '@/components/CustomUi/admin/AdminTopBar'
import React, { createContext } from 'react'
import { useState, useEffect } from 'react'


export interface AdminContextValue {
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMobileSidebar: boolean,
  setMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export const AdminContext = createContext<AdminContextValue>({
  isOpen: false,
  setOpen: (): void => { },
  isMobileSidebar: false,
  setMobileSidebar: (): void => { }


})

const Layout = ({ children }: { children: React.ReactNode }) => {


  const [sidebar, setSidebar] = useState<boolean>(false)

  const handleSidebar = (value: boolean) => {
    localStorage.setItem("sidebar", JSON.stringify(value))
    setSidebar(value)
  }


  useEffect(() => {
    const getsidebar = localStorage.getItem("sidebar")
    if (getsidebar) {
      setSidebar(JSON.parse(getsidebar))
      //tapas
    }
  }, [])




  return (

    <div className='h-screen bg-white flex overflow-hidden'>
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