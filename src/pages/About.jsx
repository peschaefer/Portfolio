import React from "react";
import Header from "../components/Header";

const About = () => {
    return (
        <div className={"App"}>
            <title>About - PeytonSchaefer</title>
            <Header/>
            <h2 className={"subheader"}>About</h2>
            <hr style={{
                background: "rgb(232, 90, 79)",
                color: "rgb(232, 90, 79)",
                height: "3px",
                margin: "0px",
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
            }}/>
        </div>
    );
};

export default About;