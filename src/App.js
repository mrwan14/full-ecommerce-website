import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Routing from "./Components/Routing/Routing";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,

    children: [
      { index: true, element: <Home /> },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
