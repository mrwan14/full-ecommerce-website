import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Routing from "./Components/Routing/Routing";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { ProductListSkeleton } from "./Components/Skeleton/SkeletonLoader";

// Lazy load components for code splitting
const Home = lazy(() => import("./Components/Home/Home"));
const SignUp = lazy(() => import("./Components/SignUp/SignUp"));
const Login = lazy(() => import("./Components/Login/Login"));
const WishList = lazy(() => import("./Components/WishList/WishList"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const ForgetPassword = lazy(() => import("./Components/VerifyPassword/ForgetPassword"));
const VerifyResetPassword = lazy(() => import("./Components/VerifyPassword/VerifyResetPassword"));
const UpdateUserPassword = lazy(() => import("./Components/VerifyPassword/UpdateUserPassword"));
const ResetPassword = lazy(() => import("./Components/VerifyPassword/ResetPassword"));
const UpdateUserData = lazy(() => import("./Components/VerifyPassword/UpdateUserData"));
const CreateCashOrder = lazy(() => import("./Components/CreateCashOrder"));
const ProductDetails = lazy(() => import("./Components/ProductDetails/ProductDetails"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const About = lazy(() => import("./Components/About/About"));
const ManageAccount = lazy(() => import("./Components/ManageAccount/ManageAccount"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function ProtectedRouts(props) {
  if (localStorage.getItem("userToken") === null) {
    return <Navigate to="/login" />;
  } else {
    return props.children;
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,

    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<ProductListSkeleton />}>
            <Home />
          </Suspense>
        ),
      },
      { 
        path: "signup", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SignUp />
          </Suspense>
        ) 
      },
      { 
        path: "login", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Login />
          </Suspense>
        ), 
        children: [] 
      },
      { 
        path: "forgetPassword", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ForgetPassword />
          </Suspense>
        ) 
      },
      { 
        path: "verifyResetPassword", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <VerifyResetPassword />
          </Suspense>
        ) 
      },
      { 
        path: "updateUserPassword", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <UpdateUserPassword />
          </Suspense>
        ) 
      },
      { 
        path: "resetPassword", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ResetPassword />
          </Suspense>
        ) 
      },
      { 
        path: "updateUserData", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <UpdateUserData />
          </Suspense>
        ) 
      },
      { 
        path: "productDetails/:id?", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProductDetails />
          </Suspense>
        ) 
      },
      { 
        path: "contact", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ) 
      },
      { 
        path: "about", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ) 
      },
      {
        path: "manageaccount",
        element: (
          <ProtectedRouts>
            <Suspense fallback={<LoadingFallback />}>
              <ManageAccount />
            </Suspense>
          </ProtectedRouts>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRouts>
            <Suspense fallback={<LoadingFallback />}>
              <WishList />
            </Suspense>
          </ProtectedRouts>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRouts>
            <Suspense fallback={<LoadingFallback />}>
              <Cart />
            </Suspense>
          </ProtectedRouts>
        ),
      },
      {
        path: "createCashOrder",
        element: (
          <ProtectedRouts>
            <Suspense fallback={<LoadingFallback />}>
              <CreateCashOrder />
            </Suspense>
          </ProtectedRouts>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
