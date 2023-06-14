import Banner from "components/Banner";
import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";

function Home() {
  return (
    <>
      <Header />
      <Banner image={'home'}/>
      <Title>
        <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Card id='1' title='Gato Bonifácio' image='https://github.com/LorenzoRybuBuglione.png' />
      <Footer />
    </>
  );
}

export default Home;
