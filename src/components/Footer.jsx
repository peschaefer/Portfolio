import React from "react";
import githubLogo from "../images/github.png"
import linkedinLogo from "../images/linkedin.png"

const Footer = () => {

    return (
        <>
            <footer>
                <hr className={"subline"}/>
                <div className={"socials"}>
                    <p>Email - peschaefer124@yahoo.com </p>
                    <a href={"https://github.com/peschaefer/"}>
                        <img src={githubLogo} alt={"clickable github logo"} width={"32px"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/peyton-schaefer/"}>
                        <img src={linkedinLogo} alt={"clickable github logo"} width={"32px"}/>
                    </a>
                    <p>Phone - (317)500-0473 </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;