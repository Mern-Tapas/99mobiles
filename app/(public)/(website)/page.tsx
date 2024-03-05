import MaxWScreenXl from '@/components/MaxWScreenXl'
import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <MaxWScreenXl className='mt-2'>


        <div className="grid gap-3 lg:grid-cols-[250px_auto]">
          <div className="">

            <Link href={'latest'} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm'>Latest Notification</Link>
            <Link href={'latest'} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm'>Admit Card</Link>
            <Link href={'latest'} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm'>Result</Link>
            <Link href={'latest'} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm'>Exam Dates</Link>
            <div className="rounded-lg bg-white h-[180px] p-2">
<span>ad</span>
            </div>
          </div>
          <div>
            <h2 className='font-bold text-2xl text-slate-800 mb-6 capitalize'>latest notifications</h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
              <div className="h-[157px] grid-child bg-white rounded-lg"></div>
            </div>
          </div>

        </div>


      </MaxWScreenXl>
    </div>
  )
}

export default page