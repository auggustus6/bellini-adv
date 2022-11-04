import * as Styles from "./styles";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Home = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.StylesHome id="home" ref={elementRef}>
      <Styles.ContainerHome>
        <Styles.ContantInfo ref={elementRef}>
          <h1>Você veio ao lugar certo</h1>
          <p>Comprometida em solucionar seu problema!</p>
          <a
            href="https://api.whatsapp.com/send?phone=5517992301031&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noreferrer"
          >
            Entrar em contato
          </a>
        </Styles.ContantInfo>
        <Styles.ContantImg>
          <Image src="/img/Home.svg" width="780" height="820" />
        </Styles.ContantImg>
      </Styles.ContainerHome>
    </Styles.StylesHome>
  );
};

export default Home;
