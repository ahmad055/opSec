import React from "react";
import { useState } from "react";
import "./Navbar.css"

const Navbar = ({ toggleSidebar, showSidebar }) => {
  
  return (
    
    
      <div className="col-lg-9 navbar-p order-lg-2 bg-black position-absolute order-1 ">
        <div className="row">
            <div className="col-11 mx-auto ">
            <nav class="navbar navbar-h navbar-expand-lg navbar-dark bg-black">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
    
              Connect-Wallet
            </a>
            <button
              onClick={toggleSidebar}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse${
                showSidebar ? " show" : ""
              }`}
              id="navbarNav"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
              </ul>
              <button className="connect-btn px-3">
                Connect Wallet
              </button>
              
            </div>
          </div>
        </nav>
            </div>
        </div>
      </div>
  
  );
};

export default Navbar;
