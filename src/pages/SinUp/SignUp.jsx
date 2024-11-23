import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FormInput from '../../components/login/FormInput';

const SignUp = () => {
  const { t } = useTranslation(); // Traduction
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Simuler l'inscription de l'utilisateur
      localStorage.setItem('role', 'client');
      navigate('/shop'); // Après l'inscription, redirige vers la boutique
    } else {
      setError(t('fillAllFields')); // Utilisation de i18n pour le message d'erreur
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">{t('login.signUp')}</h2>
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <FormInput
            label={t('login.name')}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('login.enterName')}
            required
            className="mb-4"
          />
          <FormInput
            label={t('login.email')}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('login.enterEmail')}
            required
            className="mb-4"
          />
          <FormInput
            label={t('login.password')}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('login.enterPassword')}
            required
            className="mb-6"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {t('login.signUp')}
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            {t('login.alreadyHaveAccount')} <Link to="/signin" className="text-blue-500">{t('login.signIn')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
