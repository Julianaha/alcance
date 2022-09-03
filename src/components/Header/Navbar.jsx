import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from '../../assets/alcance_logo.png'

import Container from "./Container";


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.header}>
            <ul className={styles.list2}>
                    <li className={styles.item2}>
                    <Link to= "/">Ainda não é Aluno?</Link>
                    </li>
                    <li className={styles.item2}>
                    <Link to= "/"><button> Inscreva-se pelo Whats</button></Link>
                    </li>
                    <li className={styles.item2}>
                    <Link to= "/"><button>Inscreva-se pelo site</button></Link>
                    </li>
                    </ul>
            </div>
            <Container>
                <Link to="/">
                <img id='logoheader' src={logo} width='180'alt="alcance logo"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to= "/">Quem Somos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to= "/">Cursos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to= "/">Unidades</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to= "/">Blog</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to= "/">Empresas Parceiras</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to= "/"><button>Login</button></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}




export default Navbar;