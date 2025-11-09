import React, { useContext, useMemo, useCallback } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import "./Home.css";
import Timer from "../Timer/Timer";
import StarRating from "../StarRating/StarRating";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../Context/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();
  let {
    Products,
    categories,
    Brands,
    addToWishList,
    getSpecificCategory,
    addProductToCart,
    getProductDetails,
  } = useContext(ProductContext);

  // Memoize callbacks to prevent unnecessary re-renders
  const handleAddToCart = useCallback((product) => {
    addProductToCart(product);
  }, [addProductToCart]);

  const handleAddToWishlist = useCallback((product) => {
    addToWishList(product);
  }, [addToWishList]);

  const handleViewDetails = useCallback((product) => {
    getProductDetails(product);
  }, [getProductDetails]);

  // Memoize filtered products
  const flashSalesProducts = useMemo(() => Products.slice(0, 10), [Products]);
  const allProducts = useMemo(() => Products, [Products]);
  return (
    <>
      <div>
        {" "}
        <ToastContainer />
      </div>
      <div className="home container hh">
        <div className="main-ad ">
          <div className="row">
            <div className="col-md-12 slider bg-black mt-4">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="w-100 d-flex">
                    <div className="desc w-50 text-white   ">
                      <div className="d-flex   ms-5 mt-5">
                        <BsApple className="fs-1 " />
                        <p className="ms-3 mt-2">iPhone 14 Series</p>
                      </div>
                      <h1 className="ms-5 mt-3">
                        Up to 10% <br /> off Voucher
                      </h1>
                      <button 
                        className=" btn border-0 ms-5  bg-black text-white border-bottom "
                        onClick={() => navigate("/")}
                      >
                        Shop Now <AiOutlineArrowRight />
                      </button>
                    </div>
                    <div className="w-50 carousel-img">
                      <img
                        src={require("../../images/iphone.png")}
                        class="d-block w-100 "
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-section mt-5">
          <div className="">
            <div className="d-flex">
              {" "}
              <div className="brdr"></div>
              <h6 className="ms-3 mt-2 text-danger fw-bold">Today’s</h6>
            </div>{" "}
            <div className=" d-flex  align-items-center mt-3  justify-content-between">
              <h3 className="fw-bold  col-md-2  flash-sales">Flash Sales</h3>
              <div className="timer col-md-9 offset-1  d-flex justify-content-between">
                {" "}
                <div>
                  <Timer />
                </div>
              </div>{" "}
            </div>
            <div>
              {Products == null ? (
                <div>...Loading Data</div>
              ) : (
                <div className="row ">
                  {flashSalesProducts.map((product) => (
                    <ProductCard
                      key={product._id || product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onAddToWishlist={handleAddToWishlist}
                      onViewDetails={handleViewDetails}
                      showAddToCart={true}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className=" view-all-details d-flex justify-content-center  ">
            <button 
              className="btn p-2"
              onClick={() => {
                const element = document.getElementById('all-products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View All Products
            </button>
          </div>
        </div>
        <div className="line my-5"></div>
        <div className="categories-section mt-5">
          <div className="d-flex">
            <div className="brdr"></div>
            <h6 className="ms-3 mt-2 text-danger fw-bold">Categories’s</h6>
          </div>
          <div className=" d-flex  align-items-center mt-3">
            <h3 className="fw-bold  col-md-4 ">Browse By Category</h3>
            <div className="timer col-md-7 offset-1  d-flex justify-content-between">
              <div></div>
              <div className="d-flex ">
                <div className="arrow d-flex justify-content-center align-items-center me-2">
                  <AiOutlineArrowLeft className="fs-5" />
                </div>
                <div className="arrow d-flex justify-content-center align-items-center">
                  <AiOutlineArrowRight className="fs-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="catogries-list my-5 ">
            {categories == null ? (
              <div>loading</div>
            ) : (
              <div>
                {" "}
                <div className="row">
                  {categories.map((catogry) => (
                    <div key={catogry._id || catogry.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                      <div
                        className="catogry-container"
                        onClick={() => {
                          getSpecificCategory(catogry);
                        }}
                      >
                        {" "}
                        <img src={catogry.image} className="w-100" alt="" />
                      </div>
                      <h6> {catogry.name}</h6>{" "}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="line  my-5"></div>
        <div className="this-month-section mt-5">
          <div className="">
            <div className="d-flex">
              {" "}
              <div className="brdr"></div>
              <h6 className="ms-3 mt-2 text-danger fw-bold">Brands</h6>
            </div>{" "}
            <div className=" d-flex  align-items-center mt-3">
              <h3 className="fw-bold  col-md-4 ">Browse By Brands</h3>
              <div className=" col-md-7 offset-1  d-flex justify-content-between">
                <div></div>
                <div className="d-flex ">
                  <button 
                    className="btn btn-danger"
                    onClick={() => {
                      const element = document.getElementById('all-products');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    View All
                  </button>
                </div>
              </div>{" "}
            </div>
            {Brands == null ? (
              <div>loading</div>
            ) : (
              <div>
                {" "}
                <div className="row mt-5">
                  {Brands.map((product) => (
                    <React.Fragment key={product._id || product.id}>
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="product-container ">
                          {" "}
                          <div className={``}>
                            <div>
                              {" "}
                              <img
                                src={product.image}
                                alt=""
                                className="w-75"
                              />
                            </div>
                          </div>
                          <div className="product-desc m-3">
                            <h5>{product.name}</h5>
                            <div className="price d-flex"></div>{" "}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="music-ad bg-black d-flex justify-content-around my-5">
          <div className="ad-desc ">
            <p className="">Categories</p>
            <h1 className="text-white">
              Enhance Your <br /> Music Experience
            </h1>
            <div className="d-flex">
              <div className="circle ">
                <p className="mt-2">
                  <span className="fw-bolder fs-5 ">10 </span>
                  <br />
                  <span className="date">Hours</span>
                </p>
              </div>
              <div className="circle ">
                <p className="mt-2">
                  <span className="fw-bolder fs-5  ">5 </span>
                  <br />
                  <span className="date"> Days</span>{" "}
                </p>
              </div>
              <div className="circle ">
                <p className="mt-2">
                  <span className="fw-bolder fs-5 ">7 </span>
                  <br />
                  <span className="date">mins</span>
                </p>
              </div>
              <div className="circle ">
                <p className="mt-2 ">
                  <span className="fw-bolder fs-5 ">5 </span>
                  <br />
                  <span className="date ms-1 ">sec</span>
                </p>
              </div>
            </div>
            <div>
              <button 
                className="btn Buy-Now"
                onClick={() => {
                  if (localStorage.getItem("userToken")) {
                    navigate("/cart");
                  } else {
                    navigate("/login");
                  }
                }}
              >
                Buy Now!
              </button>
            </div>
          </div>
          <div className="ad-img rounded-circle d-flex  align-items-center  justify-content-center">
            {" "}
            <img
              src={require("../../images/speaker.png")}
              alt=""
              className="w-75"
            />
          </div>
        </div>
        <div className="our-products-section my-5" id="all-products">
          <div className="d-flex">
            {" "}
            <div className="brdr"></div>
            <h6 className="ms-3 mt-2 text-danger fw-bold">Our Products</h6>
          </div>{" "}
          <div className=" d-flex  align-items-center mt-3">
            <h3 className="fw-bold  col-md-4 ">Explore Our Products</h3>
            <div className=" col-md-7 offset-1  d-flex justify-content-between">
              <div></div>
              <div className="d-flex ">
                <div className="arrow d-flex justify-content-center align-items-center me-2">
                  <AiOutlineArrowLeft className="fs-5" />{" "}
                </div>
                <div className="arrow d-flex justify-content-center align-items-center">
                  {" "}
                  <AiOutlineArrowRight className="fs-5" />
                </div>
              </div>
            </div>{" "}
          </div>
          {Products == null ? (
            <div>loading</div>
          ) : (
            <div>
              {" "}
              <div className="row mt-5">
                {allProducts.map((product) => (
                  <ProductCard
                    key={product._id || product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    onViewDetails={handleViewDetails}
                    showAddToCart={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="new-arrival-section my-5">
          <div className="d-flex">
            {" "}
            <div className="brdr"></div>
            <h6 className="ms-3 mt-2 text-danger fw-bold">Featured</h6>
          </div>{" "}
          <div className=" d-flex  align-items-center mt-3">
            <h3 className="fw-bold  col-md-4 ">New Arrival</h3>
          </div>
          <div className="row">
            <div className="col-md-6 ps5-ad  bg-black d-flex justify-content-center  position-relative">
              <div className=" mt-5 ">
                <img
                  src={require("../../images/ps5.png")}
                  alt=""
                  className="mt-5"
                />
              </div>
              <div className="ps5-desc position-absolute text-white  bottom-0 mb-5 start-0 ms-5">
                <h2>PlayStation 5</h2>
                <p className="fw-1">
                  Black and White version of the PS5 <br /> coming out on sale.
                </p>
                <button 
                  className=" btn border-0  bg-transparent text-white border-bottom  border-light"
                  onClick={() => navigate("/")}
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="women bg-black d-flex text-white position-relative justify-content-between">
                <div></div>
                <div className="women-desc position-absolute  ">
                  <h2>Women's Collections</h2>
                  <p>
                    Featured woman collections that <br /> give you another
                    vibe.
                  </p>
                  <button 
                    className=" btn border-0  bg-transparent text-white border-bottom  border-light"
                    onClick={() => navigate("/")}
                  >
                    Shop Now
                  </button>
                </div>
                <div className="women-img ">
                  <img src={require("../../images/women.png")} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="speaker bg-black d-flex justify-content-center mt-5 position-relative">
                    <div className="speaker-desc position-absolute text-white">
                      <h3 className="mb-0">Speakers</h3>
                      <p className="mb-0">Amazon wireless speakers</p>
                      <button 
                        className=" btn border-0  bg-transparent text-white border-bottom  border-light"
                        onClick={() => navigate("/")}
                      >
                        Shop Now
                      </button>
                    </div>
                    <img
                      src={require("../../images/speakers.png")}
                      alt=""
                      className="my-5"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="perfum bg-black d-flex justify-content-center mt-5 position-relative ">
                    <div className="speaker-desc position-absolute text-white ">
                      <h3 className="mb-0">Perfume</h3>
                      <p className="mb-0">GUCCI INTENSE OUD EDP</p>
                      <button 
                        className=" btn border-0  bg-transparent text-white border-bottom  border-light "
                        onClick={() => navigate("/")}
                      >
                        Shop Now
                      </button>
                    </div>
                    <img
                      src={require("../../images/perfum.png")}
                      alt=""
                      className="my-5  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center mt-5">
              <div className="service-icon ">
                <div className="for-icon">
                  {" "}
                  <img
                    src={require("../../images/icon-delivery.png")}
                    alt=""
                    className=" rounded-circle "
                  />
                </div>
              </div>
              <div className="service-desc">
                <h4 className="fw-bolder">FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="col-md-4 text-center mt-5">
              <div className="service-icon ">
                <div className="for-icon">
                  {" "}
                  <BsHeadset className="text-white fs-2" />
                </div>
              </div>
              <div className="service-desc">
                <h4 className="fw-bolder">24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="col-md-4 text-center mt-5">
              <div className="service-icon ">
                <div className="for-icon">
                  {" "}
                  <BsShieldCheck className="text-white fs-2" />
                </div>
              </div>
              <div className="service-desc">
                <h4 className="fw-bolder">MONEY BACK GUARANTEE</h4>
                <p>We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
