import React from "react";
import { Outlet, Link } from "react-router-dom";

// import Bookroom from "@/pages/Book";


interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  loggedIn: boolean;
 
}
export default function NavBar( {brandName, imageSrcPath,loggedIn}:NavBarProps) {
  let navBarOption;
//   let activePage = 
  if (loggedIn) {
    navBarOption = (
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/book">
            Book Room
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/logout">
            Logout
          </Link>
        </li>
      </ul>
    );
  }
  
  return (
    <nav
      className="navbar bg-body-tertiary bg-white shadow fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src={imageSrcPath}
            alt=""
            width="60"
            height="40"
            className="d-inline-block align-text-center"
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
        {navBarOption}
      </div>
    </nav>
  );
}
