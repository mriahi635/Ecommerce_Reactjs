import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FormInput from '../../components/login/FormInput';
import './SignIn.css';

const SignIn = () => {
  const { t } = useTranslation(); // Traduction
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const adminUser = { email: 'marwan@admin.com', password: 'admin1234' };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(t('fieldsRequired')); // Message d'erreur pour les champs manquants
    } else if (email !== adminUser.email) {
      setError(t('incorrectEmail')); // Message d'erreur pour un email incorrect
    } else if (password !== adminUser.password) {
      setError(t('incorrectPassword')); // Message d'erreur pour un mot de passe incorrect
    } else {
      localStorage.setItem('role', 'admin');
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">{t('login.signIn')}</h2>
        {error && (
          <div className="alert alert-danger text-center mb-4" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <FormInput
            label={t('login.email')} // Traduction du label
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('login.enterEmail')} // Traduction du placeholder
            required
            className="input-field"
          />
          <FormInput
            label={t('login.password')} // Traduction du label
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('login.enterPassword')} // Traduction du placeholder
            required
            className="input-field"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {t('login.signIn')} 
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            {t('login.dontHaveAccount')} <Link to="/signup" className="text-blue-500">{t('login.createAccount')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
