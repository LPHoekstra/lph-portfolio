import ContactForm from "../../components/ContactForm"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import m from "./index.module.scss"

// potential bug : Skills component is refreshed when an another categories is selected in project section
function Home() {
    return (
        <main className={m.main}>
            {/* fast presentation section */}
            <section>
                <p>
                    fast presentation ....................
                </p>
            </section>
            {/* About me section */}
            <section id="about" className={m.about}>
                <h2>A propos</h2>
                <p className={m.about__content}>
                    Passionné par le développement web, je combine curiosité, rigueur et une capacité d’adaptation qui me permet de répondre efficacement aux besoins des projets.
                    Convaincu que la communication est essentielle pour réussir, je suis toujours à l’écoute afin d’assurer des solutions sur mesure. <br />
                    <br />
                    Après avoir débuté mon apprentissage en autodidacte en décembre 2023, j’ai entrepris une formation d’intégrateur web chez OpenClassRooms pour renforcer mes compétences techniques et acquérir une expérience concrète.
                    Ce parcours m’a permis de développer des compétences solide en frontend. <br />
                    <br />
                    Mon objectif est de continuer à progresser dans un environnement dynamique et collaboratif. Je suis à la recherche d’une entreprise qui me permettra de monter en compétences tout en contribuant activement à ses projets. <br />
                    <br />
                    Je serais ravi d’échanger avec vous pour en savoir plus sur vos besoins et vos ambitions !
                </p>
            </section>
            {/* skill section */}
            <section id="skill" className={m.skill}>
                <h2>Compétences</h2>
                <ul className={m.skill__list}>
                    <li>Frontend : Création d’interfaces utilisateur performantes et intuitives, avec une attention particulière à l’optimisation des performances et à un code propre et lisible.</li>
                    <li>Backend : Conception d’API et gestion de bases de données, avec l’ambition d’approfondir ces compétences pour devenir un développeur full-stack.</li>
                    <li>Bonnes pratiques : Maîtrise des outils modernes, souci de la qualité du code, et recherche constante d’améliorations techniques.</li>
                </ul>
                <Skills />
            </section>
            {/* project section */}
            <section id="project" className={m.project}>
                <h2>Projets</h2>
                <Projects />
            </section>
            <section id="contact">
                <h2>Me contacter</h2>
                <ContactForm />
            </section>
        </main>
    )
}

export default Home