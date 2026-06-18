// ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')

for (let i = 0; i < 10; i++) { 
    console.log(i, 'Amor');
    divFor.innerHTML += `${i} - Amor <br>`

}



//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt) => {
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> 
    A SOMA DOS NÚMEROS É: ${acum}`

    inputNum.value = ''
})


//CONTROLANDO FOR 
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', (evt) => {
    let frase = inputFrase.value
    let NumRepeti = Number(inputNumRepeticao.value)

    for (let i = 0; i < inputNumRepeticao; i++){
       divFrase.innerHTML += `${i + 1} - ${frase} <br>`

    
    }

})

//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Bicicleta', 'Celular', 'Camisa do Mengão', 
    'Doleira', 'Tênis Adidas']

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

for (let elemento of presentes){
    divForOf.innerHTML += `${elemento} <br>`
}

//FOREACH
const divForeach = document.querySelector('#div-foreach')

presentes.forEach((elemento, i)=>{

    divForeach.innerHTML += `${i} - ${elemento} <br>`

})

//COLEÇÃO DE OBJETOS LITERAIS - ARRAY
const pessoas = [
    {nome: 'Maria Flor', idade: 25, renda: 8500},
    {nome: 'Joerdson Souza', idade: 75, renda: 5000},
    {nome: 'Taoca', idade: 28, renda: 500},
    {nome: 'Chicó', idade: 36, renda: 100},
    {nome: 'João Grilo', idade: 32, renda: 80},

]

//MANIPULANDO A REDE
//ADICIONAR ELEMENTOS NO ARRAY
pessoas.push({nome: 'Magnólia, idade: 32< renda: 3500'})
pessoas.unshift({nome: 'Joerdison', idade: '36', renda: 100000})

//SPLICE ADICIONA EM UMA POSIÇÃO SEM EXCLUIR UM ELEMENTO 
pessoas.splice(3,0,{nome: 'Extraterrestre', idade: 250, 
renda: 0.50})

//SPLICE EXCLUI UMA POSIÇÃO E NESSE EXEMPLO EXCLUI APENAS ELEMENTO A PARTIR DA POSIÇÃO(INDÍCE) INFORMADO
pessoas.splice(3,2,{nome: 'Extraterrestre', idade: 250, 
renda: 0.50 })

//SPLICE EXCLUI UMA POSIÇÃO E NESSE EXEMPLO EXCLUI APENAS O ELEMENTO DA POSIÇÃO(INDÍCE) INFORMADA
pessoas.splice(1,0)

//SLPICE EXCLUI DOIS ELEMENTOS A PARTIR DA POSIÇÃO(INDÍCE) INFORMADA
pessoas.splice(2,2)

//EXCLUI O ÚLTIMO ELEMENTO DO ARRAY
pessoas.pop()

//EXIBIR O ÚLTIMO ELEMENTO DO ARRAY
console.log('TOTAL DE DE ELEMENTOS NO ARRAY pessoas ====> ', pessoas.lenght)
//LISTANDO LITERAL PELO FOR
const divListaObjFor = document.querySelector('#div-listaobj-for')

for(i = 0; i < pessoas.length;i++){
divListaObjFor.innerHTML += `${pessoas[i].nome}, ${pessoas[i].idade}
R$ ${pessoas[i].renda.toFixed(2).replace('.',',')} <br>`

}



//LISTANDO OBJETO LITERAL PELO FOR/IN
const divListaObjForIn = document.querySelector
('#div-listaobj-forin')

for (let indice in pessoas){
  divListaObjForIn.innerHTML += `${indice} - ${pessoas
    [indice].nome}, ${pessoas[indice].idade}, R$ ${pessoas[indice].renda.toFixed(2).replace
    ('.',',')} <br>`

}

//LISTANDO OBJETO LITERAL FOR/OF
const divListaForOF = document.querySelector
('#div-listaobj-forof')

let contForof = 0

for (let elem of pessoas){
    contForof++

    divListaForOF.innerHTML += `${contForof} -${elem.nome},
    ${elem.idade}, R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`

}

//LISTANDO OBJETO LITERAL PELO FOREACH
const divListaForeach = document.querySelector
('#div-lista-foreach')

pessoas.forEach((elem, i)=>{
    divListaForeach.innerHTML += `${i + 1} - ${elem.nome}, 
    ${elem.idade} R${elem.renda.toFixed(2).replace('.',',')}
    <br>`

})

