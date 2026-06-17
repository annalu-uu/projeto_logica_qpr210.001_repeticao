// ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for');
let resultadoFor = ''; // Acumula o texto primeiro

for (let i = 0; i < 10; i++) { // 'let' adicionado aqui
    console.log(i, 'Amor');
    resultadoFor += `${i} - Amor <br>`;
}
divFor.innerHTML = resultadoFor; // Atualiza o DOM apenas uma vez


//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num');
const btnNum = document.querySelector('#btn-num');
const divContAcum = document.querySelector('#div-cont-acum');

let cont = 0;
let acum = 0;

btnNum.addEventListener('click', (evt) => {
    let numDigitado = Number(inputNum.value);

    cont++;
    acum += numDigitado;

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> A SOMA DOS NÚMEROS É: ${acum}`;

    inputNum.value = '';
});


//CONTROLANDO FOR (Finalizado)
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', (evt) => {
    let frase = inputFrase.value
    let NumRepeti = Number(inputNumRepeticao.value)

    for (let i = 0; i < numRepeti; i++) {
       divFrase.innerHTML += `${i + 1} - ${frase} <br>`

    divFrase.innerHTML = resultadoFrases
   }

})

//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Bicicleta', 'Celular', 'Camisa do Mengão', 'Doleira', 'Tênis Adidas']

const divArray = document.querySelector('#div-array')

//divArray.innerHTML = presentes[6]

for(i = 0;i < 5;i++){
    divArray.innerHTML += `${presentes[i]} <br>`
}

//FOR IN
const divForIn = document.querySelector('#div-forin')

for(let posicao in presentes){
    divForIn.innerHTML += `${presentes[posicao]} <br>`

}

//FOR OF
const divForOf = document.querySelector('#div-forof')

