import React, { useState } from "react";
import "./dropdown.css";
import { BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);

  return (
    <div className={`dropdown ms-2  btn-group ${dropdown ? "open": ""}`}>
      <button onClick={toggleOpen}>
        <BiUser className="dropdown-icon" />
      </button>
      <div
        className={`dropdown-menu  ${dropdown ? "show " : ""}`}
        aria-labelledby="dropdownMenuButton"
      >
        <Link className="dropdown-item" to={"/manageaccount"}>
          <BiUser className="fs-4 me-2" /> Manage My Account
        </Link>
        <Link className="dropdown-item" to={"/manageaccount"}>
          <FiShoppingBag className="fs-4 me-2" /> My Order
        </Link>
        <Link className="dropdown-item" to={"/manageaccount"}>
          <RxCrossCircled className="fs-4 me-2" /> My Cancellations
        </Link>
        <Link className="dropdown-item" to={"/manageaccount"}>
          <AiOutlineStar className="fs-4 me-2" /> My Reviews
        </Link>
        <Link className="dropdown-item" to={"/manageaccount"}>
          <BiLogOut className="fs-4 me-2 " /> Logout
        </Link>
      </div>
    </div>
  );
}
