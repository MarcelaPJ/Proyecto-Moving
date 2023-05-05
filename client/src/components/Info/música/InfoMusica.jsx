import React from "react";
import { Link } from "react-router-dom";
import styles from "../futbol/Info.module.scss";
import fondo_musica from "./fondo_musica.png"

const InfoMusica = () => {

    return (
        <div>
            <div>
                <img src={fondo_musica} alt="música" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoMusica;