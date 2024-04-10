import React from "react";

const BookDetails = ({ book }) => {
  const { volumeInfo, saleInfo } = book;
  const {
    language,
    categories,
    description,
    pageCount,
    publisher,
    publishedDate,
  } = volumeInfo;
  const { country } = saleInfo;

  return (
    <>
      <p>Genre: {categories}</p>
      <p>Language: {language}</p>
      <p>Country: {country}</p>
      <p>Description: {description}</p>
      <p>Page Count: {pageCount}</p>
      <p>Publisher: {publisher}</p>
      <p>Published Date: {publishedDate}</p>
    </>
  );
};

export default BookDetails;