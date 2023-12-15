import React from "react";
import "./NewsDiv.css";

export default function NewsDiv({ data }) {
    function myFunction() {
        const element = document.getElementById("insurance");
        element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
      }
  return (
    <div className="main_news">
      <div className="newsDiv">

            <>
              <p className="description">{data.description}</p>
              <p className="suggestion">{data.suggestion}</p>
              <p className="newssource">provided by <span className="src">{data.newsSource}</span></p>
              <b onClick = {myFunction} style = {{textDecorationLine: 'underline' , cursor : 'pointer' , marginBottom : '8px'}}>Cleartrip recommends Travel/Cancellation Insurance at best rates</b>
            </>
      </div>
    </div>
  );
}
