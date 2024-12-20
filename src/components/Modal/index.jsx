import m from "./index.module.scss"
import PropTypes from "prop-types"

function Modal({ setIsOpen, content }) {
    return (
        <aside className={`${m.modal}`}> 
            <div>
                <button onClick={() => setIsOpen(false)}>close</button>
                {content}
            </div>
        </aside>
    )
}

export default Modal

Modal.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired,
}