import { FaAngleLeft } from "react-icons/fa";
import login from "../../assets/login.png";
import alcance from "../../assets/footerAlcance.png";
import styles from "./Login.module.css";
import {Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { apiAlcance } from "../../service/Service";
import { deuErrado } from "../../Util/Util";
import { context } from "../../Contexts/Contexts";


export const Login = () => {

  const {submit} = useContext(context);

  const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [aluno, setAluno] = useState([])
  
const loginAluno = (email,senha) =>{
  apiAlcance
  .get(`/alunos/email/${email}`)
  .then(res =>{
    console.log(res.data)
    setAluno(res.data)
    handleSubmit()
  })
  .catch((erro)=>{
     deuErrado()
  })
  aluno.email === email && aluno._senha === senha?navigate("/user"):deuErrado()
} 

const handleSubmit = () => {
  // console.log("dados pregister", { nome, email, telefone, senha,unidade,curso });
   submit({ aluno });
 };
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
                    loginAluno(email,senha);
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
