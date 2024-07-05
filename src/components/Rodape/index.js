import styles from "./Rodape.module.css"

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h2>Desenvolvido por <a className={styles.link_rodape} href="https://github.com/tsilfidis" target="_blank" rel="noreferrer noopener">Paná Tsilfidis</a>.</h2>
        </footer>
    )
}

export default Rodape;