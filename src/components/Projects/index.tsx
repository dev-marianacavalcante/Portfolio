import { project } from "../../data/project";
import { Project } from "../Project";
import { ContainerGrid, ContainerProjects, TitleProject } from "./styles";

export function Projects() {
  return (
    <ContainerProjects>
      <TitleProject id="projects">Projetos</TitleProject>
      <ContainerGrid>
        {project.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </ContainerGrid>
    </ContainerProjects>
  );
}
