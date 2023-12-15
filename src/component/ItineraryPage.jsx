import Navbar from "./Navbar";
import "./ItineraryPage.css";
import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FlightDetail from "./FlightDetail";
import Card from "./Card";
import TravelInsurance from "./TravelInsurance";
import NewsDiv from "./NewsDiv";
import PriceDropModal from "./PriceDropModal";
import DocumentDiv from "./DocumentDiv";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ItinerayPage = (data) => {
  let navigate = useNavigate();
  const flightDetail = JSON.parse(localStorage.getItem("flightDetail"));
  const isCheapFareSelected = localStorage.getItem("isCheapFareSelected");
  const from = localStorage.getItem("from");
  const to = localStorage.getItem("to");
  const adultCount = localStorage.getItem("adultCount");
  const childCount = localStorage.getItem("childCount");
  const infantCount = localStorage.getItem("infantCount");
  const [news, setNews] = useState([]);
  const [historicNews, setHistoricNews] = useState([]);
  const [cataolgueData, setCataolgueData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const firstLoad = useRef(true);
  const totalPrice = flightDetail.totalPrice;

  const [document, setDocument] = useState([]);

  console.log("isCheapFareSelected", isCheapFareSelected);

  useEffect(() => {
    fetchNewsData();
    fetchHistoricNewsData();
    fetchCatalogueDetails();
    fetchDocumentDetails();
  }, []);

  setTimeout(() => {
    if (firstLoad.current) {
      setShowModal(true);
      firstLoad.current = false;
    }
  }, 10000);

  const fetchDocumentDetails = async () => {
    console.log("fetching document");

    const postData = {
      origin: from.toUpperCase(),
      destination: to.toUpperCase(),
      departTime: flightDetail.departDateTime,
    };

    try {
      const response = await fetch("http://localhost:9080/requiredDocuments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const jsonData = await response.json();
      console.log("document data", jsonData);
      setDocument(jsonData);
    } catch (error) {
      console.error("Error while fetching document: ", error);
    }
  };

  const fetchCatalogueDetails = async () => {
    console.log("fetching cataolgue");

    const postData = {
      origin: from.toUpperCase(),
      destination: to.toUpperCase(),
      adult: adultCount,
      child: childCount,
      infant: infantCount,
      flights: flightDetail,
    };

    try {
      const response = await fetch(
        "http://localhost:9080/v1/catalogSuggestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      const jsonData = await response.json();
      console.log("catalogue data", jsonData);
      setCataolgueData(jsonData);
    } catch (error) {
      console.error("Error while fetching News: ", error);
    }
  };

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
      console.log("news data area", jsonData.areas);
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
            <div id="insurance">
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
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {cataolgueData &&
              cataolgueData.body &&
              cataolgueData.body.flightResponse &&
              cataolgueData.body.flightResponse.flightsList.length >= 1 &&
              !isCheapFareSelected && (
                <PriceDropModal
                  data={cataolgueData.body}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              )}
            <h2 className="inputDiv2">
              {news || historicNews
                ? "Journey Preview: Breaking News from Your Next Stop"
                : ""}
            </h2>
            <div className="news_parent_divs">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "46px",
                }}
              >
                {historicNews &&
                  historicNews.areas &&
                  Array.isArray(historicNews.areas) &&
                  historicNews.areas != undefined &&
                  historicNews.areas.length >= 1 &&
                  historicNews.areas.map((el) => {
                    return <NewsDiv data={el} />;
                  })}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                {news &&
                  news.areas &&
                  Array.isArray(news.areas) &&
                  news.areas != undefined &&
                  news.areas.length >= 1 &&
                  news.areas.map((el) => {
                    return <NewsDiv data={el} />;
                  })}
              </div>
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

          <div className="p_doc">
            {document &&
              document.documents &&
              document.documents.length >= 1 && (
                <>
                  {" "}
                  <h2 className='h2_travel'>Travel Documents</h2>
                  <div><DocumentDiv data={document.documents} /></div>
                </>
              )}
          </div>

          <div>
          <Button
            variant="contained"
            disableElevation
            className="paymentbtn"
            onClick={() => {
              navigate("/bookingConfirmed");
            }}
          >
            Continue To Payment
          </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItinerayPage;
