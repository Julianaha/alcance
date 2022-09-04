import Register from "../../components/Register";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import { Card } from "../../components/card/Card";
import { apiAlcance } from "../../service/Service";
import styles from "../../components/card/Card.module.css";


export const Home = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    apiAlcance.get(`/cursos`).then((res) => {
      console.log(res.data);
      setCursos(res.data);
    });
  }, []);

  return (
      <main>
  <Header />
    
      <div className={styles.cardConteiner}>
      {cursos.map((curso) => (
        <Card
          key={curso.id}
          nome={curso.nome}
          image={curso.image}
          descricao={curso.descricao}
        />
      ))}
     
      </div>
      <Register />

      </main>
    
  );
};
