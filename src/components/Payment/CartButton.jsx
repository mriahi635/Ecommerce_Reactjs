import React from "react";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
    const navigate = useNavigate();

    const handlePaymentRedirect = () => {
        navigate("/payment");
    };

    return (
        <button onClick={handlePaymentRedirect} className="cart-button">
            Go to Payment
        </button>
    );
};

export default CartButton;
