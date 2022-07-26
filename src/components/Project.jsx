import React from "react";

const Project = (props) => {
    return (
        <header className={"project-container"}>
            <h3 className={"project-name"}>{props.name}</h3>
            <a href={props.url}>Project Location</a>
        </header>
    );
};

Project.defaultProps = {
    name: "project_name",
    url: "https://www.peytonschaefer.com/",
}


export default Project;