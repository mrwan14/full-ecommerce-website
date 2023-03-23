/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./TopHeader.css";
export default function TopHeader() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <React.Fragment>
      <div className="bg-black text-white   ">
        <div className="container  d-flex justify-content-between ">
          <div></div>
          <div className="top-header">
            <div>
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!{" "}
                <a href="" className="ms-1 text-white ">
                  ShopNow
                </a>
              </p>
            </div>
          </div>
          <div className="dropdown">
            {" "}
            <div className=" ">
              <select
                className="bg-black text-white "
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <option className="text-white" value="option1">
                  English
                </option>
                <option className="text-white" value="option2">
                  {" "}
                  العربيه
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
