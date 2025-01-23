import m from "./index.module.scss"
import PropTypes from "prop-types"
import close from "../../assets/icons/close.svg"

// add a trap focus to the modal
function Modal({ closeModal, content }) {
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal()
        }
    })

    return (
        <aside className={m.modal} onMouseDown={closeModal} aria-modal="true" role="dialog"> 
            <div className={m.modal__wrapper} onMouseDown={(e) => e.stopPropagation()}>
                <img src={close} 
                    alt="close the modal" 
                    className={m.modal__close}
                    onClick={closeModal}
                    onKeyDown={(e) => e.key === "Enter" && closeModal()} 
                    tabIndex={0}
                />
                {content}
            </div>
        </aside>
    )
}

export default Modal

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired,
}