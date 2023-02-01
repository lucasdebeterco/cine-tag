import {Header} from "components/Header";
import {Footer} from "components/Footer";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import videos from "json/db.json";
import styles from './Inicio.module.css';

export function Home() {
    return (
        <>
            <Header />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) =>
                    <Card {...video} key={video.id}></Card>)
                }
            </section>

            <Footer />
        </>
    )
}