import "./Home.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "./Navbar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Solution from "./Solution";
import DropDown from "./DropDown";

const Home = () => {

  localStorage.clear()

  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [departDate, setDepartDate] = useState([]);
  const [paxType, setPaxType] = useState("");
  const [paxCount, setPaxCount] = useState(0);
  const [searchResults, setSearchResults] = useState();

  const airportList = [
    { label: "DEL - New Delhi, IN", value: "DEL" },
    { label: "BLR - Bangalore, IN", value: "BLR" },
    { label: "BOM - Mumbai, IN", value: "BOM" },
    { label: "CCU - Kolkata, IN", value: "CCU" },
    { label: "GOI - Goa, IN", value: "GOI" },
    { label: "HYD - Hyderabad, IN", value: "HYD" },
    { label: "LKO - Lucknow, IN", value: "LKO" },
    { label: "BHO - Bhopal, IN", value: "BHO" },
    { label: "VNS - Varanasi, IN", value: "VNS" },
    { label: "GOP - Gorakhpur, IN", value: "GOP" },
    {label: "JAI - Jaipur, IN", value: "JAI"},
    {label: "MAA - Chennai, IN", value: "MAA"},
    {label: "NYC - New York, US", value: "NYC"}
  ];

  const handleFromChange = (data) => {
    console.log(data);
    setFrom(data);
  };

  const handleToChange = (data) => {
    console.log(data);
    setTo(data);
  };

  const handleDateChange = (data) => {
    console.log(data);
    setDepartDate(data);
  };

  const fetchSearchResults = async () => {
    console.log("fetching search results...");
    try {
      let adltCount = 0;
      let childCount = 0;
      let infantCount = 0;
      if (paxType == "Adults") {
        adltCount = paxCount;
      } else if (paxType == "Children") {
        childCount = paxCount;
      } else {
        infantCount = paxCount;
      }

      const postData = {
        origin: from.value,
        destination: to.value,
        departDateTime: departDate,
        adult: adltCount,
        child: childCount,
        infant: infantCount,
      };
      const response = await fetch("http://localhost:9080/jarvis/v1/flights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      setSearchResults(jsonData);
    } catch (error) {
      console.error("Error while fetching all bucketNames: ", error);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="inputbar">
        <div className="p_dropdown">
          <Autocomplete
            onChange={(event, data) => handleFromChange(data)}
            value={from}
            disablePortal
            id="combo-box-demo"
            options={airportList}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField className="air_dropdown" {...params} label="From" />
            )}
          />
          <Autocomplete
            onChange={(event, data) => handleToChange(data)}
            value={to}
            disablePortal
            id="combo-box-demo"
            options={airportList}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField className="air_dropdown" {...params} label="To" />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DemoItem>
                <DatePicker
                  className="air_dropdown"
                  onChange={(event) => handleDateChange(event)}
                  // value={departDate}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          {/* <CounterDropdown /> */}

          <DropDown
            paxType={paxType}
            setPaxType={setPaxType}
            paxCount={paxCount}
            setPaxCount={setPaxCount}
          />
          <Button
            variant="contained"
            disableElevation
            className="searchbtn"
            onClick={fetchSearchResults}
          >
            Search Flights
          </Button>
        </div>
      </div>
      <div>
       {searchResults && <Solution data={searchResults.body} /> }
      </div>
    </div>
  );
};

export default Home;
