import React from "react";
import styles from "../styles/box.container.module.css";

export default function BoxContainer ({ children })  {
        return (
            <div className={styles.grid} >
               {children}
            </div>
        );
}
