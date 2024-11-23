import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import accepted from './images/card_img.png';
import { useTranslation } from "react-i18next";

const PaymentForm = () => {
    const { t } = useTranslation(); // Hook pour la traduction
    const location = useLocation();
    const navigate = useNavigate();
    const { totalPrice } = location.state || {};

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        cardName: "",
        cardNumber: "",
        cvv: "",
        expMonth: "",
        expYear: "",
    });

    const regex = {
        phone: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        cardNumber: /^[0-9]{16}$/,
        cvv: /^[0-9]{3}$/,
        zipCode: /^[0-9]{5}$/,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckout = () => {
        navigate("/OrderConfirmation", { state: { orderDetails: formData } });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
                <h3 className="text-xl font-bold text-center text-gray-800 mb-6 uppercase">
                    {t('paymentForm.title')}
                </h3>
                <div className="flex flex-wrap gap-6">
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase">
                            {t('paymentForm.billing.title')}
                        </h3>
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.billing.fullName')}
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.billing.email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    pattern={regex.email.source}
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.billing.phone')}
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    pattern={regex.phone.source}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.billing.address')}
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.billing.city')}
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.billing.state')}
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.billing.zipCode')}
                                </label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    pattern={regex.zipCode.source}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase text-center">
                            {t('paymentForm.payment.method')}
                        </h3>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-600 mb-2">
                                {t('paymentForm.payment.acceptedCards')}
                            </label>
                            <img
                                src={accepted}
                                alt={t('paymentForm.payment.acceptedCards')}
                                className="h-8 mx-auto"
                            />
                        </div>
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.payment.cardName')}
                                </label>
                                <input
                                    type="text"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.payment.cardNumber')}
                                </label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    pattern={regex.cardNumber.source}
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.payment.cvv')}
                                </label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    pattern={regex.cvv.source}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.payment.expMonth')}
                                </label>
                                <input
                                    type="text"
                                    name="expMonth"
                                    value={formData.expMonth}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">
                                    {t('paymentForm.payment.expYear')}
                                </label>
                                <input
                                    type="text"
                                    name="expYear"
                                    value={formData.expYear}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleCheckout}
                    className="mt-8 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                    {t('paymentForm.payment.checkout')}
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;
