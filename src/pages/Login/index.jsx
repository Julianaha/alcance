import { FaAngleLeft } from "react-icons/fa";
import login from "../../assets/login.png";
import alcance from "../../assets/footerAlcance.png";
import styles from "./Login.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiAlcance } from "../../service/Service";

export const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const [aluno, setAluno] = useState()
  
const loginAluno = (email) =>{
  apiAlcance
  .get(`/alunos/${email}`)
  .then(res =>{
    setAluno(res.data)
  })
} 

  return (
    <div className={styles.grid}>
      <main className={styles.main}>
        <p className={styles.nav}>
          <Link to="/">
            <FaAngleLeft />
            voltar para a home
          </Link>
        </p>
        <div className={styles.container}>
          <form className={styles.form}>
            <div className={styles.form_login}>
              <img src={login} className={styles.logo} />
              <div className={styles.user}>
                <label htmlFor="mail">Usuário</label>
                <input type="email" id="mail" name="usermail" onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" onChange={(e) => {
                  
                  setSenha(e.target.value);
                }}/>
                <button type="submit" className={styles.button} onClick={
                  (e) =>{
                    e.preventDefault()
                    loginAluno(email);
                    console.log(email, senha)
                    console.log(aluno.email, aluno._senha)
                    aluno.email == email && aluno._senha == senha?navigate("/user"):console.log("nao valido")
                  }
                }>
                  entrar
                </button>
              </div>
              <p className={styles.register}>
                Não tem uma conta? <Link to="/">Cadastre-se</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      <footer className={styles.footer}>
        <figure className={styles.img}>
          <img src={alcance} />
        </figure>
      </footer>
    </div>
  );
};
