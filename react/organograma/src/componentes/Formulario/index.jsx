import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () =>{
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (ev) =>  {
        ev.preventDefault()
        console.log('Foi submetido')
    }

    return(
        <section className="formulario">
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true}/>
                    <CampoTexto label="Cargo" placeholder="Digite seu cargo" obrigatorio={true}/>
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                    <ListaSuspensa itens={times} label="Time" obrigatorio={true}/>
                    <Botao>Criar Card</Botao>
                </form>
        </section>
    )
}

export default Formulario