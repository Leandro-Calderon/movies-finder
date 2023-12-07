const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "/pelis.json"));
const pelis = JSON.parse(data);

// FUNCIONES

function getAllMovies() {
  return pelis;
}

function sortMoviesBy(props) {
  const result = pelis.sort((a, b) => {
    const valueA = a[props];
    const valueB = b[props];

    if (typeof valueA === "string") {
      return valueA.localeCompare(valueB);
    }

    return valueA - valueB;
  });
  return result;
}

function searchMoviesBy(word) {
  const result = pelis.filter(
    (movie) =>
      movie.title.toLowerCase().includes(word.toLowerCase()) ||
      movie.tags.some((tag) => tag.toLowerCase() === word.toLowerCase()),
  );
  return result;
}

function tagedMoviesBy(tag) {
  const result = pelis.filter((movie) =>
    movie.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
  return result;
}

module.exports = {
  getAllMovies,
  sortMoviesBy,
  searchMoviesBy,
  tagedMoviesBy,
};
