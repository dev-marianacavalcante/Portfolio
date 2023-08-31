import { ContainerCard } from "./styled";

export interface Skill {
  id: number;
  name: string;
  photo: string;
}

export interface SkillProps {
  skill: Skill;
}
export function Skill({ skill }: SkillProps) {
  return (
    <ContainerCard>
      <img src={`/skills/${skill.photo}`} alt="" />
    </ContainerCard>
  );
}
