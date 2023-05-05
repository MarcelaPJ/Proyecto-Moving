import React from "react";
import { Link } from "react-router-dom";
import styles from "../futbol/Info.module.scss";
import fondo_natación from "./fondo_natación.png"

const InfoNatacion = () => {

    return (
        <div>
            <div>
                <img src={fondo_natación} alt="natación" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoNatacion;
