import * as Styles from "./styles";

interface PropsCardComment {
  img: string;
  title: string;
  paragraph: string;
}

const CommnetCard = ({ img, title, paragraph }: PropsCardComment) => {
  return (
    <Styles.ContainerCard>
      <Styles.TitleContent>
        <img src={img} alt="" />
        <h6>{title}</h6>
      </Styles.TitleContent>
      <p>{paragraph}</p>
    </Styles.ContainerCard>
  );
};

export default CommnetCard;
