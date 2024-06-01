// Critérios de aceite:
// - Baseado em Date()
// - Possibilidade de pausar
// - Quando atualiza o initialTime reseta o timer

import { useEffect, useRef, useState } from "react"

const Timer = ( { initialTime, paused } ) => {
    const initialTimestamp = useRef()
    const timer = useRef()
    const remainTime = useRef(initialTime)
    
    const [time, setTime] = useState(initialTime)
    
    useEffect(()=>{
        clearInterval(timer.current)

        if(!paused){
            initialTimestamp.current = Math.round(new Date().getTime()/1000)
    
            // A cada segundo atualiza o estado de tempo
            timer.current = setInterval(()=>{
                console.log('Atualizou o timer')
                const currentTimestamp = Math.round(new Date().getTime()/1000)
                const timeDecurred = currentTimestamp - initialTimestamp.current
    
                const remainingTime = remainTime.current - timeDecurred
    
                if(remainingTime >= 0) {
                    setTime(remainingTime)
                    return
                }
    
                setTime(0)
                clearInterval(timer.current)
            }, 1000)
        }else{
            console.log('Pausou o timer')
            
            remainTime.current = time
        }

    }, [initialTime, paused])

    useEffect(()=>{
        remainTime.current = initialTime
    }, [initialTime])

    // Recebe o tempo em segundos e formata em mm:ss
    const formatTime = (time) =>{
        const formatZeros = (time) => (time < 10) ? ('0' + time) : time

        const minutes = formatZeros(Math.floor(time / 60))
        const seconds = formatZeros(time % 60)

        return `${minutes} : ${seconds}`
    }

    return formatTime(time)
}

export default Timer