import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Routing from "./Components/Routing/Routing";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import WishList from "./Components/WishList/WishList";
import Cart from "./Components/Cart/Cart";
import ForgetPassword from "./Components/VerifyPassword/ForgetPassword";
import VerifyResetPassword from "./Components/VerifyPassword/VerifyResetPassword";
import UpdateUserPassword from "./Components/VerifyPassword/UpdateUserPassword";
import ResetPassword from "./Components/VerifyPassword/ResetPassword";
import UpdateUserData from "./Components/VerifyPassword/UpdateUserData";
import CreateCashOrder from "./Components/CreateCashOrder";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

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
        element: <Home />,
      },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login />, children: [] },
      { path: "forgetPassword", element: <ForgetPassword /> },
      { path: "verifyResetPassword", element: <VerifyResetPassword /> },
      { path: "updateUserPassword", element: <UpdateUserPassword /> },
      { path: "resetPassword", element: <ResetPassword /> },
      { path: "updateUserData", element: <UpdateUserData /> },
      { path: "productDetails", element: <ProductDetails /> },
      {
        path: "wishlist",
        element: (
          <ProtectedRouts>
            {" "}
            <WishList />
          </ProtectedRouts>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRouts>
            <Cart />
          </ProtectedRouts>
        ),
      },
      {
        path: "createCashOrder",
        element: (
          <ProtectedRouts>
            <CreateCashOrder />
          </ProtectedRouts>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
