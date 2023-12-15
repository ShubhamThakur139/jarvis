import { useState } from "react";
import "./Card.css";

export default function Card({data, data2}) {
    console.log("fare",data2)
  const [activeCard, setActiveCard] = useState(1);
  return (
    <div className="container">
      {data.map((el) => (
        <div
          onClick={() => setActiveCard(el)}
          className={el === activeCard ? "card active  bg-white" : "card  bg-white"}
        >
          <div className="card_header">
            <span>{el.name}</span>
          </div>
          <div className="fare"><h3>{data2 && "₹" + data2}{el?.price && " + " + el?.price}</h3></div>
          <div className="desc">
           {el.description}
          </div>
          <div className="desc">{el.desc2 && el.desc2}</div>
        </div>
      ))}
    </div>
  );
}
