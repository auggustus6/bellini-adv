import { Container } from "../Container/styles";
import * as Styles from "../Footer/styles";
import MenuFooter from "../MenuFooter";

const Footer = () => {
  return (
    <Styles.Footer>
      <Container>
        <Styles.ContainerFooter>
          <Styles.AboutContent>
            <img src="../img/LogoAdv.svg" alt="Logomarca" />
            <p>
              Laura Bellini - Melhor advogada do Brasil com mais de 30 mundiais
              em advocacia, 50 interclasse, 10 soletrando, 8 arnold, 23 carros
              atingidos a pedrada e 1 ônibus (mas sou humilde).
            </p>
            <Styles.Social>
              <a href="#">
                <img src="../img/instagram.svg" alt="" />
              </a>
              <a href="#">
                <img src="../img/whatsapp.svg" alt="" />
              </a>
              <a href="#">
                <img src="../img/linkedin-in.svg" alt="" />
              </a>
            </Styles.Social>
          </Styles.AboutContent>
          <MenuFooter />
        </Styles.ContainerFooter>
      </Container>

      <Styles.ContainerCopy>
        <p>© 2022 Laura Bellini - Todos os direitos reservados</p>
      </Styles.ContainerCopy>
    </Styles.Footer>
  );
};

export default Footer;
