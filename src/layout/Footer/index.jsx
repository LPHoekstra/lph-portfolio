import LinkIcon from '../../components/LinkIcon'
import m from './index.module.scss'

function Footer() {
    return (
        <footer className={m.footer}>
            <div className={m.linkContainer}>
                <LinkIcon type="email" />
                <LinkIcon type="github" />
            </div>
            <p>2025 Tom Hoekstra</p>
            <span>version 1.0.0</span>
        </footer>
    )
}

export default Footer