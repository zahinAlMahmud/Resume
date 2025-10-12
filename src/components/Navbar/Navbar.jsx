import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Navbar Top Bar */}
      <div className="d-md-none d-flex justify-content-between align-items-center p-3 bg-primary text-white">
        <span className="fs-4">Portfolio</span>
        <button className="btn btn-outline-light" onClick={toggleNavbar}>
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`sidebar-container d-flex flex-column flex-shrink-0 p-3 text-white bg-primary 
          ${isOpen ? "d-block" : "d-none"} d-md-flex`}
        style={{ minHeight: "100vh", transition: "all 0.3s ease" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Portfolio</span>
        </a>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#home" className="nav-link text-white">
              <i className="ri-home-line me-2"></i> Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link text-white">
              <i className="fa-solid fa-book-skull me-2"></i> About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link text-white">
              <i className="ri-code-s-slash-line me-2"></i> Skills
            </a>
          </li>
          <li>
            <a href="#courses" className="nav-link text-white">
              <i className="ri-projector-fill me-2"></i> Certification & Courses
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link text-white">
              <i className="fa fa-info-circle me-2"></i> Experience
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link text-white">
              <i className="ri-school-line me-2"></i> Education
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link text-white">
              <i className="fa fa-envelope me-2"></i> Contact
            </a>
            <div className="d-flex gap-3 align-items-center mt-2">
              <i className="fa-brands fa-linkedin cursor-pointer"></i>
              <i className="fa-brands fa-facebook cursor-pointer"></i>
              <i className="fa-brands fa-github cursor-pointer"></i>
            </div>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
