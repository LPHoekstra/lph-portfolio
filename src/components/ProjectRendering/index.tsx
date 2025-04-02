import m from "./index.module.scss"
import { ReactElement, useMemo, useState } from "react"
import { projectOverview } from "../../../public/data/projects"
import ToolsUsedCard from "../ToolsUsedCard"
import Modal from "../Modal"
import { ModalContent } from "../../types/ModalTypes"
import { Project } from "../../types/projectTypes"

interface ProjectRenderingProps {
    categories: string
}

const maxProjectsPerPage: number = 4

function ProjectRendering({ categories }: ProjectRenderingProps) {
    const [modalIsOpen, setModalIsOpen] = useState<Boolean>(false)
    const [modalContent, setModalContent] = useState<ModalContent | null>(null)
    const [paginationBtn, setPaginationBtn] = useState<Array<ReactElement<HTMLButtonElement>> | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const closeModal = (): void => {
        setModalIsOpen(false)
    }

    const openModal = (project: Project): void => {
        // set project description as array to add a <br> after each dot in jsx
        const splittedDescriptionByDot = project.description.split(".")
        splittedDescriptionByDot.pop() // remove empty string

        const projectContent: ModalContent = {
            img: project.img,
            title: project.title,
            tools: project.tools,
            categorie: project.categorie,
            repo: project.repo,
            description: splittedDescriptionByDot
        }

        setModalIsOpen(true)
        setModalContent(projectContent)
    }

    // filter the projects according to the categories
    const projectFilteredByCategorie: Array<Project> = useMemo(() => {
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
    const visibleProjectsWithPagination: Array<Project> = useMemo(() => {
        const paginationButtonArray: Array<ReactElement<HTMLButtonElement>> = []
        const numberOfPages: number = Math.ceil((projectFilteredByCategorie.length + 1) / maxProjectsPerPage)

        const startIndex: number = (currentPage - 1) * maxProjectsPerPage
        const endIndex: number = startIndex + maxProjectsPerPage
        const visibleProjects: Array<Project> = projectFilteredByCategorie.slice(startIndex, endIndex)

        // create the pagination button
        for (let i = 1; i <= numberOfPages; i++) {
            const button: ReactElement<HTMLButtonElement> =
                <button
                    key={`button-${i}`}
                    className={`${m.paginationContainer__btn} ${currentPage == i && m.paginationContainer__btn_selected}`}
                    aria-label={`Page ${i}`}
                    onClick={() => {
                        setCurrentPage(i)
                        // const projectSection = document.getElementById("project")
                        // projectSection.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                >
                    {i}
                </button>

            paginationButtonArray.push(button)
        }
        paginationButtonArray.length > 1 ? setPaginationBtn(paginationButtonArray) : setPaginationBtn(null)

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
            {/* If possible on open and close of the modal the component ProjectRendering should'nt rerender. */}
            {modalIsOpen && modalContent != null &&
                <Modal
                    closeModal={closeModal}
                    modalContent={modalContent}
                />
            }
        </>
    )
}


export default ProjectRendering