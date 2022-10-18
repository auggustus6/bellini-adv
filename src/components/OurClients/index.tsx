import Slider from "../Slider/Slider";
import * as Styles from "./styles";
import { SwiperSlide, SwiperProps } from "swiper/react";
import CommnetCard from "../CommentCard";

const OurClientes = () => {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
      clickable: true,
    },
  };

  return (
    <Styles.StylesClients>
      <Styles.ContainerClients>
        <h4>Com a palavra</h4>
        <h1>Nossos Clientes</h1>
        <p>
          Nosso corpo de advogados é composto por profissionais atenciosos e
          capacitados a atender casos de consultoria empresarial, fiscal,
          trabalhista e de contencioso cível com maestria.
        </p>
        <Styles.ContainerSlide>
          <Slider settings={settings}>
            <SwiperSlide>
              <CommnetCard
                img="../img/card1.svg"
                title="Darlene Robertson"
                paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommnetCard
                img="../img/card2.svg"
                title="Jacob Jones"
                paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommnetCard
                img="../img/card3.svg"
                title="Esther Howard"
                paragraph="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommnetCard
                img="../img/card4.svg"
                title="Esther Howard"
                paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </SwiperSlide>
          </Slider>
        </Styles.ContainerSlide>
      </Styles.ContainerClients>
    </Styles.StylesClients>
  );
};

export default OurClientes;
