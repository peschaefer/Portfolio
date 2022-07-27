import React from "react";
import Project from "../components/Project";
import Header from "../components/Header";

const Projects = () => {
    return (
        <>
            <title>Projects - PeytonSchaefer</title>
            <Header/>
            <h2>Projects</h2>
            <Project name="Kachirp" url="peytonschaefer.com"/>
            <Project/>
        </>
    );
};

export default Projects;