import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from '../../assets/alcance_logo.png'

import Container from "./Container";

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                <img id='logoheader' src={logo} width='180'alt="alcance logo"/>
                </Link>
                <ul class={styles.list}>
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
                    <Link to= "/">Login</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}




export default Navbar;