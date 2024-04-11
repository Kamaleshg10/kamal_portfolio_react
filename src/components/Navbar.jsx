import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      {/* <nav classNameName="navbar bg-body-tertiary navbar-expand-lg py-3 fs-5  bg-trans"> */}
      <nav className="navbar navbar-expand-lg p-2 fs-5 bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold badge bg-light bg-gradient text-primary fs-5 " to="/"><span className="logo text-secondary">K</span >AMAL</Link>
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
