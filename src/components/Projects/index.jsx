import m from "./index.module.scss"
import ProjectRendering from "../ProjectRendering"
import { useState } from "react"
import { projectOverview } from "../../data/projects"

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

    return (
        <div>
            <div className={m.btnContainer}>
                {categoriesBtn.map((btn) => (
                    <button key={btn}
                        className={`${m.btnContainer__btn} ${categorie === btn && m.btnContainer__btn_selected}`}
                        onClick={() => setCategorie(btn)}
                        aria-label={`Affiche les projets ${btn}`}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <ProjectRendering categories={categorie} />
        </div>
    )
}

export default Projects