import { Button } from "@mui/material";
import { useState } from "react";

export type Props = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (n: number) => void;
};

function Pagination({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
}: Props) {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const calculatePageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  };
  // const handlePageClick = (pageNum: number) => {
  //   onPageChange(pageNum);
  // };
  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextPageClick = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      onPageChange(currentPage + 1);
    }
  };

  if (pageNumbers.length === 0) {
    calculatePageNumbers();
  }

  return (
    <div style={{ marginLeft: "30px" }}>
      <Button onClick={handlePreviousPageClick} variant="contained">
        Previous
      </Button>
      <button>{currentPage}</button>
      <Button onClick={handleNextPageClick} variant="contained">
        Next
      </Button>
    </div>
  );
}

export default Pagination;
