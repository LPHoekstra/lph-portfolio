import m from "./index.module.scss"
import { iconsList } from "../../../public/data/skills"
import { skillsList } from "../../../public/data/skills"
import SkillsCard from "../SkillsCard"

function Skills() {
    return (
        <div className={m.mainWrapper}>
            <div className={m.cardWrapper}>
                {skillsList.map((content) => (
                    <SkillsCard key={content.title} content={content} />
                ))}
            </div>
            <div className={m.iconsListWrapper}>
                {iconsList.map((icon) => (
                    <div key={icon.name} className={m.iconWrapper}>
                        <img src={icon.img} alt={icon.name} className={m.iconWrapper__img} />
                        <p>{icon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills