import React from "react";
import styled from "styled-components";


const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  select {
    padding: 10px;
    font-size: 1rem;
  }

`;

const Filter = ({ handleFilterChange }) => {
  return (
    <FilterContainer>
      <label>Filter by Category:</label>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add more categories if needed */}
      </select>
    </FilterContainer>
  );
};

export default Filter;
