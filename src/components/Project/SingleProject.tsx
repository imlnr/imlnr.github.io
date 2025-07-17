import React from "react";
import ImageCarousel from "./ImageCarousel";

interface ProjectLink {
    url: string;
    icon: string;
    alt: string;
}

export interface SingleProjectProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    techList: string[];
    links: ProjectLink[];
    images: string[];
}

const SingleProject: React.FC<SingleProjectProps> = ({
    icon,
    title,
    description,
    techList,
    links,
    images
}) => (
    <div className="project">
        <ImageCarousel images={images} />
        <header>
            {/* {icon} */}
            <div style={{ height: "10px", width: "10px" }}></div>
            <div className="project-links">
                {links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                        <img src={link.icon} alt={link.alt} />
                    </a>
                ))}
            </div>
        </header>
        <div className="body">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <footer>
            <ul className="tech-list">
                {techList.map((tech, idx) => (
                    // <li key={idx}>{tech}</li>
                    // { tech }
                    <img src={tech} alt={tech} style={{ width: "25px", height: "25px" }} />
                ))}
            </ul>
        </footer>
    </div>
);

export default SingleProject; 