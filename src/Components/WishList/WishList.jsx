import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./WishList.css";
export default function WishList() {
  let { bestSellingData } = useContext(DataContext);
  return (
    <div className="wishlist">
      <div className="container">
        <div className="d-flex justify-content-between my-5">
          <h3>
            Wishlist{" "}
            {bestSellingData == null ? (
              <>
                <>(0)</>
              </>
            ) : (
              <>
                {" "}
                <>({bestSellingData.length} )</>{" "}
              </>
            )}{" "}
          </h3>

          <button className="btn text-black border border-black p-2 h-25  fw-bolder ">
            Move All To Bag
          </button>
        </div>
        <div className="row mt-5">
          {bestSellingData.map((product) => (
            <>
              <div className="col-md-3">
                <div className="product-container">
                  {" "}
                  <div className={`img-container`}>
                    <div className="icons d-flex justify-content-between">
                      <div className=" "></div>{" "}
                      <div className="right-icons ">
                        <RiDeleteBin6Line className=" d-block mb-1   rounded-circle bg-danger" />
                      </div>
                    </div>
                    <div
                      className={`${product.isTallImage ? "chair" : "none"} `}
                    >
                      {" "}
                      <img src={product.ImgSrc} alt="" className="" />
                    </div>
                    <div className="add-to-cart">Add To Cart</div>
                  </div>
                  <div className="product-desc m-3">
                    <h5>{product.Product_Name}</h5>
                    <div className="price d-flex">
                      <p className="text-danger me-3">${product.Price} </p>
                      <p className="text-muted  text-decoration-line-through">
                        ${product.Price + Math.floor(Math.random() * 200 + 100)}{" "}
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
