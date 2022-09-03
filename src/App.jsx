import Register from "./components/Register";
import React, { useState, useEffect } from "react";
import { Card } from "./components/card/Card";
import { apiAlcance } from "./service/Service";
import { Home } from "./pages/Home";
import Header from "./components/Header";

import "./styles/global.css";

export const App = () => {
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
      <Register />
      {cursos.map((curso) => (
        <Card
          key={curso.id}
          nome={curso.nome}
          image={curso.image}
          descricao={curso.descricao}
        />
      ))}
    </main>
  );
};
