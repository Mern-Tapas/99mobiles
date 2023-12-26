'use client'
import React, { useState, useTransition } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

function AuthOptions() {

  // const [providers, setProviders] = useState([])

  // const fetchProviders = async () => {
  //   const fetchedProviders = await getProviders()
  //   setProviders(fetchedProviders)

  // }

  return (
    <div>
      <button onClick={() => { signIn("google") }} >Login</button>
    </div>
  )
}

export default AuthOptions