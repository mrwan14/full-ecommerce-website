/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Popper from "popper.js";
import jQuery from "jquery";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataContextProvider from "./Components/Context/DataContext";
import { ProductContextProvider } from "./Components/Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if (module.hot) {
  module.hot.accept();
}
