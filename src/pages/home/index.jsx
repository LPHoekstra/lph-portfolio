import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import m from "./index.module.scss"

// potential bug : Skills component is refreshed when an another categories is selected in project section
function Home() {
    return (
        <main className={m.main}>
            {/* fast presentation section */}
            <section>

            </section>
            {/* About me section */}
            <section id="about">
                <h2>A propos</h2>
                <p></p>
            </section>
            {/* language i use section */}
            <section className={m.skill} id="skill">
                <h2>Compétence</h2>
                <p className={m.skill__para}>..........................................................................</p>
                <Skills />
            </section>
            {/* project section */}
            <section id="project">
                <h2>Projets</h2>
                <Projects />
            </section>
            {/* contact section */}
            <section id="contact">

            </section>
        </main>
    )
}

export default Home