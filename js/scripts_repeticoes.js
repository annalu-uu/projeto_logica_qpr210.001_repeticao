// ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for');
let resultadoFor = ''; // Acumula o texto primeiro

for (let i = 0; i < 10; i++) { // 'let' adicionado aqui
    console.log(i, 'Amor');
    resultadoFor += `${i} - Amor <br>`;
}
divFor.innerHTML = resultadoFor; // Atualiza o DOM apenas uma vez


// CONTADOR/ACUMULADOR
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


// CONTROLANDO FOR (Finalizado)
const inputFrase = document.querySelector('#frase');
const inputNumRepeticao = document.querySelector('#num-repeticao');
const btnFrase = document.querySelector('#btn-frase');
const divFrase = document.querySelector('#div-frase');

btnFrase.addEventListener('click', () => {
    const frase = inputFrase.value;
    const repeticoes = Number(inputNumRepeticao.value);
    
    let resultadoFrases = '';

    // O For agora roda a quantidade de vezes que o usuário digitou no input!
    for (let i = 0; i < repeticoes; i++) {
        resultadoFrases += `${i + 1} - ${frase} <br>`;
    }

    divFrase.innerHTML = resultadoFrases;
    
    // Limpa os campos após o clique
    inputFrase.value = '';
    inputNumRepeticao.value = '';
});