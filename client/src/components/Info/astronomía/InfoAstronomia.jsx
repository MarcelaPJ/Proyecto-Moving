import React from "react";
import { Link } from "react-router-dom";
import styles from "../futbol/Info.module.scss";
import fondo_astronomía from "./fondo_astronomía.png"

const InfoAstronomia = () => {

    return (
        <div>
            <div>
                <img src={fondo_astronomía} alt="astronomía" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoAstronomia;