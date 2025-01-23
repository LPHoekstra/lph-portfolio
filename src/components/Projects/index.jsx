import m from "./index.module.scss"
import ProjectItem from "../ProjectItem"
import { useState } from "react"
import { projectOverview } from "../../data/projects"

const cateBtn = ["Tous"]
projectOverview.forEach(project => {
    project.categorie.forEach(categorie => {
        if (!cateBtn.includes(categorie)) {
            cateBtn.push(categorie)
        }
    }) 
})

function Projects() {
    const [categorie, setCategorie] = useState("Tous")

    return (
        <div>
            <div className={m.btnContainer}>
                {cateBtn.map((btn) => (
                    <button key={btn}
                        className={`${m.btnContainer__btn} ${categorie === btn && m.btnContainer__btn_selected}`}
                        onClick={() => setCategorie(btn)}
                        aria-label={`Show the ${btn} projects`}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <div className={m.projectContainer}>
                <ProjectItem categories={categorie} />
            </div>
        </div>
    )
}

export default Projects