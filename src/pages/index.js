import React from "react";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import Container from "../components/Container";
import BoxContainer from "../components/BoxContainer";
import Calculator from "../components/Calculator";
import SearchBar from "../components/SearchBar";
import MainBox from "../components/MainBox";
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
            <React.Fragment>

                <SearchBar />
                <div className="parallax">
                    {/*<Calculator />*/}
                </div>
                <Container>
                    <Card onClick={this.startup} imgLink={"./profile.jpg"} name={"Nicolás Atila Mátray"} />
                </Container>
                <BoxContainer>
                    <MainBox />
                    <MainBox />
                    <MainBox />
                    <MainBox />
                    <MainBox />
                    <MainBox />
                </BoxContainer>
            </React.Fragment>
        );
    }
}
