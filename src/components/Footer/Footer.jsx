import React from "react"
import { useTranslation } from "react-i18next"; // Importer useTranslation
import { Col, Container, Row } from "react-bootstrap"
import "./style.css"

const Footer = () => {
  const { t } = useTranslation(); // Récupérer la fonction t pour la traduction

  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className='box'>
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>MarouaneShop</h1>
            </div>
            <p>{t('footer.footerDescription')}</p> {/* Traduction du texte */}
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>{t('footer.aboutUs')}</h2> {/* Traduction de About Us */}
            <ul>
              <li>{t('footer.careers')}</li>
              <li>{t('footer.ourStores')}</li>
              <li>{t('footer.ourCares')}</li>
              <li>{t('footer.termsAndConditions')}</li>
              <li>{t('footer.privacyPolicy')}</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>{t('footer.customerCare')}</h2> {/* Traduction de Customer Care */}
            <ul>
              <li>{t('footer.helpCenter')}</li>
              <li>{t('footer.howToBuy')}</li>
              <li>{t('footer.trackYourOrder')}</li>
              <li>{t('footer.bulkPurchasing')}</li>
              <li>{t('footer.returnsAndRefunds')}</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>{t('footer.contactUs')}</h2> {/* Traduction de Contact Us */}
            <ul>
              <li>{t('footer.address')}</li>
              <li>{t('footer.email')}</li>
              <li>{t('footer.phone')}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
