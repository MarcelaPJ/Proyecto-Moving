import React from "react";
import { Link } from "react-router-dom";
import styles from "../futbol/Info.module.scss";
import fondo_tenis from "./fondo_tenis.png"

const InfoTenis = () => {

    return (
        <div>
            <div>
                <img src={fondo_tenis} alt="tenis" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoTenis;
