import React from "react";
import SubButton from "../components/SubButton";
import styles from "./me-css-modules.module.css";
import Container from "../components/Container";
console.log(styles);
const User = (props) => (
    //structure
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
);

export default function Me() {
    return (
        <>
            <Container>
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
            </Container>
        </>
    );
}
