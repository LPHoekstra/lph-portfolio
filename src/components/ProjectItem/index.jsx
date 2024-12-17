import m from "./index.module.scss"
import argentbank from "./../../assets/projects/argentbank.png"
import kasa from "./../../assets/projects/kasa.png"
import { useMemo } from "react"
import PropTypes from "prop-types"

const projectOverview = [
    {
        img: argentbank,
        title: "ArgentBank / Formation",
        tools: "React with redux",
        categorie: "front-end"
    },
    {
        img: kasa,
        title: "Kasa",
        tools: "React",
        categorie: "front-end"
    }
]

function ProjectItem({ categories }) {
    const projectFiltered = useMemo(() => {
        if (categories === "Tous") {
            return projectOverview
        }

        return projectOverview.filter(project => project.categorie === categories)
    }, [categories])
    
    return (
        <>
            {projectFiltered.map((project) => (
                <div key={`${project.title}-${project.tools}`} className={m.project}>
                    <img src={project.img} alt="test" className={m.project__img} />
                    <h3>{project.title}</h3>
                    <p>{project.tools}</p>
                </div>
            ))}
        </>
    )
}

ProjectItem.propTypes = {
    categories: PropTypes.string.isRequired
}

export default ProjectItem