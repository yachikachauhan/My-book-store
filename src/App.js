import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Filter from "./components/Filter";
import ApiIntegration from "./apiworks/ApiIntegration";

function App() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await ApiIntegration.fetchBooks();
        setBooks(bookData);
        const allGenres = bookData
          .map((book) => book.volumeInfo.categories)
          .flat();
        const uniqueGenres = [...new Set(allGenres)];
        setGenres(uniqueGenres);
        const allAuthors = bookData
          .map((book) => book.volumeInfo.authors)
          .flat();
        const uniqueAuthors = [...new Set(allAuthors)];
        setAuthors(uniqueAuthors);
      } catch (error) {
        console.error("Error Fetching Books:", error);
      }
    };

    fetchData();
  }, []);

  const handleGenreChange = (selectedGenre) => {
    console.log("Genre selected: ", selectedGenre);
    setSelectedGenre(selectedGenre);
  };

  const handleAuthorChange = (selectedAuthor) => {
    console.log("Author Selected: ", selectedAuthor);
    setSelectedAuthor(selectedAuthor);
  };

  const filteredBooks = books.filter((book) => {
    const isGenreMatch =
      !selectedGenre ||
      !book.volumeInfo.categories ||
      book.volumeInfo.categories.includes(selectedGenre);
    const isAuthorMatch =
      !selectedAuthor ||
      !book.volumeInfo.authors ||
      book.volumeInfo.authors.includes(selectedAuthor);

    return isGenreMatch && isAuthorMatch;
  });

  return (
    <div className="app">
      <h1>Book Explorer</h1>
      <Filter
        genres={genres}
        authors={authors}
        onSelectGenre={handleGenreChange}
        onSelectAuthor={handleAuthorChange}
      />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;