import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = ({label, placeholder, obrigatorio, valor, aoAlterado}) => {    

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }
    
    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} placeholder={placeholder} required={obrigatorio}/>
        </div>
    )
}

export default CampoTexto