import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {fdBars} from '@fortawesome/react-fontawesome'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-5" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/"><span className="logo">K</span>AMAL</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item px-3"><Link className="nav-link " to="/" >Home</Link></li>
              <li className="nav-item px-3"><Link className="nav-link " to="/about" >About us</Link></li>
              <li className="nav-item px-3"><Link className="nav-link " to="/skills" >Skills</Link></li>
              <li className="nav-item px-3"><Link className="nav-link " to="/portfolio" >Portfolio</Link></li>
              <li className="nav-item px-3"><Link className="nav-link " to="/contact" >Contact</Link></li>        
            </ul>
          </div>
        </div>
      </nav>    
    </>
  );
};
