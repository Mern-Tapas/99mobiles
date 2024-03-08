import React from 'react'
import FolderIcon from '@/public/icons/folder.svg'
import Link from 'next/link'
import SpanIcon from '../SpanIcon'
 
function Post() {
    return (
        <Link href={''} className=" grid-child bg-white rounded-lg p-3 flex flex-col h-[150px]">
            <span className='text-blue-600 text-xs font-extrabold mb-2 inline-block'>SSC</span>
            <h2 className='text-2xl font-bold mb-3'>SSC Selection Posts Apply Online</h2>
            <ul  className='flex mt-auto'>
                <SpanIcon IconSize={16} className='text-gray-500' linkName='786' link='' Icon={FolderIcon} />
                <SpanIcon IconSize={16} className='ms-3 text-gray-500' linkName='786' link='' Icon={FolderIcon} />
            </ul >
        </Link>
    )
}

export default Post