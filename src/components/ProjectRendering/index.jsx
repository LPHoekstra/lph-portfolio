import m from "./index.module.scss"
import { useMemo, useState } from "react"
import PropTypes from "prop-types"
import Modal from "../Modal"
import { projectOverview } from "../../data/projects"
import ToolsUsedCard from "../ToolsUsedCard"
import github from "../../assets/icons/github.svg"

const maxProjectsPerPage = 4

function ProjectRendering({ categories }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const openModal = (project) => {
        setModalIsOpen(true)
        setModalContent(project)
    }

    // filter the projects according to the categories
    const projectFiltered = useMemo(() => {
        let FilteringProjects = projectOverview
        setCurrentPage(1)
        if (categories !== "Tous") {
            FilteringProjects = projectOverview.filter(project =>
                project.categorie.some(categorie => categorie === categories)
            )
        }

        return FilteringProjects
    }, [categories])

    // handle the pagination
    const visibleProjects = useMemo(() => {
        const paginationButton = []
        const numberOfPages = Math.ceil((projectFiltered.length + 1) / maxProjectsPerPage)

        const startIndex = (currentPage - 1) * maxProjectsPerPage
        const endIndex = startIndex + maxProjectsPerPage
        const visibleProjects = projectFiltered.slice(startIndex, endIndex)

        // create the pagination button
        for (let i = 1; i <= numberOfPages; i++) {
            const button =
                <button
                    key={`button-${i}`}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </button>

            paginationButton.push(button)
        }
        paginationButton.length > 1 ? setPagination(paginationButton) : setPagination(null)

        return visibleProjects
    }, [currentPage, projectFiltered])

    return (
        <>
            <div className={m.projectContainer}>
                {visibleProjects.map((project) => (
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
            </div>
            <div>{pagination && pagination}</div>
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

ProjectRendering.propTypes = {
    categories: PropTypes.string.isRequired
}

export default ProjectRendering