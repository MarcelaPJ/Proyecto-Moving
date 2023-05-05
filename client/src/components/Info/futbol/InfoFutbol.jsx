import React from "react";
import { Link } from "react-router-dom";
import styles from "./Info.module.scss";
import fondo_futbol from "./fondo_futbol.png"

const InfoFutbol = () => {

    return (
        <div>
            <div>
                <img src={fondo_futbol} alt="futbol" className={styles["img"]}/>
            </div>            
            <button><Link to="/home">Home</Link></button>
        </div>
    );
}

export default InfoFutbol;





// (tenis)



// (natación)


// (atletismo)


// (teatro)


// (música)



