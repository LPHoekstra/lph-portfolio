import m from "./index.module.scss"
import { iconsList } from "../../../public/data/skills"

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