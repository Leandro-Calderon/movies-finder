// traer el Json y parsearlo
const fs = require("fs");


const data = fs.readFileSync(__dirname +'/pelis.json');
const peliculas = JSON.parse(data);
// hacer el caseSensitive

// aca va cada una de las funciones de filtrado


// aca va el export de funciones
function getAll ()  {
  return peliculas;
}
module.exports={
  getAll
}