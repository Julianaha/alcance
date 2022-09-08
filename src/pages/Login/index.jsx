import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { apiAlcance } from "../../service/Service";
import { Incorrect } from "../../Util/Util";
import { context } from "../../Contexts/Contexts";

import login from "../../assets/login.png";
import alcance from "../../assets/footerAlcance.png";

import styles from "./Login.module.css";

export const Login = () => {
  const { submit } = useContext(context);

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [aluno, setAluno] = useState([]);

  const loginAluno = (email, senha) => {
    apiAlcance
      .get(`/alunos/email/${email}`)
      .then((res) => {
        
        setAluno(res.data);
        handleSubmit(res.data);
        res.data.email === email && res.data.senha === senha
          ? navigate("/user")
          : Incorrect();
      })
      .catch((error) => {
        console.log(error);
        Incorrect();
      });
  };
  const handleSubmit = (aluno) => {
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
              <p className={styles.loginStudent}>Login do Aluno</p>
              <div className={styles.user}>
                <label htmlFor="mail">Usuário</label>
                <input
                  type="email"
                  id="mail"
                  name="usermail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    loginAluno(email, senha);
                  }}
                >
                  entrar
                </button>
              </div>
              <p className={styles.register}>
                Novo por aqui? <Link to="/">Registre-se</Link>
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
