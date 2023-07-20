import React, { useState } from "react";
import "./dropdown.css";
import { BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);
  const notify = (paramter) => toast(paramter);

  const logOut = () => {
    localStorage.removeItem("userToken");
    notify("Logged out");
  };
  return (
    <div className={`dropdown   btn-group ${dropdown ? "open" : ""}`}>
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
        <Link className="dropdown-item" to={"/updateUserData"}>
          <RxCrossCircled className="fs-4 me-2" /> Update User Data
        </Link>
        <Link className="dropdown-item" to={"/updateUserPassword"}>
          <AiOutlineStar className="fs-4 me-2" /> Change Password
        </Link>
        <div onClick={logOut}>
          {" "}
          <Link className="dropdown-item" to={"/login"}>
            <BiLogOut className="fs-4 me-2 " /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
