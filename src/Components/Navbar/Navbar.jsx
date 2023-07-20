/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";
import RecipeDropDownList from "../Dropdown/Dropdown";
import { ProductContext } from "../Context/ProductContext";
export default function Navbar() {
  let { Cart, WishList } = useContext(ProductContext);
  return (
    <div>
      <nav class="u navbar-expand-lg bg-white  border-bottom  mt-2 ">
        <div className="container   d-flex justify-content-between ">
          <div>
            <Link to={"/"} class="navbar-brand">
              Exclusvie
            </Link>{" "}
          </div>
          <div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                <li class="nav-item me-2 ">
                  <Link to={"/"} class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item me-2">
                  <Link to={"/contact"} class="nav-link active">
                    Contact
                  </Link>
                </li>
                <li class="nav-item me-2">
                  <Link
                    to={"/about"}
                    class="nav-link active"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                {localStorage.getItem("userToken") ? (
                  ""
                ) : (
                  <>
                    {" "}
                    <li class="nav-item me-2">
                      <Link
                        to={"/signup"}
                        class="nav-link active"
                        aria-current="page"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>{" "}
          </div>
          <div className=" d-flex">
            <form class="searchbar">
              <input
                class="form-control  bg-light fontAwesome "
                type="search"
                placeholder="  What are you looking for?                                       &#xF002;"
                aria-label="Search"
              />
            </form>
            {localStorage.getItem("userToken") ? (
              <div>
                <div className="icons ">
                  <div className=" icon">
                    {" "}
                    <Link
                      to={"/wishlist"}
                      className={`${
                        WishList.length === 0 ? "text-black " : "text-danger"
                      }`}
                    >
                      {" "}
                      <AiOutlineHeart className=" ms-1 mb-1 " />
                      <span class="badge badge-warning" id="lblCartCount">
                        {" "}
                        {WishList.length}{" "}
                      </span>
                    </Link>
                  </div>{" "}
                  <div className=" icon">
                    <Link
                      to={"/cart"}
                      className={`${
                        Cart.length === 0 ? "text-black" : "text-danger"
                      }`}
                    >
                      <BsCart3 className=" ms-1 mb-1 " />

                      <span class="badge badge-warning" id="lblCartCount">
                        {" "}
                        {Cart.length}{" "}
                      </span>
                    </Link>{" "}
                  </div>{" "}
                  <div className="user-dropdown">
                    <RecipeDropDownList />{" "}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
