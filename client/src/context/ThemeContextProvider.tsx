import { createContext, useState } from "react";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext<any>(null)

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {

    const [theme,setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(prev => !prev)
        document.body.classList.toggle('dark')
    }

    const value = {theme,toggleTheme}

    return (
        <ThemeContext.Provider value={value}>
                {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider