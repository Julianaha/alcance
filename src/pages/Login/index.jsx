import { FaAngleLeft } from "react-icons/fa";
import login from "../../assets/login.png";
import alcance from "../../assets/footerAlcance.png";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.grid}>
      <main className={styles.main}>
        <p className={styles.nav}>
          <a>
            <FaAngleLeft />
            voltar para a home
          </a>
        </p>
        <div className={styles.container}>
          <form className={styles.form}>
            <div className={styles.form_login}>
              <img src={login} className={styles.logo} />
              <div className={styles.user}>
                <label htmlFor="mail">Usuário</label>
                <input type="email" id="mail" name="usermail" />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" />
                <button type="submit" className={styles.button}>
                  entrar
                </button>
              </div>
              <p className={styles.register}>
                Não tem uma conta? <a href="">Cadastre-se</a>
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
