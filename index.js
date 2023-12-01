// con argvs capturar los input de consola
// depurar el input con slice ?
// const { argv } = require('node:process');
const { getAllMovies } = require('./pelis')
// const peliculas = require('./pelis.json')
const argumento = process.argv.slice(2)

// const input = process.argv.slice(2)

// aca va el diccionario para bindear la data con la accion

// const commands = {
//   '--': pelis.getAllMovies,
//   '--sort': pelis.sortMoviesBy,
//   '--search': pelis.searchMoviesBy,
//   '--tag': pelis.tagedMoviesBy
// }

function main () {
  if (argumento.length === 0) {
    const resultado = getAllMovies()
    console.table(resultado)
  }
}
console.log(argumento)
main()
