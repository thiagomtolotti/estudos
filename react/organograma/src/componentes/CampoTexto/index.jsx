import './CampoTexto.css'

const CampoTexto = ({label, placeholder, obrigatorio}) => {
    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input placeholder={placeholder} required={obrigatorio}/>
        </div>
    )
}

export default CampoTexto