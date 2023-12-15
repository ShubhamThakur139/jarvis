import React from "react";
import Navbar from "./Navbar";
import Solution from './Solution';
const CataloguePage = () => {

    const searchResults = JSON.parse(localStorage.getItem("cheapFareSols"));
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>{searchResults && <Solution data={searchResults} />}</div>
      </div>
    </>
  );
};

export default CataloguePage;
