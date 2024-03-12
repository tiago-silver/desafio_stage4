let numberOne = Number(prompt("Digite oprimeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let resDiv = numberOne % numberTwo;

alert(`A soma dos 2 números é ${sum}`)
alert(`A subtrtação dos dois números é ${sub}`)
alert(`O resultado da multiplicação dos 2 números é ${mult}`)
alert(`O resultado da divisão dos 2 números é ${div}`)
alert(`O resto da divisão dos 2 números é ${resDiv}`)

if(numberOne == numberTwo){
    alert(`Os dois números inseridos são iguais!`)
}else{
    alert(`Os dois números inseridos são diferentes!`)
}
if(sum % 2 == 0){
    alert(`A soma é um número PAR: ${sum}`)
}else{
    alert(`A soma é um número ÌMPAR: ${sum}`)
}