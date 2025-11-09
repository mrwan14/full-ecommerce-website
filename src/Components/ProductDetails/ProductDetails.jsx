import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ProductContext } from "../Context/ProductContext";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
export default function ProductDetails() {
  const { id } = useParams();
  let { ProductDetails, addToWishList, addProductToCart, Products, getProductDetails } =
    useContext(ProductContext);
  const [isHovering, setIsHovering] = useState(false);
  const [HoveringImg, setHoveringImg] = useState("");

  useEffect(() => {
    if (id && Products.length > 0) {
      const product = Products.find(p => p._id === id);
      if (product) {
        getProductDetails(product);
      }
    }
  }, [id, Products]);
  return (
    <div className=" container mt-5">
      {ProductDetails ? (
        <div>
          <div className="row ">
            <div className="col-md-5 ">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    {ProductDetails.images?.map((image, index) => (
                      <div key={index} className=" my-2">
                        {" "}
                        <img
                          src={image}
                          alt=""
                          className="w-50 "
                          onMouseEnter={() => {
                            setIsHovering(true);
                            setHoveringImg(image);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-8">
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
              </div>
            </div>

            <div className="col-md-7  align-items-center justify-content-center d-flex ">
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
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
          <div>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading product details...</p>
          </div>
        </div>
      )}
    </div>
  );
}
