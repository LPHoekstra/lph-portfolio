import m from "./index.module.scss";
import githubIcon from '../../assets/icons/github.svg'
import emailIcon from '../../assets/icons/email.svg'

interface LinkIconProps {
    type: "github" | "email"
    additionalClass?: {
        link?: string
        img?: string
    }
    hrefLink?: string
}

interface LinkItem {
    img: string
    alt: string
    link: string
    target: "" | "_blank"
}

interface LinkObject {
    github: LinkItem
    email: LinkItem
}

/**
 * Renders an icon-based link component for external platforms like GitHub or email.
 *
 * @param {Object} param0 - The component props.
 * @param {"github" | "email"} type - The type of link, determining the icon and URL.
 * @param {Object} [additionalClass] - Optional additional CSS classes for styling.
 * @param {string} [additionalClass.link] - Additional CSS class for the anchor element.
 * @param {string} [additionalClass.img] - Additional CSS class for the image element.
 * @param {string} [hrefLink] - Custom URL override for the link (if provided).
 * @returns {JSX.Element} A link with an icon.
 */
function LinkIcon({ type, additionalClass, hrefLink }: LinkIconProps) {
    const link: LinkObject = {
        github: {
            img: githubIcon,
            alt: "Github de Tom Hoekstra",
            link: "https://github.com/LPHoekstra",
            target: "_blank"
        },
        email: {
            img: emailIcon,
            alt: "Envoyer un mail",
            link: "mailto:tomhoekstra27@gmail.com",
            target: ""
        }
    }

    const linkProps = link[type]

    return (
        <a href={hrefLink ? hrefLink : linkProps?.link} target={linkProps?.target} className={additionalClass?.link}>
            <img src={linkProps?.img} alt={linkProps?.alt} className={`${m.link__img} ${additionalClass?.img}`} />
        </a>
    )
}

export default LinkIcon