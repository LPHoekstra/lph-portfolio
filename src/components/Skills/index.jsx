import m from "./index.module.scss"
import html from "./../../assets/html.svg"
import css from "./../../assets/css.svg"
import sass from "./../../assets/sass.svg"
import js from "./../../assets/js.svg"
import react from "./../../assets/react.svg"
import git from "./../../assets/git.svg"
import vsc from "./../../assets/vsc.svg"
import java from "./../../assets/java.svg"
import springBoot from "./../../assets/spring-boot.svg"
import figma from "./../../assets/figma.svg"

const iconsList = [
    {name: "HTML", img: html},
    {name: "CSS", img: css},
    {name: "SASS", img: sass},
    {name: "JavaScript", img: js},
    {name: "React", img: react},
    {name: "Git", img: git},
    {name: "Visual studio", img: vsc},
    {name: "Java", img: java},
    {name: "Spring Boot", img: springBoot},
    {name: "Figma", img: figma}
]

function Skills() {
    return (
        <div className={m.mainContainers}>
            {iconsList.map((icon) => (
                <div key={icon.name} className={m.iconContainers}>
                    <img src={icon.img} alt={icon.name} className={m.iconContainers__img} />
                    <p>{icon.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Skills