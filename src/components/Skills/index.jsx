import m from "./index.module.scss"
import html from "./../../assets/icons/html.svg"
import css from "./../../assets/icons/css.svg"
import sass from "./../../assets/icons/sass.svg"
import js from "./../../assets/icons/js.svg"
import react from "./../../assets/icons/react.svg"
import git from "./../../assets/icons/git.svg"
import vsc from "./../../assets/icons/vsc.svg"
import java from "./../../assets/icons/java.svg"
import springBoot from "./../../assets/icons/spring-boot.svg"
import figma from "./../../assets/icons/figma.svg"

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