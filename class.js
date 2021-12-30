class Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        return `Hola, em dic ${this.name}`
    }
}

function creadorClasses() {
    const persona = new Person("Terminal379");
    console.log(persona.hello())
}

creadorClasses()

// Herència
class Student extends Person {
    hello() {
        return super.hello() + " i sóc estudiant"
    }

}
function creadorSubClasses() {
    const estudiant = new Student("Seaona");
    console.log(estudiant.hello())
}

creadorSubClasses()

// Getters i Setters
class Person2 {
    constructor(name) {
        this.name = name
    }
    set name(value) {
        this.name = value
    }

    get name() {
        return this.name
    }
}