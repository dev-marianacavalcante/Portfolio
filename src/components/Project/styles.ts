import styled from "styled-components";

export const ContainerCard = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.colors["base-background"]};
  width: 400px;
  height: 30rem;
  color: ${(props) => props.theme.colors["base-text"]};

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

export const ContentImg = styled.img`
  display: flex;
  width: 100%;
  height: 70%;
  margin-bottom: 1.5rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;
export const ContentDescription = styled.div``;
