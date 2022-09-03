import Register from "./components/Register";
import React, { useState, useEffect } from "react";
import { Card } from "./components/card/Card";
import { apiAlcance } from "./service/Service";
import Navbar from "./components/Header/Navbar";
import { Home } from "./pages/Home";
import Container from "./components/Header/Container";

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
      <Container customClass="min-height">
          <Navbar />
      </Container>
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
