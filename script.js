let firstNumber = Number(prompt('Escreva o 1º Número: '));
let secondNumber = Number(prompt('Escreva o 2º Número: '));
document.getElementById('firstInputNumber').innerHTML = `1º Número: ${firstNumber}`;
document.getElementById('secondInputNumber').innerHTML = `2º Número: ${secondNumber}`;
function sum(){
    let sum = firstNumber + secondNumber;
    document.getElementById('calc').innerHTML = `Romando: ${firstNumber} + ${secondNumber} = ${sum}`;
}
function subtration(){
    let subtration = firstNumber - secondNumber;
    document.getElementById('calc').innerHTML = `Subtraindo: ${firstNumber} - ${secondNumber} = ${subtration}`;
}
function multiplication(){
    let multiplication = firstNumber * secondNumber;
    document.getElementById('calc').innerHTML = `Multiplicando: ${firstNumber} x ${secondNumber} = ${multiplication}`;
}
function division(){
    let division = firstNumber / secondNumber;
    document.getElementById('calc').innerHTML = `Dividindo: ${firstNumber} / ${secondNumber} = ${division}`;
}