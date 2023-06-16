import { useFavoriteContext } from "contexts/Favorites";
import styles from "./Card.module.css";
import notFavIcon from "./favorite_outline.png";
import favIcon from "./favorite.png";

function Card({ id, title, image }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);

  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <h2>{title}</h2>
      <img
        src={isFavorite? favIcon : notFavIcon}
        alt="Favoritar filme"
        className={styles.favorite}
        onClick={() => {
          addFavorite({ id, title, image });
        }}
      />
    </div>
  );
}

export default Card;
