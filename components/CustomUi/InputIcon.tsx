import React from 'react'

interface Props {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,

}

function InputIcon({ Icon }: Props) {
    return (
        <>
            <div className='flex  w-fit relative h-[40px] rounded-full'>
                <div className='h-[40px] w-[40px]  absolute rounded-full flex'>
                    <div className='h-[30px] w-[30px]   rounded-full m-auto border'>

                    </div>
                </div>
                <input type="text" placeholder='Search' className='text-xs px-2 ps-[46px] focus:outline-1 rounded-full' />
            </div>
        </>
    )
}

export default InputIcon