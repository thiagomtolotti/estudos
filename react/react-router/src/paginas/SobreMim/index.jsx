import PostModelo from "src/componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'

function SobreMim (){
    return (
		<PostModelo
			fotoCapa={fotoCapa}
			titulo='Sobre mim'
		>
			conteúdo...
		</PostModelo>
    )
}

export default SobreMim