import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./WishList.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import StarRating from "../StarRating/StarRating";
export default function WishList() {
  let { wishList, removeFromWishList, bestSellingData } =
    useContext(DataContext);
  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist">
          <div className="d-flex justify-content-between my-5">
            <h3>
              Wishlist
              {wishList == null ? (
                <>
                  <>(0)</>
                </>
              ) : (
                <>
                  <>({wishList.length} )</>
                </>
              )}
            </h3>

            <button className="btn text-black border border-black p-2 h-25  fw-bolder ">
              Move All To Bag
            </button>
          </div>
          {wishList == null ? (
            <div>
              <p>Your wish List is empty</p>
            </div>
          ) : (
            <div>
              {" "}
              <div className="row mt-5">
                {wishList.map((product) => (
                  <>
                    <div className="col-md-3">
                      <div className="product-container">
                        <div className={`img-container`}>
                          <div className="icons d-flex justify-content-between">
                            <div className=" "></div>
                            <div className="right-icons ">
                              <button
                                onClick={() => {
                                  removeFromWishList(product);
                                }}
                              >
                                {" "}
                                <RiDeleteBin6Line className="    " />
                              </button>
                            </div>
                          </div>
                          <div
                            className={`${
                              product.isTallImage ? "chair" : "none"
                            } `}
                          >
                            <img src={product.ImgSrc} alt="" className="" />
                          </div>
                          <div className="add-to-cart">Add To Cart</div>
                        </div>
                        <div className="product-desc m-3">
                          <h5>{product.Product_Name}</h5>
                          <div className="price d-flex">
                            <p className="text-danger me-3">
                              ${product.Price}{" "}
                            </p>
                            <p className="text-muted  text-decoration-line-through">
                              $
                              {product.Price +
                                Math.floor(Math.random() * 200 + 100)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="this-month-section mt-5">
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="brdr"></div>
                <h6 className="ms-3 mt-2 text-danger fw-bold">Just For You</h6>
              </div>
              <div>
                <button className="btn btn-danger view-all-btn ">
                  View All
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="row mt-5">
              {bestSellingData.map((product) => (
                <>
                  <div className="col-md-3">
                    <div className="product-container">
                      <div className={`img-container`}>
                        <div className="icons d-flex justify-content-between">
                          <div className=" "></div>
                          <div className="right-icons ">
                            <AiOutlineEye className=" d-block mb-1 bg-white rounded-circle" />
                          </div>
                        </div>
                        <div
                          className={`${
                            product.isTallImage ? "chair" : "none"
                          } `}
                        >
                          <img src={product.ImgSrc} alt="" />
                        </div>
                        <div className="add-to-cart">Add To Cart</div>
                      </div>
                      <div className="product-desc m-3">
                        <h5>{product.Product_Name}</h5>
                        <div className="price d-flex">
                          <p className="text-danger me-3">${product.Price}</p>
                          <p className="text-muted  text-decoration-line-through">
                            $
                            {product.Price +
                              Math.floor(Math.random() * 200 + 100)}
                          </p>
                        </div>
                        <div className="star-rating d-flex  ">
                          <StarRating />
                          <p className="mt-2 ms-3">
                            ({Math.floor(Math.random() * 100 + 10)})
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
