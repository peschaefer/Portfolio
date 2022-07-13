import React from "react";

const Project = (props) => {
    return (
        <header className={"project-container"}>
            <h3>{props.name}</h3>
            <a href={props.url}>Project Location</a>
        </header>
    );
};

Project.defaultProps = {
    name: "project_name",
    url: "peytonschaefer.com",
}


export default Project;