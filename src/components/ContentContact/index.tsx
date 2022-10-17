import * as Styles from "./styles";

const ContentContact = () => {
  return (
    <Styles.StylesContact>
      <Styles.ContainerContact>
        <h4>Somos especialistas</h4>
        <h1>Por que os clientes nos escolhem?</h1>
        <p>
          Nosso corpo de advogados é composto por profissionais atenciosos e
          capacitados a atender casos de consultoria empresarial, fiscal,
          trabalhista e de contencioso cível com maestria.
        </p>
        <Styles.Box>
          <Styles.Item>
            <p>Consultas de Clientes</p>
            <p>1000+</p>
          </Styles.Item>
          <Styles.Item>
            <p>Casos de Sucesso</p>
            <p>95%</p>
          </Styles.Item>
          <Styles.Item>
            <p>Custo Recuperado para Clientes</p>
            <p>10</p>
          </Styles.Item>
          <Styles.Item>
            <p>Advogados</p>
            <p>30+</p>
          </Styles.Item>
        </Styles.Box>
      </Styles.ContainerContact>
    </Styles.StylesContact>
  );
};

export default ContentContact;
