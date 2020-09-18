import React from "react";
import MainButton from "../components/MainButton";
import Container from "../components/Container";
import Calculator from "../components/Calculator";
import Helmet from "react-helmet";
import { withPrefix, Link } from "gatsby";

export default function Home() {
    return (
        <>
            {/*<Calculator />*/}
            <Container
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                }}
            >


                {/*}  you can edit the buttons here
                <MainButton color="#660066" buttonText="Me" url="/me/" />
                <MainButton color="#000066" buttonText="Projects" url="/projects/" />
                <MainButton color="#666666" buttonText="Resume" url="/resume/" />
                <MainButton color="#00751c" buttonText="Other" url="/other/" />

                but why would you?
            */}
            </Container>
            <Helmet>
                <script src={withPrefix("index-module.js")} type="text/javascript" defer />
            </Helmet>
        </>
    );
}
