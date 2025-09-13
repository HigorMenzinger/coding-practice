/* ​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

 */

function verify(n){
    if(n < 0) console.log(`The number: ${n} is negative`)
    else if(n > 0) console.log(`The number: ${n} is positive`)
    else console.log(`The number: ${n} is equal to zero`)
}

verify(-8)
verify(0)
verify(10)