export const redirection = (e) => {
    let section
    
    if (typeof e === "string") {
        section = document.getElementById(e)
    } else {
        // if there is no target like _blank
        if (!e.target.target) {
            e.preventDefault()
            const sectionNameToRedirect = e.target.href.split("#")[1]
            section = document.getElementById(sectionNameToRedirect)
        }
    }

    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
}