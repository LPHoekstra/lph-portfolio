import m from "./index.module.scss"
import githubIcon from '../../assets/icons/github.svg'
import { useEffect, useState } from "react"

const sections = [
    { id: "about" },
    { id: "skill" },
    { id: "project" }
]

const headerList = [
    {
        link: "#about",
        content: "A propos"
    },
    {
        link: "#skill",
        content: "Compétences"
    },
    {
        link: "#project",
        content: "Projets"
    },
    {
        link: "#contact",
        content: "Me Contacter"
    },
    {
        link: "../../assets/cv/",
        target: "_blank",
        content: "CV"
    }
]

function Header() {
    const [activeSection, setActiveSection] = useState(null)

    // to get the current section on the screen
    useEffect(() => {
        // get the sections in the DOM
        const sectionElements = sections.map((section) =>
            document.getElementById(section.id)
        )

        // set the active section in the state if isIntersecting
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, { threshold: 0.65 })

        // set the observer on each sections
        sectionElements.forEach((element) => {
            if (element) {
                observer.observe(element)
            }
        })
    }, [])

    const redirection = (e) => {
        e.preventDefault()
        const sectionNameToRedirect = e.target.href.split("#")[1]
        const section = document.getElementById(sectionNameToRedirect)
        section.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <header className={m.header}>
            <h1>LPHoekstra</h1>
            <nav className={m.navBar}>
                <ul>
                    {headerList.map((element) => (
                        <li key={element.content}>
                            <a href={element.link}
                                target={element.target}
                                className={`
                                    ${m.navBar__link} 
                                    ${element.link.split("#")[1] === activeSection ? m.navBar__link_selected : ""}
                                `}
                                onClick={redirection}
                            >
                                {element.content}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <a href="https://github.com/LPHoekstra" target="_blank">
                    <img src={githubIcon} alt="github of Tom Hoekstra" className={m.externalLink__img} />
                </a>
            </div>
        </header>
    )
}

export default Header