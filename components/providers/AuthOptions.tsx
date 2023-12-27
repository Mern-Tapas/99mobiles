'use client'
import {  signIn, signOut } from 'next-auth/react'

function AuthOptions() {

  // const [providers, setProviders] = useState([])

  // const fetchProviders = async () => {
  //   const fetchedProviders = await getProviders()
  //   setProviders(fetchedProviders)

  // }

  return (
    <div>
      <button onClick={() => { signIn("google") }} >Login</button>
      <br />
      <button onClick={() => { signOut() }} >Sign Out</button>
    </div>
  )
}

export default AuthOptions