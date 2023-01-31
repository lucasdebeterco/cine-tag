import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.footerInfo}>
                Desenvolvido por Alura.
            </span>
        </footer>
    )
}