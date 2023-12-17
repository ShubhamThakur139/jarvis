import * as React from "react";
import "./Solution.css";
import Button from "@mui/material/Button";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

const Solution = ({ data }) => {
  console.log("solution", data);
  const isCheapFareSelected = localStorage.getItem("isCheapFareSelected");
  const sols = data.flightsList;
  const from = data.origin;
  const to = data.destination;
  const adultCount = data.adult;
  const childCount = data.child;
  const infantCount = data.infant;
  let navigate = useNavigate();

  console.log(isCheapFareSelected);

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
              <div className="totalFareDiv">
                {isCheapFareSelected ? (
                  data.oldPrice > data.totalPrice ? (
                    <>
                      <h2>{"₹" + data.totalPrice}</h2>
                      <img
                        src="decrease.png"
                        alt="decrease logo"
                        width="32"
                        height="32"
                        class="logo"
                      />
                    </>
                  ) : (
                    <>
                      <h2>{"₹" + data.totalPrice}</h2>
                      <img
                        src="increase.png"
                        alt="increase logo"
                        width="32"
                        height="32"
                        class="logo"
                      />
                    </>
                  )
                ) : (
                  <h2>{"₹" + data.totalPrice}</h2>
                )}
                {/* {isCheapFareSelected==undefined && <h2>{"₹" + data.totalPrice}</h2>} */}
                {/* <h2>{"₹" + data.totalPrice}</h2> */}
              </div>
              <div>
                <Button
                  variant="contained"
                  disableElevation
                  className="bookbtn"
                  onClick={() => {
                    localStorage.setItem("flightDetail", JSON.stringify(data));
                    localStorage.setItem("from", from);
                    localStorage.setItem("to", to);
                    localStorage.setItem("adultCount", adultCount);
                    localStorage.setItem("childCount", childCount);
                    localStorage.setItem("infantCount", infantCount);
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
