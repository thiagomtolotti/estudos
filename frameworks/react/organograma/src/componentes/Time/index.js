import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {

    return (
        (colaboradores.length > 0) && <section className='time' style={{backgroundColor: corPrimaria}}>
            <h3 style={{borderColor: corSecundaria}}>{nome}</h3>

            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corFundo={corSecundaria}
                    />)}
            </div>
        </section>
    )
}

export default Time