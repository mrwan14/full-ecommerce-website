/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
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
import { DataContext } from "../Context/DataContext";
export default function Home(props) {
  let { data, catogries, bestSellingData, ourProudcts ,addTocartItems,addToWishList } =
    useContext(DataContext);

  return (
    <div>
      <div className="home container hh">
        <div className="main-ad ">
          <div className="row">
            <div className="col-md-2   border-end  menu  ">
              <div class="align-self-center ">
                <ul class="p-0 mt-4 ">
                  <li class="my-2 d-flex justify-content-between">
                    <a class="text-black " href="/">
                      Woman’s Fashion
                    </a>
                    <AiOutlineRight />
                  </li>
                  <li class="my-2  d-flex justify-content-between">
                    <a class="text-black" href="/">
                      Men’s Fashion
                    </a>
                    <AiOutlineRight />
                  </li>
                  <li class="my-2">
                    <a class="text-black" href="/">
                      Electronics
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-black" href="/">
                      Home & Lifestyle
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-black" href="/">
                      Medicine
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-black" href="/">
                      Sports & Outdoor
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-black" href="/">
                      Baby’s & Toys
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-black" href="/">
                      Groceries & Pets
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-black" href="/">
                      Health & Beauty
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 slider offset-1 bg-black mt-4">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active  circle-carousel   rounded-circle"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="  circle-carousel   rounded-circle "
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    className="  circle-carousel   rounded-circle "
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    className="  circle-carousel   rounded-circle "
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    className="  circle-carousel   rounded-circle "
                    aria-label="Slide 5"
                  ></button>
                </div>
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
                        <button className=" btn border-0 ms-5  bg-black text-white border-bottom ">
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
                  <div class="carousel-item ">
                    <div className="w-100 d-flex">
                      <div className="desc w-50 text-white   ">
                        <div className="d-flex   ms-5 mt-5">
                          <BsApple className="fs-1 " />
                          <p className="ms-3 mt-2">iPhone 14 Series</p>
                        </div>
                        <h1 className="ms-5 mt-3">
                          Up to 10% <br /> off Voucher
                        </h1>
                        <button className=" btn border-0 ms-5  bg-black text-white border-bottom ">
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
                  <div class="carousel-item ">
                    <div className="w-100 d-flex">
                      <div className="desc w-50 text-white   ">
                        <div className="d-flex   ms-5 mt-5">
                          <BsApple className="fs-1 " />
                          <p className="ms-3 mt-2">iPhone 14 Series</p>
                        </div>
                        <h1 className="ms-5 mt-3">
                          Up to 10% <br /> off Voucher
                        </h1>
                        <button className=" btn border-0 ms-5  bg-black text-white border-bottom ">
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
                  <div class="carousel-item ">
                    <div className="w-100 d-flex">
                      <div className="desc w-50 text-white   ">
                        <div className="d-flex   ms-5 mt-5">
                          <BsApple className="fs-1 " />
                          <p className="ms-3 mt-2">iPhone 14 Series</p>
                        </div>
                        <h1 className="ms-5 mt-3">
                          Up to 10% <br /> off Voucher
                        </h1>
                        <button className=" btn border-0 ms-5  bg-black text-white border-bottom ">
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
                  <div class="carousel-item ">
                    <div className="w-100 d-flex">
                      <div className="desc w-50 text-white   ">
                        <div className="d-flex   ms-5 mt-5">
                          <BsApple className="fs-1 " />
                          <p className="ms-3 mt-2">iPhone 14 Series</p>
                        </div>
                        <h1 className="ms-5 mt-3">
                          Up to 10% <br /> off Voucher
                        </h1>
                        <button className=" btn border-0 ms-5  bg-black text-white border-bottom ">
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
                  <div class="carousel-item ">
                    <div className="w-100 d-flex">
                      <div className="desc w-50 text-white   ">
                        <div className="d-flex   ms-5 mt-5">
                          <BsApple className="fs-1 " />
                          <p className="ms-3 mt-2">iPhone 14 Series</p>
                        </div>
                        <h1 className="ms-5 mt-3">
                          Up to 10% <br /> off Voucher
                        </h1>
                        <button className=" btn border-0 ms-5  bg-black text-white border-bottom ">
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
                  <div class="carousel-item ">
                    <div className="w-100 d-flex">
                      <div className="desc w-50 text-white   ">
                        <div className="d-flex   ms-5 mt-5">
                          <BsApple className="fs-1 " />
                          <p className="ms-3 mt-2">iPhone 14 Series</p>
                        </div>
                        <h1 className="ms-5 mt-3">
                          Up to 10% <br /> off Voucher
                        </h1>
                        <button className=" btn border-0 ms-5  bg-black text-white border-bottom ">
                          Shop Now <AiOutlineArrowRight />
                        </button>
                      </div>
                      <div className="w-50 carousel-img">
                        <img
                          src={require("../../images/iphone.png")}
                          class="d-block w-100 "
                          alt="..."
                        />{" "}
                      </div>
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
            <div className=" d-flex  align-items-center mt-3">
              <h3 className="fw-bold  col-md-2  flash-sales">Flash Sales</h3>
              <div className="timer col-md-9 offset-1  d-flex justify-content-between">
                {" "}
                <div>
                  <Timer />
                </div>
                <div className="d-flex ">
                  <div className="arrow d-flex justify-content-center align-items-center me-2">
                    <AiOutlineArrowLeft className="fs-6 " />{" "}
                  </div>
                  <div className="arrow d-flex justify-content-center align-items-center">
                    {" "}
                    <AiOutlineArrowRight className="fs-6" />
                  </div>
                </div>
              </div>{" "}
            </div>
            <div>
              <div class="wrapper mt-5 mb-5">
                <div class="content-wrapper ">
                  {data == null ? (
                    <div>...Loading Data</div>
                  ) : (
                    <div className="row">
                      {data.map((product) => (
                        <div className="col-md-2  col-sm-3">
                          <div className="product-container">
                            {" "}
                            <div className={`img-container`}>
                              <div className="icons d-flex justify-content-between">
                                <div className=" mins">
                                  <p>-{Math.floor(Math.random() * 40 + 30)}%</p>{" "}
                                </div>{" "}
                                <div className="right-icons  ">
                                  <button className=" d-block" onClick={()=>addToWishList(product)}>
                                    {" "}
                                    <AiOutlineHeart className=" d-block mb-1  rounded-circle bg-white" />
                                  </button>
                                  <button >
                                    {" "}
                                    <AiOutlineEye className=" d-block mb-1 bg-white rounded-circle" />
                                  </button>
                                </div>
                              </div>
                              <div
                                className={`${
                                  product.isTallImage ? "chair" : "none"
                                } `}
                              >
                                {" "}
                                <img src={product.ImgSrc} alt="" />
                              </div>
                              <div className="add-to-cart">
                                <button className=" text-white fs-6" onClick={()=>{addTocartItems(product)}}>Add To Cart</button>
                              </div>
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
                                    Math.floor(Math.random() * 200 + 100)}{" "}
                                </p>
                              </div>{" "}
                              <div className="star-rating d-flex  ">
                                <StarRating />{" "}
                                <p className="mt-2 ms-3">
                                  ({Math.floor(Math.random() * 100 + 10)})
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className=" view-all-details d-flex justify-content-center  ">
                <button className="btn p-2">View All Products</button>
              </div>
            </div>
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
            {catogries == null ? (
              <div>loading</div>
            ) : (
              <div>
                {" "}
                <div className="row">
                  {catogries.map((catogry) => (
                    <div className="col-md-2  ">
                      <div className="catogry-container">
                        <h1 className="mt-4">{catogry.catogriesIcon}</h1>
                        <h6> {catogry.catogriesName}</h6>{" "}
                      </div>
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
              <h6 className="ms-3 mt-2 text-danger fw-bold">This Month</h6>
            </div>{" "}
            <div className=" d-flex  align-items-center mt-3">
              <h3 className="fw-bold  col-md-4 ">Best Selling Products</h3>
              <div className=" col-md-7 offset-1  d-flex justify-content-between">
                <div></div>
                <div className="d-flex ">
                  <button className="btn btn-danger">View All</button>
                </div>
              </div>{" "}
            </div>
            {data == null ? (
              <div>loading</div>
            ) : (
              <div>
                {" "}
                <div className="row mt-5">
                  {bestSellingData.map((product) => (
                    <>
                      <div className="col-md-3">
                        <div className="product-container">
                          {" "}
                          <div className={`img-container`}>
                            <div className="icons d-flex justify-content-between">
                              <div className=" "></div>{" "}
                              <div className="right-icons  ">
                                  <button className=" d-block" onClick={()=>addToWishList(product)}>
                                    {" "}
                                    <AiOutlineHeart className=" d-block mb-1  rounded-circle bg-white" />
                                  </button>
                                  <button >
                                    {" "}
                                    <AiOutlineEye className=" d-block mb-1 bg-white rounded-circle" />
                                  </button>
                                </div>
                            </div>
                            <div
                              className={`${
                                product.isTallImage ? "chair" : "none"
                              } `}
                            >
                              {" "}
                              <img src={product.ImgSrc} alt="" />
                            </div>
                            <div className="add-to-cart">
                                <button className=" text-white fs-6" onClick={()=>{addTocartItems(product)}}>Add To Cart</button>
                              </div>                          </div>
                          <div className="product-desc m-3">
                            <h5>{product.Product_Name}</h5>
                            <div className="price d-flex">
                              <p className="text-danger me-3">
                                ${product.Price}{" "}
                              </p>
                              <p className="text-muted  text-decoration-line-through">
                                $
                                {product.Price +
                                  Math.floor(Math.random() * 200 + 100)}{" "}
                              </p>
                            </div>{" "}
                            <div className="star-rating d-flex  ">
                              <StarRating />{" "}
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
                  <span className="fw-bolder fs-5 ">
                    {Math.floor(Math.random() * 24 + 0)}{" "}
                  </span>
                  <br />
                  <span className="date">Hours</span>
                </p>
              </div>
              <div className="circle ">
                <p className="mt-2">
                  <span className="fw-bolder fs-5  ">
                    {Math.floor(Math.random() * 30 + 0)}{" "}
                  </span>
                  <br />
                  <span className="date"> Days</span>{" "}
                </p>
              </div>
              <div className="circle ">
                <p className="mt-2">
                  <span className="fw-bolder fs-5 ">
                    {Math.floor(Math.random() * 60 + 0)}{" "}
                  </span>
                  <br />
                  <span className="date">mins</span>
                </p>
              </div>
              <div className="circle ">
                <p className="mt-2 ">
                  <span className="fw-bolder fs-5 ">
                    {Math.floor(Math.random() * 60 + 0)}{" "}
                  </span>
                  <br />
                  <span className="date ms-1 ">sec</span>
                </p>
              </div>
            </div>
            <div>
              <button className="btn Buy-Now">Buy Now!</button>
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
        <div className="our-products-section my-5">
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
          {data == null ? (
            <div>loading</div>
          ) : (
            <div>
              {" "}
              <div className="row mt-5">
                {ourProudcts.map((product) => (
                  <>
                    <div className="col-md-3">
                      <div className="product-container">
                        {" "}
                        <div className={`img-container`}>
                          <div className="icons d-flex justify-content-between">
                            <div className="">
                              {" "}
                              {product.isNew ? (
                                <div className="new-product ">
                                  <p className="mt-1">New</p>
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                            <div className="right-icons  ">
                                  <button className=" d-block" onClick={()=>addToWishList(product)}>
                                    {" "}
                                    <AiOutlineHeart className=" d-block mb-1  rounded-circle bg-white" />
                                  </button>
                                  <button >
                                    {" "}
                                    <AiOutlineEye className=" d-block mb-1 bg-white rounded-circle" />
                                  </button>
                                </div>
                          </div>
                          <div
                            className={`${
                              product.isTallImage ? "chair" : "none"
                            } `}
                          >
                            {" "}
                            <img src={product.ImgSrc} alt="" />
                          </div>
                          <div className="add-to-cart">
                                <button className=" text-white fs-6" onClick={()=>{addTocartItems(product)}}>Add To Cart</button>
                              </div>                        </div>
                        <div className="product-desc m-3">
                          <h5>{product.Product_Name}</h5>
                          <div className="price d-flex align-items-center">
                            <p className="text-danger me-2 mt-2">
                              ${product.Price}{" "}
                            </p>
                            <div className="star-rating d-flex   ">
                              <StarRating />{" "}
                              <p className="mt-2 ms-3">
                                ({Math.floor(Math.random() * 100 + 10)})
                              </p>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
          <div className=" view-all-details d-flex justify-content-center  ">
            <button className="btn p-2">View All Products</button>
          </div>
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
                <button className=" btn border-0  bg-transparent text-white border-bottom  border-light">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="women bg-black d-flex text-white position-relative justify-content-between">
                <div></div>
                <div className="women-desc position-absolute  ">
                  <h2>Women’s Collections</h2>
                  <p>
                    Featured woman collections that <br /> give you another
                    vibe.
                  </p>
                  <button className=" btn border-0  bg-transparent text-white border-bottom  border-light">
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
                      <button className=" btn border-0  bg-transparent text-white border-bottom  border-light">
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
                      <button className=" btn border-0  bg-transparent text-white border-bottom  border-light ">
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
              <dov className="service-desc">
                <h4 className="fw-bolder">FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
              </dov>
            </div>
            <div className="col-md-4 text-center mt-5">
              <div className="service-icon ">
                <div className="for-icon">
                  {" "}
                  <BsHeadset className="text-white fs-2" />
                </div>
              </div>
              <dov className="service-desc">
                <h4 className="fw-bolder">24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
              </dov>
            </div>
            <div className="col-md-4 text-center mt-5">
              <div className="service-icon ">
                <div className="for-icon">
                  {" "}
                  <BsShieldCheck className="text-white fs-2" />
                </div>
              </div>
              <dov className="service-desc">
                <h4 className="fw-bolder">MONEY BACK GUARANTEE</h4>
                <p>We reurn money within 30 days</p>
              </dov>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
