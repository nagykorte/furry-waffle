import React from "react";
import containerStyles from "./container.module.css";

export default function Container({ children }) {
    return (
        <div
            className={containerStyles.container}
            style={{ margin: `3rem auto`, maxWidth: `70%`, padding: `0 1rem` }}
        >
            {children}
        </div>
    );
}