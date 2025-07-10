import React, { createContext, ReactNode, useState } from "react"
import { theme } from "../../types/AvailableTheme"

interface ThemeProviderProps {
    children: ReactNode
}

interface ThemeContextType {
    theme: theme
    setTheme: React.Dispatch<React.SetStateAction<theme>>
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: function (): void {
        throw new Error("Function not implemented.")
    }
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<theme>("dark")

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}