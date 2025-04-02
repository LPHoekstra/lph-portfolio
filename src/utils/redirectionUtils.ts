import { MouseEvent } from "react"

export const redirection = (e: MouseEvent<HTMLAnchorElement>): void => {
    let section
    const target = e.target as HTMLAnchorElement

    // if there is no target like _blank
    if (!target.target) {
        e.preventDefault()
        const sectionNameToRedirect = target.href?.split("#")[1]
        section = document.getElementById(sectionNameToRedirect)
    }

    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
}