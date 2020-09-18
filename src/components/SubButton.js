import React from "react";
import { Link } from "gatsby";

export default function MainButton(props) {
    let spacing = "12";
    return (
        <Link to={props.url}>
            <button
                style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                    display: "inline-block",
                    fontSize: "20px",
                    margin: "7px 7px",
                    cursor: "pointer",
                    overflow:"hidden",
                    width: "21%",
                    height: "10vh",
                }}
            >
                {props.buttonText}
            </button>
        </Link>
    );
}
