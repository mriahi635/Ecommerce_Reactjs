import React from 'react';
import { discoutProducts, products } from '../../utils/products'; // Assurez-vous que le chemin est correct
import { useTranslation } from "react-i18next";

const ProductsPage = () => {
  const { i18n } = useTranslation(); // Récupérer l'objet de traduction
  const currentLang = i18n.language; // Obtenir la langue actuelle (en, fr, ar)
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Produits</h1>
      
      {/* Liste des produits sans remise */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Produits sans remise</h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-700">Nom</th>
            <th className="py-3 px-6 text-left text-gray-700">Catégorie</th>
            <th className="py-3 px-6 text-left text-gray-700">Prix</th>
            <th className="py-3 px-6 text-left text-gray-700">Évaluation</th>
            <th className="py-3 px-6 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Liste des produits classiques */}
          {products.map(product => (
            <tr key={product.id} className="border-b">
              <td className="py-4 px-6 text-gray-700">{product.productName[currentLang]}</td>
              <td className="py-4 px-6 text-gray-700">{product.category}</td>
              <td className="py-4 px-6 text-gray-700">${product.price}</td>
              <td className="py-4 px-6 text-gray-700">{product.avgRating}</td>
              <td className="py-4 px-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Modifier</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Liste des produits avec remise */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Produits avec remise</h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-700">Nom</th>
            <th className="py-3 px-6 text-left text-gray-700">Catégorie</th>
            <th className="py-3 px-6 text-left text-gray-700">Prix</th>
            <th className="py-3 px-6 text-left text-gray-700">Remise (%)</th>
            <th className="py-3 px-6 text-left text-gray-700">Évaluation</th>
            <th className="py-3 px-6 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Liste des produits avec remise */}
          {discoutProducts.map(product => (
            <tr key={product.id} className="border-b">
              <td className="py-4 px-6 text-gray-700">{product.productName[currentLang]}</td>
              <td className="py-4 px-6 text-gray-700">{product.category}</td>
              <td className="py-4 px-6 text-gray-700">${product.price}</td>
              <td className="py-4 px-6 text-gray-700">{product.discount}%</td>
              <td className="py-4 px-6 text-gray-700">{product.avgRating}</td>
              <td className="py-4 px-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Modifier</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
