import m from "./index.module.scss"
import ProjectItem from "../ProjectItem"
import { useState } from "react"

const cateBtn = ["Tous", "front-end", "back-end", "autre"]

function Projects() {
    const [categorie, setCategorie] = useState("Tous")

    return (
        <div>
            <div className={m.btnContainer}>
                {cateBtn.map((btn) => (
                    <button key={btn}
                        className={`${m.btnContainer__btn} ${categorie === btn && m.btnContainer__btn_selected}`}
                        onClick={() => setCategorie(btn)}
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