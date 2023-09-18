
const livros = require('./listaLivros')

let precosLivros = []
livros.forEach(livro => precosLivros.push(livro.preco))

//Destrói o original
let sortByLowestVal = (arr)=>{
    let result = []

    while(arr.length > 0){
        let index = 0, lowestVal = 0

        while(index < arr.length){
            if(arr[index] < arr[lowestVal]) lowestVal = index
    
            index++
        }
    
        result.push(arr[lowestVal])
        arr.splice(lowestVal, 1)
    }

    return result
}

// tempo = O(n²)
//Modifica o original/Mantém o original (controle no início do algoritmo)
sortByLowestVal = (arrOriginal)=>{
    let arr = arrOriginal
    arr = [...arrOriginal] //Cria uma cópia do original (mantém original intacto)

    for(let count = 0; count < arr.length; count++){
        let index = count, lowestVal = count

        while(index < arr.length){
            if(arr[index] > arr[lowestVal]) lowestVal = index
    
            index++
        }

        const val = arr[lowestVal]
        arr.splice(lowestVal, 1)
        arr.splice(0,0,val)
    }

    return arr
}

// Destrói o original
let recursiveSortByLowestVal = (arr, result = [])=>{
    if(arr.length <= 0) return result

    let index = 0, lowestVal = 0 
    
    while(index < arr.length){
        if(arr[index] < arr[lowestVal]) lowestVal = index

        index++
    }    

    result.push(arr[lowestVal])
    arr.splice(lowestVal, 1)

    return recursiveSortByLowestVal(arr, result)
}

//Modifica o original/Mantém o original (controle no início do algoritmo)
recursiveSortByLowestVal = (arrOriginal, count = 0)=>{
    let arr = arrOriginal
    arr = [...arrOriginal] //Cria uma cópia do original (mantém original intacto)
    
    if(count >= arr.length) return arr

    let lowestVal = count
    
    for(let index = count; index < arr.length; index++){
        if(arr[index] > arr[lowestVal]) lowestVal = index
    }

    const val = arr[lowestVal]
    arr.splice(lowestVal, 1)
    arr.splice(0,0,val)

    return recursiveSortByLowestVal(arr, count + 1)
}

console.clear()
console.log(precosLivros)
// console.log(sortByLowestVal(livros))
console.log(recursiveSortByLowestVal(precosLivros))