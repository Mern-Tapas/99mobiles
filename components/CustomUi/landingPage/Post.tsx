import React from 'react'
import FolderIcon from '@/public/icons/folder.svg'
import Link from 'next/link'
import SpanIcon from '../SpanIcon'
import SaveIcon from '@/public/icons/save-2.svg'
import EeIycon from '@/public/icons/eye.svg'

interface Props{
    postName:string,

}
 
function Post({postName}:Props) {
    return (
        <Link href={''} className=" grid-child bg-white rounded-lg p-3 flex flex-col ">
            <span className='text-blue-600 text-xs font-extrabold mb-1 inline-block'>SSC</span>
            <h2 className='text-2xl font-bold mb-5'>{postName}</h2>
            <ul  className='flex mt-auto'>
                <SpanIcon IconSize={16} className='text-gray-400' linkName='786' link='' Icon={EeIycon} />
                <SpanIcon IconSize={16} className='ms-3 text-gray-400' linkName='786' link='' Icon={SaveIcon} />
            </ul >
        </Link>
    )
}

export default Post