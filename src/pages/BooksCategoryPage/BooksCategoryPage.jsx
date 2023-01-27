import React from "react";
import { useParams } from "react-router-dom";

function BooksCategoryPage() {
  const { categoryName } = useParams();

  return <div>BooksCategoryPage - {categoryName}</div>;
}

export default BooksCategoryPage;
