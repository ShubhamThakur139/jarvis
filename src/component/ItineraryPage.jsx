
import React from "react";
import Navbar from "./Navbar";

const ItinerayPage = (data) => {
    const flightDetail = JSON.parse(localStorage.getItem("flightDetail"));
    console.log(flightDetail)
    return <>
        <div>
        <Navbar />
      </div>
    </>;
}


export default ItinerayPage;