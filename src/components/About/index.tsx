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
          <h4>Sobre a Dra. Laura Bellini</h4>
          <span>OAB/SP 467.215</span>
          <br />

          <p>
            Dra. Laura é uma advogada especializada em Direito Civil, uma área
            do Direito que abrange diversas questões relacionadas às relações
            entre pessoas e empresas. Com vasta experiência e conhecimento na
            área, ela é uma profissional altamente capacitada e dedicada a
            oferecer aos seus clientes o melhor serviço possível.
            <br />
            <br />
          </p>

          <p>
            O trabalho da Dra. Laura como advogada começa com a análise
            cuidadosa do caso de cada cliente. Ela ouve atentamente seus
            clientes, entende suas necessidades e objetivos, e então elabora um
            plano de ação para atingir os resultados desejados. Seu objetivo é
            ajudar seus clientes a resolver seus problemas de forma eficiente e
            eficaz, buscando sempre a melhor solução para cada situação.
            <br />
            <br />
          </p>

          <p>
            No âmbito do Direito Civil, ela trabalha em questões envolvendo
            contratos, responsabilidade civil, indenizações, obrigações, direito
            de família, sucessões, entre outros. Seu amplo conhecimento na área
            permite que ela atue de forma precisa e eficaz, ajudando seus
            clientes a encontrar a melhor solução para cada caso.
            <br />
            <br />
          </p>

          <p>
            Além disso, Dra. Laura preza pela comunicação transparente e clara
            com seus clientes, mantendo-os sempre informados sobre o andamento
            do processo e as possíveis opções disponíveis. Ela está sempre
            disponível para esclarecer dúvidas e fornecer aconselhamento
            jurídico, ajudando seus clientes a tomar decisões informadas e bem
            fundamentadas.
            <br />
            <br />
          </p>

          <p>
            Com sua vasta experiência e conhecimento, Dra. Laura é uma advogada
            altamente qualificada para atuar na área do Direito Civil. Sua
            dedicação, comprometimento e atenção aos detalhes garantem aos seus
            clientes a melhor representação possível, oferecendo-lhes confiança
            e tranquilidade em um momento muitas vezes delicado e complexo.
            <br />
            <br />
          </p>
        </Styles.ContentAbout>
      </Styles.ContainerAbout>
    </Styles.StylesAbout>
  );
};

export default About;
