import React, { useEffect } from 'react'
import { useState } from 'react'
import { useTheme } from 'next-themes'


function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setmounted] = useState(false)

    useEffect(() => {
        setmounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div>
            <div>
                The current theme is: {theme}
                <button onClick={() => setTheme('light')}>Light Mode</button>
                <br />
                <button onClick={() => setTheme('dark')}>Dark Mode</button>
            </div>
        </div>
    )
}

export default ThemeSwitcher