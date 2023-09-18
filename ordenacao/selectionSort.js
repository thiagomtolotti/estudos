const livros = require('./listaLivros')

const orderLivros = ()=>{
    let arr = []
    livros.forEach(livro => arr.push(livro.preco))

    return arr
}
const precosLivros = orderLivros()

const getLowestIndex = function(arr, initialPos = 0){
    let lowestVal = initialPos

    for(let atual = initialPos; atual < arr.length; atual++){
        if(arr[atual] > arr[lowestVal]) continue

        lowestVal = atual
    }

    return lowestVal
}

const selectionSort = function(oldArr){
    const arr = [...oldArr]
    
    for(let i = 0; i < arr.length; i++){
        const menor = getLowestIndex(arr, i)

        const livroAtual = arr[i]
        const livroMenorPreco = arr[menor]

        arr[i] = livroMenorPreco
        arr[menor] = livroAtual
    }

    // Implementação com 'forEach'
    /* arr.forEach((_, index) =>{
        const menor = getLowestIndex(arr, index)

        const livroAtual = arr[index]
        const livroMenorPreco = arr[menor]
    
        arr[index] = livroMenorPreco
        arr[menor] = livroAtual
    }) */

    return arr
}

console.clear()
console.log(precosLivros)
console.log(selectionSort(precosLivros))