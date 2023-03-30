/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";
import RecipeDropDownList from "../Dropdown/Dropdown";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white  border-bottom  ">
        <div className="container   d-flex justify-content-between ">
          <div>
            <Link to={"/"} class="navbar-brand">
              Exclusvie
            </Link>{" "}
          </div>
          <div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to={"/"} class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"/contact"} class="nav-link active">
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"/about"}
                    class="nav-link active"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"/signup"}
                    class="nav-link active"
                    aria-current="page"
                  >
                    Sign Up
                  </Link>
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
              <div className=" icon">
                {" "}
                <Link to={"/wishlist"}className=" text-black" >
                  {" "}
                  <AiOutlineHeart className=" ms-1 mb-1 " />
                </Link>{" "}
              </div>{" "}
              <div className=" icon">
              <Link to={"/cart"}className=" text-black" >
                  {" "}
                  <BsCart3 className=" ms-1 mb-1 " />
                </Link>{" "}
                {" "}
              </div>{" "}
              <div className="user-dropdown">
                <RecipeDropDownList />{" "}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
