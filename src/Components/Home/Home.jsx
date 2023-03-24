/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import "./Home.css";
import Timer from "../Timer/Timer";
import { DataContext } from "../Context/DataContext";
import { getData } from "../../api";
import StarRating from "../StarRating/StarRating";
export default function Home(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Immediately Invoked Function
    (async () => {
      // Get items from storage and sync with state
      // Get data from API
      setData(await getData());
    })();
  }, []);
  const [newRating, setNewRating] = useState(0);

  return (
    <div>
      <div className="home">
        <div className="main-ad container">
          <div className="row">
            <div className="col-md-2   border-end   ">
              <div class="align-self-center ">
                {" "}
                <ul class="p-0 ">
                  <li class="my-1 d-flex justify-content-between">
                    <a class="text-black " href="/">
                      Woman’s Fashion
                    </a>
                    <AiOutlineRight />
                  </li>
                  <li class="my-1  d-flex justify-content-between">
                    <a class="text-black" href="/">
                      Men’s Fashion
                    </a>
                    <AiOutlineRight />
                  </li>
                  <li class="my-1">
                    <a class="text-black" href="/">
                      Electronics
                    </a>
                  </li>
                  <li class="my-1">
                    <a class="text-black" href="/">
                      Home & Lifestyle{" "}
                    </a>
                  </li>
                  <li class="my-1">
                    <a class="text-black" href="/">
                      Medicine{" "}
                    </a>
                  </li>
                  <li class="my-1">
                    <a class="text-black" href="/">
                      Sports & Outdoor{" "}
                    </a>
                  </li>
                  <li class="my-1">
                    <a class="text-black" href="/">
                      Baby’s & Toys{" "}
                    </a>
                  </li>
                  <li class="my-1">
                    <a class="text-black" href="/">
                      Groceries & Pets{" "}
                    </a>
                  </li>
                  <li class="my-1">
                    <a class="text-black" href="/">
                      Health & Beauty{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 slider offset-1 bg-black">
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
                          Shop Now <AiOutlineArrowRight />{" "}
                        </button>
                      </div>
                      <div className="w-50 fix-heigh">
                        <img
                          src={require("../../images/iphone.png")}
                          class="d-block w-100 "
                          alt="..."
                        />{" "}
                      </div>
                    </div>
                  </div>
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
                          Shop Now <AiOutlineArrowRight />{" "}
                        </button>
                      </div>
                      <div className="w-50 fix-heigh">
                        <img
                          src={require("../../images/iphone.png")}
                          class="d-block w-100 "
                          alt="..."
                        />{" "}
                      </div>
                    </div>
                  </div>
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
                          Shop Now <AiOutlineArrowRight />{" "}
                        </button>
                      </div>
                      <div className="w-50 fix-heigh">
                        <img
                          src={require("../../images/iphone.png")}
                          class="d-block w-100 "
                          alt="..."
                        />{" "}
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
                          Shop Now <AiOutlineArrowRight />{" "}
                        </button>
                      </div>
                      <div className="w-50 fix-heigh">
                        <img
                          src={require("../../images/iphone.png")}
                          class="d-block w-100 "
                          alt="..."
                        />{" "}
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
                          Shop Now <AiOutlineArrowRight />{" "}
                        </button>
                      </div>
                      <div className="w-50 fix-heigh">
                        <img
                          src={require("../../images/iphone.png")}
                          class="d-block w-100 "
                          alt="..."
                        />{" "}
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
                          Shop Now <AiOutlineArrowRight />{" "}
                        </button>
                      </div>
                      <div className="w-50 fix-heigh">
                        <img
                          src={require("../../images/iphone.png")}
                          class="d-block w-100 "
                          alt="..."
                        />{" "}
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
                          Shop Now <AiOutlineArrowRight />{" "}
                        </button>
                      </div>
                      <div className="w-50 fix-heigh">
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
          <div className="container">
            <div className="d-flex">
              {" "}
              <div className="brdr"></div>
              <h6 className="ms-3 mt-2 text-danger fw-bold">Today’s</h6>
            </div>{" "}
            <div className=" d-flex  align-items-center mt-3">
              <h3 className="fw-bold  col-md-2 ">Flash Sales</h3>
              <div className="timer col-md-9 offset-1  d-flex justify-content-between">
                {" "}
                <div>
                  <Timer />
                </div>
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
            <div>
              <div class="wrapper mt-5 mb-5">
                <div class="content-wrapper">
                  {data == null ? (
                    <div>...Loading Data</div>
                  ) : (
                    <div className="row">
                      {" "}
                      {data.map((product) => (
                        <div className="col-md-2">
                          <div className="product-container">
                            {" "}
                            <div className={`img-container`}>
                              <div className="icons d-flex justify-content-between">
                                <div className=" mins">
                                  <p>-{Math.floor(Math.random() * 40 + 30)}%</p>{" "}
                                </div>{" "}
                                <div className="right-icons ">
                                  <AiOutlineHeart className=" d-block mb-1  rounded-circle bg-white" />
                                  <AiOutlineEye className=" d-block mb-1 bg-white rounded-circle" />
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
      </div>
    </div>
  );
}
