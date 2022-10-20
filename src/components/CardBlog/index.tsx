import * as Styles from "./styles";

interface PropsCardBlog {
  img: string;
  title: string;
  p: string;
}

const CardBlog = ({ img, title, p }: PropsCardBlog) => {
  return (
    <Styles.CardBlog>
      <img src={img} alt="" />
      <Styles.Content>
        <h2>{title}</h2>
      </Styles.Content>
      <p>{p}</p>
    </Styles.CardBlog>
  );
};

export default CardBlog;
