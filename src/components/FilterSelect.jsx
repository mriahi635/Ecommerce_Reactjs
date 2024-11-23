import React from "react";
import Select from "react-select";
import { products } from "../utils/products"; // Assurez-vous que la liste des produits est bien importée

const options = [
  { value: "All", label: "All" },
  { value: "sofa", label: "Sofa" },
  { value: "chair", label: "Chair" },
  { value: "watch", label: "Watch" },
  { value: "mobile", label: "Mobile" },
  { value: "wireless", label: "Wireless" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const handleChange = (selectedOption) => {
    if (selectedOption.value === "All") {
      setFilterList(products); // Afficher tous les produits si "All" est sélectionné
    } else {
      setFilterList(
        products.filter((item) => item.category === selectedOption.value) // Filtrer par catégorie
      );
    }
  };

  return (
    <div>
      <Select
        options={options}
        defaultValue={{ value: "All", label: "Filter By Category" }}
        styles={customStyles}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterSelect;
