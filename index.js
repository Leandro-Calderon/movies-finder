// con argvs capturar los input de consola
// depurar el input con slice ?
// const { argv } = require('node:process');
const pelis = require("./pelis");

const input = process.argv.slice(2);

// aca va el diccionario para bindear la data con la accion

const commands = {
  // "--list": pelis.getAllMovies,
  "--sort": pelis.sortMoviesBy,
  "--search": pelis.searchMoviesBy,
  "--tag": pelis.tagedMoviesBy,
};

function main(input) {
  // console.log(params);
  if (input != (undefined || null)) {
    console.table(pelis.getAllMovies());
  }
}
console.log(input);
main();

// console.log(input);
// console.log(input[0]);
// if (input == undefined || null) {
//   return pelis
// }
