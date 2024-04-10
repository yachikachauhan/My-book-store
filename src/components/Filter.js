import React from "react";

const Filter = ({ genres, authors, onSelectGenre, onSelectAuthor }) => {
  return (
    <div>
      <label htmlFor="genre">Select Genre:</label>
      <select id="genre" onChange={(e) => onSelectGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <label htmlFor="author">Select Author:</label>
      <select id="author" onChange={(e) => onSelectAuthor(e.target.value)}>
        <option value="">All Authors</option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;