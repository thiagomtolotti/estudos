import styles from './BotaoPrincipal.module.css'

const BotaoPrincipal = ( { children, tamanho  } ) => {
    return(
        <button className={`${styles.botaoPrincipal} ${(tamanho === 'lg') ? styles.lg : ''}`}>
            {children}
        </button>
    )
}

export default BotaoPrincipal