import { NavLink } from 'react-router-dom'
import styles from './menu.module.css'

function Menu(){
    return (
        <header>
            <nav className={styles.navegacao}>
                <NavLink to='/' className={({ isActive })=>`
                    ${styles.link}
                    ${isActive ? styles.linkDestacado : ''}
                `}>
                    Início
                </NavLink>
                <NavLink to='/sobremim' className={({ isActive })=>`
                    ${styles.link}
                    ${isActive ? styles.linkDestacado : ''}
                `}>
                    Sobre Mim
                </NavLink>
            </nav>
        </header>
    )
}

export default Menu