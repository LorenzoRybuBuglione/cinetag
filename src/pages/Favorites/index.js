import styles from './Favorites.module.css';

import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import videos from "json/db.json";

function Favorites() {
    return (
        <>
        <Banner image={"fav"} />
        <Title>
          <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
          {videos.map((video) => {
            return <Card {...video} key={video.id} />;
          })}
        </section>
      </>

    )
}

export default Favorites;