import React from "react";
import { Link } from "react-router-dom";
import futbol3 from "./img/futbol3.jpg";
import tenis from "./img/tenis.jpeg";
import natacion5 from "./img/natacion5.webp";
import atletismo from "./img/atletismo.webp";
import basquet4 from "./img/basquet4.jpeg";
import teatro from "./img/teatro.jpeg";
import musica from "./img/musica.jpeg";
import astro from "./img/astro.jpeg";
import background from "./img/background.png";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles["container"]}>
            <div>
                <button><Link to="/">Cerrar sesión</Link></button>
                <img src={background} alt="logo" className={styles["logo"]}/>
            </div>
            <div>
                <button className={styles['linkAc']}><Link to="/academias/new" className={styles["link"]}>Inscribir Academia</Link></button>
            </div>
            <p>Esta es la oferta de academias deportivas y culturales que tenemos disponibles para el año 2023.</p>
              
            <div className="grid">
                <div className={styles["gallery-container"]}>
                    <div className={styles["gallery-item"]}>
                        <img src={futbol3} alt="futbol" className={styles["gallery-img"]}/>
                        <h2><Link to="/futbol" className={styles["gallery-title"]}>Fútbol</Link></h2>
                    </div>
                    <div className={styles["gallery-item"]}>
                        <img src={tenis} alt="tenis" className={styles["gallery-img"]}/>
                        <h2><Link to="/tenis" className={styles["gallery-title"]}>Tenis</Link></h2>
                    </div>
                    <div className={styles["gallery-item"]}>
                        <img src={natacion5} alt="natación" className={styles["gallery-img"]}/>
                        <h2><Link to="/natacion" className={styles["gallery-title"]}>Natación</Link></h2>
                    </div>
                    <div className={styles["gallery-item"]}>
                        <img src={atletismo} alt="atletismo" className={styles["gallery-img"]}/>
                        <h2><Link to="/atletismo" className={styles["gallery-title"]}>Atletismo</Link></h2>
                    </div>
                    <div className={styles["gallery-item"]}>
                        <img src={basquet4} alt="basquetball" className={styles["gallery-img"]}/>
                        <h2><Link to="/basquetball" className={styles["gallery-title"]}>Basquetball</Link></h2>
                    </div>
                    <div className={styles["gallery-item"]}>
                        <img src={teatro}  alt="teatro" className={styles["gallery-img"]}/>
                        <h2><Link to="/teatro" className={styles["gallery-title"]}>Teatro</Link></h2>
                    </div>
                    <div className={styles["gallery-item"]}>
                        <img src={musica}  alt="música" className={styles["gallery-img"]}/>
                        <h2><Link to="/musica" className={styles["gallery-title"]}>Música</Link></h2>
                    </div>
                    <div className={styles["gallery-item"]}>
                        <img src={astro}  alt="asronomía" className={styles["gallery-img"]}/>
                        <h2><Link to="/astronomia" className={styles["gallery-title"]}>Astronomía</Link></h2>
                    </div>
                </div>
             </div>
        </div>
       
    );
    }

export default Home;