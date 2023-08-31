import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors["base-text"]};
  margin-top: rem;
  padding: 1rem;

  p {
    color: ${(props) => props.theme.colors["base-white"]};
    margin: 0;
  }
`;
