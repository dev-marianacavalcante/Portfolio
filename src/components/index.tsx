import { AboutMe } from "./AboutMe";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Container, ContainerFooter } from "./styles";

export function Portifolio() {
  return (
    <>
      <Container>
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
      </Container>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </>
  );
}
