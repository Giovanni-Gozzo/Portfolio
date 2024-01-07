import {NavBar} from "./NavBar";
import {Banner} from "./Banner";
import {Skills} from "./Skills";
import {Projects} from "./Projects";

export const Home = () => {
    return(
        <div className="App">
            <Banner/>
            <Skills/>
            <Projects/>
        </div>
    )
}
