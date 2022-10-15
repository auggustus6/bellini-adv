import * as Styles from "./styles";

interface PropsCard {
  img: string;
  title: string;
  p: string;
}

const CardWork = ({ img, title, p }: PropsCard) => {
  return (
    <Styles.Card>
      <Styles.CardContent>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{p}</p>
        <a href="#">Saiba Mais</a>
      </Styles.CardContent>
    </Styles.Card>
  );
};

export default CardWork;
