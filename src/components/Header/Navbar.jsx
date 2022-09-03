import logo from '../../assets/alcance_logo.png'
import Container from "./Container";
import styles from "./Navbar.module.css";


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.header}>
            <ul className={styles.list2}>
                    <li className={styles.item2}>
                    Ainda não é Aluno?
                    </li>
                    <li className={styles.item2}>
                    <button> Inscreva-se pelo Whats</button>
                    </li>
                    <li className={styles.item2}>
                    <button>Inscreva-se pelo site</button>
                    </li>
                    </ul>
            </div>
            <Container>
                
                <img id='logoheader' src={logo} width='180'alt="alcance logo"/>
               
                <ul className={styles.list}>
                    <li className={styles.item}>
                    Quem Somos
                    </li>
                    <li className={styles.item}>
                    Cursos
                    </li>
                    <li className={styles.item}>
                    Unidades
                    </li>
                    <li className={styles.item}>
                    Blog
                    </li>
                    <li className={styles.item}>
                    Empresas Parceiras
                    </li>
                    <li className={styles.item}>
                    <button>Login</button>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}




export default Navbar;