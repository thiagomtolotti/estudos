const livros = require('./listaLivros')

const orderLivros = ()=>{
    let arr = []
    livros.forEach(livro => arr.push(livro.titulo))

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

let insertionSort = (oldArr)=>{
    const arr = [...oldArr]
    const result = []

    while(arr.length > 0){
        const lowestIndex = getLowestIndex(arr)

        result.push(arr[lowestIndex])
        arr.splice(lowestIndex, 1)
    }

    return result
}

insertionSort = (oldArr)=>{
    const arr = [...oldArr]
    
    for(let atual = 0; atual < arr.length; atual++){
        for(let c = 0 ; c < atual; c++){
            if(arr[atual] > arr[c]) continue
            
            const atualVal = arr[atual]

            arr.splice(atual, 1)
            arr.splice(c, 0,atualVal)
            break
        }
    }

    return arr
}

const insertionSortCurso = (oldArr)=>{
    const arr = [...oldArr]

    for(let atual = 0; atual < arr.length; atual++){
        let analise = atual

        while(analise > 0 && arr[analise] < arr[analise - 1]){
            const itemAnalise = arr[analise]
            const itemAnterior = arr[analise - 1]

            arr[analise] = itemAnterior
            arr[analise - 1] = itemAnalise

            analise--
        }
    }

    return arr
}

console.clear()
console.log(insertionSort(precosLivros))
console.log(insertionSortCurso(precosLivros))