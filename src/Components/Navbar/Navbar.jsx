/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white  border-bottom ">
        <div className="container   d-flex justify-content-between ">
          <div>
            <a class="navbar-brand" href="#">
              Exclusvie
            </a>{" "}
          </div>
          <div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className=" d-flex">
            <form class="">
              <input
                class="form-control  bg-light fontAwesome "
                type="search"
                placeholder="  What are you looking for?                                       &#xF002;"
                aria-label="Search"
              />
            </form>
            <div className="icons ">
              <AiOutlineHeart className="me-3" />
              <BsCart3 />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
