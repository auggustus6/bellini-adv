import * as Styles from "./styles";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

interface PropsCard {
  img: string;
  title: string;
  p: string;
}

const CardWork = ({ img, title, p }: PropsCard) => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.Card ref={elementRef}>
      <Styles.CardContent>
        <Image src={img} width="64" height="64" />
        <h3>{title}</h3>
        <p>{p}</p>
        <a href="#">Saiba Mais</a>
      </Styles.CardContent>
    </Styles.Card>
  );
};

export default CardWork;
