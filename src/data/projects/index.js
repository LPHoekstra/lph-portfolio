import argentbank from "./../../assets/projects/argentbank.webp"
import kasa from "./../../assets/projects/kasa.webp"
import springBoot from "./../../assets/projects/spring-boot.webp"
import minecraft from "./../../assets/projects/minecraft.webp"

export const projectOverview = [
    {
        img: argentbank,
        title: "ArgentBank",
        tools: ["React", "SASS", "Redux"],
        categorie: ["Front-end"],
        repo: "https://github.com/LPHoekstra/argentbank",
        description: "ArgentBank est un projet réalisé dans le cadre de la formation Intégrateur Web d’OpenClassRooms. Son objectif est de mettre en pratique l’ensemble des compétences acquises. Il s’agit d’une application de gestion de transactions intégrant un système de connexion sécurisé et un dashboard interactif permettant d'afficher les différents comptes de l’utilisateur. L'application offre également la possibilité de modifier les informations du compte, le tout en communiquant avec une API via des appels appropriés. Pour assurer une gestion efficace de l’état global de l’application, Redux est utilisé. Enfin, l’application est conçue pour être optimisée et entièrement responsive, garantissant une expérience fluide sur tous types d’écrans."
    },
    {
        img: kasa,
        title: "Kasa",
        tools: ["React", "SASS"],
        categorie: ["Front-end"],
        repo: "https://github.com/LPHoekstra/kasa",
        description: "Kasa est un projet réalisé dans le cadre de la formation Intégrateur Web d’OpenClassRooms. Il s'agit d'une application de location de logements, développée à partir d'une maquette fournie, en partant de zéro. L’application est conçue avec React et doit être entièrement responsive, s’adaptant aussi bien aux écrans desktop qu’aux formats mobiles dès 320px. Initialement basée sur des données mockées, une API a été développée afin de rendre les données dynamiques."
    },
    {
        img: springBoot,
        title: "ArgentBankAPI",
        tools: ["Java", "Spring Boot", "MongoDB"],
        categorie: ["Back-end"],
        repo: "https://github.com/LPHoekstra/argentbankApi",
        description: "ArgentBankAPI est une API conçue pour alimenter l’application frontend du même nom. Elle intègre plusieurs routes dédiées à la gestion des utilisateurs, notamment pour l’authentification, la création de compte et la modification des informations. L’authentification repose sur un JSON Web Token (JWT), garantissant un accès sécurisé aux différentes routes de l’API."
    },
    {
        img: springBoot,
        title: "KasaAPI",
        tools: ["Java", "Spring Boot", "MongoDB"],
        categorie: ["Back-end"],
        repo: "https://github.com/LPHoekstra/kasaApi",
        description: "KasaAPI est un projet personnel visant à développer une API pour l’application de location de logements Kasa. Il s’agit d’une API simple comprenant deux routes principales : l’une permettant de récupérer la liste des logements, et l’autre d’accéder aux détails d’un logement spécifique."
    },
    {
        img: minecraft,
        title: "rmp-qol",
        tools: ["Java", "Fabric"],
        categorie: ["autre"],
        repo: "https://github.com/LPHoekstra/rmp-qol",
        description: "RMP-QoL est un projet personnel visant à améliorer la qualité de vie des joueurs sur Minecraft. Conçu pour un usage personnel et destiné aux proches, ce mod est développé avec Fabric. Actuellement, il intègre une seule fonctionnalité : l’AutoForward, qui permet au joueur d’avancer automatiquement en appuyant sur une touche, sans avoir à la maintenir enfoncée. D’autres fonctionnalités sont prévues pour enrichir l’expérience de jeu."
    },

]