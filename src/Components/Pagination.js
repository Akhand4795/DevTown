import React from "react";

import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    padding: 10px 20px;
    font-size: 1rem;
    margin: 0 10px;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <PaginationContainer>
      <button
        onClick={() => handlePageChange("prev")}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange("next")}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
