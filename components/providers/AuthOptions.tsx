'use client'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import DivPrimary from '../DivPrimary'
import GoogleIcon from '@/public/icons/google.svg'

function AuthOptions({ className }: { className: string }) {


  const { data: session, status } = useSession()


  return (
    <DivPrimary className={`${className} transition-all	 ${session ? "" : ""} h-[550px] lg:w-[400px] w-[350px] rounded `}>
      <div className='h-full w-full p-6'>

        <div className='mb-4'>
          <h2 className='text-xl font-extrabold poppins text-center mb-4 '>Admin Login</h2>
          <p className='text-center text-slate-400'>Hey, Enter Your details to get sing in to your account</p>
        </div>

        <div>
          <button className='border flex w-full p-3 rounded relative' onClick={() => { signIn("google") }}>
            <div className='h-[25px] w-[25px] me-auto'>
              <GoogleIcon className="h-full w-full" />
            </div>
            <h3 className='absolute font-bold left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-sm xl:text-md'>Continue with Google</h3>
          </button>
        </div>


      </div>
    </DivPrimary>
  )
}

export default AuthOptions