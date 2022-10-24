import * as Styles from "./styles";
import Image from "next/image";

const About = () => {
  return (
    <Styles.StylesAbout id="about">
      <Styles.ContainerAbout>
        <Image src="/img/laura.svg" width="621" height="696" />
        <Styles.ContentAbout>
          <h4>Minha história</h4>
          <h1>Sobre mim</h1>
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
            <br />
            <br />
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.{" "}
          </p>
          <a href="#">Saiba mais</a>
        </Styles.ContentAbout>
      </Styles.ContainerAbout>
    </Styles.StylesAbout>
  );
};

export default About;
