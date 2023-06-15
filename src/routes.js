import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Favorites from "pages/Favorites";

import FavoritesProvider from "contexts/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import Container from "components/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favoritos" element={<Favorites />} />
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
export default AppRoutes;
