import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import ItinerayPage from "./component/ItineraryPage";
import CataloguePage from "./component/CataloguePage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import BookingConfirmation from "./component/BookingConfirmation";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/itineraryPage",
        element: <ItinerayPage />,
      },{
        path: "/cataloguePage",
        element: <CataloguePage />,
      },
      {
        path: "/bookingConfirmed",
        element: <BookingConfirmation />,
      },
  ]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
