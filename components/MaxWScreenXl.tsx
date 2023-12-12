import React from 'react'

function MaxWScreenXl({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={`${className} mx-auto max-w-screen-xl p-2`}>
      {children}
    </div>
  )
}

export default MaxWScreenXl