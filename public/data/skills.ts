import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import sass from "../assets/icons/sass.svg"
import js from "../assets/icons/js.svg"
import react from "../assets/icons/react.svg"
import git from "../assets/icons/git.svg"
import vsc from "../assets/icons/vsc.svg"
import java from "../assets/icons/java.svg"
import springBoot from "../assets/icons/spring-boot.svg"
import figma from "../assets/icons/figma.svg"
import ts from "../assets/icons/ts.svg"
import optimisation from "../assets/icons/optimisation.svg"
import seo from "../assets/icons/seo.svg"
import agile from "../assets/icons/agile.svg"
import debug from "../assets/icons/debug.svg"

interface IconsList {
    name: string
    img: string
}

export interface SkillsList {
    img: string
    title: string
    para: string
}

export const skillsList: Array<SkillsList> = [
    { img: seo, title: "SEO", para: "Possibilité d'améliorer le SEO pour donner plus de visibilité." },
    { img: optimisation, title: "Optimisation", para: "L'optimisation du code et des performances au coeur de mes applications." },
    { img: debug, title: "Debug", para: "Bonne capacité et apréci le debug d'application web." },
    { img: agile, title: "Agile", para: "Connaissance de la méthodologie Agile et de son framework Scrum." }
]

export const iconsList: Array<IconsList> = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "SASS", img: sass },
    { name: "JavaScript", img: js },
    { name: "TypeScript", img: ts },
    { name: "React", img: react },
    { name: "Git", img: git },
    { name: "VS Code", img: vsc },
    { name: "Java", img: java },
    { name: "Spring Boot", img: springBoot },
    { name: "Figma", img: figma }
]