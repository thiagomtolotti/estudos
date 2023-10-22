// Critérios de aceite:
// - Baseado em timer global
// - Possibilidade de pausar

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
        const minutes = Math.floor(time / 60)
        const seconds = time % 60

        const formatZeros = (time) => {
            return (time < 10) ? ('0' + time) : time
        }

        return `${formatZeros(minutes)} : ${formatZeros(seconds)}`
    }

    return formatTime(time)
}

export default Timer