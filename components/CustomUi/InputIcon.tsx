import React from 'react'

interface Props {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,

}

function InputIcon({ Icon }: Props) {
    return (
        <>
            <div className='flex w-fit relative h-[40px] rounded-full'>
                <div className='h-[40px] w-[40px]   absolute rounded-full flex'>
                    <div className='h-[20px] w-[20px]   rounded-ful m-auto '>
                        <Icon className='h-full w-full text-gray-400' />
                    </div>
                </div>
                <input type="text" placeholder='Search' className='text-xs px-2 ps-[40px] focus:outline-1 outline-gray-400 rounded-full' />
            </div>
        </>
    )
}

export default InputIcon