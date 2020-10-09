import React from "react";
import { Link } from "gatsby";
import boxStyles from "../styles/box.module.css";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


export default class MainBox extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
                <div className={boxStyles.container} >
                    <h2 className={boxStyles.title}>
                        Jugger Argentina
                </h2>
                    <p className={boxStyles.content} >
                        Here you'll find a resume about the sport, along with some online resources.
                </p>
                </div>
        );
    }
}
