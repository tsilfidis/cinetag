import Favoritos from "pages/Favoritos";
import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import Player from "./pages/Player";
import FavoritosProvider from "components/contexto/Favoritos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/Favoritos" element={<Favoritos />} />
                        <Route path="/Player" element={<Player />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;