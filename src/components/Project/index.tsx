import { ContainerCard, ContentDescription, ContentImg } from "./styles";

export interface Project {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export interface ProjectProps {
  project: Project;
}

export function Project({ project }: ProjectProps) {
  return (
    <>
      <ContainerCard>
        <ContentImg src={project.photo}></ContentImg>
        <ContentDescription>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </ContentDescription>
      </ContainerCard>
    </>
  );
}
