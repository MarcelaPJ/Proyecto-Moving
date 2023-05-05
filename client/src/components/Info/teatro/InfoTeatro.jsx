import React from "react";
import { Link } from "react-router-dom";
import styles from "../futbol/Info.module.scss";
import fondo_teatro from "./fondo_teatro.png"

const InfoTeatro = () => {

    return (
        <div>
            <div>
                <img src={fondo_teatro} alt="teatro" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoTeatro;