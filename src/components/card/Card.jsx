import styles from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} className={styles.imgCard} />
      <h3 className={styles.titleCard}>{props.nome}</h3>
      <h4 className={styles.subtitleCard}>do básico ao avançado</h4>
      <p className={styles.textCard}>{props.descricao}</p>
      <button className={styles.btnCard}>saiba mais</button>
    </div>
  );
};
