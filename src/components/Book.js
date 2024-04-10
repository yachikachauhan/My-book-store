import React, { useState } from "react";
import BookDetails from "./BookDetails";

const Book = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!book || !book.volumeInfo) {
    return <div>Loading...</div>;
  }

  const { volumeInfo } = book;
  const { title, authors, averageRating, imageLinks } = volumeInfo;

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <img src={imageLinks?.smallThumbnail} alt={title} />
      <h2>{title}</h2>
      <p>Author: {authors?.join(", ")}</p>
      <p>Rating: {averageRating}</p>
      <button onClick={handleShowDetails}>
        {showDetails ? "Hide Description" : "Show Description"}
      </button>

      {showDetails && <BookDetails book={book} />}
    </div>
  );
};

export default Book;