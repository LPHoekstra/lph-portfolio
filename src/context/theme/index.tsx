import React, { createContext, ReactNode, useState } from "react"

interface ThemeProviderProps {
    children: ReactNode
}

interface ThemeContextType {
    theme: theme
    setTheme: React.Dispatch<React.SetStateAction<theme>>
}

export type theme = "dark" | "light"

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