import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from "react";
import logo from '../assets/img/Logo (1).svg';
import navIcon2 from '../assets/img/Nav icon1.svg';
import navIcon3 from '../assets/img/Navicon.svg';

export const NavBar = () =>{
    const[ActiveLink, setActiveLink] = useState("home");
    const[scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true)
        }else{
            setScrolled(false)
        }}
    window.addEventListener("scroll",onScroll)
    return () => window.removeEventListener("scroll",onScroll)
},[])

    function onUpdateLink(skills) {
        setActiveLink(skills)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="Logo"/> </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#home" className={ActiveLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/#skills" className={ActiveLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="/#projects" className={ActiveLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <div className="navbar-line"/>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/giovanni-gozzo-99331a252/"><img src={navIcon2} alt=""/></a>
                            <a href="https://github.com/Giovanni-Gozzo"><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className={"vvd"} onClick={
                            () => window.location.href='/Avenir'
                        }><span> Projet avenir</span> </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
