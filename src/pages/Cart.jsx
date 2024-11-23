import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, deleteProduct } from "../app/features/cart/cartSlice";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t, i18n } = useTranslation(); // Accès à la traduction
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calcul du prix total
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // Synchronisation avec le localStorage pour persister le panier
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">
                {t("cart.noItems")} {/* Traduction */}
              </h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img
                        src={item.imgUrl}
                        alt={
                          item.productName && item.productName[i18n.language]
                            ? item.productName[i18n.language]
                            : t("cart.noItems")
                        }
                      />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>
                            {item.productName && item.productName[i18n.language]
                              ? item.productName[i18n.language]
                              : t("cart.noItems")}
                          </h3>
                          <h4>
                            ${item.price}.00 * {item.qty}
                            <span>${productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>{t("cart.cartSummary")}</h2> {/* Traduction */}
              <div className="d_flex">
                <h4>{t("cart.totalPrice")}</h4> {/* Traduction */}
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
            </div>
            <Link to="/payment" state={{ totalPrice }}>
              <button className="proceed-to-checkout">
                {t("cart.proceedToCheckout")} {/* Traduction */}
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
