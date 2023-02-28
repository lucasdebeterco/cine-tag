import styles from './Player.module.css'
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import {useParams} from "react-router-dom"
import videos from 'json/db.json'

export default function Player() {
    const params = useParams();
    const video = videos.find((video) => {
        return video.id === Number(params.id);
    })
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.videoArea}>
                <iframe
                    width='800'
                    height='500'
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow='acelerometer; auto-play; clipboard-write;'
                ></iframe>
            </section>
        </>
    )
}