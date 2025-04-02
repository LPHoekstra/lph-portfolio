import m from "./index.module.scss"
import ProjectRendering from "../ProjectRendering"
import { MouseEvent, useState } from "react"
import { projectOverview } from "../../../public/data/projects.ts"

// array with all the categories
const categoriesBtn: Array<string> = ["Tous"]
// push in the categoriesBtn array new categories
projectOverview.forEach(project => {
    project.categorie.forEach(categorie => {
        if (!categoriesBtn.includes(categorie)) {
            categoriesBtn.push(categorie)
        }
    })
})

function Projects() {
    const [categorie, setCategorie] = useState<string>("Tous")

    const changeCategorie = (clickEvent: MouseEvent<HTMLButtonElement>) => {
        const btnElement = clickEvent.target as HTMLButtonElement
        setCategorie(btnElement.innerText)
    }

    return (
        <div>
            <ul className={m.btnContainer}>
                {categoriesBtn.map((btn) => (
                    <li key={btn}>
                        <button
                            className={`${m.btnContainer__btn} ${categorie === btn && m.btnContainer__btn_selected}`}
                            onClick={changeCategorie}
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