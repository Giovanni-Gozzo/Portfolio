import './App.css';
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Biographie } from "./components/Biographie";

import { PortFolio } from "./components/PortFolio";
import {Gradhire} from "./components/Gradhire";
import {MAM} from "./components/MAM";
import {LRM} from "./components/LRM";
import {Fate} from "./components/Fate";
import {ProjetAvenor} from "./components/ProjetAvenor";
function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/biographie" element={<Biographie />} />
                    <Route path="/ProjectPortfolio" element={<PortFolio/>} />
                    <Route path={"/ProjectGradhire"} element={<Gradhire/>}/>
                    <Route path="/projectMAM" element={<MAM/>} />
                    <Route path={"/ProjectLRM"} element={<LRM/>}/>
                    <Route path="/Fate" element={<Fate/>} />
                    <Route path="/Avenir" element={<ProjetAvenor/>} />
                    <Route path="/*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
