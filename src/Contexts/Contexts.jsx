import { useState, createContext } from "react";

export const context = createContext([]);

export const Provider = ({ children }) => {
  const [aluno, setAluno] = useState([]);

  const handleSubmit = ({ aluno }) => {
    setAluno(aluno);
  };
  return (
    <context.Provider value={{ aluno, submit: handleSubmit }}>
      {children}
    </context.Provider>
  );
};
