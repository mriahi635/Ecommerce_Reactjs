import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { products as initialProducts } from "../../utils/products"; // Import des produits

const AdminDashboard = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // État local pour gérer les produits
  const [products, setProducts] = useState(initialProducts);

  // Gestion de l'ouverture du formulaire
  const [isFormOpen, setIsFormOpen] = useState(false);

  // État pour le formulaire
  const [newProduct, setNewProduct] = useState({
    id: Date.now(),
    productName: { en: "", fr: "", ar: "" },
    imgUrl: "",
    category: "",
    price: 0,
    shortDesc: "",
    description: "",
    reviews: [],
    avgRating: 0,
  });

  const [editProductId, setEditProductId] = useState(null);

  // Ajouter ou modifier un produit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProductId) {
      // Modifier un produit existant
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editProductId ? newProduct : product
        )
      );
      setEditProductId(null);
    } else {
      // Ajouter un nouveau produit
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }

    // Réinitialiser le formulaire
    setNewProduct({
      id: Date.now(),
      productName: { en: "", fr: "", ar: "" },
      imgUrl: "",
      category: "",
      price: 0,
      shortDesc: "",
      description: "",
      reviews: [],
      avgRating: 0,
    });
    setIsFormOpen(false);
  };

  // Supprimer un produit
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Modifier un produit
  const handleEditProduct = (product) => {
    setNewProduct(product);
    setEditProductId(product.id);
    setIsFormOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">Total Products</p>
            <p className="text-4xl">{products.length}</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">Products in Stock</p>
            <p className="text-4xl">{products.filter((p) => p.price > 0).length}</p>
          </div>
          <div className="bg-yellow-600 text-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">Popular Products</p>
            <p className="text-4xl">{products.filter((p) => p.avgRating >= 4.5).length}</p>
          </div>
        </div>

        {/* Liste des produits */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product List</h2>
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-gray-700">Name</th>
              <th className="py-3 px-6 text-left text-gray-700">Category</th>
              <th className="py-3 px-6 text-left text-gray-700">Price</th>
              <th className="py-3 px-6 text-left text-gray-700">Rating</th>
              <th className="py-3 px-6 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-4 px-6 text-gray-700">{product.productName[currentLang]}</td>
                <td className="py-4 px-6 text-gray-700">{product.category}</td>
                <td className="py-4 px-6 text-gray-700">${product.price}</td>
                <td className="py-4 px-6 text-gray-700">{product.avgRating}</td>
                <td className="py-4 px-6">
                  <button
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md mr-2"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-md"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Formulaire pour ajouter ou modifier un produit */}
        <div className="mt-6">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md"
          >
            {isFormOpen ? "Close Form" : "Add Product"}
          </button>
        </div>

        {isFormOpen && (
          <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-700">Name (EN)</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={newProduct.productName.en}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        productName: { ...newProduct.productName, en: e.target.value },
                      })
                    }
                    required
                  />
                </div>
                {/* Autres champs */}
                <div className="mt-6 flex justify-end">
                  <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md">
                    {editProductId ? "Update Product" : "Add Product"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
