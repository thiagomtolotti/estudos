import styles from './rodape.module.css'
import { ReactComponent as MarcaRegistrada } from '../../assets/marca_registrada.svg'


function Rodape(){
	return (
		<footer className={styles.rodape}>
			<MarcaRegistrada /> Desenvolvido por Alura.
		</footer>
	)
}

export default Rodape