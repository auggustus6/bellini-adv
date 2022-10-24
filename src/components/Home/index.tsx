import * as Styles from "./styles";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Home = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.StylesHome id="home" ref={elementRef}>
      <Styles.ContainerHome>
        <Styles.ContantInfo ref={elementRef}>
          <h1>Vou jogar pedra em todos os agressor de dog.</h1>
          <p>Confia na mãe que dá bom.</p>
          <a href="#">Fazer contato</a>
        </Styles.ContantInfo>
        <Styles.ContantImg>
          <Image src="/img/Home.svg" width="780" height="820" />
        </Styles.ContantImg>
      </Styles.ContainerHome>
    </Styles.StylesHome>
  );
};

export default Home;
