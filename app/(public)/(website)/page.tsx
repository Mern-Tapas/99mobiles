import MaxWScreenXl from '@/components/MaxWScreenXl'
import React from 'react'

function page() {
  return (
    <div>
      <MaxWScreenXl className='mt-2'>


        <div className="grid gap-3 lg:grid-cols-[250px_auto]">
          <div className="bg-white p-2">container</div>
          <div>
            <h2 className='font-bold text-xl text-slate-800 mb-3 capitalize'>latest notifications</h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
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

        <div className='mt-8'>
          <button className='text-xs bg-white flex items-center rounded-full '>
            <div className='h-[38px] w-[38px] p-1  rounded-full '>
              <div className="h-full w-full border rounded-full box">

              </div>
            </div>
            <div className='my-auto flex flex-col'>
              <p className='text-start capitalize text-[10px] '>click me</p>
              <p className='text-start capitalize text-[9px]'>click me</p>

            </div>
            <div className='h-[38px] w-[38px] p-1  rounded-full '>
              <div className="h-full w-full  rounded-full box">

              </div>
            </div>
          </button>
        </div>


      </MaxWScreenXl>
    </div>
  )
}

export default page