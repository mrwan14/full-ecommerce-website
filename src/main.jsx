import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "contacts/:contactId",
    element: <SignUp />,
  },
]);

function main() {
    return <RouterProvider router={router} />;
  }
  
  export default main;