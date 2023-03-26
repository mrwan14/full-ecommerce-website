import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Routing from "./Components/Routing/Routing";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import WishList from "./Components/WishList/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,

    children: [
      { index: true, element: <Home /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "wishlist", element: <WishList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
