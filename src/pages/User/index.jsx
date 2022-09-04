import user from "../../assets/user.png";
import styles from "./User.module.css";

export const User = () => {
  return (
    <main className={styles.page}>
      <div className={styles.contentUser}>
        <aside className={styles.user}>
          <div className={styles.profile}>
            <div className={styles.profilecontent}>
              <img src={user} className={styles.imgUser} />
              <h3 className={styles.username}>Nome do usuário</h3>
              <button className={styles.btndelete}>excluir</button>
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
                    autoFocus
                    className={styles.userinput}
                  />
                </p>
                <p className={styles.userflex}>
                  <label htmlFor="mail">E-mail</label>
                  <input
                    type="email"
                    id="mail"
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
              <button className={styles.btnBack}>voltar</button>
              <button className={styles.btnSave}>salvar</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
