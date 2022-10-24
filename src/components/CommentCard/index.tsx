import * as Styles from "./styles";
import Image from "next/image";

interface PropsCardComment {
  img: string;
  title: string;
  paragraph: string;
}

const CommnetCard = ({ img, title, paragraph }: PropsCardComment) => {
  return (
    <Styles.ContainerCard>
      <Styles.TitleContent>
        <Image src={img} width="48" height="48" />
        <h6>{title}</h6>
      </Styles.TitleContent>
      <p>{paragraph}</p>
    </Styles.ContainerCard>
  );
};

export default CommnetCard;
