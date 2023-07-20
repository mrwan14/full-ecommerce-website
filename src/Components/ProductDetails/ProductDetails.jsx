import React, { useContext, useState } from "react";
import "./ProductDetails.css";
import { ProductContext } from "../Context/ProductContext";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
export default function ProductDetails() {
  let { ProductDetails, addToWishList, addProductToCart } =
    useContext(ProductContext);
  const [isHovering, setIsHovering] = useState(false);
  const [HoveringImg, setHoveringImg] = useState("");
  return (
    <div className=" container mt-5">
      {ProductDetails ? (
        <div>
          <div className="row ">
            <div className="col-md-2">
              <div>
                {ProductDetails.images?.map((product) => (
                  <div className=" my-2">
                    {" "}
                    <img
                      src={product}
                      alt=""
                      className="w-50 "
                      onMouseEnter={() => {
                        setIsHovering(true);
                        setHoveringImg(product);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-5">
              {isHovering === true ? (
                <div>
                  {" "}
                  <img src={HoveringImg} alt="" className=" w-100" />
                </div>
              ) : (
                <div>
                  {" "}
                  <img
                    src={ProductDetails.imageCover}
                    alt=""
                    className=" w-100"
                  />
                </div>
              )}
            </div>
            <div className="col-md-5 align-items-center justify-content-center d-flex ">
              <div>
                <div className="d-flex justify-content-between">
                  <h3> {ProductDetails.title}</h3>
                  <button
                    className=" d-block"
                    onClick={() => addToWishList(ProductDetails)}
                  >
                    {" "}
                    <AiOutlineHeart className=" d-block mb-1  rounded-circle bg-white" />
                  </button>{" "}
                </div>{" "}
                <p className=" text-muted"> {ProductDetails.description}</p>
                <div className=" d-flex justify-content-between">
                  {" "}
                  <h6 className="text-danger">
                    {ProductDetails.category.name} |{" "}
                    {ProductDetails.subcategory[0].name}
                  </h6>
                  <h6>{ProductDetails.brand.name}</h6>
                </div>
                <div className=" d-flex justify-content-between">
                  {" "}
                  <h6 className="">${ProductDetails.price} </h6>
                  <h6>
                    {" "}
                    <AiFillStar className=" star-color fs-4" />
                    {ProductDetails.ratingsAverage} | (
                    {ProductDetails.ratingsQuantity})Ratings
                  </h6>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    addProductToCart(ProductDetails);
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src="https://loading.io/asset/676515" alt="" />
        </div>
      )}
    </div>
  );
}
