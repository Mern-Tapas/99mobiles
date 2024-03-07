import MaxWScreenXl from '@/components/MaxWScreenXl'
import React from 'react'
import Link from 'next/link'
import FolderIcon from '@/public/icons/folder.svg'
import HyperLink from '@/components/CustomUi/HyperLink'

function page() {
  return (
    <div>
      <MaxWScreenXl className='mb-3'>


        <div className="grid gap-4 lg:grid-cols-[250px_auto]">
          <div className="">

            <HyperLink Icon={FolderIcon} linkName='Latest Notification' link='latestnotification' />
            <HyperLink Icon={FolderIcon} linkName='Admit Card' link='latestnotification' />
            <HyperLink Icon={FolderIcon} linkName='Result' link='latestnotification' />
            <HyperLink Icon={FolderIcon} linkName='syllabus' link='latestnotification' />
            <HyperLink Icon={FolderIcon} linkName='Latest Notification' link='latestnotification' />
            <div className="rounded-lg bg-white h-[180px] p-2">
              <span>ad</span>
            </div>
          </div>
          <div>
            <h2 className='font-bold text-2xl text-slate-800 mb-6 capitalize'>latest notifications</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

        <input type="text" />

      </MaxWScreenXl>
    </div>
  )
}

export default page