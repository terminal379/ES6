// Sintaxi pre ES2015
const myFunction = function() {
    
}

// Sintaxi post ES2015
const myFunction2 = () => {

}
    
// Unica ordre   
const myFunction3 = () => doSomething()


// Arguments
const myFunction4 = (param1, param2) => doSomething(param1, param2)
const myFunction5 = param => doSomething(param)

// Return implícit
const myFunction6 = () => 'test'
myFunction6() //'test'


/*

Due to this, arrow functions are not suited as object methods.
Arrow functions cannot be used as constructors either, when instantiating an object will raise a
TypeError
.
This is wher

*/