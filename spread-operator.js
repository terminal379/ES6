// Arrays o objectes
const numeros = [1, 2, 3];
const serie = [...numeros, 4, 5, 6]

console.log(serie);

// String
const nom = "Terminal379";
const nomEnArray = [...nom]

console.log(nomEnArray)

// Rest, deconstruccio
const numeros2 = [1, 2, 3, 4, 5, 6]
const [primer, segon, ...resta] = numeros2;

console.log(resta)