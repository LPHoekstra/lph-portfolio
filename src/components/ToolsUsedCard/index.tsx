import m from "./index.module.scss"

interface ToolsProps {
    tools: Array<String>
}

function ToolsUsedCard({ tools }: ToolsProps) {
    return (
        <div className={m.toolsContainer}>
            {tools.map((tool, index) => (
                <span key={`${tool}-${index}`} className={m.toolsContainer__tools}>{tool}</span>
            ))}
        </div>
    )
}

export default ToolsUsedCard;