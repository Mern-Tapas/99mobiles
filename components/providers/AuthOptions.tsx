'use client'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import DivPrimary from '../DivPrimary'
import GoogleIcon from '@/public/icons/google.svg'
import Link from 'next/link'

function AuthOptions({ className }: { className: string }) {


  const { data: session, status } = useSession()


  return (
    <DivPrimary className={`${className} transition-all	 ${session ? "" : ""} lg:w-[370px] w-[350px] `}>
      <DivPrimary className='p-6 w-full rounded'>

        <div className='mb-3'>
          <h2 className='text-xl font-bold poppins text-center mb-3 '>Login</h2>
          <p className='text-center text-slate-400 text-sm'>Hey, Enter Your details to get sing in to your account</p>
        </div>

        <div className='mb-3'>
          <button className='border flex w-full p-3 rounded relative' onClick={() => { signIn("google") }}>
            <div className='h-[20px] w-[20px] me-auto'>
              <GoogleIcon className="h-full w-full" />
            </div>
            <h3 className='absolute font-bold left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-sm xl:text-md'>Continue with Google</h3>
          </button>
        </div>

        <div className='mb-3'>
          <p className='text-center'>or</p>
        </div>

        <div className='mb-3'>
          <div className='flex flex-col mb-2 text-sm' >
            <span className='text-slate-400 mb-2'>Email</span>
            <input type="email" placeholder='Enter your email' className='border rounded w-full p-3' />
          </div>
          <div className='flex flex-col mb-2 text-sm' >
            <span className='text-slate-400 mb-2 text-sm'>Password</span>
            <input type="password" placeholder='Enter your password' className='border rounded w-full p-3' />
          </div>
        </div>

        <div className='mb-3 text-sm'>
          <button className='p-3 text-center bg-black text-white rounded w-full'>Login</button>
          {/* <button onClick={()=>{signOut()}} className='p-3 text-center bg-black text-white rounded w-full'>logout</button> */}
        </div>

        <div className=''>
          <Link href='/reset' className='text-sm text-blue-600'>Reset Your Password</Link>
        </div>
      </DivPrimary>
    </DivPrimary>
  )
}

export default AuthOptions