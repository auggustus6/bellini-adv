import * as Styles from "./styles";
import Image from "next/image";

interface PropsCardBlog {
  img: string;
  title: string;
  p: string;
}

const CardBlog = ({ img, title, p }: PropsCardBlog) => {
  return (
    <Styles.CardBlog>
      <Image src={img} width="426" height="260" />
      <Styles.Content>
        <h2>{title}</h2>
      </Styles.Content>
      <p>{p}</p>
    </Styles.CardBlog>
  );
};

export default CardBlog;
