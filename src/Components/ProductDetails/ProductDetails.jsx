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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, Products]);
  return (
    <div className=" container mt-5">
      {ProductDetails ? (
        <div>
          <div className="row">
            <div className="col-12 col-md-5 mb-4 mb-md-0">
              <div className="row">
                <div className="col-3 col-md-4">
                  <div>
                    {ProductDetails.images?.map((image, index) => (
                      <div key={index} className="my-2">
                        <img
                          src={image}
                          alt={`Product view ${index + 1}`}
                          className="w-100 img-fluid"
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => {
                            setIsHovering(true);
                            setHoveringImg(image);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-9 col-md-8">
                  {isHovering === true ? (
                    <div>
                      <img src={HoveringImg} alt={ProductDetails.title} className="w-100 img-fluid" />
                    </div>
                  ) : (
                    <div>
                      <img
                        src={ProductDetails.imageCover}
                        alt={ProductDetails.title}
                        className="w-100 img-fluid"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-7 align-items-center justify-content-center d-flex">
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="mb-0 flex-grow-1 me-2">{ProductDetails.title}</h3>
                  <button
                    className="d-block border-0 bg-transparent"
                    onClick={() => addToWishList(ProductDetails)}
                    aria-label="Add to wishlist"
                  >
                    <AiOutlineHeart className="d-block mb-1 rounded-circle bg-white fs-4" />
                  </button>
                </div>
                <p className="text-muted mb-3">{ProductDetails.description}</p>
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3">
                  <h6 className="mb-2 mb-sm-0">${ProductDetails.price}</h6>
                  <h6 className="mb-0 d-flex align-items-center">
                    <AiFillStar className="star-color fs-4 me-1" />
                    {ProductDetails.ratingsAverage} | ({ProductDetails.ratingsQuantity}) Ratings
                  </h6>
                </div>
                <button
                  className="btn btn-danger w-100 w-sm-auto"
                  onClick={() => {
                    addProductToCart(ProductDetails);
                  }}
                >
                  Add to Cart
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
