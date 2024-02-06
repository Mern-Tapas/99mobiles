'use client'
import React from 'react'
import { createContext } from 'react'

export interface AdminContextInterface {
    name: string
}

export const AdminContexts = createContext<AdminContextInterface>({ name: "tapas" })




function AdminContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AdminContexts.Provider value={{ name: "" }}>
                {children}
            </AdminContexts.Provider>
        </>
    )
}

export default AdminContextProvider