var projecte = "T Global";

function letExemple() {
    let projecte = "T Scope";
    console.log("Dins funcio", projecte)
}

letExemple()
console.log("Fora funcio", projecte)