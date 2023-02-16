import * as Styles from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const ContentContact = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.StylesContact>
      <Styles.ContainerContact ref={elementRef}>
        <h1>Por que os clientes escolhem a Dra. Laura Bellini?</h1>
        <p>
          Ela é altamente capacitada e experiente em questões de Direito Civil.
          Sua vasta experiência permite que ela identifique rapidamente as
          questões principais de um caso e desenvolva uma estratégia eficaz para
          alcançar os melhores resultados possíveis para seus clientes.
        </p>
        {/* <Styles.Box>
          <Styles.Item>
            <p>Experiência</p>
            <p>87</p>
          </Styles.Item>
          <Styles.Item>
            <p>Comunicação</p>
            <p>95%</p>
          </Styles.Item>
          <Styles.Item>
            <p>Empatia</p>
            <p>10</p>
          </Styles.Item>
          <Styles.Item>
            <p>Advogados</p>
            <p>30+</p>
          </Styles.Item>
        </Styles.Box> */}
      </Styles.ContainerContact>
    </Styles.StylesContact>
  );
};

export default ContentContact;
