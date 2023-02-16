import Slider from "../Slider/Slider";
import * as Styles from "./styles";
import { SwiperSlide, SwiperProps } from "swiper/react";
import CommnetCard from "../CommentCard";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const OurClientes = () => {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: false,
    breakpoints: {
      500: {
        slidesPerView: 3,
      },
    },
    pagination: {
      clickable: true,
    },
  };

  const elementRef = useAnimateOnScroll();

  return (
    <Styles.StylesClients id="culture">
      <Styles.ContainerClients ref={elementRef}>
        <h4>Com a palavra</h4>
        <h1>Nossos Clientes</h1>

        <Styles.ContainerSlide>
          <Slider settings={settings}>
            <SwiperSlide>
              <CommnetCard
                title="Carlos Augusto - CEO Inicio Design"
                paragraph="Conheci a Dra. Laura Bellini através de um amigo que recomendou seus serviços para resolver um problema envolvendo um contrato de locação. Fiquei impressionado com a atenção e cuidado que ela teve em entender todos os detalhes do meu caso e elaborar um plano de ação claro e eficiente. Sua vasta experiência na área do Direito Civil me deu a confiança que precisava para enfrentar o problema com tranquilidade. O resultado foi melhor do que esperava e eu sou grato pelo seu excelente trabalho."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommnetCard
                title="Leticia Souza - Professora Pilates"
                paragraph="Eu tive o prazer de trabalhar com a Dra. Laura Bellini em um caso complexo envolvendo uma questão de responsabilidade civil. Sua capacidade de análise e sua habilidade em lidar com as complexidades do caso foram impressionantes. Sua comunicação clara e transparente me permitiu entender todo o processo e me sentir seguro em relação às minhas opções. Seu trabalho duro e comprometimento resultaram em um desfecho positivo para mim. Recomendo seus serviços altamente."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommnetCard
                title="Solange Soares - Gerente Portobello"
                paragraph="Eu fui recomendado para a Dra. Laura Bellini para tratar de questões relacionadas à sucessão de um parente falecido. Sua compreensão e empatia com a minha situação foram excepcionais. Ela lidou com todas as questões legais de forma eficiente e com um grande senso de responsabilidade. Sempre disposta a me ouvir e responder a todas as minhas perguntas, ela tornou o processo muito menos estressante do que poderia ter sido. Estou muito agradecido pelo seu trabalho e recomendo seus serviços para qualquer pessoa que precise de ajuda em questões de direito civil."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CommnetCard
                title="Mauricio - CEO Baby Care Shop"
                paragraph="A Dra. Laura Bellini foi recomendada para mim por um amigo e eu não poderia estar mais satisfeito com seus serviços. Ela foi extremamente atenciosa em entender a minha situação e forneceu aconselhamento jurídico de primeira linha. Sua vasta experiência e conhecimento em Direito Civil foram evidentes em cada etapa do processo e me deram a tranquilidade necessária para enfrentar a situação com confiança. Seu compromisso em alcançar os melhores resultados possíveis foi muito apreciado. Eu definitivamente recomendaria seus serviços a qualquer pessoa que precise de ajuda em questões de direito civil."
              />
            </SwiperSlide>
          </Slider>
        </Styles.ContainerSlide>
      </Styles.ContainerClients>
    </Styles.StylesClients>
  );
};

export default OurClientes;
