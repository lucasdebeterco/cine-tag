import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Container from "./components/Container";
import {FavoritosProvider} from "./contexts/Favoritos";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </Container>
            </FavoritosProvider>
            <Footer />
        </BrowserRouter>
    )
}