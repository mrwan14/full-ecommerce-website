import React from "react";
import "./Footer.css";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { RiFacebookLine} from "react-icons/ri"
import { CiTwitter} from "react-icons/ci"
import { FaInstagram} from "react-icons/fa"
import { RiLinkedinLine} from "react-icons/ri"

export default function Footer() {
  return (
    <div>
      <div class="blockcode">
        <footer class="page-footer shadow  bg-black">
          <div class="d-flex flex-column mx-auto py-5 container-fluid">
            <div class="d-flex flex-wrap justify-content-between text-white">
              <div class="align-self-center">
                {" "}
                <p class="h5 mb-5">Exclusive</p>
                <ul class="p-0">
                  <li class="my-3">
                    <a class="text-white " href="/">
                      Subscribe
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Get 10% off your first order{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <form class=" email-input">
                      <input
                        class="form-control bg-black fontAwesome "
                        type="search"
                        placeholder=" Enter your email             "
                        aria-label="Search"
                      />
                    </form>
                  </li>
                </ul>
              </div>
              <div class="align-self-center">
                {" "}
                <p class="h5 mb-5">Support</p>
                <ul class="p-0">
                  <li class="my-3">
                    <a class="text-white " href="/">
                      111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      exclusive@gmail.com{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      +88015-88888-9999{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="h5 mb-4">Account</p>
                <ul class="p-0">
                  <li class="my-2">
                    <a class="text-white" href="/">
                      My Account
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Login / Register{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Cart{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Wishlist
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Shop
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="h5 mb-4">Quick Link</p>
                <ul class="p-0">
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Terms Of Use{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      FAQ{" "}
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white" href="/">
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="h5 mb-4">Download App</p>
                <ul class="p-0">
                  <li class="my-2">
                    <p class="text-muted fs-6 " href="/">
                      Save $3 with App New User Only
                    </p>
                  </li>
                </ul>
                <div className="d-flex">
                  <div>
                    <img src={require("../../images/Qrcode.png")} alt="" />
                  </div>
                  <div>
                    <button className="btn  ms-3 d-flex  ">
                      <div className="icon">
                        <FaGooglePlay />
                      </div>{" "}
                      <div>
                        <p>GET IT ON</p>
                        <h6> Google Play</h6>
                      </div>
                    </button>
                    <button className="btn  ms-3 d-flex  mt-1">
                      <div className="icon ">
                        <BsApple />
                      </div>{" "}
                      <div>
                        <p className="for-position">Dowenload on the</p>
                        <h6> Apple Store</h6>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="social d-flex">
                <RiFacebookLine/>
                <CiTwitter/>
                <FaInstagram/>
                <RiLinkedinLine/>


                </div>
              </div>
            </div>
            <small class="text-center mt-5  text-white">
              &copy;Copyright Rimel 2022. All right reserved
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
}
