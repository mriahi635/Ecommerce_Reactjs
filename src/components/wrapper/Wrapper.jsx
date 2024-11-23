import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { serviceData } from "../../utils/products";
import { useTranslation } from "react-i18next";

const Wrapper = () => {
  const { i18n } = useTranslation(); // Récupérer l'objet de traduction
  const currentLang = i18n.language; // Langue actuelle
  console.log("Current Language:", currentLang); // Pour déboguer la langue actuelle

  return (
    <section className="wrapper background">
      <Container>
        <Row>
          {serviceData.map((val, index) => {
            const title = val.title[currentLang] || val.title.en; // Fallback si la langue n'existe pas
            const subtitle = val.subtitle[currentLang] || val.subtitle.en; // Fallback pour le sous-titre

            // Log les données de titre et sous-titre pour vérifier leur contenu
            console.log("Title:", title);
            console.log("Subtitle:", subtitle);

            return (
              <Col
                md={3}
                sm={5}
                xs={9}
                style={{ backgroundColor: val.bg }}
                className="feature"
                key={val.id || index}
              >
                <div className="icon">{val.icon}</div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
