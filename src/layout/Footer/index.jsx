import emailIcon from '../../assets/icons/email.svg'
import githubIcon from '../../assets/icons/github.svg'
import m from './index.module.scss'

function Footer() {
    return (
        <footer className={m.footer}>
            <div className={m.linkContainer}>
                <a href="mailto:tomhoekstra27@gmail.com">
                    <img src={emailIcon} alt="email of Tom Hoekstra" className={m.linkContainer__img}/>
                </a>
                <a href="https://github.com/LPHoekstra" target="_blank">
                    <img src={githubIcon} alt="github of Tom Hoekstra" className={m.linkContainer__img}/>
                </a>
            </div>
            <p>2025 Tom Hoekstra</p>
            <span>version 0.1.0</span>
        </footer>
    )
}

export default Footer