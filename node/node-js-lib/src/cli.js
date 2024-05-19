import chalk from "chalk"
import fs from 'fs'
import readFile from "./read_file.js"
import listaValidada from "./http-validacao.js"

const path = process.argv

const logList = async(valida, result, filename = '')=>{
    if(valida) {
        console.log(
            chalk.yellow('Lista validada'),
            chalk.black.bgGreen(filename),
            await listaValidada(result))
    }else{
        console.log(
            chalk.yellow('Lista de links'),
            chalk.black.bgGreen(filename),
            result)
    }

}

const processText = async(args)=>{
    const path = args[2]
    const valida = args[3] === '--valida'

    try{
        fs.lstatSync(path)
    }catch(err){
        if(err.code === 'ENOENT'){
            console.log('Arquivo ou diretório inexistente')
            return
        }
    }

    if(fs.lstatSync(path).isFile()){
        const result = await readFile(path)

        logList(valida, result)
    }else if(fs.lstatSync(path).isDirectory()){
        const arquivos = await fs.promises.readdir(path)

        arquivos.forEach(async(arquivo) =>{
            const lista = await readFile(`${path}/${arquivo}`)
            
            logList(valida, lista, arquivo)
        })
    }
}

processText(path)