import styles from './Player.module.css'
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import {useParams} from "react-router-dom"
import NotFound from "../NotFound";
import {useEffect, useState} from "react";

export default function Player() {
    const [video, setVideo] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${params.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    if(!video) {
        return <NotFound />
    }

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