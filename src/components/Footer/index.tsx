import { Container } from "../Container/styles";
import * as Styles from "../Footer/styles";
import MenuFooter from "../MenuFooter";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Footer = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.Footer ref={elementRef}>
      <Container>
        <Styles.ContainerFooter>
          <Styles.AboutContent>
            <Image src="/img/LogoAdv.svg" width="300" height="61" />
            <p>Dra. Laura Bellini - Advogada OAB/SP 467.215</p>
            <Styles.Social>
              <a
                href="https://www.instagram.com/laurabelliniadv/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/img/instagram.svg" width="21" height="21" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5517992301031&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/img/whatsapp.svg" width="21" height="21" />
              </a>
              <a
                href="https://www.linkedin.com/in/laura-maria-bellini-692aaa170/"
                target="_blank"
                rel="noreferrer"
              >
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
