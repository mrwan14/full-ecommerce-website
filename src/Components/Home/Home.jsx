import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
import Timer from "../Timer/Timer";
export default function Home() {
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
        <div className="today-section">
          <div className="container">
            <div className="d-flex">
              {" "}
              <div className="brdr"></div>
              <h6 className="ms-3 mt-2 text-danger fw-bold">Today’s</h6>
            </div>{" "}
            <div className=" d-flex  align-items-center">
              <h3 className="fw-bold me-5">Flash Sales</h3>
              <div className="timer">
                {" "}
                <Timer />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
