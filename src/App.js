import './App.css';
import Header from "./components/Header";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
        <Header/>
        <Project name="Kachirp" url="peytonschaefer.com"/>
        <Project/>
    </div>
  );
}

export default App;
