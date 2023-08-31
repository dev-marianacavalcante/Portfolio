import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;

  gap: 1rem;
  margin-bottom: 1.25rem;

  p {
    text-align: center;
    color: ${(props) => props.theme.colors["base-text"]};

    font-weight: 400;
    text-align: center;
    flex: 1;
    overflow: hidden;
  }

  @media (max-width: 1350px) {
    margin-left: 4rem !important;
    margin-right: 4rem !important;
  }

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
  margin-bottom: 8rem;
`;

export const TitleAboutMe = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.colors["base-text"]};
`;
