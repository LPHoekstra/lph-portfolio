import m from "./index.module.scss"
import ProjectRendering from "../ProjectRendering"
import { useState } from "react"
import { projectOverview } from "../../../public/data/projects"
import { redirection } from "../../utils/redirectionUtils"

const categoriesBtn = ["Tous"]
projectOverview.forEach(project => {
    project.categorie.forEach(categorie => {
        if (!categoriesBtn.includes(categorie)) {
            categoriesBtn.push(categorie)
        }
    })
})

function Projects() {
    const [categorie, setCategorie] = useState("Tous")

    const changeCategorie = (btn) => {
        setCategorie(btn)
        redirection("project")
    }

    return (
        <div>
            <ul className={m.btnContainer}>
                {categoriesBtn.map((btn) => (
                    <li key={btn}>
                        <button
                            className={`${m.btnContainer__btn} ${categorie === btn && m.btnContainer__btn_selected}`}
                            onClick={() => changeCategorie(btn)}
                            aria-label={`Affiche les projets ${btn}`}
                        >
                            {btn}
                        </button>
                    </li>
                ))}
            </ul>
            <ProjectRendering categories={categorie} />
        </div>
    )
}

export default Projects