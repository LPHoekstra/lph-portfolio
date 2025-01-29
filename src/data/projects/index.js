import argentbank from "./../../assets/projects/argentbank.png"
import kasa from "./../../assets/projects/kasa.png"
import springBoot from "./../../assets/projects/spring-boot.webp"
import minecraft from "./../../assets/projects/minecraft.webp"
// import cyclingStats from "./../../assets/projects/cycling-stats.png"

export const projectOverview = [
    {
        img: argentbank,
        title: "ArgentBank",
        tools: ["React", "SASS", "Redux"],
        categorie: ["Front-end"],
        repo: "https://github.com/LPHoekstra/argentbank",
        description: "ArgentBank......"
    },
    {
        img: kasa,
        title: "Kasa",
        tools: ["React", "SASS"],
        categorie: ["Front-end"],
        repo: "https://github.com/LPHoekstra/kasa",
        description: "Kasa..........."
    },
    {
        img: springBoot,
        title: "ArgentBankAPI",
        tools: ["Java", "Spring Boot", "MongoDB"],
        categorie: ["Back-end"],
        repo: "https://github.com/LPHoekstra/argentbankApi",
        description: "" 
    },
    {
        img: springBoot,
        title: "KasaAPI",
        tools: ["Java", "Spring Boot", "MongoDB"],
        categorie: ["Back-end"],
        repo: "https://github.com/LPHoekstra/kasaApi",
        description: "" 
    },
    {
        img: minecraft,
        title: "rmp-qol",
        tools: ["Java", "Fabric"],
        categorie: ["autre"],
        repo: "https://github.com/LPHoekstra/",
        description: "rmp-qol est un projet personnel pour améliorer la qualité de vie des joueurs sur minecraft, il est déstiné à une utilisation personnelle et pour les connaissances. C'est mods créer en utilisant fabric, il y a actuellement uniquement un autoforward, qui, à l'appuye d'une touche, fait avancer le joueur automatiquement sans devoir rester appuyer sur une touche. D'autre fonctionnalités sont prévues." 
    },

]

// {
//     img: cyclingStats,
//     title: "Cycling-stats",
//     tools: ["PHP"],
//     categorie: ["Front-end", "back-end"],
//     repo: "https://github.com/LPHoekstra/cycling-stats-php",
//     description: "Cycling-stats est projet personnel pour essayer php et mysql, dans l'objectif d'élargir mes compétences en back-end. L'api de Strava est utilisée pour ce connecter et récupérer les informations de l'utilisateur. to be continued..."
// },