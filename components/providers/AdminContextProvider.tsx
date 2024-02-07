'use client'
import React from 'react'
import { createContext } from 'react'
import { useEffect, useState } from 'react'

export interface AdminContextInterface {
    sidebar: boolean,
    handleSidebar: (value: boolean) => void

}

export const AdminContexts = createContext<AdminContextInterface>({ sidebar: true, handleSidebar: () => { } })




function AdminContextProvider({ children }: { children: React.ReactNode }) {


    const [sidebar, setSidebar] = useState<boolean>(true)

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
        <>
            <AdminContexts.Provider value={{ sidebar, handleSidebar }}>
                {children}
            </AdminContexts.Provider>
        </>
    )
}

export default AdminContextProvider