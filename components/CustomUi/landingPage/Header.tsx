'use client'
import React from 'react'
import DivPrimary from '@/components/DivPrimary'
import MaxWScreenXl from '@/components/MaxWScreenXl'
import Link from 'next/link'
import Heading from '@/components/typographi/Heading'
import { Button } from "@/components/ui/button"




function Header({ className }: { className: React.ReactNode }) {
    return (
        <>
            <DivPrimary className={`${className} `}>
                <MaxWScreenXl className="flex justify-between items-center">
                    <div>
                        <Heading className="font-bold"><Link href={'/'}>Company Name</Link></Heading>
                    </div>
                    <div>

                    </div>
                    <div>
                        <Link href="register">
                            <Button className='me-2' variant="outline">Register</Button>
                        </Link>
                        <Link href="login">
                            <Button >Login</Button>
                        </Link>
                    </div>
                </MaxWScreenXl>
            </DivPrimary>
        </>
    )
}

export default Header