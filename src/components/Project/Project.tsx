import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import SingleProject from "./SingleProject";
import projectsData from "./projectsData";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projectsData.map((project, idx) => (
          <ScrollAnimation animateIn="flipInX" key={project.title + idx}>
            <SingleProject {...project} />
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}