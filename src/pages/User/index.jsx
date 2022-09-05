import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import user from "../../assets/user.png";
import styles from "./User.module.css";
import { context } from "../../Contexts/Contexts";
import { apiAlcance } from "../../service/Service";
import Swal from "sweetalert2";

export const User = () => {
const { aluno } = useContext(context);


const AlcanceDelete = (id) => {
  apiAlcance.delete(`/alunos/${id}`);
  console.log(`${id} deletado`);
};

const deleteUser = () =>{
  const nav = useNavigate
  Swal.fire({
    title: 'Excluir',
    text: "Tem certeza que quer dletar esse usuario?",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, tenho certeza!',
    cancelButtonText: 'Melhor eu parar...'
    }).then((result) => {
      if (result.value) {
        Swal(
          AlcanceDelete(aluno.id),
          nav("/")
        )
      }
    })
}
  return (
    <main className={styles.page}>
      <div className={styles.contentUser}>
        <aside className={styles.user}>
          <div className={styles.profile}>
            <div className={styles.profilecontent}>
              <img src={user} className={styles.imgUser} />
              <h3 className={styles.username}>Nome do usuário</h3>
              <button className={styles.btndelete} onClick={() =>{
                deleteUser()
                }}>excluir</button>
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
                    value={aluno.nome}
                    autoFocus
                    className={styles.userinput}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="mail">E-mail</label>
                  <input
                    type="email"
                    id="mail"
                    value={aluno.email}
                    name="usermail"
                    className={styles.userinput}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={aluno.telefone}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="(00) 00000-0000"
                    className={styles.userinput}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={aluno._senha}
                    className={styles.userinput}
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
                    className={styles.userinput}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="adress">Endereço</label>
                  <input
                    type="text"
                    id="adress"
                    name="adress"
                    className={styles.userinput}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    className={styles.userinput}
                  />
                </p>
                <p className={styles.userflex}>
                  <label>Curso</label>
                  <select
                    id="usercourse"
                    name="usercourse"
                    value={aluno.curso}
                    required
                    className={styles.userinput}
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
                    value={aluno.unidade}
                    required
                    className={styles.userinput}
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
             <Link to="/"><button className={styles.btnBack}>voltar</button></Link>
              <button className={styles.btnSave}>salvar</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
