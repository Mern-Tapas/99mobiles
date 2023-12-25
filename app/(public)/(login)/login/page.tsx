'use client'
import React from 'react'
import { getProviders } from 'next-auth/react'
import { useState } from 'react'

function page() {

    const [provider, setprovider] = useState([{
        clientId:"",
        clientAuth:""
    }])

    const getproviders = async () => {
        const providers = await getProviders()
        setprovider(providers)
    }
    getproviders()

    return (
        <div></div>
    )
}

export default page