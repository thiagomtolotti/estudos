import fs from 'fs'
import chalk from 'chalk'

function handleError(error) {
    throw new Error(chalk.red(error.code, 'Não há arquivo no diretório'))
}

let readFile = (path)=>{
    const encoding = 'utf-8'

    fs.promises.readFile(path, encoding)
        .then((texto)=>{
            console.log(chalk.green(texto))
        })
        .catch(handleError)
}

readFile = async(path)=>{
    try{
        const encoding = 'utf-8'  
        const file_text = await fs.promises.readFile(path, encoding)

       return extractLinks(await file_text)
    }catch(error){
        handleError(error)
    } finally{
        console.log(chalk.yellow('operação concluída'))
    }
}

const extractLinks = (text)=>{
    const regex = /\[([^\[^\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    // const results = []

    // let match = regex.exec(text)
    // while(match){
    //     results.push(match[2])
    //     match = regex.exec(text)
    // }

    const matches = [...text.matchAll(regex)]

    const results = matches.map(match => ({[match[1]] : match[2]}))

    return (results.length > 0) ? results : 'Não há links no arquivo'
}

export default readFile