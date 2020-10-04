// imports
import React from "react";
import cardStyles from "./card.module.css"
import CardR from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";


// start
export default class Card extends React.Component {
    constructor(props) {
        super();
    }
    // so this is where you'd see the most vital info, links, etc
    render() {
        return (
                <div className={cardStyles.container}>
                    {/* personal image! */}
                    <div className={cardStyles.img}>
                        <img src={this.props.imgLink} />
                    </div>
                    {/* personal data! */}
                    <div className={cardStyles.typewriter}>
                    <h1 ><strong>name</strong>: {this.props.name}</h1>
                    <h1 ><strong>birth</strong>: 02.02.91 - Argentina</h1>
                        <h1 ><strong>phone</strong>: (+54) 2257 544282</h1>
                        <h1 ><strong>deity</strong>: none</h1>
                            <h1 ><strong>likes</strong>: pancakes, reading</h1>
                    </div>
                    {/* media! */}
                    <div className={cardStyles.iconContainer}>
                        <a href="https://www.linkedin.com/in/nicolasmatray/">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                            />
                        </a>
                        <a href="https://github.com/nagykorte">
                            <FontAwesomeIcon
                                icon={faGithub}
                            />
                        </a>
                        <a href="https://facebook.com/nicolasatila.matray">
                            <FontAwesomeIcon
                                icon={faFacebook}
                            />
                        </a>
                        <a href="mailto:nicolasatilamatray@gmail.com">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                            />
                        </a>
                    </div>
                </div>
        );
    }
}
/*
<CardR style={{ width: "100%", maxWidth: "1000px", backgroundColor: "#101010", fontColor: "green", display: "flex" }}>
    <CardR.Img className={cardStyles.img} variant="tip" src="./profile.jpg" />



    <div className=>

    </div>



    <ListGroup variant="flush" className={cardStyles.ListGroup}>
        {// here go the links!
        }
        <ListGroupItem className={cardStyles.icons}>


        </ListGroupItem>
    </ListGroup>
    <p>
        asd
                </p>
</CardR>*/