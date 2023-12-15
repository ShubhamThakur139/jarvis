import React from "react";
import "./DocumentDiv.css";

const DocumentDiv = ({ data }) => {
  console.log("DocumentDiv: ", data);
  const sols = data;
  sols.map((el) => {
    console.log(el.documentType);
  });

  return (
    <div className="main_doc_div">
      {sols.length >=1 && sols?.map((el) => {
        return <div className="innerDiv">
          <h4>{el?.documentType}</h4>
          <p>{el?.description}</p>
        </div>
      })}
    </div>
  );
};

export default DocumentDiv;
