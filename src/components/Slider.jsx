import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";
import { useTranslation } from "react-i18next";

const SliderHome = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const { i18n } = useTranslation(); // Récupérer l'objet de traduction
  const currentLang = i18n.language; // Obtenir la langue actuelle (en, fr, ar)

  return (
    <section className="homeSlide">
      <Container>
        <Slider {...settings}>
          {SliderData.map((value, index) => {
            return (
              <SlideCard
                key={index}
                title={value.title[currentLang]} // Récupérer le titre dans la langue active
                cover={value.cover}
                desc={value.desc[currentLang]} // Récupérer la description dans la langue active
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;
