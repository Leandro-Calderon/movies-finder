// En estas dos líneas, se importan los módulos process y pelis.js. El módulo process es un objeto global que proporciona información y control sobre el proceso actual de Node.js. El módulo pelis.js es un archivo que contiene las funciones que se utilizarán más adelante en el código.
const process = require("process");
const operations = require("./pelis.js");

// Esta función parsingParameters() se encarga de analizar los argumentos de línea de comandos que se pasan al script. Primero, se utiliza process.argv.slice(2) para obtener los argumentos de línea de comandos a partir del tercer elemento (los primeros dos elementos son node y el nombre del archivo). Luego, se crea un objeto parameterObject que contiene dos propiedades: operation y parameters. La propiedad operation se establece en el segundo argumento de línea de comandos (si existe) después de eliminar los primeros dos caracteres (--). La propiedad parameters se establece en el tercer argumento de línea de comandos (si existe). Finalmente, la función devuelve el objeto parameterObject.
function parsingParameters() {
  const args = process.argv.slice(2);
  const parameterObject = {
    operation: args[0] ? args[0].slice(2) : null,
    parameters: args[1],
  };
  return parameterObject;
}

// Esta función executOperation(operationObject) se encarga de ejecutar la operación solicitada por el usuario. Primero, se crea un objeto map que asigna cada operación a su función correspondiente en el archivo pelis.js. Luego, se extrae la operación y los parámetros del objeto operationObject. Si se proporciona una operación, se busca la función correspondiente en el objeto map y se llama con los parámetros proporcionados. Si se encuentra una función, se devuelve su resultado. Si no se encuentra una función, se muestra un mensaje de error y se devuelve null.
function executOperation(operationObject) {
  const map = {
    sort: operations.sortMoviesBy,
    search: operations.searchMoviesBy,
    tag: operations.tagedMoviesBy,
  };
  const action = operationObject.operation;
  const parameterToUse = operationObject.parameters;

  if (action) {
    const executor = map[action](parameterToUse);

    if (executor !== undefined) {
      return executor;
    } else {
      return null;
    }
  }
}

// Esta función main() es la función principal que se ejecuta cuando se inicia el script. Primero, se verifica si se proporcionaron argumentos de línea de comandos. Si es así, se analizan los argumentos y se ejecuta la operación correspondiente. Si no se proporcionan argumentos, se muestran todas las películas en una tabla.
function main() {
  if (process.argv[2]) {
    const objectArgv = parsingParameters();
    console.table(executOperation(objectArgv));
  } else {
    console.table(operations.getAllMovies());
  }
}

main();
