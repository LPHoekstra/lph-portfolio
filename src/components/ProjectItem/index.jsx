import m from "./index.module.scss"
import { useMemo, useState } from "react"
import PropTypes from "prop-types"
import Modal from "../Modal"
import { projectOverview } from "../../data/projects"
import ToolsUsedCard from "../ToolsUsedCard"
import github from "../../assets/icons/github.svg"

function ProjectItem({ categories }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const openModal = (project) => {
        setModalIsOpen(true)
        setModalContent(project)
    }

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
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openModal(project)}
                    onClick={() => openModal(project)}
                >
                    <img src={project.img} alt={project.title}
                        className={m.project__img}
                    />
                    <h3 className={m.project__title}>{project.title}</h3>
                    <ToolsUsedCard tools={project.tools} />
                </div>
            ))}
            {modalIsOpen && <Modal
                closeModal={closeModal}
                wrapperClass={m.modal__wrapper}
                content={
                    <div>
                        <img src={modalContent.img} alt={modalContent.title}
                            className={m.modal__img}
                        />
                        <ToolsUsedCard tools={modalContent.tools} />
                        <h2 className={m.modal__title}>{modalContent.title}</h2>
                        <a href={modalContent.repo} target="_blank">
                            <img src={github} alt="Dépot github du projet" />
                        </a>
                        <p className={m.modal__description}>{modalContent.description}</p>
                    </div>
                }
            />
            }
        </>
    )
}

ProjectItem.propTypes = {
    categories: PropTypes.string.isRequired
}

export default ProjectItem