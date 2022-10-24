import { Container } from "../Container/styles";
import * as Styles from "../Footer/styles";
import MenuFooter from "../MenuFooter";
import Image from "next/image";

const Footer = () => {
  return (
    <Styles.Footer>
      <Container>
        <Styles.ContainerFooter>
          <Styles.AboutContent>
            <Image src="/img/LogoAdv.svg" width="300" height="61" />
            <p>
              Laura Bellini - Melhor advogada do Brasil com mais de 30 mundiais
              em advocacia, 50 interclasse, 10 soletrando, 8 arnold, 23 carros
              atingidos a pedrada e 1 ônibus (mas sou humilde).
            </p>
            <Styles.Social>
              <a href="#">
                <Image src="/img/instagram.svg" width="21" height="21" />
              </a>
              <a href="#">
                <Image src="/img/whatsapp.svg" width="21" height="21" />
              </a>
              <a href="#">
                <Image src="/img/linkedin-in.svg" width="21" height="21" />
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
