import React from 'react'

function DivSecondary({ className, children }: { className: string, children: React.ReactNode }) {
    return (
        <div className={`${className} bg-white dark:bg-black`}>
            {children}
        </div>
    )
}

export default DivSecondary