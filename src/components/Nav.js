import React from "react";
import {
  Link
} from "react-router-dom";
import logo from "./images/logo.jpg"

const Nav =()=> {

    return (
      <div>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg bg-dark text-white text-white">
            <div className="container-fluid">
              <img src={logo} alt="" id="logo"/>
              <Link className="navbar-brand text-white" to="/">
                NewsCravers
              </Link>
              <button
                className="navbar-toggler text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon icon ">☰</span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/Business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/Entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/General">
                      General
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/Health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/Science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/Sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/Technology">
                      Technology
                    </Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }


export default Nav;
