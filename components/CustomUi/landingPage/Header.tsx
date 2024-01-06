'use client'
import React from 'react'
import DivPrimary from '@/components/DivPrimary'
import MaxWScreenXl from '@/components/MaxWScreenXl'
import Link from 'next/link'
import Heading from '@/components/typographi/Heading'
import { Button } from "@/components/ui/button"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

function Header({ className }: { className: React.ReactNode }) {

    const { data: session, status } = useSession()

    return (
        <>
            <DivPrimary className={`${className} `}>
                <MaxWScreenXl className="flex justify-between items-center h-[60px]">
                    <div>
                        <Heading className="font-bold"><Link href={'/'}>Company Name</Link></Heading>
                    </div>
                    <div>

                    </div>

                    {session ?
                        <div className='flex items-center bg-gray-100 p-1  ps-4 rounded-full'>
                            <p className='me-3 text-sm capitalize'>{session?.user?.name}</p>

                            <button className="group object-cover border rounded-full relative">
                                <div className="imagebox h-[35px] w-[35px] rounded-full overflow-hidden">
                                    {session?.user?.image ?
                                        <Image alt='profile image' className='h-full w-full' src={session?.user?.image || ""} height={200} width={200} />
                                        : ""
                                    }
                                </div>
                                <div className='group-hover:block group hidden  right-0 top-0 z-20  absolute'>
                                    <DivPrimary className='border  w-[210px] p-1 rounded mt-12'>
                                        <div>
                                            <button className='text-xs border p-2 w-full rounded hover:bg-red-600' onClick={() => { signOut() }}>Logout</button>
                                        </div>
                                    </DivPrimary>
                                </div>

                            </button>
                        </div>

                        :
                        <div>
                            <Link href="register">
                                <Button className='me-2' variant="outline">Register</Button>
                            </Link>
                            <Link href="login">
                                <Button >Login</Button>
                            </Link>
                        </div>}
                </MaxWScreenXl>
            </DivPrimary>
        </>
    )
}

export default Header