import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  align-items: center;
  gap: 2rem;
`;

export const ContainerSkills = styled.div`
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 5rem;
`;

export const TitleSkills = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors["base-text"]};
`;
