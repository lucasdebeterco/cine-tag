import styles from './Favoritos.module.css'
import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";

export default function Favoritos() {
    return  (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                card fake
            </section>
        </>
    )
}