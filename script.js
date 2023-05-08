
const numberOne = prompt("DIGITE UM NUMERO : ")
const numberTwo = prompt("DIGITE OUTRO NUMERO : ")

alert(`A SOMA DOS NUMEROS É: ${Number(numberOne)+Number(numberTwo)}`)
alert(`A SUBTRAÇÃO DOS NUMEROS É: ${numberOne-numberTwo}`)
alert(`A MULTIPLICAÇÃO DOS NUMEROS É: ${numberOne*numberTwo}`)
alert(`A DIVISÃO DOS NUMEROS É: ${(numberOne/numberTwo).toFixed(2)}`)
alert(`O RESTO DA DIVISÃO DOS NUMEROS É: ${numberOne%numberTwo}`)

if((numberOne+numberTwo)%2 == 0)
    alert("A SOMA DOS NUMERO É PAR")
else
    alert("A SOMA DOS NUMEROS É IMPAR")


if(numberOne == numberTwo)
    alert("OS NUMEROS SÃO IGUAIS")
else
    alert("OS NUMEROS SÂO DIFERENTES")

