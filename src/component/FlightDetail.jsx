import "./FlightDetail.css";
import { DateTime } from "luxon";

export default function FlightDetail({ data }) {
  const Caption = ({ text }) => {
    return <span className="cap-span">{text}</span>;
  };

  const from = localStorage.getItem("from");
  const to = localStorage.getItem("to");

  const commonStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const containerStyle = {
    height: "120px",
    width: "80%",
    display: "flex",
    margin: "20px 0",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "0.3px solid gray",
    borderRadius: "6px",
    padding: "20px",
    color: "#000",
  };

  return (
    <>
      <div className="fltdtls">
        <h2 className="reviewText">Flight Details</h2>
      </div>
      <div style={containerStyle} className="bg-white">
        <div className="p_logo_div">
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
          <div style={commonStyle}>
            <span
              style={{ fontSize: "18px", color: "black", fontWeight: "600" }}
            >
              {data.airlineName}
            </span>
            <Caption text={data?.airline + "-" + data?.flightNumber} />
            <Caption text="ECONOMY" />
          </div>
        </div>
        <div style={commonStyle}>
          <span
            style={{ fontSize: "18px", color: "black", fontWeight: "bolder" }}
          >
            {DateTime.fromSeconds(data?.departDateTime).toFormat("HH:mm")}
          </span>
          <Caption text={from.toUpperCase()} />
          <Caption text="Terminal - 1" />
        </div>
        <div style={{ ...commonStyle, alignItems: "center", gap: "3px" }}>
          <span style={{ fontSize: "12px", color: "gray" }}>02h 20m</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "25px",
              width: "25px",
              border: "1px solid gray",
              borderRadius: "50%",
            }}
          >
            <img
              height={"20px"}
              src="https://cdn-icons-png.flaticon.com/128/3076/3076720.png"
              alt=""
            />
          </div>
          <button
            style={{
              borderRadius: "12px",
              outline: "none",
              border: "1px solid green",
              color: "green",
              padding: "4px 20px",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            REFUNDABLE
          </button>
        </div>
        <div style={commonStyle}>
          <span
            style={{ fontSize: "18px", color: "black", fontWeight: "bolder" }}
          >
            {DateTime.fromSeconds(data?.arrivalDateTime).toFormat("HH:mm")}
          </span>
          <Caption text={to.toUpperCase()} />
          <Caption text="Terminal - 2" />
        </div>
      </div>
    </>
  );
}
