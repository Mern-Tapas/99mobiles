import React from 'react'

function Heading({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <h1 className={`${className} `}>{children}</h1>
    )
}

export default Heading