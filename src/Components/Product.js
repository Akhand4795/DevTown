import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 18rem;
  height: 10rem;
  object-fit: contain;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductContainer>
  );
};

export default Product;
