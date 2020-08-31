import React from "react";
import { Link } from "gatsby";

export default function MainButton(props) {
    return (
        <Link to={props.url}>
            <button>{props.buttonText}</button>
        </Link>
    );
}
