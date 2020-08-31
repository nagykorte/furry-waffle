import React from "react";
import MainButton from "../components/MainButton";

export default function Me() {
    return (
        <>
            <MainButton buttonText="index" url="/" />
            <MainButton buttonText="Project" />
            <MainButton buttonText="Resume" />
            <MainButton buttonText="Other" />
            <div></div>
            What's me?
        </>
    );
}
