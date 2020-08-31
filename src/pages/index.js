import React from "react";
import MainButton from "../components/MainButton";

export default function Home() {
  return <>
      <MainButton buttonText="Me" url="/me/" />
      <MainButton buttonText="Project" />
      <MainButton buttonText="Resume" />
      <MainButton buttonText="Other" />
    </>;
}