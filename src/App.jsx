import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import ItinerayPage from "./component/ItineraryPage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/itineraryPage",
        element: <ItinerayPage />,
      },
  ]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
