import React from "react";
import Product from "./Product";
import styled from "styled-components";


const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
