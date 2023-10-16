const extractLinks = (arrLinks)=>{
    return arrLinks.map((objetoLink)=> Object.values(objetoLink).join())
}

const handleStatus = async(arrURLs)=>{
    const arrStatus = await Promise.all(
        arrURLs.map(async(url) => (await fetch(url)).status))
    return arrStatus
}

const listaValidada = async(listaDeLinks)=>{
    const links = extractLinks(listaDeLinks)
    const status = await handleStatus(links)
    
    return status
}

export default listaValidada