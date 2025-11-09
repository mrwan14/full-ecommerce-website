import React from "react";
import { Link } from "react-router-dom";

export default function ManageAccount() {
  return (
    <div className="container my-5">
      <h2>Manage My Account</h2>
      <div className="mt-4">
        <div className="list-group">
          <Link to="/updateUserData" className="list-group-item list-group-item-action">
            Update User Data
          </Link>
          <Link to="/updateUserPassword" className="list-group-item list-group-item-action">
            Change Password
          </Link>
          <Link to="/cart" className="list-group-item list-group-item-action">
            View Cart
          </Link>
          <Link to="/wishlist" className="list-group-item list-group-item-action">
            View Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
}

