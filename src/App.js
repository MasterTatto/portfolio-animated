import './App.css';
import Prevues from "./components/1-prevues";
import NavBar from "./components/0-nav_bar";
import About from "./components/2-about";
import Project from "./components/3-project";
import {Element} from 'react-scroll'
import {useState} from "react";

function App() {
    const [selected, setSelected] = useState('HOME')
    const [selectedPrev, setSelectedPrev] = useState('HOME')
    console.log(selected)
    return (
        <div className=" bg-gray-500 relative overflow-hidden">
            <Element name="HOME">
                <Prevues/>
            </Element>

            <NavBar selected={selected} setSelected={setSelected} setSelectedPrev={setSelectedPrev}/>

            <Element name="ABOUT">
                <About selected={selected}/>
            </Element>
            <Element name="PORTFOLIO">
                <Project/>
            </Element>

        </div>
    );
}

export default App;
