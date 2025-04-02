import m from "./index.module.scss"
import PropTypes from "prop-types"
import close from "../../assets/icons/close.svg"
import { useCallback, useEffect } from "react"
import ToolsUsedCard from "../ToolsUsedCard"
import { ModalContent } from "../../types/ModalTypes"

interface ModalProps {
    closeModal: () => void
    modalContent: ModalContent
}

// add a trap focus to the modal
function Modal({ closeModal, modalContent }: ModalProps) {
    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeModal()
        }
    }, [closeModal])

    useEffect(() => {
        window.addEventListener("keydown", handleEscape)

        return () => window.removeEventListener("keydown", handleEscape)
    }, [handleEscape])

    return (
        <aside className={m.modalAside} onMouseDown={closeModal} aria-modal="true" role="dialog">
            <div className={m.modalAside__wrapper} onMouseDown={(e) => e.stopPropagation()}>
                <img src={close}
                    alt="close the modal"
                    className={m.modalAside__close}
                    onClick={closeModal}
                    onKeyDown={(e) => e.key === "Enter" && closeModal()}
                    tabIndex={0}
                />
                <h2>{modalContent.title}</h2>
                <div className={m.imgAndContentWrapper}>
                    <img src={modalContent.img} alt={modalContent.title}
                        className={m.imgAndContentWrapper__img}
                    />
                    <article className={m.contentWrapper}>
                        <h3 className={m.contentWrapper__title}>Info du projet:</h3>
                        <p className={m.contentWrapper__description}>
                            {modalContent.description.map(description => (
                                <span key={description}>
                                    {description + "."} <br />
                                </span>
                            ))}
                        </p>
                        <h3 className={m.contentWrapper__title}>Details du projet:</h3>
                        <ul className={m.detailsList}>
                            <li className={m.detailsList__items}>Technologies: <ToolsUsedCard tools={modalContent.tools} /></li>
                            <li className={m.detailsList__items}>Github: <a href={modalContent.repo} target="_blank" rel="noopener noreferrer" className={m.detailsList__githubLink}>{modalContent.repo}</a></li>
                        </ul>
                    </article>
                </div>
            </div>
        </aside>
    )
}

export default Modal

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalContent: PropTypes.object.isRequired,
}