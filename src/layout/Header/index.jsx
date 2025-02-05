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
    const [navBarIsOpen, setNavBarIsOpen] = useState(false)

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
            <nav className={`${m.navBar} ${navBarIsOpen ? m.navBar_active : ""}`} onMouseDown={() => setNavBarIsOpen(false)}>
                <ul className={m.navBar__list} onMouseDown={(e) => e.stopPropagation()}>
                    {headerList.map((element) => (
                        <li key={element.content} onMouseDown={(e) => e.stopPropagation()}>
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
            <div className={m.linkContainer}>
                <a href="https://github.com/LPHoekstra" target="_blank" className={m.linkContainer__link}>
                    <img src={githubIcon} alt="Github de Tom Hoekstra" className={m.linkContainer__img} />
                </a>
                <div className={m.openNavBarBtn} onClick={() => setNavBarIsOpen(true)}>
                    <button className={m.openNavBarBtn__srOnly}>Ouvrir barre de navigation</button>
                    <span className={m.openNavBarBtn__bar}></span>
                    <span className={m.openNavBarBtn__bar}></span>
                    <span className={m.openNavBarBtn__bar}></span>
                </div>
            </div>
        </header>
    )
}

export default Header