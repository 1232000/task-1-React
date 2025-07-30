import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-navy">
  <div className="container py-3">
    <Link className="navbar-brand  text-uppercase fw-bold text-white fs-2" to="/">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 gap-3">
        <li className="nav-item">
          <NavLink to="/home"></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link rounded-2 text-uppercase fw-bold text-white" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link rounded-2 text-uppercase fw-bold text-white" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item pe-3">
          <NavLink className="nav-link rounded-2 text-uppercase fw-bold text-white" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
      </form>
    </div>
  </div>
</nav>
  </>
  )
}
