// Sintaxi pre ES2015
const myFunction = function() {

}


// Sintaxi post ES2015
const myFunction1 = () => {

}


// Unica ordre   
const myFunction2 = () => console.log("Hola")


// Arguments (1 o varis)
const myFunction3 = arg1 => {doSomething(arg1)}
const myFunction4 = (arg1, arg2) => doSomething(arg1, arg2)


// Return implícit
const myFunction5 = () => "hello world"


/*
Restriccions:
1. En mètodes d'objectes, ja que no lliga el this, i és heredat del context d'execució. Retorna: "undefined undefined"
2. Com a constructors, quan s'instancia un objecte: TypeError
3. En la gestió d'esdeveniments DOM
*/

const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: function () {
    return `${this.manufacturer} ${this.model}`
    }
}


    // Gestió d'esdeveniments DOM
const link = document.querySelector('#link')
link.addEventListener('click', () => {
// this === window
})

const link = document.querySelector('#link')
link.addEventListener('click', function() {
// this === link
})
