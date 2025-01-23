import PropTypes from "prop-types";
import m from "./index.module.scss"

function ToolsUsedCard({ tools }) {
    return (
        <div className={m.toolsContainer}>
            {tools.map((tool, index) => (
                <span key={`${tool}-${index}`} className={m.toolsContainer__tools}>{tool}</span>
            ))}
        </div>
    )
}

ToolsUsedCard.propTypes = {
    tools: PropTypes.string.isRequired
}

export default ToolsUsedCard;