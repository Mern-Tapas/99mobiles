'use client'
import React from 'react'
import DivPrimary from '@/components/DivPrimary'
import MaxWScreenXl from '@/components/MaxWScreenXl'
import Link from 'next/link'
import Heading from '@/components/typographi/Heading'
import { Button } from "@/components/ui/button"
import { useSession } from 'next-auth/react'
import Image from 'next/image'

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
                        <div className='flex items-center'>
                            <p className='me-3 text-sm'>{session?.user?.name}</p>

                            <button className="focus:border  p-1 h-[37px] w-[37px] rounded-full overflow-hidden">
                                {session?.user?.image ?
                                    <Image alt='profile image' src={session?.user?.image || ""} height={100} width={100} />
                                    : ""
                                }
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