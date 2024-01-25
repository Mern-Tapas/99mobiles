import DivPrimary from '@/components/DivPrimary'
import MaxWScreenXl from '@/components/MaxWScreenXl'
import React from 'react'
import Link from 'next/link'

function HeaderLinks() {
    return (
        <DivPrimary className=''>
            <MaxWScreenXl className='flex'>
                <ul className='mx-auto'>
                    <li className='text-slate-500 inline-block me-6 text-sm hover:text-slate-900'><Link href={''}>Home</Link></li>
                    <li className='text-slate-500 inline-block me-6 text-sm hover:text-slate-900'><Link href={''}>Blog</Link></li>
                    <li className='text-slate-500 inline-block me-6 text-sm hover:text-slate-900'><Link href={''}>Laptops</Link></li>
                    <li className='text-slate-500 inline-block me-6 text-sm hover:text-slate-900'><Link href={''}>Smart Phone</Link></li>
                    <li className='text-slate-500 inline-block me-6 text-sm hover:text-slate-900'><Link href={''}>Accesorries</Link></li>
                    <li className='text-slate-500 inline-block me-6 text-sm hover:text-slate-900'><Link href={'/admin'}>admin</Link></li>
                </ul>
            </MaxWScreenXl>
        </DivPrimary>
    )
}

export default HeaderLinks