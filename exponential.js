// JavaScript Math és un objecte integrat
async function objExponential() {
    console.time("Objecte Exponencial")
    let exponencial = await Math.pow(2, 4);
    console.timeEnd("Objecte Exponencial")
    console.log(exponencial)
}


// Operador exponencial ES2016
async function opExponential() {
    console.time("Operador Exponencial")
    let exponencial = await (2**4);
    console.timeEnd("Operador Exponencial")
    console.log(exponencial)
}

opExponential()