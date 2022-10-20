import CardBlog from "../CardBlog";
import * as Styles from "./styles";

const BlogSection = () => {
  return (
    <Styles.StylesBlog>
      <Styles.ContainerBlog>
        <h4>Blog da Laurete</h4>
        <h1>Notícias</h1>
        <Styles.ContainerCard>
          <CardBlog
            img="../img/blog1.svg"
            title="O que é o Avisó Prévio"
            p="15 de setembro de 2022"
          />
          <CardBlog
            img="../img/blog2.svg"
            title="O que é uma CLT?"
            p="15 de setembro de 2022"
          />
          <CardBlog
            img="../img/blog3.svg"
            title="Bolsonaro sanciona lei que moderniza cartórios"
            p="15 de setembro de 2022"
          />
        </Styles.ContainerCard>
        <a href="#">Mais notícias</a>
      </Styles.ContainerBlog>
    </Styles.StylesBlog>
  );
};

export default BlogSection;
