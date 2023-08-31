import { skills } from "../../data/skills";
import { Skill } from "../Skill";
import { ContainerGrid, ContainerSkills, TitleSkills } from "./styles";

export function Skills() {
  return (
    <ContainerSkills>
      <TitleSkills id="skills">Minhas skills</TitleSkills>
      <ContainerGrid>
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </ContainerGrid>
    </ContainerSkills>
  );
}
