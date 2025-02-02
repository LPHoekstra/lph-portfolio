import m from "./index.module.scss"
import githubIcon from '../../assets/icons/github.svg'
import { useEffect, useState } from "react"
import { redirection } from "../../utils/redirectionUtils"

const headerList = [
    {
        link: "#hero",
        content: "Accueil"
    },
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
        // set the active section in the state if isIntersecting
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, { threshold: 0.55 })
        
        // set the observer on each sections
        headerList.forEach((section) => {
            const element = document.getElementById(section.link.split("#")[1])
            if (element) {
                observer.observe(element)
            }
        })
    }, [])

    return (
        <header className={m.header}>
            <span className={m.header__title}>LPHoekstra</span>
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