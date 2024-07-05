import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css"
import videos from "json/db.json";
import Card from "components/Card";

function Favoritos() {
    return (
        <>
            <Banner imagem="Favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;