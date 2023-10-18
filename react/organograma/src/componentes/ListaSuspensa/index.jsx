import './ListaSuspensa.css'

const ListaSuspensa = ({label, itens, obrigatorio, valor, aoAlterado}) => {

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio} onChange={ev => aoAlterado(ev.target.value)} value={valor}>
                <option value='' />
                {itens.map(
                    item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default ListaSuspensa