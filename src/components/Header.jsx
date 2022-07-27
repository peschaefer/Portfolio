import React from "react";
import {NavLink, useLocation} from "react-router-dom";

const Header = () => {

    const currentPage = useLocation().pathname;

    return (
        <>
        <header className={"site-header"}>
            <h2 className={"my-name"}>Peyton Schaefer</h2>
            <ul className={"link-list"}>
                <li>
                    <NavLink to="/" style={currentPage === "/" ? {color: "#E85A4F", textDecoration: "underline"} : {color: "#E98074"} }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={currentPage === "/about" ? {color: "#E85A4F", textDecoration: "underline"} : {color: "#E98074"} }>About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" style={currentPage === "/projects" ? {color: "#E85A4F", textDecoration: "underline"} : {color: "#E98074"} }>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" style={currentPage === "/resume" ? {color: "#E85A4F", textDecoration: "underline"} : {color: "#E98074"} }>Resume</NavLink>
                </li>
            </ul>
        </header>
            <hr style={{
                background: "rgb(232, 90, 79)",
                color: "rgb(232, 90, 79)",
                height: "3px",
                margin: "0px",
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
            }}/>
            </>
    );
};

export default Header;