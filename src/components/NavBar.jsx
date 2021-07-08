import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Home from "./Home";
import About from "./About";
import Contactame from "./Contactame";
import Portafolio from "./Portafolio";
import styled from "styled-components";






function NavBar(props) {
  
    const [click, setClick] = useState(false);
    //const handleClick = () => setClick(!click);
   
    
  const about = useRef(null);
  const inicio = useRef(null);
  const portafolio = useRef(null);
  const contact = useRef(null);

  const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: block;
  }
  position: absolute;
  background-color: #1f3094;
  width: 2rem;
  height: 7px;
  right: 21px;
  border: 3px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 1.8rem;
    margin-top: 3px;
    height: 2px;
    display: flex;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background: #233799;
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
    text-decoration: none;
  }
`;

  const gotoAbout = () =>
      window.scrollTo({
          top: about.current.offsetTop,
          behavior: "smooth"
      });

      const gotoInicio = () =>
      window.scrollTo({
          top: inicio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoPortafolio = () =>
      window.scrollTo({
          top: portafolio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoContact = () =>
      window.scrollTo({
          top: contact.current.offsetTop,
          behavior: "smooth"
      });
 
      
      

     
    
      const handleClick = (id, e) => {
        setClick(!click);
        
      };
    
     

  return (
     
    <>
      <nav className="navbar">
        <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
            Leobardo Antunez Cayetano
          </NavLink>
        
          <ul className={ "nav-menu"} >
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={gotoInicio}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sobremi"
                activeClassName="active"
                className="nav-links"
                onClick={gotoAbout}
              >
                Sobre mí
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/portafolio"
                activeClassName="active"
                className="nav-links"
                onClick={gotoPortafolio}
              >
                Portafolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={gotoContact}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        
         
     
        </div>
        <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={click} >
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Inicio
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          Sombre mí
        </a>
        <a href="#portafolio" onClick={(e) => handleClick("portafolio", e)}>
          Portafolio
        </a>
        <a href="#contacto" onClick={(e) => handleClick("contacto", e)}>
          Contacto
        </a>
        
      </MobileMenu>
      </nav>
      
      <div ref={inicio}>
                        <Home />
                    </div>
       <div ref={about}>
           <About />
       </div>
                <div ref={portafolio}>
                    <Portafolio />
                </div>
                <div ref={contact}>
                    <Contactame />
                </div>
      
    </>
   
  
  
  );
}

export default NavBar;