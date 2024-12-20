import m from "./index.module.scss"
import { useMemo, useState } from "react"
import PropTypes from "prop-types"
import Modal from "../Modal"
import { projectOverview } from "../../data/projects"

function ProjectItem({ categories }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const projectFiltered = useMemo(() => {
        if (categories === "Tous") {
            return projectOverview
        }

        return projectOverview.filter(project => 
            project.categorie.some(categorie => categorie === categories)
        )
    }, [categories])

    return (
        <>
            {projectFiltered.map((project) => (
                <div key={`${project.title}-${project.tools}`}
                    className={m.project}
                >
                    <img src={project.img} alt={project.title} className={m.project__img}
                        onClick={() => setModalIsOpen(true)}
                    />
                    <h3>{project.title}</h3>
                    <p>{project.tools}</p>
                    {modalIsOpen && <Modal
                        setIsOpen={() => setModalIsOpen()}
                        content={
                            <div>
                                <p>test</p>
                            </div>
                        }
                    />
                    }
                </div>
            ))}
        </>
    )
}

ProjectItem.propTypes = {
    categories: PropTypes.string.isRequired
}

export default ProjectItem