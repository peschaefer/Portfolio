import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"projects"} element={<Projects/>}/>
                    <Route path={"about"} element={<About/>}/>
                    <Route path={"resume"} element={<Resume/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
