import chalk from "chalk"
import fs from 'fs'
import readFile from "./read_file.js"

const path = process.argv

const logList = (result)=>{
    console.log(chalk.yellow('Lista de links'), result)
}

const processText = async(args)=>{
    const path = args[2]

    if(fs.lstatSync(path).isFile()){
        const result = await readFile(path)
        logList(result)
    }else if(fs.lstatSync(path).isDirectory()){
        const arquivos = await fs.promises.readdir(path)

        arquivos.forEach(async(arquivo) =>{
            const lista = await readFile(`${path}/${arquivo}`)
            
            logList(lista)
        })
    }
}

processText(path)