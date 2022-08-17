import React from "react";
import defaultImage from "../images/no-image.png"
import githubLogo from "../images/github.png"

const Project = (props) => {

    const image = props.image

    return (
        <div className={"single-project-container"}>
            <img className={"project-image"} src={image}  alt={props.imageAlt}/>
            <div>
                <h3 className={"project-name"}>{props.name}</h3>
                <p>{props.description}</p>
                <a href={props.url}>
                    <img className={"project-link"} src={githubLogo} alt={"clickable github logo"} width={"32px"}/>
                </a>
            </div>
        </div>
    );
};

Project.defaultProps = {
    name: "project_name",
    description: "a description about the project",
    url: "https://www.peytonschaefer.com/",
    image: defaultImage,
    imageAlt: "A question screen from Kachirp"
}


export default Project;