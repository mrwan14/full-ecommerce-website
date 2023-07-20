import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./WishList.css";
import { AiOutlineEye } from "react-icons/ai";
import StarRating from "../StarRating/StarRating";
import { ProductContext } from "../Context/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function WishList() {
  let { Products } = useContext(ProductContext);

  let { WishList, removeFromWishList } = useContext(ProductContext);
  return (
    <React.Fragment>
      <div className="WishList-page">
        <div className="container">
          <div className="WishList">
            <div className="d-flex justify-content-between my-5">
              <h3>
                WishList
                {WishList == null ? (
                  <>
                    <>(0)</>
                  </>
                ) : (
                  <>
                    <>({WishList.length} )</>
                  </>
                )}
              </h3>

              <button className="btn text-black border border-black p-2 h-25  fw-bolder   ">
                Move All To Bag
              </button>
            </div>
            {WishList === null ? (
              <div>
                <p>Your wish List is empty</p>
              </div>
            ) : (
              <div>
                {" "}
                <div className="row mt-5">
                  {WishList.map((product) => (
                    <>
                      <div className="col-md-3">
                        <div className="product-container">
                          <div className={"img-container"}>
                            <img src={product.imageCover} alt="" />
                            <div
                              className="remove-icon "
                              onClick={() => {
                                removeFromWishList(product);
                              }}
                            >
                              <RiDeleteBin6Line className=" fs-4 mt-2" />
                            </div>

                            <div className="add-to-cart">Add To Cart</div>
                          </div>
                          <div className="product-desc m-3">
                            <h5>{product.title}</h5>
                            <div className="price d-flex">
                              <p className="text-danger me-3">
                                ${product.price}{" "}
                              </p>
                              <p className="text-muted  text-decoration-line-through">
                                ${product.price + 100}
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
                  <h6 className="ms-3 mt-2 text-danger fw-bold">
                    Just For You
                  </h6>
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
                {Products.map((product) => (
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
                          <div>
                            <img src={product.imageCover} alt="" />
                          </div>
                          <div className="add-to-cart">Add To Cart</div>
                        </div>
                        <div className="product-desc m-3">
                          <h5>{product.title}</h5>
                          <div className="price d-flex">
                            <p className="text-danger me-3">${product.price}</p>
                            <p className="text-muted  text-decoration-line-through">
                              ${product.price + 100}
                            </p>
                          </div>
                          <div className="star-rating d-flex  ">
                            <StarRating />
                            <p className="mt-2 ms-3">
                              {product.ratingsAverage}
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
      <ToastContainer />
    </React.Fragment>
  );
}
