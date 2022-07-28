import React from "react";
import Project from "../components/Project";
import Header from "../components/Header";
import kachirpImage from "../images/kachirp.png"

const Projects = () => {
    return (
        <>
            <title>Projects - PeytonSchaefer</title>
            <Header/>
            <h2 className={"subheader"}>Projects</h2>
            <hr className={"subline"}/>
            <div className={"project-box"}>
                <Project name="Kachirp" url="peytonschaefer.com" image={kachirpImage} imageAlt="A question screen from Kachirp"
                description="This project was really really cool and I am
                going to type a lot to mess with text wrap this will all
                change later dont even worry about it. type yeppepepepe pepewpoui ffsdhdhbighcvju
                eoiudfhs kugjbfkhih sdkfjhskdf sdkjfhads kfhksdjf hlkehfrv lhfklj hlhlkj dshlkfhlk hlk
                hhhal khalkh flksh lkjh klhklh"/>
                <Project/>
            </div>
        </>
    );
};

export default Projects;