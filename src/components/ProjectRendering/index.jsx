import m from "./index.module.scss"
import { useMemo, useState } from "react"
import PropTypes from "prop-types"
import { projectOverview } from "../../../public/data/projects"
import ToolsUsedCard from "../ToolsUsedCard"
import Modal from "../Modal"

const maxProjectsPerPage = 4

function ProjectRendering({ categories }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [paginationBtn, setPaginationBtn] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const openModal = (project) => {
        setModalIsOpen(true)
        // set project description as array to add a <br> after each dot in jsx
        if (typeof project.description === "string") {
            const splittedDescriptionByDot = project.description.split(".")
            splittedDescriptionByDot.pop() // remove empty string
            project.description = splittedDescriptionByDot
        }
        setModalContent(project)
    }

    // filter the projects according to the categories
    const projectFilteredByCategorie = useMemo(() => {
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
    const visibleProjectsWithPagination = useMemo(() => {
        const paginationButton = []
        const numberOfPages = Math.ceil((projectFilteredByCategorie.length + 1) / maxProjectsPerPage)

        const startIndex = (currentPage - 1) * maxProjectsPerPage
        const endIndex = startIndex + maxProjectsPerPage
        const visibleProjects = projectFilteredByCategorie.slice(startIndex, endIndex)

        // create the pagination button
        for (let i = 1; i <= numberOfPages; i++) {
            const button =
                <button
                    key={`button-${i}`}
                    className={`${m.paginationContainer__btn} ${currentPage == i && m.paginationContainer__btn_selected}`}
                    aria-label={`Page ${i}`}
                    onClick={() => {
                        setCurrentPage(i)
                        const projectSection = document.getElementById("project")
                        projectSection.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                >
                    {i}
                </button>

            paginationButton.push(button)
        }
        paginationButton.length > 1 ? setPaginationBtn(paginationButton) : setPaginationBtn(null)

        return visibleProjects
    }, [currentPage, projectFilteredByCategorie])

    return (
        <>
            {/* Card container */}
            <div className={m.projectContainer}>
                {visibleProjectsWithPagination.map((project) => (
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
            {paginationBtn &&
                <div className={m.paginationContainer}>
                    {paginationBtn}
                </div>
            }
            {/* If possible on open and close of the modal the component ProjectRendering should'nt rerender.
                Create a component for the content modal */}
            {modalIsOpen &&
                <Modal
                    closeModal={closeModal}
                    wrapperClass={m.modal__wrapper}
                    content={
                        <div className={m.modal}>
                            <h2>{modalContent.title}</h2>
                            <div className={m.modal__imgAndContentWrapper}>
                                <img src={modalContent.img} alt={modalContent.title}
                                    className={m.modal__img}
                                />
                                <article className={m.modal__contentWrapper}>
                                    <h3 className={m.modal__secondTitle}>Info du projet:</h3>
                                    <p className={m.modal__description}>
                                        {modalContent.description.map(description => (
                                            <span key={description}>
                                                {description + "."} <br />
                                            </span>
                                        ))}
                                    </p>
                                    <h3 className={m.modal__secondTitle}>Details du projet:</h3>
                                    <ul className={m.modal__detailsList}>
                                        <li>Technologies: <ToolsUsedCard tools={modalContent.tools} /></li>
                                        <li>Github: <a href={modalContent.repo} target="_blank" rel="noopener noreferrer" className={m.modal__githubLink}>{modalContent.repo}</a></li>
                                    </ul>
                                </article>
                            </div>
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