import MaxWScreenXl from '@/components/MaxWScreenXl'
import React from 'react'

function page() {
  return (
    <div>
      <MaxWScreenXl className='mt-2'>


        <div className="grid gap-3 lg:grid-cols-[250px_auto]">
          <div className="bg-white p-2">

          </div>
          <div>
            <h2 className='font-bold text-xl text-slate-800 mb-3 capitalize'>latest notifications</h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-[150px] grid-child bg-white">f</div>
              <div className="h-[150px] grid-child bg-white">f</div>
              <div className="h-[150px] grid-child bg-white">f</div>
              <div className="h-[150px] grid-child bg-white">f</div>
              <div className="h-[150px] grid-child bg-white">f</div>
              <div className="h-[150px] grid-child bg-white">f</div>
              <div className="h-[150px] grid-child bg-white">f</div>
              <div className="h-[150px] grid-child bg-white">f</div>
            </div>
          </div>

        </div>


      </MaxWScreenXl>
    </div>
  )
}

export default page