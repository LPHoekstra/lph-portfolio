export const redirection = (e) => {
    let section
    
    if (typeof e === "string") {
        section = document.getElementById(e)
    } else {
        e.preventDefault()
        const sectionNameToRedirect = e.target.href.split("#")[1]
        section = document.getElementById(sectionNameToRedirect)
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" })
}