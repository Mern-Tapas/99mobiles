import MaxWScreenXl from '@/components/MaxWScreenXl'
import React from 'react'
import FolderIcon from '@/public/icons/folder.svg'
import HyperLink from '@/components/CustomUi/HyperLink'
import Post from '@/components/CustomUi/landingPage/Post'


function page() {
  return (
    <div>
      <MaxWScreenXl className='mb-3'>


        <div className="grid gap-4 lg:grid-cols-[250px_auto]">
          <div className="">

            <HyperLink IconSize={22} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm' Icon={FolderIcon} linkName='Latest Notification' link='latestnotification' />
            <HyperLink IconSize={22} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm' Icon={FolderIcon} linkName='Admit Card' link='latestnotification' />
            <HyperLink IconSize={22} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm' Icon={FolderIcon} linkName='Result' link='latestnotification' />
            <HyperLink IconSize={22} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm' Icon={FolderIcon} linkName='syllabus' link='latestnotification' />
            <HyperLink IconSize={22} className='text-slate-700 w-full p-3 block bg-white rounded-lg mb-2 font-medium hover:bg-black transition-colors hover:text-white text-sm' Icon={FolderIcon} linkName='Latest Notification' link='latestnotification' />
            <div className="rounded-lg bg-white h-[180px] p-2">
              <span>ad</span>
            </div>
          </div>
          <div>
            <h2 className='font-bold text-3xl text-gray-500 mb-6 capitalize'>latest notifications</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>
          </div>

        </div>



      </MaxWScreenXl>
    </div>
  )
}

export default page