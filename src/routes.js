import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PageContainer from "pages/PageContainer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route index element={<Home />} />
          <Route path="Favoritos" element={<Favorites />} />
          <Route path="Player/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
