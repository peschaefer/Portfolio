import React from "react";
import Header from "../components/Header";
import resumePDF from "../resume/resume.pdf"

const Resume = () => {
    return (
        <div className="App">
            <title>Resume - PeytonSchaefer</title>
            <Header/>
            <iframe className={"resume-pdf-viewer"} title="Resume" src={resumePDF} width="75%" height={"1150px"}>
            </iframe>
        </div>
    );
};

export default Resume;