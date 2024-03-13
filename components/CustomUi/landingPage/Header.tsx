'use client'
import React from 'react'
import DivPrimary from '@/components/DivPrimary'
import MaxWScreenXl from '@/components/MaxWScreenXl'
import Link from 'next/link'
import Heading from '@/components/typographi/Heading'
import { Button } from "@/components/ui/button"
import { useSession } from 'next-auth/react'
import UserDropDown from './UserDropDown'
import Image from 'next/image'
import logo from '@/public/images/company/logo.jpg'

function Header({ className }: { className: React.ReactNode }) {

    const { data: session, status } = useSession()

    return (
        <>
            <DivPrimary className={`${className} z-20`}>
                <MaxWScreenXl className="flex justify-between items-center h-[60px]">
                    <div>
                        <Heading className="font-bold">
                            <Link className='block w-[160px]' href={'/'}>
                                <Image className='w-full' alt='sarkarii job alert' src={logo} height={500} width={500} />
                            </Link>
                        </Heading>
                    </div>
                    <div>

                    </div>

                    {session ?
                        <UserDropDown />

                        :
                        <div>
                            <Link href="register">
                                <Button className='me-2 rounded ' variant="outline">Register</Button>
                            </Link>
                            <Link href="login">
                                <Button className='bg-gray-900 text-white rounded hover:bg-gray-950' >Login</Button>
                            </Link>
                        </div>}
                </MaxWScreenXl>
            </DivPrimary>
        </>
    )
}

export default Header