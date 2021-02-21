function sayHi(){
    alert("Привіт!")
}

function greeting(name){
    alert(`Привіт ${name}!`)
}

function showGreeting(name){
    const test = document.getElementById('test')

    test.innerText = `Привіт ${name}!`;
}

showGreeting("Петро")

