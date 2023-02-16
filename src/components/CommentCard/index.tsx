import * as Styles from "./styles";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

interface PropsCardComment {
  img?: string;
  title: string;
  paragraph: string;
}

const CommnetCard = ({ img, title, paragraph }: PropsCardComment) => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.ContainerCard>
      <Styles.TitleContent ref={elementRef}>
        {img && <Image src={img} width="48" height="48" />}

        <h6>{title}</h6>
      </Styles.TitleContent>
      <p>{paragraph}</p>
    </Styles.ContainerCard>
  );
};

export default CommnetCard;
