import Banner from "components/Banner";
import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";
import videos from "json/db.json";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Banner image={"home"} />
      <Title>
        <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
      <Footer />
    </>
  );
}

export default Home;
