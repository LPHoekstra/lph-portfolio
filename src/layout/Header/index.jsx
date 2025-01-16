import m from "./index.module.scss"

function Header() {
    return (
        <header className={m.header}>
            <h1>LPHoekstra</h1>
            <nav className={m.navBar}>
                <a href="#about">A propos</a>
                <a href="#skill">Compétences</a>
                <a href="#project">Projets</a>
                <a href="#contact">Me Contacter</a>
            </nav>
            <a href="">Télécharger le CV</a>
        </header>
    )
}

export default Header