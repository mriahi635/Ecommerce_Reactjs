import { useState, useEffect } from "react";
import "./searchbar.css";
import { products } from "../../utils/products";

const SearchBar = ({ setFilterList, selectedLanguage = "en" }) => {
  const [searchWord, setSearchWord] = useState("");

  // Fonction pour rechercher dans toutes les langues ou dans la langue spécifiée
  const searchInProductName = (productName) => {
    // Vérifier si productName est un objet avec plusieurs langues
    if (typeof productName === "object") {
      // Rechercher dans la langue spécifiée (par défaut "en")
      return (
        productName[selectedLanguage] &&
        productName[selectedLanguage].toLowerCase().includes(searchWord.toLowerCase())
      );
    }
    return false;
  };

  // Filtrer les produits chaque fois que searchWord change
  useEffect(() => {
    if (searchWord === "") {
      setFilterList(products); // Si la barre de recherche est vide, afficher tous les produits
    } else {
      const filteredProducts = products.filter((item) => {
        // Rechercher dans productName pour chaque produit
        return searchInProductName(item.productName);
      });

      // Si aucun produit n'est trouvé, afficher une liste vide
      if (filteredProducts.length === 0) {
        setFilterList([]);
      } else {
        setFilterList(filteredProducts); // Mettre à jour la liste des produits filtrés
      }
    }
  }, [searchWord, setFilterList, selectedLanguage]);

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchWord(query); // Mettre à jour le mot-clé de recherche à chaque modification
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchWord} // Utilisation de `searchWord` pour contrôler la valeur du champ
        onChange={handleChange} // Gestion de la saisie de l'utilisateur
      />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
