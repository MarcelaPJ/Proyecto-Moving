import React from "react";
import { Link } from "react-router-dom";
import background from "./background.png"
import styles from "./Inicio.module.css";

const Inicio = () => {
    return (
        <div className={styles["container"]}>
            <div>
                <button><Link to="/login" className={styles["link"]}>Inicia Sesión</Link></button>
                <button><Link to="/register" className={styles["link"]}>Crea una cuenta</Link></button>
                <img src={background} alt="logo" className={styles["logo"]}/>
            </div>
        </div>
    );
    }

export default Inicio;