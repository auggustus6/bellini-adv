import * as Styles from "./styles";
import Image from "next/image";

const Home = () => {
  return (
    <Styles.StylesHome id="home">
      <Styles.ContainerHome>
        <Styles.ContantInfo>
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
