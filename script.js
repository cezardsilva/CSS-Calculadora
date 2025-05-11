function addChar(caracter) {
    const valorDisplay = document.querySelector(".display").value
    
    document.querySelector(".display").value = valorDisplay + caracter
}

function clearDisplay() {
    document.querySelector(".display").value = ""
}

function calculate() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}

function invert() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}