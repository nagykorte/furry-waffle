import React from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import projectStyles from "../components/projects.module.css";

export default class Projects extends React.Component {
    constructor() {
        super();
    }


    
    render() {
        return (
            <>
                <SearchBar />

                {/* <Container>
                <SubButton buttonText="Me" url="/me/"/>
                <SubButton buttonText="index" url="/" />
                <SubButton buttonText="Resume" />
                <SubButton buttonText="Other" />
                <User
                //props
                username="Title"
                avatar="https://media-exp1.licdn.com/dms/image/C4D03AQErB_Ex7rzMPg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=DIXTY_AMNKVOZmLe2VtSep-hNc_t23edZk5krznKeQM"
                excerpt="Description"
                />
                <User
                username="."
                avatar="https://i.kym-cdn.com/entries/icons/original/000/026/589/sans_thumbnail.png"
                excerpt="."
                />
                <div></div>
                What's me?
            </Container> */}
            </>
        );
    }
}
