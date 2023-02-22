import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="App">
            <title>PeytonSchaefer</title>
            <Header/>
            <p style={{textAlign: "center", fontSize: "25pt"}}>I consent to criticism and allow Drew to present this portfolio site.</p>
            <Footer/>
        </div>
    );
};

export default Home;