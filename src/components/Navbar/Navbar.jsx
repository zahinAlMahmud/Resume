import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-primary sidebar-container">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Porfolio</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="ri-group-line me-2"></i>
            Home 
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
          <i className="fa-solid fa-book-skull me-2"></i>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i class="ri-mail-line me-2"></i>
            SKILLS
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i class="ri-projector-fill me-2"></i>
            CERTIFICATION &  ONLINE COURSE
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="fa fa-info-circle me-2"></i>
            EXPERIENCE
          </a>
        </li>
         <li>
          <a href="#" className="nav-link text-white">
            <i className="ri-school-line me-2"></i>
            EDUCATION
          </a>
        </li>
         <li>
          <a href="#" className="nav-link text-white">
            <i className="fa fa-info-circle me-2"></i>
            CONTACT
          </a>
          <div className="d-flex gap-3 align-items-center cursor-pointer">
  <i className="fa-brands fa-linkedin me-2"></i>
  <i className="fa-brands fa-facebook me-2"></i>
  <i className="fa-brands fa-github me-2"></i>
</div>
        
        </li>
        
      </ul>
      <hr />
      {/* <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://via.placeholder.com/32"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
