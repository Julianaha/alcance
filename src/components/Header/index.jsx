import styles from "./Header.module.css";
import alcanceLogo from "../../assets/alcance_logo.png";

function Header() {
  return (
    <header>
      <div className={styles.headerFirst}>
        <p className={styles.paragraphFirst}>Ainda não é aluno?</p>
        <button className={styles.btnFirst}>Inscreva-se pelo site</button>
      </div>
      <nav className={styles.nav}>
        <img
          src={alcanceLogo}
          alt="logo da empresa alcance"
          className={styles.imgLogo}
        />
        <span className={styles.options}>
          <p>Quem Somos</p>
          <p>Cursos</p>
          <p>Unidades</p>
          <p>Empresas Parceiras</p>
          <button className={styles.btnNav}>Login</button>
        </span>
      </nav>
    </header>
  );
}

export default Header;
