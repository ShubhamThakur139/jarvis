import { useState } from "react";
import "./TravelInsurance.css";

export default function TravelInsurance() {
  
    const logoData = [{
        icon: "https://fastui.cltpstatic.com/image/upload/q_100,w_32/resources/images/bento/insurance/flight_delay.png",
        text: "₹750* on 90 mins delay"
    }, {
        icon: "https://fastui.cltpstatic.com/image/upload/q_100,w_32/resources/images/bento/insurance/missed_connection.png",
        text: "₹3,000* on missed connections" 
    }, {
        icon: "https://fastui.cltpstatic.com/image/upload/q_100,w_32/resources/images/bento/insurance/medical_insurance.png",
        text: "₹1 lakh* medical emergency"
    }, {
        icon: "https://fastui.cltpstatic.com/image/upload/q_100,w_32/resources/images/bento/insurance/quick_approval.png",
        text: "₹7500* on baggage loss"
    }]
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="travelIns_ccontainer">
      <div className="travelIns_card">
        <div className="travelIns_card_header">
          <span className="travelIns_card_header_text">
            Protect your trip with travel insurance
          </span>
          <div className="travelIns_card_header_right">
            <p>
              ₹119
              <span>per person</span>
            </p>
            <button>Add</button>
          </div>
        </div>
        <div className="travelIns_card_details">
          {logoData.map((el) => (
            <div
              key={el}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "160px",
              }}
            >
              <div>
                <img
                  height="28px"
                  src={el.icon}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                <span
                  style={{ fontSize: "16px", color: "black", wordWrap: "wrap" }}
                >
                  {el.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="travelIns_desc">
        Insurance is only for Indian residents between the age group of 1-70 years. By adding insurance, you agree to Go Digit General Insurance Limited.
        </div>
      </div>
    </div>
  );
}
