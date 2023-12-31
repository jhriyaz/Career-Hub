import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Root from "./layouts/Root/Root";
import Categories from "./components/Categories/Categories";
import axios from "axios";
import Featured from "./components/Featured/FeaturedJobs";
import Job from "./components/Job/Job";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
const router = createBrowserRouter([
  
  { 
    path: "/",
    element: <Root></Root>, 
  errorElement: <Error></Error>,
  children:[{
    path: "/",
    element:<Home></Home>,
    children:[{
      path:'/',
      loader:()=>axios.get('/data/categories.json') ,
      element:<Categories></Categories>,
      children:[{
        path:'/',
        loader:()=>axios.get('/data/jobs.json') ,
        element:<Featured></Featured>
      }]
    }
  ]
  },{
    path: "/statistics",
    element:<>statistics</>
  },
  {
    path: "/applied-jobs",
    loader:()=>axios.get('/data/jobs.json'),
    element:<AppliedJobs></AppliedJobs>
  },{
    path: "/blog",
    element:<>statistics</>
  },{
    path: "/job/:id",
    loader:()=>axios.get('/data/jobs.json'),
    element:<Job></Job>,
  }
]
 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
