import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;