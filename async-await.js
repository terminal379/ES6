// Una funció Async retorna una promesa
const doSomethingAsync = () => {
    return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

doSomething()