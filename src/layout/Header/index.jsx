import m from "./index.module.scss"
import githubIcon from '../../assets/icons/github.svg'

function Header() {
    return (
        <header className={m.header}>
            <h1>LPHoekstra</h1>
            <nav className={m.navBar}>
                <ul>
                    <li>
                        <a href="#about" className={m.navBar__link}>A propos</a>
                    </li>
                    <li>
                        <a href="#skill" className={m.navBar__link}>Compétences</a>
                    </li>
                    <li>
                        <a href="#project" className={m.navBar__link}>Projets</a>
                    </li>
                    <li>
                        <a href="#contact" className={m.navBar__link}>Me Contacter</a>
                    </li>
                    <li>
                        <a href="../../assets/cv/" target="_blank" className={m.navBar__link}>CV</a>
                    </li>
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