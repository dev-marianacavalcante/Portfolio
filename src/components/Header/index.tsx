import {
  Button,
  ContainerHeader,
  ContainerMain,
  ContentButton,
  ContentImg,
  ContentMenu,
  ContentTitle,
  Link,
  Title,
} from "./styles";

import Img from "../../assets/martina-programming 1.svg";

export function Header() {
  return (
    <>
      <ContainerHeader>
        <Title>Portfólio</Title>
        <ContentMenu>
          <Link href="#about-me">Sobre mim</Link>
          <Link href="#projects">Projetos</Link>
          <Link href="#skills">Skills</Link>
        </ContentMenu>
      </ContainerHeader>

      <ContainerMain>
        <ContentTitle>
          <h2>
            Olá, eu sou a <br />
            Mariana Cavalcante
          </h2>
          <h3>Desenvolvedora Front-End</h3>
          <ContentButton>
            <a
              href="https://drive.google.com/file/d/1s94OoA80-o0vcoL__zxPrdvSeP0psjv5/view?usp=sharing"
              target="_blank">
              <Button> Download CV</Button>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-marianacavalcante/"
              target="_blank">
              <Button>Entre em contato</Button>
            </a>
          </ContentButton>
        </ContentTitle>
        <ContentImg>
          <img src={Img}></img>
        </ContentImg>
      </ContainerMain>
    </>
  );
}
