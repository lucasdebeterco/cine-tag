import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'contexts/Favoritos';

export default function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const isFavorito = favorito.some((fav) => fav.id === id)

    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={isFavorito ? iconeDesfavoritar : iconeFavoritar} alt="Favoritar filme" className={styles.favoritar} onClick={() => {
                adicionarFavorito({ id, titulo, capa })
            }} />
        </div>
    )
}