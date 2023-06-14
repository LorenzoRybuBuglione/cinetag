import styles from "./Card.module.css";
import favIcon from "./favorite_outline.png";

function Card({ id, title, image }) {
  return (
  <div className={styles.container}>
    <img src={image} alt={title} className={styles.image} />
    <h2>{title}</h2>
    <img src={favIcon} alt="Favoritar filme" className={styles.favorite} />
  </div>
  );
}

export default Card;
