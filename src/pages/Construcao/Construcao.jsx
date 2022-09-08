import { Link } from "react-router-dom";

import styles from "./Construcao.module.css";
import studente from "../../assets/student.png";


export const Construcao = () => {
  const dataFinal = new Date("Sep 15, 2022 22:00:00").getTime();
  const limpar = setInterval(function () {
    const dataAtual = new Date().getTime();
    const tempo = dataFinal - dataAtual;
    const dia = Math.floor(tempo / (1000 * 60 * 60 * 24));
    const hora = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuto = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundo = Math.floor((tempo % (1000 * 60)) / 1000);

    document.querySelector("#dia").textContent = `${dia}`;
    document.querySelector("#hora").textContent = `${hora}`;
    document.querySelector("#minuto").textContent = `${minuto}`;
    document.querySelector("#segundo").textContent = `${segundo}`;

    if (tempo < 0) {
      clearInterval(limpar);
      document.querySelector("#final").innerHTML = "TIME UP";
      document.querySelector("#dia").textContent = `0`;
      document.querySelector("#hora").textContent = `0`;
      document.querySelector("#minuto").textContent = `0`;
      document.querySelector("#segundo").textContent = `0`;
    }
  }, 1000);

  return (
    <div className={styles.construcao}>
      <div className={styles.conteiner}>
        <div className={styles.contagem}>
          <h1 className={styles.titulo}>Pagina em construção...</h1>
          <div className={styles.horas}>
            <div className={styles.timerTexto}>
              <p>Dias</p>
              <p>Horas</p>
              <p>Minutos</p>
              <p>Segundos</p>
            </div>
            <div className={styles.timer}>
              <p id="dia"></p>
              <p>:</p>
              <p id="hora"></p>
              <p>:</p>
              <p id="minuto"></p>
              <p>:</p>
              <p id="segundo"></p>
            </div>
            <div id="final" className={styles.titulo}></div>
          </div>
          <p className={styles.texto}>
            Nos somos ALCANCE
          </p>
         <Link to="/"> <button className={styles.bnt}>HOME</button></Link>
        </div>
        <div className={styles.imgCentral}>
          <img src={studente} alt="" srcset="" />
        </div>
      </div>
      
    </div>
  );
};
