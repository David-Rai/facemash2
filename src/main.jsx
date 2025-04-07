import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Favourite from "./components/Favourite.jsx";
import Gender from "./components/Gender.jsx";
import SharedStore from './reducers/SharedStore.jsx'

//creating the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/favourite",
    element: (
      <>
        <Favourite />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <SharedStore>
  <RouterProvider router={router} />
  </SharedStore>
);
