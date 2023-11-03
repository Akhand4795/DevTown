import React from "react";

import styled from "styled-components";

const SortContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  select {
    padding: 10px;
    font-size: 1rem;
  }
`;

const Sort = ({ handleSortChange }) => {
  return (
    <SortContainer>
      <label>Sort by:</label>
      <select onChange={handleSortChange}>
        <option value="price-asc">Price Low to High</option>
        <option value="price-desc">Price High to Low</option>
        {/* Add more sorting options if needed */}
      </select>
    </SortContainer>
  );
};

export default Sort;
