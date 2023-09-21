import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Root from "./layouts/Root/Root";
const router = createBrowserRouter([
  { 
    path: "/",
    element: <Root></Root>, 
  errorElement: <Error></Error>,
  children:[{
    path: "/",
    element:<Home></Home>
  }]

 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
