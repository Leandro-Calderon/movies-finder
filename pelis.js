// traer el Json y parsearlo
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, "/pelis.json"));
const peliculas = JSON.parse(data);

// hacer el caseSensitive

// ACA ABAJO VA CADA FUNCIÓN
// -----------------------------------------------------------

// mejorar la presentacion de getAllMovies con el Input "node index.js" es el trigger

function getAllMovies() {
  return peliculas;
}
// -----------------------------------------------------------

// oredenar alfabeticamente "--sort title"
// ordenar de menor a mayor en el rating "--sort rating"
// node index.js --sort {nombreDeLaPropiedad}

function sortMoviesBy(props) {
  const resultado = peliculas.sort((a, b) => {
    const valorA = a[props];
    const valorB = b[props];

    if (typeof valorA === "string") {
      return valorA.localeCompare(valorB);
    }

    return valorB - valorA;
  });
  return resultado;
}

// -----------------------------------------------------------
// node index.js --search {searchCriteria}
// El argumento --search debe devolver las películas que tienen el texto del argumento.
// node index.js --search magic
// Debería devolver las películas que tengan la palabra "magic" en su titulo.
function searchMoviesBy() {}
// -----------------------------------------------------------
// Si le pasás el argumento --tag debe devolver las películas que tienen ese tag. "node index.js --tag {nombreDelTag}"
// node index.js --tag thriller
function tagedMoviesBy() {}
// -----------------------------------------------------------

// aca va el export de funciones
module.exports = {
  getAllMovies,
  sortMoviesBy,
  searchMoviesBy,
  tagedMoviesBy,
};
