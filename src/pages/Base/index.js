import {Header} from "../../components/Header";
import {FavoritosProvider} from "../../contexts/Favoritos";
import Container from "../../components/Container";
import {Outlet} from "react-router-dom";
import {Footer} from "../../components/Footer";

export default function Base() {
    return (
        <main>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}