import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { context } from "../../Contexts/Contexts";
import { Success } from "../../Util/Util";
import { apiAlcance } from "../../service/Service";
import user from "../../assets/user.png";
import styles from "./User.module.css";

export const User = () => {
  const { aluno } = useContext(context);

  const navegate = useNavigate();

  const [nome, setNome] = useState(aluno.nome);
  const [email, setEmail] = useState(aluno.email);
  const [telefone, setTelefone] = useState(aluno.telefone);
  const [senha, setSenha] = useState(aluno.senha);
  const [unidade, setUnidade] = useState(aluno.unidade);
  const [curso, setCurso] = useState(aluno.curso);
  const [cep, setCep] = useState(aluno.cep);
  const [endereco, setEndereco] = useState(aluno.endereco);
  const [cidade, setCidade] = useState(aluno.cidade);

  const AlcanceDelete = (id) => {
    apiAlcance.delete(`/alunos/${id}`);
    navegate("/");
  };

  const SuccessDelete = () => {
    Swal.fire({
      title: "Excluir...",
      text: "Tem certeza que quer deletar esse usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7cdddb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, tenho certeza!",
      cancelButtonText: "Não",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Excluindo...",
          icon: "success",
          position: "top-center",
          showConfirmButton: false,
          timer: 1500,
          Excluido: AlcanceDelete(aluno.id),
        });
      }
    });
  };
  const AlcanceAtualiza = (
    id,
    nome,
    email,
    telefone,
    unidade,
    curso,
    senha,
    cep,
    endereco,
    cidade
  ) => {
    apiAlcance
      .put(`/alunos/${id}`, {
        nome,
        email,
        telefone,
        unidade,
        curso,
        senha,
        cep,
        endereco,
        cidade,
      })
      .then(() => {
        Success();
      })
      .catch(() => {
        Incorrect();
      });
  };

  return (
    <main className={styles.page}>
      <div className={styles.contentUser}>
        <aside className={styles.user}>
          <div className={styles.profile}>
            <div className={styles.profilecontent}>
              <img src={user} className={styles.imgUser} />
              <h3 className={styles.username}>{nome}</h3>
              <button
                className={styles.btndelete}
                onClick={() => {
                  SuccessDelete();
                }}
              >
                excluir
              </button>
            </div>
          </div>
        </aside>
        <section className={styles.userRegister}>
          <div className={styles.userContainer}>
            <h2 className={styles.h2}>Cadastro</h2>
            <form className={styles.userForm}>
              <div className={styles.box}>
                <p className={styles.userflex}>
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="username"
                    value={nome}
                    autoFocus
                    className={styles.userinput}
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="mail">E-mail</label>
                  <input
                    type="email"
                    id="mail"
                    value={email}
                    name="usermail"
                    className={styles.userinput}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={telefone}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="(00) 00000-0000"
                    className={styles.userinput}
                    onChange={(e) => {
                      setTelefone(e.target.value);
                    }}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={senha}
                    className={styles.userinput}
                    onChange={(e) => {
                      setSenha(e.target.value);
                    }}
                  />
                </p>
              </div>
              <div className={styles.box}>
                <p className={styles.userflex}>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={cidade}
                    className={styles.userinput}
                    onChange={(e) => {
                      setCidade(e.target.value);
                    }}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="adress">Endereço</label>
                  <input
                    type="text"
                    id="adress"
                    name="adress"
                    value={endereco}
                    className={styles.userinput}
                    onChange={(e) => {
                      setEndereco(e.target.value);
                    }}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={cep}
                    className={styles.userinput}
                    onChange={(e) => {
                      setCep(e.target.value);
                    }}
                  />
                </p>
                <p className={styles.userflex}>
                  <label>Curso</label>
                  <select
                    id="usercourse"
                    name="usercourse"
                    value={curso}
                    required
                    className={styles.userinput}
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
                    <option defaultValue="course3">
                      Excel básico ao avançado
                    </option>
                    <option defaultValue="course4">
                      Introdução a Metodologia Ágil
                    </option>
                    <option defaultValue="course5">
                      Introdução a Lógica de Programação
                    </option>
                  </select>
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="unit">Unidade</label>
                  <select
                    id="unit"
                    name="unit"
                    value={unidade}
                    required
                    className={styles.userinput}
                    onChange={(e) => {
                      setUnidade(e.target.value);
                    }}
                  >
                    <option defaultValue={""} disabled selected>
                      Selecione uma unidade
                    </option>
                    <option defaultValue="unitPe">Unidade Pernambuco</option>
                    <option defaultValue="unitRj">
                      Unidade Rio de Janeiro
                    </option>
                    <option defaultValue="unitSp">Unidade São Paulo</option>
                    <option defaultValue="unitSc">
                      Unidade Santa Catarina
                    </option>
                  </select>
                </p>
              </div>
            </form>
            <div className={styles.btnRegister}>
              <Link to="/">
                <button className={styles.btnBack}>sair</button>
              </Link>
              <button
                className={styles.btnSave}
                onClick={(e) => {
                  e.preventDefault();
                  AlcanceAtualiza(
                    aluno.id,
                    nome,
                    email,
                    telefone,
                    unidade,
                    curso,
                    senha,
                    cep,
                    endereco,
                    cidade
                  );
                }}
              >
                salvar
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
