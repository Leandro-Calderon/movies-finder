# Buscador de pelis con Node

## Escenarios posibles de las busquedas

**La aplicación debe aceptar distintas combinaciones de argumentos. Veamos algunos casos:**

1. **Sin parámetros**
   node index.js
   Si no le pasás ningún argumento, la aplicación tiene que devolver todas las películas. Podés imprimir la salida en cualquier formato, por ejemplo: console.table()
2. **Sort**
   `node index.js --sort {nombreDeLaPropiedad}`
   El argumento `--sort` debe ordenar la salida en base a ese parámetro.
   `node index.js --sort title`
   Devuelve las películas en orden alfabético basándose en su título (propiedad title)
   Importante: El argumento sort debe soportar cualquier propiedad, por ejemplo rating.
3. **Search**
   `node index.js --search {searchCriterio}`
   El argumento `--search` debe devolver las películas que tienen el texto del argumento.
   `node index.js --search magic`
   Debería devolver las películas que tengan la palabra "magic" en su titulo.
4. **Tag**
   `node index.js --tag {nombreDelTag}`
   Si le pasás el argumento --tag debe devolver las películas que tienen ese tag.
   `node index.js --tag thriller`
   Debería devolver las películas que tengan el tag acción. **Importante**: El argumento tag es en singular. Si bien en el JSON dice tags (en plural), el argumento que hay que pasarle al programa es en singular, porque busca de a un tag a la vez.
5. **Tips**
   Tener en cuenta leer el archivo pelis.json de esta forma:
   `fs.readFileSync(__dirname +"/pelis.json")`
   `__dirname` es una referencia al directorio actual. Esto asegura que Node encuentre el archivo en distintas situaciones como el test automático.
6. **Tener en cuenta Mayúsculas y minúsculas**

# Buscador de pelis con Node

## Escenarios posibles de las busquedas

**La aplicación debe aceptar distintas combinaciones de argumentos. Veamos algunos casos:**

1. **Sin parámetros**
   node index.js
   Si no le pasás ningún argumento, la aplicación tiene que devolver todas las películas. Podés imprimir la salida en cualquier formato, por ejemplo: console.table()
2. **Sort**
   `node index.js --sort {nombreDeLaPropiedad}`
   El argumento `--sort` debe ordenar la salida en base a ese parámetro.
   `node index.js --sort title`
   Devuelve las películas en orden alfabético basándose en su título (propiedad title)
   Importante: El argumento sort debe soportar cualquier propiedad, por ejemplo rating.
3. **Search**
   `node index.js --search {searchCriterio}`
   El argumento `--search` debe devolver las películas que tienen el texto del argumento.
   `node index.js --search magic`
   Debería devolver las películas que tengan la palabra "magic" en su titulo.
4. **Tag**
   `node index.js --tag {nombreDelTag}`
   Si le pasás el argumento --tag debe devolver las películas que tienen ese tag.
   `node index.js --tag thriller`
   Debería devolver las películas que tengan el tag acción. **Importante**: El argumento tag es en singular. Si bien en el JSON dice tags (en plural), el argumento que hay que pasarle al programa es en singular, porque busca de a un tag a la vez.
5. **Tips**
   Tener en cuenta leer el archivo pelis.json de esta forma:
   `fs.readFileSync(__dirname +"/pelis.json")`
   `__dirname` es una referencia al directorio actual. Esto asegura que Node encuentre el archivo en distintas situaciones como el test automático.
6. **Tener en cuenta Mayúsculas y minúsculas**
