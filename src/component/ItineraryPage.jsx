import Navbar from "./Navbar";
import "./ItineraryPage.css";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FlightDetail from "./FlightDetail";
import Card from "./Card";
import TravelInsurance from "./TravelInsurance";

const ItinerayPage = (data) => {
  const flightDetail = JSON.parse(localStorage.getItem("flightDetail"));
  const from = localStorage.getItem("from");
  const to = localStorage.getItem("to");
  const [news, setNews] = useState([]);
  const [historicNews, setHistoricNews] = useState([]);

  useEffect(() => {
    fetchNewsData();
    fetchHistoricNewsData();
  }, []);

  const fetchNewsData = async () => {
    console.log("fetching news");

    const postData = {
      destination: to,
      departDate: flightDetail.departDateTime,
    };

    try {
      const response = await fetch("http://localhost:9080/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const jsonData = await response.json();
      console.log("news data", jsonData);
      setNews(jsonData);
    } catch (error) {
      console.error("Error while fetching News: ", error);
    }
  };

  const fetchHistoricNewsData = async () => {
    console.log("fetching news");

    const postData = {
      destination: to,
      departDate: flightDetail.departDateTime,
    };

    try {
      const response = await fetch("http://localhost:9080/historic-news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const jsonData = await response.json();
      console.log("historic-news data", jsonData);
      setHistoricNews(jsonData);
    } catch (error) {
      console.error("Error while fetching historic News: ", error);
    }
  };

  const cardDetails = [
    {
      name: "Standard fare",
      description:
        "Standard airline cancellation and date change penalties apply",
    },
    {
      name: "CT Flex",
      price: 265,
      description:
        "Free date change even when switching airlines. Pay fare difference, if any.",
    },
    {
      name: "CT FlexMax",
      price: 549,
      description: "Get full refund of ₹5,853 on cancellation",
      desc2:
        "Or free date change even when switching airlines. Pay fare difference, if any.",
    },
  ];
  const totalPrice = flightDetail.totalPrice;
  console.log("totalPrice", totalPrice);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="p_itineraryPage">
        <div className="p_itnPage2">
          <div>
            <h1 className="reviewText margin-bottom">Review your itinerary</h1>
          </div>
          <div>
            <FlightDetail data={flightDetail} />
          </div>
          <div>
            <div>
              <h3 className="reviewText margin  margin-top">
                Select your fare
              </h3>
            </div>
            <div>
              <Card data={cardDetails} data2={totalPrice} />
            </div>
          </div>

          <div>
            <TravelInsurance />
          </div>

          <div>
            <h2>{news || historicNews ? "News" : ""}</h2>
            <div>
              <div>{news.map.}</div>
              <div>{}</div>
            </div>
          </div>

          <div className="travellerDetails">
            <div>
              <h2 className="reviewText margin margin-top">
                Enter Traveller Details
              </h2>
            </div>
            <div className="p_input">
              <div>
                <h2>Adult 1</h2>
              </div>
              <div className="inputDiv">
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  className="textfield"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  className="textfield"
                />
                <FormControl className="gender-dropdown">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ItinerayPage;
