/*
Crie uma funçao que espere um numero de 6 ate 9 se menor retorna array vazio

com base no numero passado gerar uma lista de numeros aleatorios entre 01 e 60

retornar lista

*/

/*function lottery(arr, size){
    for ( let i = 0; i < n.length  -1 ; i++){
        console.log(n[i]);
        
    }
}

console.log(lottery([])); */

function sizeTest(size) {
    const arr = []
  if (size < 6 || size > 9) {
    alert("The value must be greater than 6 and less than 9");
  } else {
    while(arr.length < size){
       const num = (Math.floor(Math.random() * (60 - 1 + 1)) +1)

       if(!arr.includes(num)){
        arr.push(num)
       }
    }
    return arr
  }
}

console.log(sizeTest(10));
