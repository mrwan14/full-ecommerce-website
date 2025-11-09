/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./TopHeader.css";
export default function TopHeader() {
  return (
    <React.Fragment>
      <div className="bg-black text-white   top-header  ">
        <div className="container  d-flex justify-content-center align-items-center ">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a href="/" className="ms-1 text-white ">
              ShopNow
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
