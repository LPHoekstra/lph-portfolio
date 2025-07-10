import { useContext } from "react"
import { ThemeContext } from "../../context/theme"
import { theme } from "../../types/AvailableTheme"

export const useTheme = () => {
    const context = useContext(ThemeContext)

    const theme = context.theme
    const body = document.body

    if (!body.classList.contains(`${theme}-theme`)) {
        body.classList.add(`${theme}-theme`)
    }

    /**
     * Set the theme with a string of type {@link theme}
     * @param newTheme 
     */
    const setTheme = (newTheme: theme) => {
        context.setTheme((prevTheme) => (
            body.classList.remove(`${prevTheme}-theme`),
            body.classList.add(`${newTheme}-theme`),
            prevTheme = newTheme
        ))
    }

    return { theme, setTheme }
}