import React, { useState } from "react";
import styled from "styled-components";
import ProductList from "./Components/ProductList";
import Filter from "./Components/Filter";
import Sort from "./Components/Sort";
import Pagination from "./Components/Pagination";

const productsData = [
  {
    id: 1,
    title: "Bag",
    description: "Description for Product 1.",
    price: 19.99,
    category: "clothing",
    image: "assets/Bag.jpg",
  },
  {
    id: 2,
    title: "Belt",
    description: "Description for Product 2.",
    price: 29.99,
    category: "clothing",
    image: "assets/Belt.jpg",
  },
  {
    id: 3,
    title: "Keyboard",
    description: "Description for Product 3.",
    price: 39.99,
    category: "electronics",
    image: "assets/Keyboard.jpg",
  },
  {
    id: 4,
    title: "Cap",
    description: "Description for Product 4.",
    price: 49.99,
    category: "clothing",
    image: "assets/Cap.jpg",
  },
  {
    id: 5,
    title: "Hat",
    description: "Description for Product 5.",
    price: 59.99,
    category: "clothing",
    image: "assets/Hat.jpg",
  },
  {
    id: 6,
    title: "Purse",
    description: "Description for Product 6.",
    price: 69.99,
    category: "clothing",
    image: "assets/Purse.jpg",
  },
  {
    id: 7,
    title: "Mouse",
    description: "Description for Product 7.",
    price: 79.99,
    category: "electronics",
    image: "assets/Mouse.jpg",
  },
  {
    id: 8,
    title: "Earphone",
    description: "Description for Product 8.",
    price: 89.99,
    category: "electronics",
    image: "assets/Earphone.jpg",
  },
  {
    id: 9,
    title: "Headphone",
    description: "Description for Product 9.",
    price: 99.99,
    category: "clothing",
    image: "assets/Headphone.jpg",
  },
  {
    id: 10,
    title: "Charger",
    description: "Description for Product 10.",
    price: 109.99,
    category: "electronics",
    image: "assets/Charger.jpg",
  },
];

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("price-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Handle filter change
  const handleFilterChange = (e) => {
    const category = e.target.value;
    setFilter(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);

    // Sort products based on selectedSort
    let sortedProducts = [...filteredProducts];
    if (selectedSort === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  // Handle pagination change
  const handlePageChange = (type) => {
    if (type === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      type === "next" &&
      currentPage < Math.ceil(filteredProducts.length / productsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate products to display based on current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <AppContainer>
      <Filter handleFilterChange={handleFilterChange} />
      <Sort handleSortChange={handleSortChange} />
      <ProductList products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        handlePageChange={handlePageChange}
      />
    </AppContainer>
  );
};

export default App;
