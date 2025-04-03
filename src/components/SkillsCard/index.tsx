import { SkillsList } from "../../../public/data/skills"
import m from "./index.module.scss"

interface SkillsCardProps {
    content: SkillsList
}

function SkillsCard({ content }: SkillsCardProps) {
    return (
        <article className={m.mainWrapper}>
            <img src={content.img} alt="" className={m.mainWrapper__img} />
            <div>
                <h3>{content.title}</h3>
                <p>{content.para}</p>
            </div>
        </article>
    )
}

export default SkillsCard