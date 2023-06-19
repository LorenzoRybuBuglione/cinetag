import { useFavoriteContext } from "contexts/Favorites";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import notFavIcon from "./favorite_outline.png";
import favIcon from "./favorite.png";

function Card({ id, title, image }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/Player/${id}`}>
        <img src={image} alt={title} className={styles.image} />
      </Link>
      <div className={styles.footer}>
        <Link className={styles.link} to={`/Player/${id}`}>
          <h2>{title}</h2>
        </Link>

        <img
          src={isFavorite ? favIcon : notFavIcon}
          alt="Favoritar filme"
          className={styles.favorite}
          onClick={() => {
            addFavorite({ id, title, image });
          }}
        />
      </div>
    </div>
  );
}

export default Card;
