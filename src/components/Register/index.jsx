import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Success, Incorrect } from "../../Util/Util";

import { apiAlcance } from "../../service/Service.js";

import styles from "./Register.module.css";

export const Register = () => {
  const nav = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [unidade, setUnidade] = useState("");
  const [curso, setCurso] = useState("");

  const submitForme = (nome, email, telefone, unidade, curso, senha) => {
    apiAlcance
      .post(`/alunos`, {
        nome,
        email,
        telefone,
        unidade,
        curso,
        senha,
        cep:"",
        endereco:"",
        cidade:"",
      })
      .then(() => {
        Success();
        nav("/login");
      })
      .catch(() => {
        Incorrect();
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.form_title}>
          <h1>Inscreva-se</h1>
        </div>
        <section className={styles.form_body}>
          <div className={styles.item1}>
            <p className={styles.col1}>
              <label htmlFor="name" className={styles.col_label}>
                <span>Nome Completo*</span>
              </label>
              <input
                type="text"
                id="name"
                name="username"
                className={styles.user}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </p>
            <p className={styles.col1}>
              <label htmlFor="mail" className={styles.col_label}>
                <span>E-mail*</span>
              </label>
              <input
                type="email"
                id="mail"
                name="usermail"
                className={styles.user}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </p>
          </div>
          <div className={styles.item2}>
            <div className={styles.col2_2}>
              <p className={styles.col2}>
                <label htmlFor="phone" className={styles.col_label2}>
                  <span>Telefone*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="(00) 00000-0000"
                  className={styles.input}
                  onChange={(e) => {
                    setTelefone(e.target.value);
                  }}
                />
              </p>
              <p className={styles.col2}>
                <label htmlFor="password" className={styles.col_label2}>
                  <span>Senha*</span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className={styles.input}
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                ></input>
              </p>
            </div>
            <p className={styles.col2}>
              <label htmlFor="unit" className={styles.col_label}>
                <span>Unidade*</span>
              </label>
              <select
                id="unit"
                name="unit"
                required
                className={styles.unidade}
                onChange={(e) => {
                  setUnidade(e.target.value);
                }}
              >
                <option defaultValue={""} disabled selected>
                  Selecione uma unidade
                </option>
                <option defaultValue="unitPe">Unidade Pernambuco</option>
                <option defaultValue="unitRj">Unidade Rio de Janeiro</option>
                <option defaultValue="unitSp">Unidade São Paulo</option>
                <option defaultValue="unitSc">Unidade Santa Catarina</option>
              </select>
            </p>
          </div>
          <div className={styles.item3}>
            <p className={styles.course}>
              <label htmlFor="course">
                <span>Curso*</span>
              </label>
              <select
                id="course"
                name="course"
                required
                className={styles.input_course}
                onChange={(e) => {
                  setCurso(e.target.value);
                }}
              >
                <option defaultValue={""} disabled selected>
                  Selecione um curso
                </option>
                <option defaultValue="course1">Informática básica</option>
                <option defaultValue="course2">
                  Inglês básico ao avançado
                </option>
                <option defaultValue="course3">Excel básico ao avançado</option>
                <option defaultValue="course4">
                  Introdução a Metodologia Àgil
                </option>
                <option defaultValue="course5">
                  Introdução a Lógica de Programação
                </option>
              </select>
            </p>
            <p className={styles.text}>*Item Obrigatório</p>
          </div>
          <div className={styles.form_footer}>
            <div className={styles.privacy}>
              <input type="checkbox" id="privacy" name="privacy" />
              <label htmlFor="privacy">
                Declaro que li e concordo com a<b> política de privacidade</b>,
                bem como com o tratamento dos meus dados para fins de prospecção
                dos serviços educacionais prestados pela Avance.
              </label>
            </div>
            <button
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                submitForme(nome, email, telefone, unidade, curso, senha);
              }}
            >
              Enviar
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};
