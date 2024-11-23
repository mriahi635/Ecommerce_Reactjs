import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";
import { useTranslation } from "react-i18next";
const ProductDetails = ({ selectedProduct }) => {
  const { i18n } = useTranslation(); // Récupérer l'objet de traduction
  const currentLang = i18n.language; // Obtenir la langue actuelle (en, fr, ar)
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Assure que la quantité ne descend pas sous 1
    setQuantity(value);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1)); // Assure que la quantité reste au minimum de 1
  };

  const handelAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct?.imgUrl} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName[currentLang]}</h2>
            <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div>
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              <span>category: {selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.shortDesc[currentLang]}</p>
            <div className="qty-container">
              <button className="qty-btn minus" onClick={decrementQuantity}>
                -
              </button>
              <input
                className="qty-input"
                type="number"
                placeholder="Qty"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                disabled
              />
              <button className="qty-btn plus" onClick={incrementQuantity}>
                +
              </button>
            </div>
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(selectedProduct, quantity)}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
