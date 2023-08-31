import { styled } from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h3`
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme.colors["base-text"]};

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ContentMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2.8rem;
  color: ${(props) => props.theme.colors["base-text"]};
`;
export const Link = styled.a`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    color: ${(props) => props.theme.colors["base-text"]};
    -webkit-transform: translateY(-2px);
    transition: all 0.2s ease-in-out;
    transform: translateY(-2px);
  }
  @media (max-width: 1350px) {
    margin-left: 4rem !important;
    margin-right: 4rem !important;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ContentTitle = styled.div`
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors["base-text"]};

  h2 {
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h3 {
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 3.81rem;

  @media (max-width: 480px) {
    margin-right: 0 !important;
    margin-bottom: 2rem;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 0.56rem 2.31rem;
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors["base-white"]};
  background-color: ${(props) => props.theme.colors["base-button"]};

  &:hover {
    background-color: ${(props) => props.theme.colors["base-hover"]};
    transition: 0.3s ease-in-out;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    outline: none;
    border: none;
  }
`;

export const ContentImg = styled.div`
  overflow-clip-margin: content-box;
  overflow: clip;
`;
