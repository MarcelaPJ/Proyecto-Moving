import React from "react";
import { Link } from "react-router-dom";
import styles from "../futbol/Info.module.scss";
import fondo_basquet from "./fondo_basquet.png"

const InfoBasquetball = () => {

    return (
        <div>
            <div>
                <img src={fondo_basquet} alt="basquetball" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoBasquetball;