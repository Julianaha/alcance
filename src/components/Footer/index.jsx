import styles from "./Footer.module.css";
import alcanceLogo from "../../assets/alcance_logo.png";
import { Link } from "react-router-dom";
import { TiSocialYoutubeCircular, TiSocialInstagram } from "react-icons/ti";
import { FaTiktok, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <box className={styles.box}>
      <div className={styles.headerFirst}>
        <img
          src={alcanceLogo}
          alt="logo da empresa alcance"
          className={styles.imgLogo}
        />
      </div>

      <container className={styles.container}>
        <row className={styles.row}>
          <column className={styles.collumn1}>
            <h4 className={styles.paragraphFirst}>Ainda não é aluno?</h4>
            <h4 className={styles.paragraphTwo}>Inscreva-se</h4>
            <Link to="/whats">
              <button className={styles.btnWhats}>Pelo whats</button>
            </Link>
            <Link to="/site">
              <button className={styles.btnSite}>Pelo site</button>
            </Link>
          </column>

          <column className={styles.collumnmeio}>
            <div className={styles.barra1}></div>
          </column>

          <column className={styles.collumn2}>
            <h4 className={styles.paragraph2}>A Alcance</h4>
            <h4 className={styles.paragraph4}>Quem somos</h4>
            <h4 className={styles.paragraph5}>Fale conosco</h4>
          </column>

          <column className={styles.collumnmeio}>
            <div className={styles.barra2}></div>
          </column>

          <column className={styles.collumn3}>
            <h4 className={styles.paragraphcursos}>
              Cursos Profissionalizantes
            </h4>
            <h4 className={styles.paragraph6}>Área de Tecnologia</h4>
            <h4 className={styles.paragraph7}>Área de Gestão</h4>
          </column>

          <column className={styles.collumnmeio}>
            <div className={styles.barra3}></div>
          </column>

          <column className={styles.collumn4}>
            <h4 className={styles.paragraphunidades}>Unidades</h4>
            <h4 className={styles.paragraph8}>Unidade São Paulo</h4>
            <h4 className={styles.paragraph9}>Unidade Rio de Janeiro</h4>
            <h4 className={styles.paragraph10}>Unidade Santa Catarina</h4>
            <h4 className={styles.paragraph11}>Unidade Pernanbuco</h4>
          </column>

          <column className={styles.collumnmeio}>
            <div className={styles.barra4}></div>
          </column>

          <column className={styles.collumn5}>
            <h4 className={styles.paragraphultimo}>
              Siga nossas redes sociais
            </h4>

            <div className={styles.icons}>
      
            <ul classname={styles.icons2}>
              <li>
              <TiSocialYoutubeCircular size={35} />
              <TiSocialInstagram size={30} />
              <FaTiktok size={25} />
              <FaLinkedin size={30} />
              <FaFacebookSquare size={30} />
              </li>
            </ul>
          </div>
           
          </column>
        </row>
      </container>

      <footer>
        <div className={styles.rodape}>
          <p className={styles.paragraph0}>
            © 2022 Alcance. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </box>
  );
}

export default Footer;
