import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import photo1 from "../images/about-photo.jpg"
//import photo2 from "../images/about-photo-2.jpg"

const About = () => {
    return (
        <div className={"App"}>
            <title>About - PeytonSchaefer</title>
            <Header/>
            <h2 className={"subheader"}>About</h2>
            <hr style={{marginBottom:"30px"}} className={"subline"}/>
            <div style={{display:"flex" ,width:"75%", margin:"auto" }} >
                <img src={photo1} alt={"myself giving a project demonstration at work"} width={"60%"} height={"100%"}/>
                <p style ={{margin: "auto"}}>My name is Peyton Schaefer and I am a senior in the Ball State computer science program.  I found a love for programming through my skills with math and logic, and also my love for the arts.  In high school, I was a heavily devoted theatre and choir student, as well as a part of the advanced math program.  Somewhere along the way I discovered computer science and realized it was a beautiful way to combine my love for art with my prowess with numbers and arithmetic. Using logic and design to create sleek and ingenious programs is the cross roads of my passions.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default About;