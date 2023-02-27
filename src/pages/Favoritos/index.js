import styles from './Favoritos.module.css'
import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";
import { useFavoritoContext } from "../../contexts/Favoritos";
import Card from "../../components/Card";

export default function Favoritos() {
    const favoritos = useFavoritoContext().favorito

    return  (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                { favoritos.map((favorito) =>
                    <Card id={favorito.id} capa={favorito.capa} titulo={favorito.titulo} />
                )}
            </section>
        </>
    )
}