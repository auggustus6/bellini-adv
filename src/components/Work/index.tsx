import CardWork from "../../components/CardWork";
import * as Styles from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Work = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.ContainerWork id="services" ref={elementRef}>
      <h1>Áreas de Atuação Jurídica</h1>
      <Styles.ContainerCard>
        <CardWork
          img="/img/team.svg"
          title="Cívil"
          p="Área do Direito que trata do conjunto de normas nas relações entre pessoas, sejam elas fiscais ou jurídicas."
        />
        <CardWork
          img="/img/paper.svg"
          title="Tributário"
          p="Área referente às obrigações tributárias, arrecadação de impostos, taxas, empréstimos e contribuições especiais"
        />
        <CardWork
          img="/img/trabalhista.svg"
          title="Trabalhista"
          p="Conjunto de normas que regem a relação empregado-empregador e todos os seus direitos e deveres jurídicos."
        />
        <CardWork
          img="/img/societaria.svg"
          title="Societária"
          p="Abrange temas como litígios de sócios, gestão, formação, funcionamento de empresas e extinção de organizações."
        />
      </Styles.ContainerCard>
    </Styles.ContainerWork>
  );
};

export default Work;
