import styles from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <p>{props.nome}</p>
      <img src={props.image} alt="Imagem Curso"></img>
      <p className="desc">{props.descricao}</p>
    </div>
  );
};
