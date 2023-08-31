import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleProject = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors["base-text"]};
`;

export const ContainerProjects = styled.div``;
