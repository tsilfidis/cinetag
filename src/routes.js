import Favoritos from "pages/Favoritos";
import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import Player from "./pages/Player";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Favoritos" element={<Favoritos />} />
                    <Route path="/Player" element={<Player />} />
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;