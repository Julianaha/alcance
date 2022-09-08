import React, { useState, useEffect } from "react";

import { Register } from "../../components/Register";
import { Header } from "../../components/Header";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/Footer";

import { apiAlcance } from "../../service/Service";

import banner from "../../assets/banner_central.png";
import carrossel from "../../assets/carrossel.png";
import logo_oferecemos from "../../assets/logo_oferecemos.png";
import logo_cursos from "../../assets/logo_cursos.png";
import student from "../../assets/student.png";
import matricula from "../../assets/matricula.png";

import style from "./Home.module.css";

export const Home = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    apiAlcance.get(`/cursos`).then((res) => {
      setCursos(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={style.banner}>
          <img
            src={banner}
            alt="banner com o logo da empresa"
            className={style.imgBanner}
          />
          <div className={style.boxCarrossel}>
            <img src={carrossel} className={style.carrossel} />
          </div>
        </div>
        <section className={style.about}>
          <img src={logo_oferecemos} className={style.imgAbout} />
          <div className={style.boxCard}>
            <div className={style.card}>
              <h3 className={style.titleCard}>
                Conexão do estudante com o trabalho{" "}
              </h3>
              <p className={style.textCard}>
                Nossa meta é a <b>empregabilidade</b> dos nossos alunos no
                mercado de trabalho em até um ano após a conclusão do seu curso.
              </p>
            </div>
            <div className={style.card}>
              <h3 className={style.titleCard}>Qualidade do curso</h3>
              <p className={style.textCard}>
                Cursos atualizados com foco no que o mercado mais valoriza.
                Experimentando sua profissão e resolvendo problemas concretos na
                prática.
              </p>
            </div>
            <div className={style.card}>
              <h3 className={style.titleCard}>Professores qualificados</h3>
              <p className={style.textCard}>
                Avaliamos a formação acadêmica, as experiências profissionais
                anteriores e se os valores éticos pessoais do profissional
                condizem com as da alcance.
              </p>
            </div>
            <div className={style.card}>
              <h3 className={style.titleCard}>
                <b>Ensino gratuito</b>
              </h3>
              <p className={style.textCard}>
                Formação escolar e profissionalizante 100% gratuito e
                reconhecido pelo MEC
              </p>
            </div>
          </div>
        </section>
        <div className={style.courses}>
          <div className={style.contentCourse}>
            <img src={logo_cursos} />
            <p className={style.textCourse}>
              Nossa formação abrem as portas para a profissão que você escolher.
              São indicados para quem quer ser um profissional capacitado na
              prática, com foco direto ao mercado de trabalho, garantindo
              formação para atividades e setores que estão em alta.
            </p>
            <div className={style.flexCard}>
              {cursos.map((curso) => (
                <Card
                  key={curso.id}
                  nome={curso.nome}
                  image={curso.image}
                  descricao={curso.descricao}
                />
              ))}
            </div>
            <div className={style.studentCard}>
              <img src={student} className={style.imgStudent} />
              <button className={style.btnStudent}>
                conheça todos os nossos cursos
              </button>
            </div>
          </div>
        </div>
        <div className={style.register}>
          <img src={matricula} className={style.registry} />
          <Register />
        </div>
      </main>
      <Footer />
    </>
  );
};
