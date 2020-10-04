import React from "react";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import Container from "../components/Container";
import Calculator from "../components/Calculator";
import SearchBar from "../components/SearchBar";
import Helmet from "react-helmet";
import { withPrefix, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
    constructor() {
        super();
        this.search.bind(this)
        this.startup.bind(this)
    }
    startup(e) {
        e.preventDefault();
        alert("turn it around baby")
    }
    search() {
        alert('this')
    }
    render() {

        return (
            <div style={{display:"flex",flexDirection:"column"}}>
                <SearchBar />
                {/*<Calculator />*/}
                <Container
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2,1fr)",
                    }}
                >
                    <Card onClick={this.startup} imgLink={"./profile.jpg"} name={"Nicolás Atila Mátray"} />
                    
                {/*}  you can edit the buttons here
                <MainButton color="#660066" buttonText="Me" url="/me/" />
                <MainButton color="#000066" buttonText="Projects" url="/projects/" />
                <MainButton color="#666666" buttonText="Resume" url="/resume/" />
                <MainButton color="#00751c" buttonText="Other" url="/other/" />
                
                but why would you?
            */}
                </Container>
                <p>  </p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
