import Register from "./components/Register";
import { useState, useEffect } from "react";
import {Card} from "./components/card/Card"
import {apiAlcance} from "./service/Service"
import "./styles/global.css";

function App() {
  const [cursos, setCursos] = useState([]);

  
  useEffect(() => {
    apiAlcance.get(`/cursos`).then((res) => {
      console.log(res.data);
      setCursos(res.data);
    });
  }, []);

  return (
    <main>
    <Register/>
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
}

export default App;
