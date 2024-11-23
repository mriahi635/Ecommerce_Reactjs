import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importer le hook i18n

const OrderConfirmation = () => {
    const { t } = useTranslation(); // Initialiser les traductions
    const location = useLocation();
    const navigate = useNavigate();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const orderDetails = location.state?.orderDetails || {};

    const handleConfirmation = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            navigate('/'); // Redirige vers la page d'accueil après 3 secondes
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    {t('orderConfirmation.title')}
                </h3>
                <div className="mb-4">
                    <p className="text-sm text-gray-600">
                        <strong>{t('orderConfirmation.name')} :</strong> {orderDetails.fullName}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>{t('orderConfirmation.email')} :</strong> {orderDetails.email}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>{t('orderConfirmation.phone')} :</strong> {orderDetails.phoneNumber}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>{t('orderConfirmation.address')} :</strong> {orderDetails.address}, {orderDetails.city}, {orderDetails.state} {orderDetails.zipCode}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-sm text-gray-600">
                        <strong>{t('orderConfirmation.paymentCard')} :</strong>{' '}
                        {orderDetails.cardNumber?.replace(/\d(?=\d{4})/g, '*')}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>{t('orderConfirmation.cardName')} :</strong> {orderDetails.cardName}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>{t('orderConfirmation.expiry')} :</strong> {orderDetails.expMonth}/{orderDetails.expYear}
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-xl text-gray-800 font-bold">
                        {t('orderConfirmation.total')} : ${orderDetails.totalPrice}
                    </p>
                </div>

                {showSuccessMessage && (
                    <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                        <strong className="font-bold">{t('orderConfirmation.success.title')} </strong>
                        <span className="block sm:inline">
                            {t('orderConfirmation.success.message')}
                        </span>
                    </div>
                )}

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleConfirmation}
                        className="px-6 py-2 bg-green-500 text-white text-sm font-medium rounded shadow-md hover:bg-green-600 transition duration-200"
                    >
                        {t('orderConfirmation.confirmButton')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
