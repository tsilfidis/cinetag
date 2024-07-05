import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "components/contexto/Favoritos";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}