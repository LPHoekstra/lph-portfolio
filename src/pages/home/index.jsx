import ContactForm from "../../components/ContactForm"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import m from "./index.module.scss"
import { redirection } from "../../utils/redirectionUtils"
import HeroBackground from "../../components/HeroBackgroundAnimation"

function Home() {
    const age = () => {
        const startDate = new Date("2002-06-20");
        const actualDate = new Date();

        let yearsDif = actualDate.getFullYear() - startDate.getFullYear();

        if (
            actualDate.getMonth() < startDate.getMonth() ||
            (actualDate.getMonth() === startDate.getMonth() && actualDate.getDate() < startDate.getDate())
        ) {
            yearsDif--;
        }

        return yearsDif;
    }

    return (
        <main className={m.main}>
            {/* hero section */}
            <section id="hero" className={m.hero}>
                <HeroBackground />
                <h1 className={m.hero__title}>Tom Hoekstra</h1>
                <p>
                    Développeur Web | Frontend
                </p>
                <a href="#project" onClick={redirection} className={m.hero__btn}>
                    Voir mes projets
                </a>
            </section>
            {/* About me section */}
            <section id="about" className={m.about}>
                <h2 className={m.about__title}>A propos</h2>
                <div className={m.about__wrapper}>
                    <article className={m.aboutDescriptionContainer}>
                        <h3 className={m.aboutDescriptionContainer__title}><span>Tom Hoekstra,</span> développeur web</h3>
                        <div className={m.aboutDescriptionContainer__textContainer}>
                            <p>
                                Passionné par le développement web, je combine curiosité, rigueur et une capacité d’adaptation qui me permet de répondre efficacement aux besoins des projets.
                                Convaincu que la communication est essentielle pour réussir, je suis toujours à l’écoute afin d’assurer des solutions sur mesure.
                            </p>
                            <p>
                                Après avoir débuté mon apprentissage en autodidacte en décembre 2023, j’ai entrepris une formation d’intégrateur web chez OpenClassRooms pour renforcer mes compétences techniques et acquérir une expérience concrète.
                                Ce parcours m’a permis de développer des compétences solide en frontend.
                            </p>
                            <p>

                                Mon objectif est de continuer à progresser dans un environnement dynamique et collaboratif. Je suis à la recherche d’une entreprise qui me permettra de monter en compétences tout en contribuant activement à ses projets.
                            </p>
                            <p>
                                Je serais ravi d’échanger avec vous pour en savoir plus sur vos besoins et vos ambitions !
                            </p>
                        </div>
                    </article>
                    <div>
                        <ul className={m.aboutUl}>
                            <li className={m.aboutUl__list}><span className={m.aboutUl__label}>Nom:</span>Tom Hoekstra</li>
                            <li className={m.aboutUl__list}><span className={m.aboutUl__label}>Email:</span><a href="mailto:tomhoekstra27@gmail.com" className={m.aboutUl__email}>tomhoekstra27@gmail.com</a></li>
                            <li className={m.aboutUl__list}><span className={m.aboutUl__label}>Age:</span>{age()}</li>
                        </ul>
                        <a href="/cv/CV-Tom-Le-Pennec.pdf" target="_blank" className={m.about__cvBtn}>Voir le CV</a>
                    </div>
                </div>
            </section>
            {/* skill section */}
            <section id="skill" className={m.skill}>
                <h2 className={m.skill__title}>Compétences</h2>

                <Skills />
            </section>
            {/* project section */}
            <section id="project" className={m.project}>
                <h2 className={m.project__title}>Projets</h2>
                <Projects />
            </section>
            <section id="contact" className={m.contact}>
                <h2 className={m.contact__title}>Me contacter</h2>
                <ContactForm />
            </section>
        </main>
    )
}

export default Home