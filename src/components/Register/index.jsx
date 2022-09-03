import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.form_title}>
          <h1>Inscreva-se</h1>
        </div>
        <section className={styles.form_body}>
          <div className={styles.item1}>
            <p className={styles.col}>
              <label htmlFor="name">
                <span>Nome Completo*</span>
              </label>
              <input
                type="text"
                id="name"
                name="username"
                className={styles.user}
              />
            </p>
            <p className={styles.col}>
              <label htmlFor="mail">
                <span>E-mail*</span>
              </label>
              <input
                type="email"
                id="mail"
                name="usermail"
                className={styles.user}
              />
            </p>
          </div>
          <div className={styles.item2}>
            <p className={styles.col}>
              <label htmlFor="phone">
                <span>Telefone*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="(00) 00000-0000"
                className={styles.input}
              />
            </p>
            <p className={styles.col}>
              <label htmlFor="state">
                <span>Estado*</span>
              </label>
              <select id="state" name="state" required className={styles.input}>
                <option defaultValue={""} disabled selected>
                  Selecione um estado
                </option>
                <option defaultValue="PE">Pernambuco</option>
                <option defaultValue="RJ">Rio de Janeiro</option>
                <option defaultValue="SP">São Paulo</option>
                <option defaultValue="SC">Santa Catarina</option>
              </select>
            </p>
            <p className={styles.col}>
              <label htmlFor="unit">
                <span>Unidade*</span>
              </label>
              <select id="unit" name="unit" required className={styles.unidade}>
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
              >
                <option defaultValue={""} disabled selected>
                  Selecione um curso
                </option>
                <option defaultValue="course1">Informática básica</option>
                <option defaultValue="course2">
                  Inglês básico ao avançado
                </option>
                <option defaultValue="course3">Excel básico ao avançado</option>
                <option defaultValue="course4">Informática básica</option>
                <option defaultValue="course5">
                  Inglês básico ao avançado
                </option>
              </select>
            </p>
            <p>*Item Obrigatório</p>
          </div>
          <div className={styles.form_footer}>
            <div className={styles.privacy}>
              <input type="checkbox" id="privacy" name="privacy" />
              <label htmlFor="privacy">
                Declaro que li e concordo com a política de privacidade, bem
                como com o tratamento dos meus dados para fins de prospecção dos
                serviços educacionais prestados pela Avance.
              </label>
            </div>
            <button>Enviar</button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Register;
