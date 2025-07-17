import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import reactIcon from "../../assets/react-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import javascriptIcon from "../../assets/js-icon.svg";
import nodejsIcon from "../../assets/Node.js.svg";
import expressIcon from "../../assets/Express.svg";
import mongodbIcon from "../../assets/MongoDB.svg";
import tailwindIcon from "../../assets/Tailwind CSS.svg";
import reduxIcon from "../../assets/Redux.svg";
import swaggerIcon from "../../assets/Swagger.svg";
import materialuiIcon from "../../assets/Material UI.svg";
import shadcnIcon from "../../assets/shadcn.svg";
import edusprint from "../../assets/projects/edusprint/edusprint.webp";
import ecommerce from "../../assets/projects/ecommerce/amijaan.webp";
import ecommerceProduct from "../../assets/projects/ecommerce/ecommerce-product.webp";
import ecommerceCart from "../../assets/projects/ecommerce/ecommerce-cart.webp";
import petpals from "../../assets/projects/petpals/petpals.webp";
import petpalsPet from "../../assets/projects/petpals/petpals-petview.webp";
import pokedexLanding from "../../assets/projects/pokedex/pokedex-landing.webp";
import singlePokemon from "../../assets/projects/pokedex/pokedex-singleview.webp";
import pokemonDashboard from "../../assets/projects/pokedex/pokedex-dashboard.webp";
import React from "react";

export interface ProjectData {
    icon: React.ReactNode;
    title: string;
    description: string;
    techList: string[];
    links: { url: string; icon: string; alt: string }[];
    images: string[];
}

const folderIcon = (
    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
);

const projectsData: ProjectData[] = [
    {
        icon: folderIcon,
        title: "PokéDex",
        description: "PokéDex offers a seamless and interactive experience for browsing, searching, and exploring detailed information about all your favorite Pokémon.",
        techList: [reactIcon, nodejsIcon, expressIcon, reduxIcon, mongodbIcon, tailwindIcon, shadcnIcon],
        links: [
            { url: "https://github.com/imlnr/pokedex", icon: githubIcon, alt: "GitHub" },
            { url: "https://gallgher-and-mohan.vercel.app/", icon: externalLink, alt: "Live Demo" },
        ],
        images: [
            pokemonDashboard,
            pokedexLanding,
            singlePokemon
        ],
    },
    {
        icon: folderIcon,
        title: "EduSprint",
        description: "Edusprint is a learning platform where you can explore and take courses from some of the best-known universities worldwide.",
        techList: [reactIcon, cssIcon, htmlIcon, javascriptIcon, reduxIcon],
        links: [
            { url: "https://github.com/imlnr/software-kalaakar-5678", icon: githubIcon, alt: "GitHub" },
            { url: "https://edusprint.vercel.app/", icon: externalLink, alt: "Live Demo" },
        ],
        images: [
            edusprint
        ],
    },
    {
        icon: folderIcon,
        title: "PetPals",
        description: "PetPals connects loving homes with deserving animals, supporting adoption organizations for a seamless process.",
        techList: [reactIcon, cssIcon, nodejsIcon, expressIcon, mongodbIcon, reduxIcon],
        links: [
            { url: "https://github.com/imlnr/PetPals", icon: githubIcon, alt: "GitHub" },
            { url: "https://pet-pals-care.vercel.app/", icon: externalLink, alt: "Live Demo" },
        ],
        images: [
            petpals,
            petpalsPet
        ],
    },
    {
        icon: folderIcon,
        title: "Ecommerce-App",
        description: "its a destination for all your online shopping needs!, offering a wide range of products with seamless navigation and secure transactions",
        techList: [reactIcon, cssIcon, expressIcon, nodejsIcon, swaggerIcon, reduxIcon, materialuiIcon],
        links: [
            { url: "https://github.com/imlnr/ecommerce", icon: githubIcon, alt: "GitHub" },
            { url: "https://amijaan.vercel.app/", icon: externalLink, alt: "Live Demo" },
        ],
        images: [
            ecommerce,
            ecommerceProduct,
            ecommerceCart
        ],
    },
    {
        icon: folderIcon,
        title: "SkyDrive",
        description: "SkyDrive is a full-stack cloud file management system — inspired by Google Drive — that allows users to upload, organize, and manage their files and folders seamlessly.",
        techList: [reactIcon, nodejsIcon, expressIcon, mongodbIcon, reduxIcon, shadcnIcon, tailwindIcon],
        links: [
            { url: "https://github.com/imlnr/mysky-drive", icon: githubIcon, alt: "GitHub" },
            { url: "https://youtu.be/NOm-3MynPLE", icon: externalLink, alt: "Demo Video" },
        ],
        images: [

        ],
    }
];

export default projectsData; 