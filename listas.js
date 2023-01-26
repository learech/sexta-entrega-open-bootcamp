const compra = [
    "agua",
    "leche",
    "azucar",
    "pan",
    "huevos"
]

compra.push("aceite de girasol")
console.log(compra);

compra.pop()
console.log(compra);

const peliculasFavoritas = [
    { nombre: "La Naranja Mecánica", director: "Stanley Kubrick" , fecha: new Date("december 21 1971")},
    { nombre: "Trainspotting", director: "Danny Boyle", fecha: new Date("january 1 1997")},
    { nombre: "Trainspotting 2", director: "Danny Boyle", fecha: new Date("march 2 2017")}
]

console.log(peliculasFavoritas);

const peliculasModernas = peliculasFavoritas.filter(film => film.fecha > new Date("january 1 2010"));
console.log(peliculasModernas);

const directores = peliculasFavoritas.map(peli => peli.director);

console.log(directores);

const titulosPelis = peliculasFavoritas.map(peli => peli.nombre);

console.log(titulosPelis);

const direcTitulos = (directores.concat(titulosPelis))

console.log(direcTitulos);

console.log(...direcTitulos);
