import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TopHeader from "../TopHeader/TopHeader";

export default function Routing() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
