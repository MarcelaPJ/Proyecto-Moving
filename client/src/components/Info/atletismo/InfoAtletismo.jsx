import React from "react";
import { Link } from "react-router-dom";
import styles from "../futbol/Info.module.scss";
import fondo_atletismo from "./fondo_atletismo.png"

const InfoAtletismo = () => {

    return (
        <div>
            <div>
                <img src={fondo_atletismo} alt="atletismo" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoAtletismo;