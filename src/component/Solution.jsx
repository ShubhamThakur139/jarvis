import * as React from "react";
import "./Solution.css";
import Button from "@mui/material/Button";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

const Solution = ({ data }) => {
  const sols = data.body.flightsList;
  console.log(sols);
  let navigate = useNavigate();

  return (
    <>
      <div className="parent">
        {sols.length >= 1 &&
          sols?.map((data) => (
            <div className="solutionDiv">
              <div className="flightDetail">
                <div class="container-fluid ml-5">
                  <img
                    src={`//fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/${data.airline}.svg`}
                    alt="cleartrip logo"
                    width="36"
                    height="36"
                    class="logo"
                    className="flightLogo"
                  />
                </div>
                <div>
                  <div>
                    <h4>{data?.airlineName}</h4>
                  </div>
                  <div>
                    <h6>{data?.airline + "-" + data?.flightNumber}</h6>
                  </div>
                </div>
              </div>

              <div>
                <h4>
                  {DateTime.fromSeconds(data?.departDateTime).toFormat("HH:mm")}
                </h4>
              </div>
              <div>
                <p>2h 45m</p>
              </div>
              <div>
                <h4>
                  {DateTime.fromSeconds(data?.arrivalDateTime).toFormat(
                    "HH:mm"
                  )}
                </h4>
              </div>
              <div>
                <h2>{"₹" + data.totalPrice}</h2>
              </div>
              <div>
                <Button
                  variant="contained"
                  disableElevation
                  className="bookbtn"
                  onClick={() => {
                    localStorage.setItem("flightDetail", JSON.stringify(data));
                    navigate("/itineraryPage", { state: data });
                  }}
                >
                  Book
                </Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Solution;