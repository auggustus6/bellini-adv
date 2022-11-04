import * as Styles from "./styles";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const About = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.StylesAbout id="about">
      <Styles.ContainerAbout>
        <Image src="/img/laura.svg" width="621" height="696" />
        <Styles.ContentAbout ref={elementRef}>
          <h4>Minha história</h4>
          <h1>Sobre mim</h1>
          <p>
            Nascida em 24 de Agosto de 1994, formada em Direito pelo Centro
            Universitário de Rio Preto (UNIP) com cursos complementares de
            formação de Direito contratual pela Fundação Getúlio Vargas (FGV).
            <br />
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5517992301031&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noreferrer"
          >
            Saiba mais
          </a>
        </Styles.ContentAbout>
      </Styles.ContainerAbout>
    </Styles.StylesAbout>
  );
};

export default About;
